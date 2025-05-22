import React, {
  PropsWithChildren,
  ReactElement,
  TableHTMLAttributes,
  cloneElement,
} from "react";

type TableProps = {
  id?: string;
};

export const Table = ({
  id,
  children,
  ...rest
}: PropsWithChildren<TableProps & TableHTMLAttributes<HTMLTableElement>>) => (
  <table
    id={id}
    {...rest}
    className={`ui-standard-container mb-1 sm:table-fixed ${
      rest?.className ?? ""
    }`}
  >
    {children}
  </table>
);

export const TableBody = ({
  children,
  ...rest
}: PropsWithChildren<TableHTMLAttributes<HTMLTableSectionElement>>) => (
  <tbody {...rest}>{children}</tbody>
);

export const TableHeader = ({
  children,
  ...rest
}: PropsWithChildren<TableHTMLAttributes<HTMLTableSectionElement>>) => (
  <thead
    {...rest}
    className={`sticky bg-white z-10 top-0 ${rest?.className ?? ""}`}
  >
    {cloneElement(children as ReactElement, { isHeader: true })}
  </thead>
);

export const TableRowHeader = ({
  children,
  ...rest
}: PropsWithChildren<TableHTMLAttributes<HTMLTableRowElement>>) => (
  <tr
    className={`-ml-6 mt-2 sm:ml-0 sm:mt-0 sm:sticky z-10 ${
      rest?.className ?? ""
    }`}
  >
    {cloneElement(children as ReactElement, { isRowHeader: true })}
  </tr>
);
