import { Colors } from "./types";

export const baseColors = {
  failure: "#00cc98",
  primary: "#090b16",
  primaryBright: "#090b16",
  primaryDark: "#00cc98",
  secondary: "#090b16",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#00cc98",
  background: "#fff",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#00cc98",
  textDisabled: "#BDC2C4",
  textSubtle: "#52dab7",
  borderColor: "#E9EAEB",
  card: "#fff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#00cc98",
  background: "#090b16",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#00cc98",
  tertiary: "#353547",
  text: "#00cc98",
  textDisabled: "#666171",
  textSubtle: "#00cc98",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
