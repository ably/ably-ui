import { Table, TableRowHeader, TableHeader, TableBody } from "./Table/Table";
import { TableRow } from "./Table/TableRow";
import {
  TableCell,
  LabelCell,
  HeaderCell,
  CtaCell,
  Supported,
  Unsupported,
} from "./Table/TableCell";

export default {
  Root: Table,
  Row: TableRow,
  Cell: TableCell,
  LabelCell,
  HeaderCell,
  CtaCell,
  RowHeader: TableRowHeader,
  Body: TableBody,
  Header: TableHeader,
  Supported,
  Unsupported,
};
