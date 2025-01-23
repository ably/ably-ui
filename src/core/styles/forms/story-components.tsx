import React from "react";
import Icon from "../../Icon";

type FormElementProps = {
  index: number;
  disabled?: boolean;
};

export const Checkbox = ({ index, disabled }: FormElementProps) => (
  <div className="ui-checkbox-p1 flex items-center">
    <input
      data-ui-checkbox-native=""
      type="checkbox"
      id={`checkbox-example-${index}`}
      name={`checkbox-example-${index}`}
      value="yes"
      className="ui-checkbox-input"
      disabled={disabled}
    />
    <div data-ui-checkbox-styled="" className="ui-checkbox-styled">
      <Icon
        name="icon-gui-check-micro"
        size="1rem"
        additionalCSS="ui-checkbox-styled-tick"
      />
    </div>
    <label
      htmlFor={`checkbox-example-${index}`}
      className="ui-checkbox-label-p1"
    >
      Option {index}
    </label>
  </div>
);

export const RadioButton = ({ index, disabled }: FormElementProps) => (
  <div className="flex items-center gap-8">
    <input
      data-ui-radio-native=""
      type="radio"
      id={`radio-example-${index}`}
      name="radio-example"
      value={`option-${index}`}
      className="ui-radio"
      disabled={disabled}
    />
    <label
      className="text-neutral-1300 dark:text-neutral-000"
      htmlFor={`radio-example-${index}`}
    >
      Option {index}
    </label>
  </div>
);
