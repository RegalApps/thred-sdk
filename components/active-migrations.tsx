import { Card } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Database } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function ActiveMigrations() {
  const migrations = [
    {
      id: "m1",
      source: "STRIPE",
      destination: "QUICKBOOKS",
      progress: 78,
      recordsProcessed: 3240,
      totalRecords: 4150,
      eta: "14 MIN",
      isFederated: false,
    },
    {
      id: "m3",
      source: "MULTI-SOURCE",
      destination: "DATA LAKE",
      progress: 35,
      recordsProcessed: 15240,
      totalRecords: 43500,
      eta: "1 HR 12 MIN",
      isFederated: true,
    },
    {
      id: "m2",
      source: "HUBSPOT",
      destination: "SALESFORCE",
      progress: 42,
      recordsProcessed: 8320,
      totalRecords: 19800,
      eta: "47 MIN",
      isFederated: false,
    },
  ]

  return (
    <Card className="bg-black border border-[#00FF00]/20 p-6 rounded-none">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg uppercase">ACTIVE MIGRATIONS</h2>
        </div>
        <Link href="/migrations" className="text-xs text-[#00FF00] hover:underline flex items-center">
          VIEW ALL <ExternalLink className="h-3 w-3 ml-1" />
        </Link>
      </div>

      <div className="space-y-6 font-mono">
        {migrations.map((migration) => (
          <Link
            key={migration.id}
            href={`/migrations/${migration.id}`}
            className="block border border-transparent hover:border-[#00FF00]/30 p-2 -mx-2 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2">
              <span>{migration.source}</span>
              <ArrowRight className="h-3 w-3 text-gray-500" />
              <span>{migration.destination}</span>
              {migration.isFederated && (
                <Badge className="bg-[#6A5ACD] hover:bg-[#6A5ACD]/80 text-white text-[0.6rem] px-1.5 py-0.25 ml-2 flex items-center gap-1">
                  <Database className="h-2 w-2" />
                  FEDERATED
                </Badge>
              )}
              <span className="ml-auto text-[#00FF00]">{migration.progress}%</span>
            </div>
            <div className="w-full bg-gray-900 h-3 rounded-none">
              <div
                className={`${migration.isFederated ? "bg-[#6A5ACD]" : "bg-[#00FF00]"} h-full rounded-none transition-all`}
                style={{ width: `${migration.progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>
                {migration.recordsProcessed.toLocaleString()}/{migration.totalRecords.toLocaleString()} RECORDS
              </span>
              <span>ETA: {migration.eta}</span>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  )
}

