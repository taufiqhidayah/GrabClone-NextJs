import React from "react";
import { ButtonProps } from "./types";
import { Button } from "antd";;
const CustomButton = ({ color, text, icon, isShowIcon }: ButtonProps) => {
  return (
    <Button style={{ backgroundColor: color }}>
      {isShowIcon && icon}
      {!isShowIcon && <span> {text}</span>}
    </Button>
  );
};
export default CustomButton;
