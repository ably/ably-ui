import React, { useRef, useCallback } from "react";
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
  const [isHovering, setIsHovering] = React.useState(false);

  const handleCopy = useCallback(() => {
    if (!codeRef.current) return;
    copy(content);
  }, [copy, content]);

  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden bg-neutral-000 dark:bg-neutral-1300 border border-neutral-300 dark:border-neutral-1000 relative min-h-[54px]",
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
      <div className="absolute top-8 left-8 z-10">
        <div className="w-36 h-36 rounded-lg flex items-center justify-center bg-neutral-200 dark:bg-neutral-1100">
          <Icon
            name="icon-gui-command-line-outline"
            size="20px"
            color="text-neutral-1300 dark:text-neutral-000"
          />
        </div>
      </div>

      {/* Code Content */}
      <div className="pl-56">
        <Code
          language="shell"
          snippet={content}
          additionalCSS="bg-neutral-000 text-neutral-1300 dark:bg-neutral-1300 dark:text-neutral-200 pl-[56px] py-12"
          showLines={false}
        />
      </div>

      {/* Copy Button - only shown on hover */}
      {isHovering && <CopyButton onCopy={handleCopy} isCopied={isCopied} />}
    </div>
  );
};

export default ShellCommandView;
