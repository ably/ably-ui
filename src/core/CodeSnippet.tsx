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
export type SDKType = "realtime" | "rest" | null;

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
  const codeRef = useRef<HTMLDivElement>(null);
  const { isCopied, copy } = useCopyToClipboard();

  // Helper function to extract language from code element
  const extractLanguageFromCode = useCallback(
    (codeElement: React.ReactElement | null): string | null => {
      if (!codeElement || !codeElement.props.className) return null;

      const classNames = codeElement.props.className.split(" ");
      const langClass = classNames.find((cls: string) =>
        cls.startsWith("language-"),
      );
      if (!langClass) return null;

      return langClass.substring(9); // Remove "language-" prefix
    },
    [],
  );

  // Parse children to extract languages and SDK types - only needs to run once
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

      const langName = extractLanguageFromCode(codeElement);
      if (!langName) return;

      // Look for SDK prefixes in the language name itself
      if (langName.startsWith("realtime_")) {
        const baseLanguage = langName.substring(9);
        sdkTypes.add("realtime");
        originalLangMap.set(langName, baseLanguage);
      } else if (langName.startsWith("rest_")) {
        const baseLanguage = langName.substring(5);
        sdkTypes.add("rest");
        originalLangMap.set(langName, baseLanguage);
      } else {
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
  }, [children, extractLanguageFromCode]);

  // Simplified state management with separate hooks
  const [activeSDKType, setActiveSDKType] = useState<SDKType>(() => {
    if (sdkTypes.size === 0) return null;
    if (sdk && sdkTypes.has(sdk)) return sdk;
    if (sdkTypes.has("realtime")) return "realtime";
    if (sdkTypes.has("rest")) return "rest";
    return null;
  });
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);
  const [selectedApiKey, setSelectedApiKey] = useState(() =>
    apiKeys && apiKeys.length > 0 ? apiKeys[0] : "",
  );
  const [isHovering, setIsHovering] = useState(false);

  // Check if we need to show SDK type selector
  const showSDKSelector = sdkTypes.size > 0;

  // Check if there is only a JSON snippet
  const hasOnlyJsonSnippet = useMemo(
    () => languages.length === 1 && languages[0] === "json",
    [languages],
  );

  // Get languages filtered by active SDK type & apply ordering
  const filteredLanguages = useMemo(() => {
    // Filter by SDK type if needed
    const filtered =
      !activeSDKType || !showSDKSelector
        ? [...languages]
        : languages.filter((lang) => lang.startsWith(`${activeSDKType}_`));

    // Apply custom ordering if provided
    if (languageOrdering && languageOrdering.length > 0) {
      filtered.sort((a, b) => {
        const aBase = originalLangMap.get(a) || a;
        const bBase = originalLangMap.get(b) || b;

        const aIndex = languageOrdering.indexOf(aBase);
        const bIndex = languageOrdering.indexOf(bBase);

        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;
        return 0;
      });
    }

    return filtered;
  }, [
    activeSDKType,
    showSDKSelector,
    languages,
    languageOrdering,
    originalLangMap,
  ]);

  // Determine the initial active language
  const initialActiveLanguage = useMemo((): string | null => {
    if (!lang) {
      return filteredLanguages.length > 0 ? filteredLanguages[0] : null;
    }

    // Try with SDK prefix if applicable
    if (activeSDKType) {
      const prefixedLang = `${activeSDKType}_${lang}`;
      if (languages.includes(prefixedLang)) {
        return prefixedLang;
      }
    }

    // Try direct match
    if (languages.includes(lang)) {
      return lang;
    }

    // Check if it's a known language but not available
    if (getLanguageInfo(lang).label !== lang) {
      return lang;
    }

    // Fallback to first available
    return filteredLanguages.length > 0 ? filteredLanguages[0] : null;
  }, [lang, activeSDKType, languages, filteredLanguages]);

  // Initialize activeLanguage after filteredLanguages are calculated
  useEffect(() => {
    setActiveLanguage(initialActiveLanguage);
  }, [initialActiveLanguage]);

  // Update selected API key if apiKeys changes
  useEffect(() => {
    if (apiKeys && apiKeys.length > 0 && !apiKeys.includes(selectedApiKey)) {
      setSelectedApiKey(apiKeys[0]);
    }
  }, [apiKeys, selectedApiKey]);

  // Clean language utilities
  const getCleanLanguage = useCallback(
    (lang: string | null) => (lang ? originalLangMap.get(lang) || lang : null),
    [originalLangMap],
  );

  // Get language info for display
  const getLanguageInfoForDisplay = useCallback(
    (lang: string | null) => {
      if (!lang) return null;
      const cleanLang = getCleanLanguage(lang);
      return cleanLang ? getLanguageInfo(cleanLang) : null;
    },
    [getCleanLanguage],
  );

  // For language display name and icon (only depends on originalLangMap)
  const getLanguageDisplayName = useCallback(
    (lang: string) => {
      const cleanLang = getCleanLanguage(lang);
      return cleanLang ? getLanguageInfo(cleanLang).label : lang;
    },
    [getCleanLanguage],
  );

  const getLanguageIcon = useCallback(
    (lang: string): IconName => {
      const cleanLang = getCleanLanguage(lang);
      return cleanLang
        ? getLanguageInfo(cleanLang).icon
        : "icon-gui-document-mini";
    },
    [getCleanLanguage],
  );

  // Memoize the active language info
  const activeLanguageInfo = useMemo(
    () => getLanguageInfoForDisplay(activeLanguage),
    [getLanguageInfoForDisplay, activeLanguage],
  );

  // Filter and process children for the active language
  const processedChildren = useMemo(() => {
    if (!activeLanguage) return [];

    // Target language is either the active one or json in json-only mode
    const targetLanguage = hasOnlyJsonSnippet ? "json" : activeLanguage;

    return childrenArray
      .filter((child) => {
        if (!isValidElement(child)) return false;
        const codeElement = isValidElement(child.props.children)
          ? child.props.children
          : null;
        const langName = extractLanguageFromCode(codeElement);
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
        const langName = extractLanguageFromCode(codeElement);
        if (!langName) return child;

        const cleanLang = hasOnlyJsonSnippet
          ? "json"
          : getCleanLanguage(langName) || langName;
        const langInfo = getLanguageInfo(cleanLang);

        // Handle primitive content types
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
              additionalCSS="bg-neutral-100 text-neutral-1300 dark:bg-neutral-1200 dark:text-neutral-200 px-6 py-4"
              showLines={showCodeLines}
            />
          );
        }

        return child;
      });
  }, [
    activeLanguage,
    childrenArray,
    extractLanguageFromCode,
    getCleanLanguage,
    hasOnlyJsonSnippet,
    showCodeLines,
  ]);

  // Check if there's a snippet available for the active language
  const hasSnippetForActiveLanguage = useMemo(() => {
    if (!activeLanguage) return false;
    if (hasOnlyJsonSnippet) return true;

    return childrenArray.some((child) => {
      if (!isValidElement(child)) return false;
      const codeElement = isValidElement(child.props.children)
        ? child.props.children
        : null;
      const langName = extractLanguageFromCode(codeElement);
      return langName === activeLanguage;
    });
  }, [
    activeLanguage,
    childrenArray,
    extractLanguageFromCode,
    hasOnlyJsonSnippet,
  ]);

  // Function to get the current code text content
  const getCodeText = useCallback((): string | null => {
    if (!activeLanguage || !hasSnippetForActiveLanguage || !codeRef.current)
      return null;

    const allPreElements = codeRef.current.querySelectorAll("pre");
    for (const preElement of Array.from(allPreElements)) {
      const codeElement = preElement.querySelector("code");
      if (!codeElement || !codeElement.className) continue;

      const classNames = codeElement.className.split(" ");
      const langClass = classNames.find((cls) => cls.startsWith("language-"));
      if (!langClass) continue;

      const langName = langClass.substring(9);
      if (
        (hasOnlyJsonSnippet && langName === "json") ||
        (!hasOnlyJsonSnippet && langName === activeLanguage)
      ) {
        return codeElement.textContent || "";
      }
    }

    return null;
  }, [activeLanguage, hasSnippetForActiveLanguage, hasOnlyJsonSnippet]);

  // Event handlers
  const handleSDKTypeChange = useCallback(
    (type: SDKType) => {
      // pick first language matching the new SDK prefix
      const nextLang = languages.find((l) => l.startsWith(`${type}_`)) ?? null;
      setActiveSDKType(type);
      setActiveLanguage(nextLang);
    },
    [languages],
  );

  const handleLanguageChange = useCallback(
    (language: string) => {
      setActiveLanguage(language);

      // Call onChange with clean language name
      if (onChange) {
        const cleanLang = getCleanLanguage(language) || language;
        onChange(cleanLang, activeSDKType);
      }
    },
    [onChange, getCleanLanguage, activeSDKType],
  );

  const handleApiKeyChange = useCallback((apiKey: string) => {
    setSelectedApiKey(apiKey);
  }, []);

  // Optimize no-snippet message as a component
  const NoSnippetMessage = useMemo(() => {
    if (!activeLanguageInfo) return () => null;

    return () => (
      <div className="px-16 py-6 ui-text-body2 text-neutral-800 dark:text-neutral-400 text-center flex flex-col gap-3 items-center">
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
  const showFullSelector = filteredLanguages.length > 1;

  // Memoize renderContent
  const renderContent = useMemo(() => {
    if (!activeLanguage) return null;

    if (hasSnippetForActiveLanguage) {
      return processedChildren;
    }

    if (activeLanguageInfo) {
      return <NoSnippetMessage />;
    }

    return null;
  }, [
    activeLanguage,
    hasSnippetForActiveLanguage,
    processedChildren,
    activeLanguageInfo,
    NoSnippetMessage,
  ]);

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
        "rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-1200 border border-neutral-300 dark:border-neutral-1000 min-h-[3.375rem]",
        className,
      )}
    >
      {headerRow && (
        <div className="h-[2.375rem] bg-neutral-200 dark:bg-neutral-1100 border-b border-neutral-300 dark:border-neutral-1000 flex items-center py-1 px-3 rounded-t-lg">
          {/* macOS window buttons */}
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Title */}
          <div className="flex-1 text-center ui-text-p3 font-bold text-neutral-1300 dark:text-neutral-000">
            {title}
          </div>

          {/* Empty div for balance */}
          <div className="w-12"></div>
        </div>
      )}

      {/* SDK Type Selector Row */}
      {showSDKSelector && (
        <div
          className={cn(
            "p-2 border-b border-neutral-200 dark:border-neutral-1100 h-14",
            headerRow ? "" : "rounded-t-lg",
          )}
        >
          <div className="flex gap-3 justify-start">
            {sdkTypes.has("realtime") && (
              <TooltipButton
                tooltip="Realtime SDK"
                active={activeSDKType === "realtime"}
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
                active={activeSDKType === "rest"}
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
            activeLanguage={activeLanguage}
            onLanguageChange={handleLanguageChange}
            getLanguageDisplayName={getLanguageDisplayName}
            getLanguageIcon={getLanguageIcon}
            activeLanguageInfo={activeLanguageInfo}
          />
        ) : (
          <div
            className={cn(
              "border-b border-neutral-200 dark:border-neutral-1100 h-[2.125rem] inline-flex items-center px-3",
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
                  additionalCSS="mr-2"
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
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onFocus={() => setIsHovering(true)}
        onBlur={() => setIsHovering(false)}
        tabIndex={0}
      >
        {renderContent}

        {/* Copy button - simplified conditional */}
        {isHovering && activeLanguage && hasSnippetForActiveLanguage && (
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
          selectedApiKey={selectedApiKey}
          onApiKeyChange={handleApiKeyChange}
        />
      )}
    </div>
  );
};

export default CodeSnippet;
