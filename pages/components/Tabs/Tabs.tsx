import type { RadioChangeEvent } from "antd";
import { Button, Checkbox, Divider, Radio, Tabs } from "antd";
import styles from "../../../styles/Tabs.module.css";
import React, { useMemo, useState } from "react";
import "antd/dist/antd.css";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CardMenu from "../MenuCard/MenuCard";
import { menuItem } from "../../mocks/listmenu";
const { TabPane } = Tabs;

const operations = <Button>Extra Action</Button>;

const OperationsSlot: Record<PositionType, React.ReactNode> = {
  left: <LeftOutlined />,
  right: <RightOutlined />,
};

const options = ["left", "right"];
const tabsHeader = [
  "WAIKI Rice Box",
  "New Seafood Dish",
  "Aigo",
  "Chingu",
  "Seerameon Ikan",
  "Samjang Gami ( Extra Pedas )",
  "Sea Monster",
  "Omo",
  "Saranghaeyo",
  "Chaeso",
  "Drink (Ice / Hot)",
  "Addon",
];
type PositionType = "left" | "right";
const CustomTabs: React.FC = () => {
  const [position, setPosition] = useState<PositionType[]>(["left", "right"]);

  const slot = useMemo(() => {
    if (position.length === 0) return null;

    return position.reduce(
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {}
    );
  }, [position]);
  return (
    <div>
      <Tabs tabBarExtraContent={slot} defaultActiveKey="1" tabPosition="top">
        {tabsHeader.map((i) => (
          <TabPane tab={`Tab-${i}`} key={i}>
            <div>
              {menuItem.map((val) => {
                return (
                  <>
                     <h2 className={styles.titleFont}>{val.title}</h2>
                    <div
                      className={styles.menuItem}
                      style={{ display: "grid", flexDirection: "row" }}
                    >
                      {val.data.map((val, index) => (
                        <div key={index} className={styles.cardTop}>
                          <CardMenu
                            imgUrl={val.imgUrl}
                            price={val.price}
                            title={val.name}
                            description={val.description}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                );
              })}
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default CustomTabs;
