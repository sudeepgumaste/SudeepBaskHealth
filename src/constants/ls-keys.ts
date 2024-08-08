export const LS_KEYS = {
  LAYOUT: "layout",
  TOGGLES: "toggles",
  PREFERS_CHART: "prefers-chart",
} as const

export type TLSKeys = typeof LS_KEYS[keyof typeof LS_KEYS]