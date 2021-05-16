import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ffe184",
  primaryBright: "#ffe184",
  primaryDark: "#ffe184",
  secondary: "#ffe184",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ffe184",
  background: "#FFB6C1",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#ffe184",
  textDisabled: "#BDC2C4",
  textSubtle: "#ffe184",
  borderColor: "#E9EAEB",
  card: "#FFC0CB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ffe184",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#ffe184",
  tertiary: "#353547",
  text: "#ffe184",
  textDisabled: "#666171",
  textSubtle: "#ffe184",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
