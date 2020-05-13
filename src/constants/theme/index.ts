import light from "./light";
import dark from "./dark";

export interface IColorSet {
  background: string;
  backgroundSub: string;
  text: string;
  textSub: string;
}

export function createColorSet({
  background,
  backgroundSub,
  text,
  textSub,
}: IColorSet): IColorSet {
  return {
    background,
    backgroundSub,
    text,
    textSub,
  } as const;
}

const themes = {
  light,
  dark,
};
export type Theme = typeof light;
export type Themes = keyof typeof themes;
export type ColorSet = keyof typeof light.colorSet;
export default themes;
