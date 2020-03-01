import * as React from "react";
import SangalPager, { ISangalPager } from "./SangalPager";
import { classnames } from "../utils/utility";
import { InputType } from "./SangalInput";
import SangalTableRow from "./SangalTableRow";

export type TableColumns = {
  text: string;
  type: InputType;
  editable: boolean;
};

export interface ITableProps {
  pager: ISangalPager;
  header: { [key: string]: TableColumns };
  rows: [{ [key: string]: string | number }];
  isAllSelected?: boolean;
  className?: string;
}

const SangalTable: React.FC<ITableProps> = ({
  pager,
  header,
  rows,
  className,
  isAllSelected
}) => {
  if (Object.keys(header).length === 0) {
    console.warn("SangalTable: Header is emtpy!");
  }
  const columns: string[] = Object.keys(header);

  const clsnm = classnames("table", className || "");

  const tableHeaders = columns.map((it, key) => (
    <SangalTableRow
      column={header[it]}
      tag="th"
      key={key}
      value={header[it].type === "checkbox" ? (isAllSelected ? 1 : 0) : ""}
    />
  ));

  const tableRows = rows.map((it, rkey) => (
    <tr key={rkey}>
      {columns.map((col, key) => (
        <SangalTableRow
          column={header[col]}
          tag="td"
          key={key}
          value={it[col]}
        />
      ))}
    </tr>
  ));

  return (
    <div>
      <table className={clsnm}>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <SangalPager {...pager} />
    </div>
  );
};

export default SangalTable;
