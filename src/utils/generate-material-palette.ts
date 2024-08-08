function generateMaterialPalette(h: number, s: number, l: number) {
  const minmax = (val: number) => Math.min(100, Math.max(0, val));

  const shades = `
    --primary-500: hsl(${h}deg, ${s}%, ${minmax(l)}%);
    --primary-400: hsl(${h}deg, ${s}%, ${minmax(l + 6)}%);
    --primary-300: hsl(${h}deg, ${s}%, ${minmax(l + 12)}%);
    --primary-200: hsl(${h}deg, ${s}%, ${minmax(l + 26)}%);
    --primary-100: hsl(${h}deg, ${s}%, ${minmax(l+37)}%);
  `;

  return shades;
}

export default generateMaterialPalette;
