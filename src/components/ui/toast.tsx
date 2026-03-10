"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToastProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  duration?: number
}

export function Toast({ open, onOpenChange, children, duration = 3000 }: ToastProps) {
  React.useEffect(() => {
    if (open && duration > 0) {
      const timer = setTimeout(() => {
        onOpenChange(false)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [open, duration, onOpenChange])

  if (!open) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex w-full max-w-sm items-center gap-3 border border-border bg-card p-4 shadow-lg">
      {children}
      <button
        onClick={() => onOpenChange(false)}
        className="ml-auto text-muted-foreground hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

export function ToastTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("font-semibold text-card-foreground", className)}
      {...props}
    />
  )
}

export function ToastDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}
