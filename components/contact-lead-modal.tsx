"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Mail, AlertCircle, CheckCircle } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface ContactLeadModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  lead: {
    name: string
    email: string
    contactType: "message" | "slack"
  } | null
}

export function ContactLeadModal({ open, onOpenChange, lead }: ContactLeadModalProps) {
  const [message, setMessage] = useState("")
  const [issueType, setIssueType] = useState("permissions")
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  if (!lead) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    // Simulate sending
    setTimeout(() => {
      setSending(false)
      setSent(true)

      // Close after showing success
      setTimeout(() => {
        onOpenChange(false)
        // Reset state after closing
        setTimeout(() => {
          setMessage("")
          setSent(false)
          setIssueType("permissions")
        }, 300)
      }, 1500)
    }, 1000)
  }

  const getIssueTypeLabel = () => {
    switch (issueType) {
      case "permissions":
        return "Permissions Issue"
      case "error":
        return "Error Fix Required"
      case "logs":
        return "Missing Logs"
      case "schema":
        return "Schema Mismatch"
      case "other":
        return "Other Issue"
      default:
        return "Issue"
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-black border border-[#00FF00]/20 p-0 rounded-none">
        <DialogHeader className="border-b border-[#00FF00]/20 p-4">
          <DialogTitle className="flex items-center gap-2">
            {lead.contactType === "message" ? (
              <Mail className="h-5 w-5 text-[#00FF00]" />
            ) : (
              <svg
                className="h-5 w-5 text-[#00FF00]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 10C13 11.1046 13.8954 12 15 12C16.1046 12 17 11.1046 17 10V5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5V10ZM5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12H10C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8H5ZM15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17H20C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13H15ZM10 22C8.89543 22 8 21.1046 8 20L8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15V20C12 21.1046 11.1046 22 10 22ZM8 5C8 3.89543 8.89543 3 10 3C11.1046 3 12 3.89543 12 5V7H10C8.89543 7 8 6.10457 8 5ZM3 15C3 16.1046 3.89543 17 5 17C6.10457 17 7 16.1046 7 15V13H5C3.89543 13 3 13.8954 3 15ZM17 20C17 21.1046 16.1046 22 15 22C13.8954 22 13 21.1046 13 20V18H15C16.1046 18 17 18.8954 17 20ZM22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10V12H20C21.1046 12 22 11.1046 22 10Z"
                  fill="currentColor"
                />
              </svg>
            )}
            <span>
              {lead.contactType === "message" ? "EMAIL" : "SLACK"} {lead.name.toUpperCase()}
            </span>
          </DialogTitle>
        </DialogHeader>

        {sent ? (
          <div className="p-6 flex flex-col items-center justify-center">
            <CheckCircle className="h-12 w-12 text-[#00FF00] mb-4" />
            <p className="text-center mb-2">Your message has been sent to {lead.name}.</p>
            <p className="text-xs text-gray-400 text-center">
              They will respond to your {getIssueTypeLabel().toLowerCase()} as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="p-4">
              <div className="mb-4">
                <Label className="text-sm mb-2 block">ISSUE TYPE</Label>
                <RadioGroup
                  value={issueType}
                  onValueChange={setIssueType}
                  className="grid grid-cols-1 md:grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="permissions" id="permissions" className="text-[#00FF00]" />
                    <Label htmlFor="permissions" className="text-sm">
                      Permissions Issue
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="error" id="error" className="text-[#00FF00]" />
                    <Label htmlFor="error" className="text-sm">
                      Error Fix Required
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="logs" id="logs" className="text-[#00FF00]" />
                    <Label htmlFor="logs" className="text-sm">
                      Missing Logs
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="schema" id="schema" className="text-[#00FF00]" />
                    <Label htmlFor="schema" className="text-sm">
                      Schema Mismatch
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 md:col-span-2">
                    <RadioGroupItem value="other" id="other" className="text-[#00FF00]" />
                    <Label htmlFor="other" className="text-sm">
                      Other Issue
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mb-4">
                <Label className="text-sm mb-2 block">MESSAGE</Label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Describe the ${getIssueTypeLabel().toLowerCase()} you're experiencing...`}
                  className="min-h-[120px] bg-black border border-[#00FF00]/30 focus:border-[#00FF00]/60 focus:ring-0 resize-none rounded-none"
                  required
                />
              </div>

              <div className="flex items-start gap-2 text-xs text-gray-400 bg-[#00FF00]/5 p-2 border border-[#00FF00]/10">
                <AlertCircle className="h-4 w-4 text-[#00FF00] mt-0.5 flex-shrink-0" />
                <div>
                  <p>
                    This will send a {lead.contactType === "message" ? "email" : "Slack notification"} directly to{" "}
                    {lead.name}.
                  </p>
                  <p className="mt-1">For urgent issues, consider using the "email" option for faster response.</p>
                </div>
              </div>
            </div>

            <DialogFooter className="border-t border-[#00FF00]/20 p-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="border-[#00FF00]/30 text-white hover:bg-transparent hover:text-[#00FF00] rounded-none"
              >
                CANCEL
              </Button>
              <Button
                type="submit"
                disabled={sending || !message.trim()}
                className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90 rounded-none"
              >
                {sending ? "SENDING..." : "SEND"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

