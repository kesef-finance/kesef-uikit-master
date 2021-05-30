import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
     <Svg viewBox="0 0 205 52" {...props}>
      <image
        width="205"
        height="52"
        href="/images/kesef/logo.svg"
      />
    </Svg>
  );
};

export default Icon;
