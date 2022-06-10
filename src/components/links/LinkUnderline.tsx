import React from "react";
import { LinkProps } from "./types";
const LinksUnderline = ({ text }: LinkProps) => {
  return (
    <a href="#" style={{ color: "#363a45", justifyContent: 'flex-start'}}>
      {text}
    </a>
  );
};

export default LinksUnderline;
