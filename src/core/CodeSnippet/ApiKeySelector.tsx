import React, { memo, useMemo } from "react";
import * as Select from "@radix-ui/react-select";
import Badge from "../Badge";
import Icon from "../Icon";
import Tooltip from "../Tooltip";

interface ApiKeySelectorProps {
  apiKeys?: string[];
  selectedApiKey: string;
  onApiKeyChange: (apiKey: string) => void;
}

// Define constants at the module level
const SPECIAL_API_KEYS = {
  DEMO: "demo",
} as const;

const ApiKeySelector = memo(
  ({ apiKeys, selectedApiKey, onApiKeyChange }: ApiKeySelectorProps) => {
    // Check if we're in demo mode - only compute this once
    const isDemoMode = useMemo(
      () => apiKeys?.length === 1 && apiKeys[0] === SPECIAL_API_KEYS.DEMO,
      [apiKeys],
    );

    // Memoize API key items to prevent recreating them on each render
    const apiKeyItems = useMemo(() => {
      if (!apiKeys?.length || isDemoMode) return null;

      return apiKeys.map((key) => (
        <Select.Item
          key={key}
          value={key}
          className="relative flex items-center rounded px-8 py-6 text-14 text-neutral-1300 dark:text-neutral-000 select-none hover:bg-neutral-100 dark:hover:bg-neutral-1200 data-[highlighted]:outline-none data-[highlighted]:bg-neutral-100 dark:data-[highlighted]:bg-neutral-1200 focus-base"
        >
          <Select.ItemText>{key}</Select.ItemText>
          <Select.ItemIndicator className="absolute right-8">
            <Icon name="icon-gui-check-outline" size="16px" />
          </Select.ItemIndicator>
        </Select.Item>
      ));
    }, [apiKeys, isDemoMode]);

    // Render the demo mode UI
    const renderDemoMode = useMemo(
      () => (
        <div className="flex items-center">
          <Badge className="ml-4 bg-neutral-200 dark:bg-neutral-1100">
            DEMO ONLY
          </Badge>
          <Tooltip
            className="ml-0"
            triggerElement={
              <Icon
                name="icon-gui-information-circle-outline"
                size="16px"
                color="text-neutral-700 dark:text-neutral-600"
              />
            }
          >
            This code example uses a temporary key that is rate limited and
            expires in 4 hrs. Sign in to Ably to use your API keys instead.
          </Tooltip>
        </div>
      ),
      [],
    );

    // Render the dropdown only if we have API keys
    const renderApiKeyDropdown = useMemo(() => {
      if (isDemoMode) {
        return renderDemoMode;
      }

      if (!apiKeys?.length) {
        return null;
      }

      return (
        <Select.Root value={selectedApiKey} onValueChange={onApiKeyChange}>
          <Select.Trigger
            className="inline-flex items-center justify-between rounded px-8 py-4 text-14 text-neutral-1300 dark:text-neutral-000 bg-neutral-200 dark:bg-neutral-1100 hover:bg-neutral-300 dark:hover:bg-neutral-1000 gap-4 focus-base"
            aria-label="API Key"
          >
            <Select.Value />
            <Select.Icon>
              <Icon name="icon-gui-chevron-down-outline" size="16px" />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content className="overflow-hidden rounded-md bg-neutral-000 dark:bg-neutral-1300 border border-neutral-200 dark:border-neutral-1000 shadow-md z-50">
              <Select.ScrollUpButton className="flex items-center justify-center h-24 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base">
                <Icon
                  name="icon-gui-chevron-down-outline"
                  size="16px"
                  additionalCSS="rotate-180"
                />
              </Select.ScrollUpButton>

              <Select.Viewport className="p-4">{apiKeyItems}</Select.Viewport>

              <Select.ScrollDownButton className="flex items-center justify-center h-24 bg-neutral-000 dark:bg-neutral-1300 text-neutral-1300 dark:text-neutral-000 cursor-default focus-base">
                <Icon name="icon-gui-chevron-down-outline" size="16px" />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      );
    }, [
      apiKeys,
      isDemoMode,
      selectedApiKey,
      onApiKeyChange,
      apiKeyItems,
      renderDemoMode,
    ]);

    return (
      <div className="flex items-center border-t border-neutral-200 dark:border-neutral-1100 px-12 py-12">
        <span className="ui-text-label4 text-neutral-700 dark:text-neutral-600 mr-4">
          API key:
        </span>
        {renderApiKeyDropdown}
      </div>
    );
  },
);

// Define a display name to improve debugging
ApiKeySelector.displayName = "ApiKeySelector";

export default ApiKeySelector;
