export const LS_KEYS = {
  LAYOUT: "layout",
  TOGGLES: "toggles",
} as const

export type TLSKeys = typeof LS_KEYS[keyof typeof LS_KEYS]