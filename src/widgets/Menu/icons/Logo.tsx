import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 205 52" {...props}>
      <image
        width="205"
        height="52"
        href={isDark ? "/images/kesef/logoTextDark.svg" : "/images/kesef/logoTextLight.svg"}
      />
    </Svg>
  );
};

export default Logo;
