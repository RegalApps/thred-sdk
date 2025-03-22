"use client"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Mail, Database } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface MigrationProgressProps {
  source: string
  destination: string
  progress: number
  status: "In Progress" | "Completed" | "Failed" | "Paused"
  recordsProcessed: number
  totalRecords: number
  isFederated?: boolean
  federatedSources?: string[]
  federatedDestinations?: string[]
  lead?: {
    name: string
    email: string
    avatar?: string
    status: "Available" | "Busy" | "Away" | "Offline"
    company?: {
      name: string
      logo?: string
    }
  }
  onContactLead?: (type: "message" | "slack") => void
  className?: string
}

export default function MigrationProgress({
  source,
  destination,
  progress,
  status,
  recordsProcessed,
  totalRecords,
  isFederated,
  federatedSources,
  federatedDestinations,
  lead,
  onContactLead,
  className,
}: MigrationProgressProps) {
  const getStatusColor = () => {
    switch (status) {
      case "In Progress":
        return "hidden" // Hide the badge completely
      case "Completed":
        return "bg-green-500"
      case "Failed":
        return "bg-red-500"
      case "Paused":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getLeadStatusColor = () => {
    switch (lead?.status) {
      case "Available":
        return "bg-green-500"
      case "Busy":
        return "bg-red-500"
      case "Away":
        return "bg-yellow-500"
      case "Offline":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className={cn("bg-transparent border-0 p-4 hover:bg-transparent transition-all", className)}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <div className="flex items-center">
            {isFederated ? (
              <div className="h-8 w-8 rounded-none bg-[#6A5ACD]/20 flex items-center justify-center mr-2">
                <Database className="h-4 w-4 text-[#6A5ACD]" />
              </div>
            ) : (
              <div className="h-8 w-8 rounded-none bg-white/10 flex items-center justify-center mr-2">
                {source.charAt(0)}
              </div>
            )}
            <span className="text-sm font-medium">{source}</span>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-500" />
          <div className="flex items-center">
            {isFederated && federatedDestinations ? (
              <div className="h-8 w-8 rounded-none bg-[#6A5ACD]/20 flex items-center justify-center mr-2">
                <Database className="h-4 w-4 text-[#6A5ACD]" />
              </div>
            ) : (
              <div className="h-8 w-8 rounded-none bg-white/10 flex items-center justify-center mr-2">
                {destination.charAt(0)}
              </div>
            )}
            <span className="text-sm font-medium">{destination}</span>
          </div>
        </div>
        {status !== "In Progress" && (
          <Badge className={`${getStatusColor()} text-white rounded-md font-medium`}>{status}</Badge>
        )}
      </div>

      <div className="mb-2">
        <div className="flex justify-between mb-1 text-xs text-gray-400">
          <span>
            {recordsProcessed.toLocaleString()} of {totalRecords.toLocaleString()} records
          </span>
          <span>{progress}%</span>
        </div>
        <Progress
          value={progress}
          className="h-3 bg-white/10 rounded-none"
          indicatorClassName={isFederated ? "bg-[#6A5ACD] rounded-none" : "bg-[#39FF14] rounded-none"}
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-xs text-gray-400">
          {status === "In Progress" ? "Started 2 hours ago" : "Completed 1 day ago"}
        </div>
        <div className="text-xs text-[#39FF14] hover:underline flex items-center">
          View details <ExternalLink className="h-3 w-3 ml-1" />
        </div>
      </div>

      {lead && (
        <div className="mt-4 pt-4 border-t border-[#00FF00]/10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Avatar className="h-8 w-8 rounded-none">
                  <AvatarImage src={lead.avatar} alt={lead.name} />
                  <AvatarFallback className="rounded-none bg-[#00FF00]/10 text-[#00FF00]">
                    {lead.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`absolute -bottom-1 -right-1 h-2.5 w-2.5 ${getLeadStatusColor()} border border-black`}
                ></div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <div className="text-sm font-medium">{lead.name}</div>
                  {lead.company && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="bg-black/30 border border-[#00FF00]/20 px-1 py-0.5 text-xs">
                            {lead.company.name}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Company: {lead.company.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <div className="text-xs text-gray-400">Migration Lead</div>
              </div>
            </div>

            <TooltipProvider>
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0 rounded-none border-[#00FF00]/20 hover:bg-[#00FF00]/10 hover:border-[#00FF00]/30"
                      onClick={(e) => {
                        e.preventDefault()
                        onContactLead && onContactLead("message")
                      }}
                    >
                      <Mail className="h-4 w-4 text-[#00FF00]" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send an email</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0 rounded-none border-[#00FF00]/20 hover:bg-[#00FF00]/10 hover:border-[#00FF00]/30"
                      onClick={(e) => {
                        e.preventDefault()
                        onContactLead && onContactLead("slack")
                      }}
                    >
                      <svg
                        className="h-4 w-4 text-[#00FF00]"
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
                      <span className="sr-only">Slack</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ping on Slack</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      )}
    </div>
  )
}

