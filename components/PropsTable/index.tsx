import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";

interface Prop {
  name: string;
  type: string;
  required: boolean;
  default: string;
}

interface PropsTableProps {
  props: Prop[];
}

const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Required</TableCell>
          <TableCell>Default</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.map((prop, index) => (
          <TableRow key={index}>
            <TableCell>{prop.name}</TableCell>
            <TableCell>{prop.type}</TableCell>
            <TableCell>{prop.required ? "Yes" : "No"}</TableCell>
            <TableCell>{prop.default}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PropsTable;
