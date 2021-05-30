import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 62 62" {...props}>
      <image width="62" height="62" href="/images/kesef/rock_icon.svg" />
    </Svg>
  );
};

export default Icon;
