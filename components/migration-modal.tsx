"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Terminal, Loader2, Database, Bot } from "lucide-react"

interface MigrationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MigrationModal({ open, onOpenChange }: MigrationModalProps) {
  const [input, setInput] = useState("")
  const [processing, setProcessing] = useState(false)
  const [conversation, setConversation] = useState<Array<{ type: "user" | "system"; message: string }>>([
    {
      type: "system",
      message:
        "Hello! I'll help you set up a data migration. Please describe what you'd like to migrate in natural language. For example: \"I want to migrate my customer data from HubSpot to Salesforce\"",
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || processing) return

    // Add user message to conversation
    setConversation((prev) => [...prev, { type: "user", message: input }])
    setProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("hubspot") && input.toLowerCase().includes("salesforce")) {
        response =
          "I've detected you want to migrate from HubSpot to Salesforce. I'll set up a migration for your customer data. Would you like to include deals and activities as well?"
      } else if (input.toLowerCase().includes("stripe") && input.toLowerCase().includes("quickbooks")) {
        response =
          "I'll set up a migration from Stripe to QuickBooks. This will include customer data, invoices, and payment records. Would you like to specify a date range for the migration?"
      } else if (input.toLowerCase().includes("shopify") && input.toLowerCase().includes("zendesk")) {
        response =
          "I'll prepare a migration from Shopify to Zendesk. This will include customer profiles and order history. Would you like to map any custom fields between the systems?"
      } else {
        response =
          'I understand you want to set up a migration. Could you please specify the source and destination systems? For example: "from HubSpot to Salesforce"'
      }

      setConversation((prev) => [...prev, { type: "system", message: response }])
      setProcessing(false)
      setInput("")
    }, 1500)
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [conversation])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-black border border-[#00FF00]/20 p-0 max-h-[80vh] flex flex-col rounded-none">
        <DialogHeader className="border-b border-[#00FF00]/20 p-4">
          <DialogTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-[#00FF00]" />
            <span>NEW_MIGRATION</span>
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {conversation.map((message, index) => (
            <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-3 rounded-none ${
                  message.type === "user"
                    ? "bg-[#00FF00]/10 border border-[#00FF00]/30"
                    : "bg-black/30 border border-[#00FF00]/10"
                }`}
              >
                {message.type === "system" && (
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="h-4 w-4 text-[#00FF00]" />
                    <span className="text-xs text-[#00FF00]">THRED_AI ASSISTANT</span>
                  </div>
                )}
                <div className="text-sm whitespace-pre-wrap">{message.message}</div>
              </div>
            </div>
          ))}
          {processing && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-none bg-black/30 border border-[#00FF00]/10">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="h-4 w-4 text-[#00FF00]" />
                  <span className="text-xs text-[#00FF00]">THRED_AI ASSISTANT</span>
                </div>
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 text-[#00FF00] animate-spin" />
                  <span className="text-sm">Processing your request...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-[#00FF00]/20 p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your migration needs in natural language..."
              className="flex-1 min-h-[60px] max-h-[120px] bg-black border border-[#00FF00]/30 focus:border-[#00FF00]/60 focus:ring-0 resize-none rounded-none"
            />
            <Button
              type="submit"
              disabled={!input.trim() || processing}
              className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90 self-end px-3 h-10 flex items-center justify-center rounded-none"
            >
              GO
            </Button>
          </form>

          <div className="mt-4">
            <div className="text-xs text-gray-500 mb-2">Quick suggestions:</div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setInput("I want to migrate customers from HubSpot to Salesforce")}
                className="text-xs bg-black/30 border border-[#00FF00]/20 px-2 py-1 rounded-none hover:border-[#00FF00]/40"
              >
                <span className="flex items-center gap-1">
                  <Database className="h-3 w-3" />
                  HubSpot → Salesforce
                </span>
              </button>
              <button
                onClick={() => setInput("Move my payment data from Stripe to QuickBooks")}
                className="text-xs bg-black/30 border border-[#00FF00]/20 px-2 py-1 rounded-none hover:border-[#00FF00]/40"
              >
                <span className="flex items-center gap-1">
                  <Database className="h-3 w-3" />
                  Stripe → QuickBooks
                </span>
              </button>
              <button
                onClick={() => setInput("Transfer customer support tickets from Zendesk to Freshdesk")}
                className="text-xs bg-black/30 border border-[#00FF00]/20 px-2 py-1 rounded-none hover:border-[#00FF00]/40"
              >
                <span className="flex items-center gap-1">
                  <Database className="h-3 w-3" />
                  Zendesk → Freshdesk
                </span>
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

