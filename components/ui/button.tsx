"use client"

import Link from "next/link"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-none px-3 text-xs",
        lg: "h-10 rounded-none px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onClick, type = "button", href, ...props }, ref) => {
    const router = useRouter()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      // Ensure the button is not disabled
      if (props.disabled) {
        event.preventDefault()
        return
      }

      // Navigate to /documentation when clicked using Next.js router
      if (!href && !asChild) {
        router.push("/documentation")
      }

      // Call the original onClick handler if provided
      if (onClick) {
        onClick(event)
      }
    }

    // If href is provided, use Link component
    if (href) {
      return (
        <Link href={href} className={cn(buttonVariants({ variant, size, className }))}>
          {props.children}
        </Link>
      )
    }

    // Otherwise use the original implementation
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        type={type}
        disabled={props.disabled}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

