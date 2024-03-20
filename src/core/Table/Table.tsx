import React, { PropsWithChildren, ReactElement, cloneElement } from "react";

type TableProps = {
  id?: string;
};

export const Table = ({ id, children }: PropsWithChildren<TableProps>) => (
  <table id={id} className="ui-standard-container mb-4 sm:table-fixed">
    {children}
  </table>
);

export const TableBody = ({ children }: PropsWithChildren) => (
  <tbody>{children}</tbody>
);

export const TableHeader = ({ children }: PropsWithChildren) => (
  <thead className="sticky bg-white z-10 top-0" key="sticky-block">
    {cloneElement(children as ReactElement, { isHeader: true })}
  </thead>
);

export const TableRowHeader = ({ children }: PropsWithChildren) => (
  <tr
    className="-ml-24 mt-8 sm:ml-0 sm:mt-0 ui-text-overline1 !text-cool-black  bg-light-grey sm:sticky z-10"
    style={{ top: "4rem" }}
  >
    {cloneElement(children as ReactElement, { isRowHeader: true })}
  </tr>
);
