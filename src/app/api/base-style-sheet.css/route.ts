import generateMaterialPalette from "@/utils/generate-material-palette";

export function GET(request: Request) {
  const baseColors = [
    { h: 36, s: 100, l: 50 },
    { h: 244, s: 71, l: 57 },
    { h: 49, s: 100, l: 48 },
    { h: 189, s: 100, l: 34 },
    { h: 231, s: 48, l: 48 },
  ];
  const randomBaseColor =
    baseColors[Math.floor(Math.random() * baseColors.length)];
  const css = `:root {
${generateMaterialPalette(
  randomBaseColor.h,
  randomBaseColor.s,
  randomBaseColor.l
)}
}`;
  return new Response(css, {
    headers: {
      "Content-Type": "text/css",
    },
  });
}
