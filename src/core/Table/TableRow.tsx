import React, { PropsWithChildren } from "react";

const CtaRow = ({ children }: PropsWithChildren) => (
  <tr>
    <td className="hidden sm:block"></td>
    {children}
  </tr>
);

type RowProps = {
  isHeader?: boolean;
} & React.HTMLAttributes<HTMLTableRowElement>;

const TableRow = ({
  children,
  isHeader,
  ...rest
}: PropsWithChildren<RowProps>) => (
  <tr {...rest}>
    {isHeader && <td className="bg-white" />}
    {children}
  </tr>
);

export { TableRow, CtaRow };
