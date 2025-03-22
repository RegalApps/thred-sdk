"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant?: "default" | "outline"
  highlighted?: boolean
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant = "default",
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`bg-black border ${
        highlighted ? "border-[#00FF00]" : "border-[#00FF00]/20"
      } rounded-none p-6 relative ${highlighted ? "shadow-[0_0_20px_rgba(0,255,0,0.15)]" : ""} flex flex-col h-full`}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00FF00] text-black px-4 py-1 text-xs font-bold">
          MOST POPULAR
        </div>
      )}

      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-400">{period}</span>
      </div>

      <p className="text-gray-400 text-sm mb-6">{description}</p>

      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <Check className="h-5 w-5 text-[#00FF00] shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full mt-auto ${
          buttonVariant === "default"
            ? "bg-[#00FF00] text-black hover:bg-[#00FF00]/90"
            : "border-[#00FF00]/30 text-[#00FF00] hover:bg-[#00FF00]/10"
        } rounded-none`}
        variant={buttonVariant}
      >
        {buttonText}
      </Button>
    </div>
  )
}

