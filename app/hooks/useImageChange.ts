import { RefObject, useEffect } from "react"

export const useImageChange = (ref: RefObject<HTMLInputElement>, id: string) => {
  useEffect(() => {
    if (ref.current) {
      ref.current?.addEventListener('change', (el) => {
        const file = (el.target as HTMLInputElement)?.files?.[0]
        if (file) {
          const image = document.querySelector(id) as HTMLImageElement
          image.src = window.URL.createObjectURL(file as Blob)
        }
      })
    }
  }, [ref.current, ref.current?.files])
}