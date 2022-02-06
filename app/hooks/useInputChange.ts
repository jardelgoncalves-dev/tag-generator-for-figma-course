import { RefObject, useEffect } from "react"

export const useInputChange = (ref: RefObject<HTMLInputElement>, id: string) => {
  useEffect(() => {
    if (ref.current) {
      ref.current?.addEventListener('input', (el) => {
        const value = (el.target as HTMLInputElement)?.value
        const field = document.querySelector(id) as HTMLDivElement
        field.innerText = value
      })
    }
  }, [ref.current, ref.current?.value])
}