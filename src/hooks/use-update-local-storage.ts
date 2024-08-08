import { useEffect } from "react"
import { TLSKeys } from "@/constants/ls-keys"

const useUpdateLocalStorage = <TData>(key: TLSKeys, params: TData) => {
// deferring storing to LS to avoid unnecessary writes
  useEffect(() => {
    const timer = setTimeout(() => {
      const _params = typeof params === 'string' ? params : JSON.stringify(params)
      localStorage.setItem(key, _params)
    }, 500)
    return () => clearTimeout(timer)
  },[key, params])

  return
}

export default useUpdateLocalStorage