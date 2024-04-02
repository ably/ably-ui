import React, { PropsWithChildren } from "react";
import Icon from "../Icon";

type TableCellProps = {
  isRowHeader?: boolean;
} & React.TdHTMLAttributes<HTMLTableCellElement>;

const Supported = () => (
  <Icon
    name="icon-gui-check-circled-fill"
    size="1.5rem"
    color="text-gui-success"
    additionalCSS="flex-grow-0 flex-shrink-0"
    data-testid="supported-icon"
  />
);

const Unsupported = () => (
  <Icon
    name="icon-gui-cross-circled-fill"
    size="1.5rem"
    color="text-gui-error"
    additionalCSS="flex-grow-0 flex-shrink-0"
    data-testid="unsupported-icon"
  />
);

const LabelCell = ({
  children,
  ...rest
}: PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => {
  const classes = `
    ui-text-p1 !font-bold pt-24 pb-8 border-light-grey sm:p-24 sm:relative sm:top-2 flex sm:table-cell ${
      rest.className ?? ""
    }
  `;

  return (
    <td {...rest} className={classes}>
      {children}
    </td>
  );
};

const TableCell = ({
  children,
  isRowHeader,
  ...rest
}: PropsWithChildren<TableCellProps>) => (
  <td
    {...rest}
    className={`
        border-light-grey sm:p-24 leading-none flex sm:table-cell
        ${
          isRowHeader
            ? "rounded-l-none rounded-r sm:rounded-lg py-20 px-24"
            : "py-6"
        }
        ${rest.className ?? ""}
      `}
  >
    {children}
  </td>
);

const HeaderCell = ({
  children,
  ...rest
}: PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => (
  <td {...rest} className="ui-text-h3 px-24 py-24 hidden sm:table-cell">
    {children}
  </td>
);

const CtaCell = ({
  children,
  ...rest
}: PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => (
  <td {...rest} className="pt-24 hidden sm:table-cell">
    {children}
  </td>
);

export { TableCell, LabelCell, HeaderCell, CtaCell, Supported, Unsupported };
