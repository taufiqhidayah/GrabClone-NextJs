import { LinkProps } from "./types";
import styles from "../../../styles/Home.module.css";
import RightOutlined from "@ant-design/icons/RightOutlined";
const Links = ({ text, lastIndex }: LinkProps) => {
  console.log(lastIndex);
  return (
    <span  className={styles.link}>
      <a href="#" style={{ color: lastIndex ? "inherit" : "#00a5c" }}>
        {text} {!lastIndex && <RightOutlined />}
      </a>
    </span>
  );
};

export default Links;
