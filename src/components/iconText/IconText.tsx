import React from "react";
import { LinkProps } from "./types";
import RightOutlined from "@ant-design/icons/RightOutlined";
import { H3Thin, Row } from "../headerContainer/styles";

const IconText = ({ text, icon }: LinkProps) => {
  return (
    <Row>
      {icon}
      <H3Thin> {text}</H3Thin>
    </Row>
  );
};

export default IconText;
