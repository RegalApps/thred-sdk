"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Clock, Database, Settings, Mail, Server, HardDrive } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"

// This would normally come from a database or API
const getMigrationData = (id: string) => {
  const migrations = {
    m1: {
      id: "m1",
      source: "STRIPE",
      destination: "QUICKBOOKS",
      progress: 78,
      recordsProcessed: 3240,
      totalRecords: 4150,
      eta: "14 MIN",
      startTime: "2023-05-15T14:30:00Z",
      status: "In Progress",
      avgSpeed: "230 records/min",
      errors: 12,
      warnings: 45,
      lastError: "Rate limit exceeded on Stripe API",
      isFederated: false,
      config: {
        batchSize: 500,
        concurrency: 5,
        retryAttempts: 3,
        includeDeleted: false,
        fieldMappingStrategy: "AI_ASSISTED",
      },
      recentActivity: [
        { time: "15:45:23", message: "Processed batch #65 (500 records)" },
        { time: "15:42:18", message: "Warning: 3 duplicate customer records detected" },
        { time: "15:40:05", message: "Processed batch #64 (500 records)" },
        { time: "15:37:52", message: "Error: Rate limit exceeded, retrying in 30s" },
        { time: "15:35:41", message: "Processed batch #63 (500 records)" },
      ],
      lead: {
        name: "Alex Morgan",
        email: "alex.morgan@thred.ai",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Available",
        role: "Senior Data Engineer",
        team: "Data Integration",
        phone: "+1 (555) 123-4567",
        timezone: "PST (UTC-8)",
        responseTime: "< 30 minutes",
        company: {
          name: "Stripe",
          logo: "/placeholder.svg?height=24&width=24",
          industry: "Payment Processing",
          size: "1000+ employees",
          location: "San Francisco, CA",
        },
      },
    },
    m2: {
      id: "m2",
      source: "HUBSPOT",
      destination: "SALESFORCE",
      progress: 42,
      recordsProcessed: 8320,
      totalRecords: 19800,
      eta: "47 MIN",
      startTime: "2023-05-15T13:15:00Z",
      status: "In Progress",
      avgSpeed: "180 records/min",
      errors: 23,
      warnings: 67,
      lastError: "Invalid field mapping for custom field 'deal_stage'",
      isFederated: false,
      config: {
        batchSize: 250,
        concurrency: 3,
        retryAttempts: 5,
        includeDeleted: true,
        fieldMappingStrategy: "MANUAL",
      },
      recentActivity: [
        { time: "15:45:12", message: "Processed batch #34 (250 records)" },
        { time: "15:43:05", message: "Warning: 5 contacts missing email addresses" },
        { time: "15:41:30", message: "Processed batch #33 (250 records)" },
        { time: "15:39:22", message: "Error: Invalid field mapping, skipping record" },
        { time: "15:37:15", message: "Processed batch #32 (250 records)" },
      ],
      lead: {
        name: "Jamie Chen",
        email: "jamie.chen@thred.ai",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Busy",
        role: "CRM Integration Specialist",
        team: "Data Integration",
        phone: "+1 (555) 234-5678",
        timezone: "EST (UTC-5)",
        responseTime: "1-2 hours",
        company: {
          name: "HubSpot",
          logo: "/placeholder.svg?height=24&width=24",
          industry: "CRM & Marketing",
          size: "5000+ employees",
          location: "Cambridge, MA",
        },
      },
    },
    m3: {
      id: "m3",
      source: "MULTI-SOURCE",
      destination: "DATA LAKE",
      progress: 35,
      recordsProcessed: 15240,
      totalRecords: 43500,
      eta: "1 HR 12 MIN",
      startTime: "2023-05-15T12:00:00Z",
      status: "In Progress",
      avgSpeed: "210 records/min",
      errors: 18,
      warnings: 42,
      lastError: "Schema validation error in MongoDB collection",
      isFederated: true,
      federatedSources: ["MongoDB", "MySQL", "PostgreSQL"],
      config: {
        batchSize: 300,
        concurrency: 4,
        retryAttempts: 3,
        includeDeleted: false,
        fieldMappingStrategy: "AI_ASSISTED",
      },
      recentActivity: [
        { time: "15:45:30", message: "Processed batch #51 (300 records from MongoDB)" },
        { time: "15:43:12", message: "Warning: Schema validation error in MongoDB collection" },
        { time: "15:41:05", message: "Processed batch #50 (300 records from MySQL)" },
        { time: "15:38:58", message: "Processed batch #49 (300 records from PostgreSQL)" },
        { time: "15:36:23", message: "Processed batch #48 (300 records from MongoDB)" },
      ],
      lead: {
        name: "Robin Hayes",
        email: "robin.hayes@thred.ai",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Available",
        role: "Data Integration Architect",
        team: "Enterprise Solutions",
        phone: "+1 (555) 345-6789",
        timezone: "CST (UTC-6)",
        responseTime: "< 1 hour",
        company: {
          name: "MongoDB",
          logo: "/placeholder.svg?height=24&width=24",
          industry: "Database",
          size: "2500+ employees",
          location: "New York, NY",
        },
      },
    },
    m4: {
      id: "m4",
      source: "SHOPIFY",
      destination: "ZENDESK",
      progress: 12,
      recordsProcessed: 1240,
      totalRecords: 10350,
      eta: "1 HR 23 MIN",
      startTime: "2023-05-15T15:00:00Z",
      status: "In Progress",
      avgSpeed: "150 records/min",
      errors: 8,
      warnings: 32,
      lastError: "Connection timeout to Shopify API",
      isFederated: false,
      config: {
        batchSize: 100,
        concurrency: 2,
        retryAttempts: 3,
        includeDeleted: false,
        fieldMappingStrategy: "AI_ASSISTED",
      },
      recentActivity: [
        { time: "15:45:30", message: "Processed batch #13 (100 records)" },
        { time: "15:44:12", message: "Warning: 2 orders with missing customer data" },
        { time: "15:43:05", message: "Processed batch #12 (100 records)" },
        { time: "15:41:58", message: "Error: Connection timeout, retrying" },
        { time: "15:40:23", message: "Processed batch #11 (100 records)" },
      ],
      lead: {
        name: "Taylor Reed",
        email: "taylor.reed@thred.ai",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Away",
        role: "E-commerce Integration Lead",
        team: "Retail Solutions",
        phone: "+1 (555) 345-6789",
        timezone: "CST (UTC-6)",
        responseTime: "Within 24 hours",
        company: {
          name: "Shopify",
          logo: "/placeholder.svg?height=24&width=24",
          industry: "E-commerce",
          size: "10000+ employees",
          location: "Ottawa, Canada",
        },
      },
    },
    m5: {
      id: "m5",
      source: "CRM UNIFIED",
      destination: "MULTI-TARGET",
      progress: 67,
      recordsProcessed: 8750,
      totalRecords: 13050,
      eta: "32 MIN",
      startTime: "2023-05-15T14:15:00Z",
      status: "In Progress",
      avgSpeed: "240 records/min",
      errors: 14,
      warnings: 29,
      lastError: "Data type mismatch in Salesforce custom field",
      isFederated: true,
      federatedSources: ["Salesforce", "HubSpot", "Zoho"],
      federatedDestinations: ["BigQuery", "Snowflake", "Redshift"],
      config: {
        batchSize: 350,
        concurrency: 5,
        retryAttempts: 4,
        includeDeleted: true,
        fieldMappingStrategy: "AI_ASSISTED",
      },
      recentActivity: [
        { time: "15:45:18", message: "Processed batch #25 (350 records to BigQuery)" },
        { time: "15:43:42", message: "Processed batch #24 (350 records to Snowflake)" },
        { time: "15:41:30", message: "Warning: Data type mismatch in Salesforce custom field" },
        { time: "15:39:15", message: "Processed batch #23 (350 records to Redshift)" },
        { time: "15:37:02", message: "Processed batch #22 (350 records to BigQuery)" },
      ],
      lead: {
        name: "Casey Kim",
        email: "casey.kim@thred.ai",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Available",
        role: "Enterprise Integration Specialist",
        team: "Data Solutions",
        phone: "+1 (555) 456-7890",
        timezone: "EST (UTC-5)",
        responseTime: "< 30 minutes",
        company: {
          name: "Salesforce",
          logo: "/placeholder.svg?height=24&width=24",
          industry: "CRM & Cloud",
          size: "50000+ employees",
          location: "San Francisco, CA",
        },
      },
    },
    m6: {
      id: "m6",
      source: "MAILCHIMP",
      destination: "HUBSPOT",
      progress: 100,
      recordsProcessed: 5280,
      totalRecords: 5280,
      eta: "COMPLETED",
      startTime: "2023-05-14T10:15:00Z",
      status: "Completed",
      avgSpeed: "220 records/min",
      errors: 5,
      warnings: 18,
      lastError: "None",
      isFederated: false,
      config: {
        batchSize: 200,
        concurrency: 4,
        retryAttempts: 3,
        includeDeleted: false,
        fieldMappingStrategy: "AI_ASSISTED",
      },
      recentActivity: [
        { time: "11:45:30", message: "Migration completed successfully" },
        { time: "11:44:12", message: "Processed batch #27 (80 records)" },
        { time: "11:42:05", message: "Processed batch #26 (200 records)" },
        { time: "11:40:58", message: "Warning: 3 subscribers with invalid email format" },
        { time: "11:38:23", message: "Processed batch #25 (200 records)" },
      ],
      lead: {
        name: "Jordan Smith",
        email: "jordan.smith@thred.ai",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Offline",
        role: "Marketing Integration Specialist",
        team: "Marketing Tech",
        phone: "+1 (555) 456-7890",
        timezone: "GMT (UTC+0)",
        responseTime: "Next business day",
        company: {
          name: "Mailchimp",
          logo: "/placeholder.svg?height=24&width=24",
          industry: "Email Marketing",
          size: "1200+ employees",
          location: "Atlanta, GA",
        },
      },
    },
  }

  return migrations[id as keyof typeof migrations]
}

// Update the layout to be full-width without sidebar
export default function MigrationDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactType, setContactType] = useState<"message" | "slack">("message")

  const migration = getMigrationData(params.id)

  if (!migration) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-xl mb-4">Migration not found</h1>
        <Link href="/migrations" className="text-[#00FF00] hover:underline">
          ← Back to migrations
        </Link>
      </div>
    )
  }

  const getStatusColor = () => {
    switch (migration.status) {
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
    switch (migration.lead.status) {
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

  const handleContactLead = (type: "message" | "slack") => {
    setContactType(type)
    setContactModalOpen(true)
  }

  const handleConfigureClick = () => {
    console.log("Configure button clicked")
    router.push(`/migrations/${params.id}/configure`)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-[#00FF00]/20 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/migrations" className="text-[#00FF00] hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              BACK
            </Link>
            <span className="text-gray-500 mx-2">|</span>
            <h1 className="text-lg font-bold">MIGRATION DETAILS</h1>
            {migration.isFederated && (
              <>
                <span className="text-gray-500 mx-2">|</span>
                <Badge className="bg-[#6A5ACD] hover:bg-[#6A5ACD]/80 text-white text-xs px-2 py-0.5 flex items-center gap-1">
                  <Database className="h-3 w-3" />
                  FEDERATED
                </Badge>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-[#00FF00]/30 text-[#00FF00] hover:bg-[#00FF00]/10 rounded-none"
              onClick={handleConfigureClick}
            >
              <Settings className="h-4 w-4 mr-1" />
              CONFIGURE
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-[#00FF00]/30 text-[#00FF00] hover:bg-[#00FF00]/10 rounded-none"
            >
              PAUSE
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto w-full">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="flex items-center gap-2 mb-2 md:mb-0">
                <div className="flex items-center">
                  {migration.isFederated ? (
                    <div className="h-10 w-10 rounded-none bg-[#6A5ACD]/20 flex items-center justify-center mr-2">
                      <Database className="h-5 w-5 text-[#6A5ACD]" />
                    </div>
                  ) : (
                    <div className="h-10 w-10 rounded-none bg-white/10 flex items-center justify-center mr-2">
                      {migration.source.charAt(0)}
                    </div>
                  )}
                  <span className="text-lg font-medium">{migration.source}</span>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-500" />
                <div className="flex items-center">
                  {migration.isFederated && migration.federatedDestinations ? (
                    <div className="h-10 w-10 rounded-none bg-[#6A5ACD]/20 flex items-center justify-center mr-2">
                      <Database className="h-5 w-5 text-[#6A5ACD]" />
                    </div>
                  ) : (
                    <div className="h-10 w-10 rounded-none bg-white/10 flex items-center justify-center mr-2">
                      {migration.destination.charAt(0)}
                    </div>
                  )}
                  <span className="text-lg font-medium">{migration.destination}</span>
                </div>
              </div>
              {migration.status !== "In Progress" && (
                <Badge className={`${getStatusColor()} text-white rounded-md font-medium`}>{migration.status}</Badge>
              )}
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-2 text-sm text-gray-400">
                <span>
                  {migration.recordsProcessed.toLocaleString()} of {migration.totalRecords.toLocaleString()} records
                </span>
                <span>{migration.progress}%</span>
              </div>
              <Progress
                value={migration.progress}
                className="h-4 bg-white/10 rounded-none"
                indicatorClassName={migration.isFederated ? "bg-[#6A5ACD] rounded-none" : "bg-[#39FF14] rounded-none"}
              />
            </div>

            {migration.isFederated && (
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {migration.federatedSources && (
                  <Card className="bg-black/30 border border-[#6A5ACD]/30 p-3 rounded-none">
                    <div className="flex items-start gap-2">
                      <Server className="h-4 w-4 text-[#6A5ACD] mt-0.5" />
                      <div>
                        <div className="text-gray-400 mb-1">FEDERATED SOURCES</div>
                        <div className="flex flex-wrap gap-2">
                          {migration.federatedSources.map((source, index) => (
                            <Badge key={index} className="bg-[#6A5ACD]/20 text-[#6A5ACD] hover:bg-[#6A5ACD]/30">
                              {source}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                )}
                {migration.federatedDestinations && (
                  <Card className="bg-black/30 border border-[#6A5ACD]/30 p-3 rounded-none">
                    <div className="flex items-start gap-2">
                      <HardDrive className="h-4 w-4 text-[#6A5ACD] mt-0.5" />
                      <div>
                        <div className="text-gray-400 mb-1">FEDERATED DESTINATIONS</div>
                        <div className="flex flex-wrap gap-2">
                          {migration.federatedDestinations.map((dest, index) => (
                            <Badge key={index} className="bg-[#6A5ACD]/20 text-[#6A5ACD] hover:bg-[#6A5ACD]/30">
                              {dest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm">
              <div className="bg-black/30 border border-[#00FF00]/10 p-3 rounded-none">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-[#00FF00] mt-0.5" />
                  <div>
                    <div className="text-gray-400 mb-1">STARTED</div>
                    <div>{new Date(migration.startTime).toLocaleString()}</div>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 border border-[#00FF00]/10 p-3 rounded-none">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-[#00FF00] mt-0.5" />
                  <div>
                    <div className="text-gray-400 mb-1">ETA</div>
                    <div>{migration.eta}</div>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 border border-[#00FF00]/10 p-3 rounded-none">
                <div className="flex items-start gap-2">
                  <Database className="h-4 w-4 text-[#00FF00] mt-0.5" />
                  <div>
                    <div className="text-gray-400 mb-1">AVERAGE SPEED</div>
                    <div>{migration.avgSpeed}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Migration Lead Card */}
          <Card className="bg-black border border-[#00FF00]/20 p-6 rounded-none mb-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-semibold uppercase">MIGRATION LEAD</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Avatar className="h-16 w-16 rounded-none">
                    <AvatarImage src={migration.lead.avatar} alt={migration.lead.name} />
                    <AvatarFallback className="rounded-none bg-[#00FF00]/10 text-[#00FF00] text-xl">
                      {migration.lead.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-1 -right-1 h-3 w-3 ${getLeadStatusColor()} border border-black`}
                  ></div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">{migration.lead.name}</h3>
                  <p className="text-sm text-gray-400">{migration.lead.role}</p>
                  <p className="text-sm text-gray-400">{migration.lead.team}</p>

                  <div className="flex gap-2 mt-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-none border-[#00FF00]/20 hover:bg-[#00FF00]/10 hover:border-[#00FF00]/30"
                      onClick={() => handleContactLead("message")}
                    >
                      <Mail className="h-4 w-4 text-[#00FF00] mr-1" />
                      EMAIL
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-none border-[#00FF00]/20 hover:bg-[#00FF00]/10 hover:border-[#00FF00]/30"
                      onClick={() => handleContactLead("slack")}
                    >
                      <svg
                        className="h-4 w-4 text-[#00FF00] mr-1"
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
                      SLACK
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-md font-medium mb-2">Contact Information</h4>
                  <div className="text-sm text-gray-400">
                    <p>
                      <strong>Email:</strong> {migration.lead.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {migration.lead.phone}
                    </p>
                    <p>
                      <strong>Timezone:</strong> {migration.lead.timezone}
                    </p>
                    <p>
                      <strong>Response Time:</strong> {migration.lead.responseTime}
                    </p>
                  </div>
                </div>

                <div className="bg-black/30 border border-[#00FF00]/10 p-3 rounded-none">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={migration.lead.company.logo || "/placeholder.svg"}
                      alt={`${migration.lead.company.name} logo`}
                      className="h-6 w-6 rounded-none"
                    />
                    <h4 className="text-md font-medium">{migration.lead.company.name}</h4>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p>
                      <strong>Industry:</strong> {migration.lead.company.industry}
                    </p>
                    <p>
                      <strong>Size:</strong> {migration.lead.company.size}
                    </p>
                    <p>
                      <strong>Location:</strong> {migration.lead.company.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-black border border-[#00FF00]/20 p-6 rounded-none">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-semibold uppercase">RECENT ACTIVITY</h2>
            </div>

            <div className="flex flex-col gap-3">
              {migration.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="text-gray-400">{activity.time}</div>
                  <div>{activity.message}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

