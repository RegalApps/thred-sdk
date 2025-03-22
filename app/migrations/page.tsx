"use client"

import MigrationProgress from "@/components/migration-progress"
import Link from "next/link"
import { useState } from "react"
import { ContactLeadModal } from "@/components/contact-lead-modal"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function MigrationsPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [selectedLead, setSelectedLead] = useState<{
    name: string
    email: string
    contactType: "message" | "email"
  } | null>(null)

  const migrations = [
    {
      id: "m1",
      source: "Stripe",
      destination: "QuickBooks",
      progress: 78,
      status: "In Progress",
      recordsProcessed: 3240,
      totalRecords: 4150,
      isFederated: false,
      lead: {
        name: "Alex Morgan",
        email: "alex.morgan@thred.ai",
        avatar: "/placeholder.svg?height=32&width=32",
        status: "Available",
        company: {
          name: "Stripe",
          logo: "/placeholder.svg?height=24&width=24",
        },
      },
    },
    {
      id: "m2",
      source: "HubSpot",
      destination: "Salesforce",
      progress: 42,
      status: "In Progress",
      recordsProcessed: 8320,
      totalRecords: 19800,
      isFederated: false,
      lead: {
        name: "Jamie Chen",
        email: "jamie.chen@thred.ai",
        avatar: "/placeholder.svg?height=32&width=32",
        status: "Busy",
        company: {
          name: "HubSpot",
          logo: "/placeholder.svg?height=24&width=24",
        },
      },
    },
    {
      id: "m3",
      source: "Multi-Source",
      destination: "Data Lake",
      progress: 35,
      status: "In Progress",
      recordsProcessed: 15240,
      totalRecords: 43500,
      isFederated: true,
      federatedSources: ["MongoDB", "MySQL", "PostgreSQL"],
      lead: {
        name: "Robin Hayes",
        email: "robin.hayes@thred.ai",
        avatar: "/placeholder.svg?height=32&width=32",
        status: "Available",
        company: {
          name: "MongoDB",
          logo: "/placeholder.svg?height=24&width=24",
        },
      },
    },
    {
      id: "m4",
      source: "Shopify",
      destination: "Zendesk",
      progress: 12,
      status: "In Progress",
      recordsProcessed: 1240,
      totalRecords: 10350,
      isFederated: false,
      lead: {
        name: "Taylor Reed",
        email: "taylor.reed@thred.ai",
        avatar: "/placeholder.svg?height=32&width=32",
        status: "Away",
        company: {
          name: "Shopify",
          logo: "/placeholder.svg?height=24&width=24",
        },
      },
    },
    {
      id: "m5",
      source: "CRM Unified",
      destination: "Multi-Target",
      progress: 67,
      status: "In Progress",
      recordsProcessed: 8750,
      totalRecords: 13050,
      isFederated: true,
      federatedSources: ["Salesforce", "HubSpot", "Zoho"],
      federatedDestinations: ["BigQuery", "Snowflake", "Redshift"],
      lead: {
        name: "Casey Kim",
        email: "casey.kim@thred.ai",
        avatar: "/placeholder.svg?height=32&width=32",
        status: "Available",
        company: {
          name: "Salesforce",
          logo: "/placeholder.svg?height=24&width=24",
        },
      },
    },
    {
      id: "m6",
      source: "Mailchimp",
      destination: "HubSpot",
      progress: 100,
      status: "Completed",
      recordsProcessed: 5280,
      totalRecords: 5280,
      isFederated: false,
      lead: {
        name: "Jordan Smith",
        email: "jordan.smith@thred.ai",
        avatar: "/placeholder.svg?height=32&width=32",
        status: "Offline",
        company: {
          name: "Mailchimp",
          logo: "/placeholder.svg?height=24&width=24",
        },
      },
    },
  ]

  const handleContactLead = (migrationId: string, type: "message" | "slack") => {
    const migration = migrations.find((m) => m.id === migrationId)
    if (migration && migration.lead) {
      setSelectedLead({
        name: migration.lead.name,
        email: migration.lead.email,
        contactType: type,
      })
      setContactModalOpen(true)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-[#00FF00]/20 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">MIGRATIONS</h1>
        </div>
      </header>

      <main className="flex-1 overflow-auto w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-0 w-full">
            {migrations.map((migration) => (
              <Link
                key={migration.id}
                href={`/migrations/${migration.id}`}
                className="block w-full border-b border-[#00FF00]/20 last:border-b-0 hover:bg-[#00FF00]/5 transition-colors cursor-pointer"
              >
                <div className="relative">
                  {migration.isFederated && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="absolute right-4 top-4 z-10">
                            <Badge className="bg-[#6A5ACD] hover:bg-[#6A5ACD]/80 text-white text-xs px-2 py-0.5 flex items-center gap-1">
                              <Info className="h-3 w-3" />
                              FEDERATED
                            </Badge>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="left">
                          <div className="text-xs">
                            {migration.federatedSources && (
                              <div className="mb-1">
                                <span className="font-bold">Sources:</span> {migration.federatedSources.join(", ")}
                              </div>
                            )}
                            {migration.federatedDestinations && (
                              <div>
                                <span className="font-bold">Destinations:</span>{" "}
                                {migration.federatedDestinations.join(", ")}
                              </div>
                            )}
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  <MigrationProgress
                    source={migration.source}
                    destination={migration.destination}
                    progress={migration.progress}
                    status={migration.status as any}
                    recordsProcessed={migration.recordsProcessed}
                    totalRecords={migration.totalRecords}
                    lead={migration.lead as any}
                    onContactLead={(type) => handleContactLead(migration.id, type)}
                    className="w-full"
                    isFederated={migration.isFederated}
                    federatedSources={migration.federatedSources}
                    federatedDestinations={migration.federatedDestinations}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <ContactLeadModal open={contactModalOpen} onOpenChange={setContactModalOpen} lead={selectedLead} />
    </div>
  )
}

