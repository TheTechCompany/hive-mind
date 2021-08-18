import React from "react";
import { Plate } from "@udecode/plate";

export interface BaseEditorProps {}

export const BaseEditor: React.FC<BaseEditorProps> = (props) => {
  const editableProps = {
    placeholder: "Type…",
    style: {
      padding: "15px",
    },
  };

  return <Plate id="1" editableProps={editableProps} />;
};
