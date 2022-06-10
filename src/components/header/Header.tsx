import React from "react";
import IconHeader from "../../../assets/icon/grab-white.svg";
import Image from "next/image";
import { CustomInput } from "./styles";
import ShoppingOutlined from "@ant-design/icons/ShoppingOutlined";
import Button from "../button/Button";

const Header: React.FC = () => {
  return (
    <div
      style={{
        zIndex: 999,
        backgroundColor: "#fff",
        position: "fixed",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <div style={{ flex: 0.5 }}>
        <Image src={IconHeader} alt="icon" height={50} width={140} />
      </div>

      <div style={{ flex: 1 }}>
        <CustomInput
          // status=""
          // prefix={<ClockCircleOutlined />}
          placeholder="Search Location"
        />
      </div>
      <div
        style={{
          flex: 2,
          display: "flex",
          paddingRight: "10%",
          justifyContent: "flex-end",
        }}
      >
        <span style={{ marginLeft: 20 }}>
          <Button color="white" icon={<ShoppingOutlined />} isShowIcon={true} />{" "}
        </span>
        <span style={{ marginLeft: 20 }}>
          <Button color="white" isShowIcon={false} text="Login/SignUp" />
        </span>
      </div>
    </div>
  );
};

export default Header;
