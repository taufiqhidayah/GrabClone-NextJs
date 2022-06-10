import React from "react";
import Links from "../links/Links";
import Image from "next/image";
import PreferredIcon from "../../../assets/icon/icon-preferred-merchant.svg";
import StarIcon from "../../../assets/icon/icon-star.svg";
import TagOutlined from "@ant-design/icons/TagOutlined";
import InfoCircleOutlined from "@ant-design/icons/InfoCircleOutlined";

import { SectionHeader, PreferMerchant, Row, H2, H3, H3Bold } from "./styles";
import IconText from "../iconText/IconText";
const HeaderContainer = () => {
  const subMenu = ["Home", "Restaurant", "Do Yan Seafood - Sumbersekar"];

  return (
    <SectionHeader>
      {subMenu.map((val, id) => (
        <Links key={id} text={val} lastIndex={subMenu.length - 1 === id} />
      ))}
      <Row>
        <Image src={PreferredIcon} alt="Preferred" />
        <PreferMerchant>Preferred Merchant</PreferMerchant>
      </Row>
      <H2>Do Yan Seafood - Sumbersekar</H2>
      <H3>Seafood,Snack</H3>
      <Row>
        <Image src={StarIcon} alt="Start" />
        <H3 style={{marginTop: 15}}>4.5</H3>
        <span style={{marginTop: 15, marginLeft: 20}}> <H3>664.1 km</H3></span>
      </Row>
      <Row>
        <H3Bold>Opening Hour</H3Bold>
        <H3>11.00 - 20.00</H3>
      </Row>
      <IconText text="10% off WAIKI Rice Box" icon={<TagOutlined style={{color: '#00b14f'}}/>}/>
      <IconText text="Rp2.000 off delivery fee with Rp30.000 min. order" icon={<TagOutlined  style={{color: '#00b14f'}}/>}/>
      <IconText text="Order fee of Rp3.000 applies for this restaurant." icon={<InfoCircleOutlined/>}/>
    </SectionHeader>
  );
};
export default HeaderContainer;
