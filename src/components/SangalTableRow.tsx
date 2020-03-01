import * as React from "react";
import { TableColumns } from "./SangalTable";
import SangalInput from "./SangalInput";

export type IRowProps = {
  column: TableColumns;
  value?: string | number;
  tag: "th" | "td";
};

const SangalTableRow: React.FC<IRowProps> = ({ column, value, tag }) => {
  const text = tag === "th" ? column.text : value;
  const CustomTag = tag;
  if (
    (tag === "th" && column.type === "checkbox") ||
    (tag === "td" && column.editable)
  ) {
    return (
      <CustomTag>
        <SangalInput type={column.type} value={value ? value : ""} />
      </CustomTag>
    );
  }
  return <CustomTag>{text}</CustomTag>;
};

export default SangalTableRow;
