import React, {
  useState,
  useEffect,
  Children,
  isValidElement,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Code from "./Code";
import cn from "./utils/cn";
import { getLanguageInfo } from "./CodeSnippet/languages";
import Icon from "./Icon";
import LanguageSelector from "./CodeSnippet/LanguageSelector";
import ApiKeySelector from "./CodeSnippet/ApiKeySelector";
import { IconName } from "./Icon/types";
import useCopyToClipboard from "./utils/useCopyToClipboard";
import ShellCommandView from "./CodeSnippet/ShellCommandView";
import CopyButton from "./CodeSnippet/CopyButton";
import TooltipButton from "./CodeSnippet/TooltipButton";

// Define SDK type
type SDKType = "realtime" | "rest" | null;

// Interface for component state management
interface CodeSnippetState {
  activeSDKType: SDKType;
  activeLanguage: string | null;
  selectedApiKey: string;
  ui: {
    isHovering: boolean;
  };
}

export interface CodeSnippetProps {
  /**
   * If true, hides the language selector row completely
   */
  fixed?: boolean;
  /**
   * If true, renders a macOS-style window header with buttons and title
   */
  headerRow?: boolean;
  /**
   * Title to display in the header row (when headerRow is true)
   */
  title?: string;
  /**
   * Children elements with lang attribute
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Default language to display. If not found in available languages, first available is used.
   * If found in languages but no matching snippet exists, a message is displayed.
   */
  lang?: string;
  /**
   * Callback fired when the active language changes
   */
  onChange?: (language: string, sdk?: SDKType) => void;
  /**
   * List of API keys to display in a dropdown
   */
  apiKeys?: string[];
  /**
   * Default SDK type to use for the code snippet
   */
  sdk?: SDKType;
  /**
   * Whether to show line numbers in code snippets
   */
  showCodeLines?: boolean;
  /**
   * Defines the order in which languages should be displayed.
   * Languages not in this array will be shown after those that are included.
   */
  languageOrdering?: string[];
}

/**
 * CodeSnippet component that displays code with language switching capability
 */
const CodeSnippet: React.FC<CodeSnippetProps> = ({
  fixed = false,
  headerRow = false,
  title = "Code",
  children,
  className,
  lang,
  onChange,
  apiKeys,
  sdk,
  showCodeLines = true,
  languageOrdering,
}) => {
  // Extract languages and SDK types from children
  const {
    childrenArray,
    languages,
    sdkTypes,
    originalLangMap,
    isSingleShellCommand,
  } = useMemo(() => {
    const childrenArray = Children.toArray(children);
    const languages: string[] = [];
    const sdkTypes = new Set<SDKType>();
    const originalLangMap = new Map<string, string>();

    // Check if we have a single shell command
    const isSingleShellCommand =
      childrenArray.length === 1 &&
      isValidElement(childrenArray[0]) &&
      isValidElement(childrenArray[0].props.children) &&
      childrenArray[0].props.children.props.className?.includes(
        "language-shell",
      );

    // Extract all available languages from children and identify SDK types
    childrenArray.forEach((child) => {
      if (!isValidElement(child)) return;

      const preElement = child;
      const codeElement = isValidElement(preElement.props.children)
        ? preElement.props.children
        : null;

      if (!codeElement || !codeElement.props.className) return;

      // Extract language from className (format: "language-javascript", "language-typescript", etc.)
      const classNames = codeElement.props.className.split(" ");
      const langClass = classNames.find((cls: string) =>
        cls.startsWith("language-"),
      );
      if (!langClass) return;

      // Extract the language name from the class (remove "language-" prefix)
      const langName = langClass.substring(9);

      // Look for SDK prefixes in the language name itself (e.g., "language-realtime_javascript")
      if (langName.startsWith("realtime_")) {
        const baseLanguage = langName.substring(9);
        sdkTypes.add("realtime");
        // Store original language value for later use
        originalLangMap.set(langName, baseLanguage);
      } else if (langName.startsWith("rest_")) {
        const baseLanguage = langName.substring(5);
        sdkTypes.add("rest");
        // Store original language value for later use
        originalLangMap.set(langName, baseLanguage);
      } else {
        // Regular language without SDK prefix
        originalLangMap.set(langName, langName);
      }

      // Add to languages list if not already included
      if (!languages.includes(langName)) {
        languages.push(langName);
      }
    });

    return {
      childrenArray,
      languages,
      sdkTypes,
      originalLangMap,
      isSingleShellCommand,
    };
  }, [children]);

  // Check if we need to show SDK type selector
  const showSDKSelector = sdkTypes.size > 0;

  // Check if there is only a JSON snippet
  const hasOnlyJsonSnippet = useMemo(() => {
    return languages.length === 1 && languages[0] === "json";
  }, [languages]);

  const initialSDKType = useMemo(() => {
    if (sdkTypes.size === 0) {
      return null;
    }

    if (sdk && sdkTypes.has(sdk)) return sdk;

    if (sdkTypes.has("realtime")) return "realtime";

    if (sdkTypes.has("rest")) return "rest";

    return null;
  }, [sdk, sdkTypes]);

  // Consolidated state management
  const [state, setState] = useState<CodeSnippetState>(() => ({
    activeSDKType: initialSDKType,
    activeLanguage: null, // Will be set after filteredLanguages are calculated
    selectedApiKey: apiKeys && apiKeys.length > 0 ? apiKeys[0] : "",
    ui: {
      isHovering: false,
    },
  }));

  // Use the copyToClipboard hook
  const { isCopied, copy } = useCopyToClipboard();

  // Get languages filtered by active SDK type - optimized with primitive dependencies
  const filteredLanguages = useMemo(() => {
    let filtered = [];

    if (!state.activeSDKType || !showSDKSelector) {
      filtered = languages;
    } else {
      filtered = languages.filter((lang) =>
        lang.startsWith(`${state.activeSDKType}_`),
      );
    }

    // Apply custom ordering if languageOrdering is provided
    if (languageOrdering && languageOrdering.length > 0) {
      // Sort the languages based on the order in languageOrdering
      filtered.sort((a, b) => {
        // Get base language names without SDK prefixes
        const aBase = originalLangMap.get(a) || a;
        const bBase = originalLangMap.get(b) || b;

        const aIndex = languageOrdering.indexOf(aBase);
        const bIndex = languageOrdering.indexOf(bBase);

        // If both languages are in the ordering array, sort by their position
        if (aIndex !== -1 && bIndex !== -1) {
          return aIndex - bIndex;
        }

        // If only one language is in the ordering array, it should come first
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;

        // If neither language is in the ordering array, maintain their original order
        return 0;
      });
    }

    return filtered;
  }, [
    state.activeSDKType,
    showSDKSelector,
    languages,
    languageOrdering,
    originalLangMap,
  ]);

  // Determine the initial active language - simplified dependencies
  const initialActiveLanguage = useMemo((): string | null => {
    // If no lang prop specified, default to first available filtered language
    if (!lang) {
      return filteredLanguages.length > 0 ? filteredLanguages[0] : null;
    }

    // Try to find the language with SDK type prefix if applicable
    if (state.activeSDKType) {
      const prefixedLang = `${state.activeSDKType}_${lang}`;
      if (languages.includes(prefixedLang)) {
        return prefixedLang;
      }
    }

    // Try to find the language directly
    if (languages.includes(lang)) {
      return lang;
    }

    // Check if it's a known language but not available in snippets
    if (getLanguageInfo(lang).label !== lang) {
      return lang;
    }

    // Fallback to first available language
    return filteredLanguages.length > 0 ? filteredLanguages[0] : null;
  }, [lang, state.activeSDKType, languages, filteredLanguages]);

  // Initialize activeLanguage after filteredLanguages are calculated
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      activeLanguage: initialActiveLanguage,
    }));
  }, [initialActiveLanguage]);

  const codeRef = useRef<HTMLDivElement>(null);

  // Filter and process children for the active language - optimized with specific dependencies
  const processedChildren = useMemo(() => {
    if (!state.activeLanguage) return [];

    // Special case for JSON-only snippets
    const targetLanguage = hasOnlyJsonSnippet ? "json" : state.activeLanguage;

    return childrenArray
      .filter((child) => {
        if (!isValidElement(child)) return false;

        const preElement = child;
        const codeElement = isValidElement(preElement.props.children)
          ? preElement.props.children
          : null;

        if (!codeElement || !codeElement.props.className) return false;

        // Extract language from className
        const classNames = codeElement.props.className.split(" ");
        const langClass = classNames.find((cls: string) =>
          cls.startsWith("language-"),
        );
        if (!langClass) return false;

        // Extract the language name from the class (remove "language-" prefix)
        const langName = langClass.substring(9);

        // In JSON-only mode, only show JSON
        // Otherwise, match exactly with active language
        return langName === targetLanguage;
      })
      .map((child) => {
        if (!isValidElement(child)) return child;

        const preElement = child;
        const codeElement = isValidElement(preElement.props.children)
          ? preElement.props.children
          : null;

        if (!codeElement) return child;

        const codeContent = codeElement.props.children;

        // Extract language from className
        const classNames = codeElement.props.className.split(" ");
        const langClass = classNames.find((cls: string) =>
          cls.startsWith("language-"),
        );
        if (!langClass) return child;

        // Extract the language name from the class (remove "language-" prefix)
        const langName = langClass.substring(9);

        const cleanLang = hasOnlyJsonSnippet
          ? "json"
          : originalLangMap.get(langName) || langName;
        const langInfo = getLanguageInfo(cleanLang);

        // If child content is a string or can be converted to a string
        if (
          typeof codeContent === "string" ||
          typeof codeContent === "number" ||
          typeof codeContent === "boolean"
        ) {
          return (
            <Code
              key={langName}
              language={langInfo.syntaxHighlighterKey || cleanLang}
              snippet={String(codeContent)}
              additionalCSS="bg-neutral-100 text-neutral-1300 dark:bg-neutral-1200 dark:text-neutral-200 px-24 py-16"
              showLines={showCodeLines}
            />
          );
        }

        // Otherwise, return the original content
        return child;
      });
  }, [
    state.activeLanguage,
    childrenArray,
    originalLangMap,
    hasOnlyJsonSnippet,
    showCodeLines,
  ]);

  // Check if there's a snippet available for the active language
  const hasSnippetForActiveLanguage = useMemo(() => {
    if (!state.activeLanguage) return false;

    // If we have only JSON snippet, consider it available for any language
    if (hasOnlyJsonSnippet) return true;

    return childrenArray.some((child) => {
      if (!isValidElement(child)) return false;

      const preElement = child;
      const codeElement = isValidElement(preElement.props.children)
        ? preElement.props.children
        : null;

      if (!codeElement || !codeElement.props.className) return false;

      // Extract language from className
      const classNames = codeElement.props.className.split(" ");
      const langClass = classNames.find((cls: string) =>
        cls.startsWith("language-"),
      );
      if (!langClass) return false;

      // Extract the language name from the class (remove "language-" prefix)
      const langName = langClass.substring(9);

      // Match exactly with active language
      return langName === state.activeLanguage;
    });
  }, [state.activeLanguage, childrenArray, hasOnlyJsonSnippet]);

  // Function to get the current code text content
  const getCodeText = useCallback((): string | null => {
    if (
      !state.activeLanguage ||
      !hasSnippetForActiveLanguage ||
      !codeRef.current
    )
      return null;

    // Get the text content from the matching code element
    const allPreElements = codeRef.current.querySelectorAll("pre");

    for (const preElement of Array.from(allPreElements)) {
      const codeElement = preElement.querySelector("code");
      if (!codeElement || !codeElement.className) continue;

      const classNames = codeElement.className.split(" ");
      const langClass = classNames.find((cls) => cls.startsWith("language-"));
      if (!langClass) continue;

      // Extract the language name from the class (remove "language-" prefix)
      const langName = langClass.substring(9);

      // In JSON-only mode, look for JSON, otherwise match active language
      if (
        (hasOnlyJsonSnippet && langName === "json") ||
        (!hasOnlyJsonSnippet && langName === state.activeLanguage)
      ) {
        return codeElement.textContent || "";
      }
    }

    return null;
  }, [state.activeLanguage, hasSnippetForActiveLanguage, hasOnlyJsonSnippet]);

  // Update selected API key if apiKeys changes
  useEffect(() => {
    if (
      apiKeys &&
      apiKeys.length > 0 &&
      !apiKeys.includes(state.selectedApiKey)
    ) {
      setState((prev) => ({
        ...prev,
        selectedApiKey: apiKeys[0],
      }));
    }
  }, [apiKeys, state.selectedApiKey]);

  // Event handlers - memoized with empty dependencies as they only use setState
  const handleSDKTypeChange = useCallback(
    (type: SDKType) => {
      // pick the first language that matches the new SDK prefix
      const nextLang = languages.find((l) => l.startsWith(`${type}_`)) ?? null;

      setState((prev) => ({
        ...prev,
        activeSDKType: type,
        activeLanguage: nextLang,
      }));

      // Don't call onChange when only the SDK type changes
      // The initialActiveLanguage useEffect will handle calling onChange
      // if needed when the active language changes as a result
    },
    [languages],
  );

  const handleLanguageChange = useCallback(
    (language: string) => {
      setState((prev) => ({
        ...prev,
        activeLanguage: language,
      }));

      // Always call onChange for explicit user changes
      // But pass the clean language name without SDK prefix
      if (onChange) {
        const cleanLang = originalLangMap.get(language) || language;
        onChange(cleanLang, state.activeSDKType);
      }
    },
    [onChange, originalLangMap, state.activeSDKType],
  );

  const handleMouseEnter = useCallback(() => {
    setState((prev) => ({
      ...prev,
      ui: { ...prev.ui, isHovering: true },
    }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setState((prev) => ({
      ...prev,
      ui: { ...prev.ui, isHovering: false },
    }));
  }, []);

  const handleApiKeyChange = useCallback((apiKey: string) => {
    setState((prev) => ({
      ...prev,
      selectedApiKey: apiKey,
    }));
  }, []);

  // Get language info for the active language - optimized to only depend on map and activeLanguage
  const getDisplayLanguageInfo = useCallback(
    (lang: string | null) => {
      if (!lang) return null;
      const cleanLang = originalLangMap.get(lang) || lang;
      return getLanguageInfo(cleanLang);
    },
    [originalLangMap],
  );

  const activeLanguageInfo = useMemo(
    () => getDisplayLanguageInfo(state.activeLanguage),
    [getDisplayLanguageInfo, state.activeLanguage],
  );

  // Memoize language related function to avoid recreation on every render
  const getLanguageDisplayName = useCallback(
    (lang: string) => {
      const cleanLang = originalLangMap.get(lang) || lang;
      return getLanguageInfo(cleanLang).label;
    },
    [originalLangMap],
  );

  // Memoize icon function to avoid recreation on every render
  const getLanguageIcon = useCallback(
    (lang: string): IconName => {
      const cleanLang = originalLangMap.get(lang) || lang;
      return getLanguageInfo(cleanLang).icon;
    },
    [originalLangMap],
  );

  // Optimize no-snippet message by memoizing it
  const NoSnippetMessage = useMemo(() => {
    if (!activeLanguageInfo) return () => null;

    return () => (
      <div className="px-64 py-24 ui-text-body2 text-neutral-800 dark:text-neutral-400 text-center flex flex-col gap-12 items-center">
        <Icon
          name="icon-gui-exclamation-triangle-outline"
          color="text-yellow-600 dark:text-yellow-400"
          size="24px"
        />
        <p className="ui-text-p3 text-neutral-700 dark:text-neutral-600">
          You&apos;re currently viewing the {activeLanguageInfo.label} docs.
          There either isn&apos;t a {activeLanguageInfo.label} code sample for
          this example, or this feature isn&apos;t supported in{" "}
          {activeLanguageInfo.label}. Switch language to view this example in a
          different language, or check which SDKs support this feature.
        </p>
      </div>
    );
  }, [activeLanguageInfo]);

  // Determine if we should show the language selector
  const showLanguageSelector = !fixed && filteredLanguages.length > 0;

  // Determine if we should show the full selector or simplified view
  const showFullSelector = filteredLanguages.length > 1;

  // Simplified content render logic
  const renderContent = () => {
    // No active language case
    if (!state.activeLanguage) {
      return null;
    }

    // Has snippet for active language (including JSON-only case)
    if (hasSnippetForActiveLanguage) {
      return processedChildren;
    }

    // No snippet but language info available
    if (activeLanguageInfo) {
      return <NoSnippetMessage />;
    }

    return null;
  };

  // Render special case for shell commands
  if (isSingleShellCommand) {
    const shellChild = childrenArray[0];
    if (
      isValidElement(shellChild) &&
      isValidElement(shellChild.props.children)
    ) {
      const codeElement = shellChild.props.children;
      const codeContent = codeElement.props.children;
      return (
        <ShellCommandView content={String(codeContent)} className={className} />
      );
    }
  }

  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-1200 border border-neutral-300 dark:border-neutral-1000 min-h-[54px]",
        className,
      )}
    >
      {headerRow && (
        <div className="h-[38px] bg-neutral-200 dark:bg-neutral-1100 border-b border-neutral-300 dark:border-neutral-1000 flex items-center py-4 px-12 rounded-t-lg">
          {/* macOS window buttons */}
          <div className="flex space-x-6">
            <div className="w-[12px] h-[12px] rounded-full bg-orange-500"></div>
            <div className="w-[12px] h-[12px] rounded-full bg-yellow-500"></div>
            <div className="w-[12px] h-[12px] rounded-full bg-green-500"></div>
          </div>

          {/* Title */}
          <div className="flex-1 text-center ui-text-p3 font-bold text-neutral-1300 dark:text-neutral-000">
            {title}
          </div>

          {/* Empty div for balance */}
          <div className="w-[48px]"></div>
        </div>
      )}

      {/* SDK Type Selector Row */}
      {showSDKSelector && (
        <div
          className={cn(
            "p-8 border-b border-neutral-200 dark:border-neutral-1100 h-[56px]",
            headerRow ? "" : "rounded-t-lg",
          )}
        >
          <div className="flex gap-12 justify-start">
            {sdkTypes.has("realtime") && (
              <TooltipButton
                tooltip="Realtime SDK"
                active={state.activeSDKType === "realtime"}
                onClick={() => handleSDKTypeChange("realtime")}
                variant="segmented"
                size="sm"
                alwaysShowLabel={true}
              >
                Realtime
              </TooltipButton>
            )}

            {sdkTypes.has("rest") && (
              <TooltipButton
                tooltip="REST SDK"
                active={state.activeSDKType === "rest"}
                onClick={() => handleSDKTypeChange("rest")}
                variant="segmented"
                size="sm"
                alwaysShowLabel={true}
              >
                REST
              </TooltipButton>
            )}
          </div>
        </div>
      )}

      {/* Language Selector Row */}
      {showLanguageSelector &&
        (showFullSelector ? (
          <LanguageSelector
            languages={filteredLanguages}
            activeLanguage={state.activeLanguage}
            onLanguageChange={handleLanguageChange}
            getLanguageDisplayName={getLanguageDisplayName}
            getLanguageIcon={getLanguageIcon}
            activeLanguageInfo={activeLanguageInfo}
          />
        ) : (
          <div
            className={cn(
              "border-b border-neutral-200 dark:border-neutral-1100 h-[34px] inline-flex items-center px-12",
              { "rounded-t-lg": !headerRow },
              { "cursor-pointer": filteredLanguages.length > 0 },
            )}
            {...(filteredLanguages.length > 0 && {
              onClick: () => handleLanguageChange(filteredLanguages[0]),
            })}
          >
            {filteredLanguages.length > 0 && (
              <>
                <Icon
                  name={getLanguageIcon(filteredLanguages[0])}
                  size="16px"
                  additionalCSS="mr-8"
                />
                <span className="ui-text-label4 font-semibold text-neutral-800 dark:text-neutral-500 select-none">
                  {getLanguageDisplayName(filteredLanguages[0])}
                </span>
              </>
            )}
          </div>
        ))}

      <div
        ref={codeRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        tabIndex={0}
      >
        {renderContent()}

        {/* Copy button - simplified conditional */}
        {state.ui.isHovering &&
          state.activeLanguage &&
          hasSnippetForActiveLanguage && (
            <CopyButton
              onCopy={() => {
                const text = getCodeText();
                if (text) copy(text);
              }}
              isCopied={isCopied}
            />
          )}
      </div>

      {/* API Key Selector */}
      {apiKeys && (
        <ApiKeySelector
          apiKeys={apiKeys}
          selectedApiKey={state.selectedApiKey}
          onApiKeyChange={handleApiKeyChange}
        />
      )}
    </div>
  );
};

export default CodeSnippet;
