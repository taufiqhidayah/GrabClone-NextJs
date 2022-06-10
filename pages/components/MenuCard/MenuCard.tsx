import { Button, Checkbox, Divider, Radio, Tabs } from "antd";
import React, { useMemo, useState } from "react";
import "antd/dist/antd.css";
import styles from "../../../styles/Tabs.module.css";
import Image from "next/image";
import PreferredIcon from "../../../assets/icon/icon-preferred-merchant.svg";
import { PlusSquareOutlined } from "@ant-design/icons";
import { LinkProps } from "./types";
const CardMenu = ({ imgUrl, price, title, description }: LinkProps) => {
  return (
    <div className={styles.card}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flexDirection: "column" ,  flex: 1 }}>
          <Image
            style={{ marginRight: 16, objectFit: "cover", flex: 1 }}
            width={120}
            height={120}
            alt="product"
            src={`${imgUrl}.webp`}
          />
         
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            flex: 2,
            marginLeft: 10,
          }}
        >
          <h3>{title}</h3>
          <p> {description}</p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p> {price}</p>
            <PlusSquareOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
