import React, { memo } from "react";
import Icon from "../Icon";
import TooltipButton from "./TooltipButton";

interface CopyButtonProps {
  onCopy: () => void;
  isCopied: boolean;
  tooltip?: string;
}

/**
 * A reusable copy button component with tooltip and copied indicator
 */
const CopyButton = memo(
  ({ onCopy, isCopied, tooltip = "Copy" }: CopyButtonProps) => {
    return (
      <div className="absolute top-8 right-8 z-10">
        <TooltipButton tooltip={tooltip} onClick={onCopy} variant="icon-button">
          <Icon
            name="icon-gui-document-duplicate-outline"
            size="20px"
            color="text-neutral-1300 dark:text-neutral-000"
          />
        </TooltipButton>

        {isCopied ? (
          <div className="absolute right-[40px] top-0 bg-neutral-1300 dark:bg-neutral-000 text-neutral-000 dark:text-neutral-1300 py-6 px-12 rounded ui-text-label4 whitespace-nowrap">
            Copied!
          </div>
        ) : null}
      </div>
    );
  },
);

// Add displayName for better debugging
CopyButton.displayName = "CopyButton";

export default CopyButton;
