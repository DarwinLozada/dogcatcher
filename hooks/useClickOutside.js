import { useRef, useCallback, useEffect } from "react"

export default function useClickOutside(ref, callback) {
  const callbackRef = useRef(callback)

  const handleClick = useCallback((e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callbackRef.current()
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])
}
