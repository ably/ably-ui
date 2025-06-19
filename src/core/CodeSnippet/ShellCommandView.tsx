import React, { useRef, useState, useCallback, memo } from "react";
import Icon from "../Icon";
import Code from "../Code";
import cn from "../utils/cn";
import useCopyToClipboard from "../utils/useCopyToClipboard";
import CopyButton from "./CopyButton";

interface ShellCommandViewProps {
  content: string;
  className?: string;
}

/**
 * A specialized component for displaying shell commands with copy functionality
 */
const ShellCommandView: React.FC<ShellCommandViewProps> = ({
  content,
  className,
}) => {
  const { isCopied, copy } = useCopyToClipboard();
  const codeRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Handler to copy the shell command content
  const handleCopy = useCallback(() => {
    copy(content);
  }, [copy, content]);

  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden bg-neutral-000 dark:bg-neutral-1300 border border-neutral-300 dark:border-neutral-1000 relative min-h-[3.375rem]",
        className,
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsHovering(true)}
      onBlur={() => setIsHovering(false)}
      tabIndex={0}
      ref={codeRef}
    >
      {/* Shell Icon */}
      <div className="absolute top-2 left-2 z-10">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-neutral-200 dark:bg-neutral-1100">
          <Icon
            name="icon-gui-command-line-outline"
            size="20px"
            color="text-neutral-1300 dark:text-neutral-000"
          />
        </div>
      </div>

      {/* Code Content */}
      <div className="pl-14">
        <Code
          language="shell"
          snippet={content}
          additionalCSS="bg-neutral-000 text-neutral-1300 dark:bg-neutral-1300 dark:text-neutral-200 pl-0 pr-4 py-3"
          showLines={false}
        />
      </div>

      {/* Copy Button - only shown on hover */}
      {isHovering && <CopyButton onCopy={handleCopy} isCopied={isCopied} />}
    </div>
  );
};

ShellCommandView.displayName = "ShellCommandView";

export default memo(ShellCommandView);
