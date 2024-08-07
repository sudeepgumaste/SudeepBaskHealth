import { useEffect } from "react"
import { LS_KEYS } from "@/constants/ls-keys"
import { TBreakpointLayoutMap } from "@/types/common.types"

type Params = TBreakpointLayoutMap

// deferring storing to LS to avoid unnecessary writes
const useUpdateSavedLayout = (params: Params) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(LS_KEYS.LAYOUT, JSON.stringify(params))
    }, 1000)
    return () => clearTimeout(timer)
  },[params])

  return
}

export default useUpdateSavedLayout