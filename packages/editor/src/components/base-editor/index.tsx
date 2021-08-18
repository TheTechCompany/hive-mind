import React from "react";
import { Plate } from "@udecode/plate";

export interface BaseEditorProps {}

export const BaseEditor: React.FC<BaseEditorProps> = (props) => {
  return <Plate />;
};
