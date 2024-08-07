import { useEffect } from "react"
import { TLSKeys } from "@/constants/ls-keys"

// deferring storing to LS to avoid unnecessary writes
const useUpdateLocalStorage = <TData>(key: TLSKeys, params: TData) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(params))
    }, 500)
    return () => clearTimeout(timer)
  },[key, params])

  return
}

export default useUpdateLocalStorage