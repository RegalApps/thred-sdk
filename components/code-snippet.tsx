"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CodeSnippetProps {
  code: string
  language?: string
}

export default function CodeSnippet({ code, language = "jsx" }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <div className="absolute right-2 top-2">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
        >
          {copied ? <Check className="h-4 w-4 text-[#00FF00]" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm overflow-x-auto">
        <pre className="text-gray-300">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  )
}

