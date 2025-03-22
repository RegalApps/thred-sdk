"use client"

import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-black border border-[#00FF00]/20 rounded-none p-6 hover:border-[#00FF00]/40 transition-all">
      <div className="h-10 w-10 rounded-none bg-[#00FF00]/10 text-[#00FF00] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

