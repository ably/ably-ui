import React, { useRef, useState, useCallback, memo } from "react";
import Icon from "../Icon";
import Code from "../Code";
import cn from "../utils/cn";
import useCopyToClipboard from "../utils/useCopyToClipboard";
import CopyButton from "./CopyButton";
import { IconName } from "../Icon/types";

type PlainCodeViewProps = {
  content: string;
  language: string;
  icon: IconName | null;
  className?: string;
};

/**
 * A specialized component for displaying plain code (shell commands, text, etc.) with copy functionality
 */
const PlainCodeView: React.FC<PlainCodeViewProps> = ({
  content,
  className,
  language,
  icon,
}) => {
  const { isCopied, copy } = useCopyToClipboard();
  const codeRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Handler to copy the content
  const handleCopy = useCallback(() => {
    copy(content);
  }, [copy, content]);

  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden bg-ably-primary-inverse border border-ably-secondary-inverse relative flex items-center",
        language === "shell" ? "min-h-[3.375rem]" : "min-h-12",
        className,
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
      tabIndex={0}
      ref={codeRef}
    >
      {icon && (
        <div className="absolute top-2 left-2 z-10">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-neutral-200 dark:bg-neutral-1100">
            <Icon name={icon} size="20px" color="text-ably-primary" />
          </div>
        </div>
      )}

      <Code
        language={language}
        snippet={content}
        additionalCSS={cn(
          "w-full bg-ably-primary-inverse text-neutral-1300 dark:text-neutral-200 px-4 py-2",
          icon && "pl-14",
        )}
        showLines={false}
      />

      {isHovering && <CopyButton onCopy={handleCopy} isCopied={isCopied} />}
    </div>
  );
};

PlainCodeView.displayName = "PlainCodeView";

export default memo(PlainCodeView);
