export const makeOpacityColor = (color: string, opacity: number): string => {
  if (color.startsWith('#')) {
    const [r, g, b] = hexToRgb(color);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return `rgba(${color
    .replace(/rgba|rgb|\(/gi, '')
    .replace(/[^,]+(\d)*\)/i, String(opacity))})`;
};

export const hexToRgb = (hex: string): [number, number, number] => {
  const value = hex.startsWith('#') ? hex.replace('#', '') : hex;
  if (value.length !== 6 && value.length !== 3) {
    throw new Error(`Unable to convert from '${hex}' to RGB`);
  }
  const regExp = new RegExp(/([a-f\d]{2})/gi);
  const rgb =
    value.length === 6
      ? value.match(regExp)
      : value
          .split('')
          .reduce((acc, value) => `${acc}${value}${value}`, '')
          .match(regExp);
  const [r, g, b] = rgb ? rgb : [];

  return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
};
export const getInvertedColor = (color: string): string => {
  const [r, g, b] = color.startsWith('#')
    ? hexToRgb(color)
    : color.replace(/rgba|rgb|\(|\)| /gi, '').split(',');
  return `rgb(${255 - Number(r)}, ${255 - Number(g)}, ${255 - Number(b)})`;
};

export function makeHoverOnlyQuery(_: TemplateStringsArray, content: any) {
  return `@media screen and (hover:hover) {
  ${content}
}`;
}
