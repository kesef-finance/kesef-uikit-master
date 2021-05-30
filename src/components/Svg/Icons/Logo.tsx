import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 102 52" {...props}>
      <image width="102" height="52" href="/images/kesef/logo.svg" />
    </Svg>
  );
};

export default Icon;
