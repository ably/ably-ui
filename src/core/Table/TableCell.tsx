import React, { PropsWithChildren } from "react";

type TableCellProps = {
  isRowHeader?: boolean;
} & React.TdHTMLAttributes<HTMLTableCellElement>;

const LabelCell = ({
  children,
  ...rest
}: PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => {
  const classes = `
    ui-text-p1 font-bold pt-6 pb-2 border-light-grey sm:p-6 sm:relative sm:top-0.5 flex sm:table-cell ${
      rest?.className ?? ""
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
        border-light-grey sm:p-6 leading-none flex sm:table-cell
        ${
          isRowHeader
            ? "rounded-l-none rounded-r sm:rounded-lg py-5 px-6"
            : "py-1.5"
        }
        ${rest?.className ?? ""}
      `}
  >
    {children}
  </td>
);

const HeaderCell = ({
  children,
  ...rest
}: PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => (
  <td
    {...rest}
    className={`ui-text-h3 px-6 py-6 hidden sm:table-cell ${
      rest?.className ?? ""
    }`}
  >
    {children}
  </td>
);

const CtaCell = ({
  children,
  ...rest
}: PropsWithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>) => (
  <td
    {...rest}
    className={`pt-6 hidden sm:table-cell ${rest?.className ?? ""}`}
  >
    {children}
  </td>
);

export { TableCell, LabelCell, HeaderCell, CtaCell };
