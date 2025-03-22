import * as React from "react"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  indicatorClassName?: string
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, indicatorClassName, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        className={cn("relative h-4 w-full overflow-hidden rounded-none bg-primary/20", className)}
        {...props}
      >
        <div
          className={cn("h-full w-full flex-1 transition-all", indicatorClassName)}
          style={{
            transform: `translateX(-${100 - (value || 0)}%)`,
            background: "linear-gradient(90deg, #00FF00 0%, #7FFF7F 85%, #F0FFF0 100%)",
            boxShadow: "0 0 10px rgba(0, 255, 0, 0.5)",
          }}
        />
      </div>
    )
  },
)
Progress.displayName = "Progress"

export { Progress }

