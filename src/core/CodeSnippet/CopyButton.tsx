import React, { memo } from "react";
import Icon from "../Icon";
import TooltipButton from "./TooltipButton";

type CopyButtonProps = {
  onCopy: () => void;
  isCopied: boolean;
  tooltip?: string;
};

/**
 * A reusable copy button component with tooltip and copied indicator
 */
const CopyButton = memo(
  ({ onCopy, isCopied, tooltip = "Copy" }: CopyButtonProps) => {
    return (
      <div className="absolute top-2 right-2 z-10">
        <TooltipButton tooltip={tooltip} onClick={onCopy} variant="icon-button">
          <Icon
            name="icon-gui-document-duplicate-outline"
            size="20px"
            color="text-ably-primary"
          />
        </TooltipButton>

        {isCopied ? (
          <div className="absolute right-10 top-0 bg-ably-primary text-ably-primary-inverse py-1.5 px-3 rounded ui-text-label4 whitespace-nowrap">
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
