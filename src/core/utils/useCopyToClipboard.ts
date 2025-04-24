import { useState, useCallback } from "react";

interface CopyToClipboardState {
  isCopied: boolean;
  error: Error | null;
}

interface CopyToClipboardReturn extends CopyToClipboardState {
  copy: (text: string) => Promise<boolean>;
}

/**
 * A hook that provides copy-to-clipboard functionality with state management
 * @param copiedTimeout - How long to show the copied state in ms before resetting
 * @returns Object with isCopied state, any error, and copy function
 */
function useCopyToClipboard(copiedTimeout = 2000): CopyToClipboardReturn {
  const [state, setState] = useState<CopyToClipboardState>({
    isCopied: false,
    error: null,
  });

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      try {
        await navigator.clipboard.writeText(text);
        setState({ isCopied: true, error: null });

        // Reset the copied state after timeout
        setTimeout(() => {
          setState((prev) => ({ ...prev, isCopied: false }));
        }, copiedTimeout);

        return true;
      } catch (error) {
        setState({
          isCopied: false,
          error: error instanceof Error ? error : new Error(String(error)),
        });
        return false;
      }
    },
    [copiedTimeout],
  );

  return { ...state, copy };
}

export default useCopyToClipboard;
