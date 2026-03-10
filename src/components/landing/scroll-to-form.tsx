"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function ScrollToForm() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Проверяем, есть ли якорь #contact-form в URL
    const hash = window.location.hash
    if (hash === "#contact-form" && pathname === "/") {
      // Небольшая задержка для рендеринга
      const element = document.getElementById("contact-form")
        if (element) {
          const yOffset = -80 // Отступ сверху в пикселях
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }
    }
  }, [pathname, searchParams])

  return null
}
