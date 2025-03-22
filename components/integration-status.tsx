import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function IntegrationStatus() {
  const integrations = [
    { name: "HUBSPOT", status: "CONNECTED", type: "CRM" },
    { name: "SALESFORCE", status: "CONNECTED", type: "CRM" },
    { name: "STRIPE", status: "CONNECTED", type: "PAYMENTS" },
    { name: "QUICKBOOKS", status: "CONNECTED", type: "ACCOUNTING" },
    { name: "ZENDESK", status: "CONNECTED", type: "SUPPORT" },
    { name: "SHOPIFY", status: "CONNECTED", type: "E-COMMERCE" },
    { name: "MAILCHIMP", status: "DISCONNECTED", type: "MARKETING" },
  ]

  return (
    <Card className="bg-black border border-[#00FF00]/20 p-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-lg uppercase">INTEGRATION STATUS</h2>
      </div>

      <div className="space-y-2 font-mono text-sm">
        {integrations.map((integration) => (
          <div key={integration.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {integration.status === "CONNECTED" ? (
                <Check className="h-3 w-3 text-[#00FF00]" />
              ) : (
                <X className="h-3 w-3 text-red-500" />
              )}
              <span>{integration.name}</span>
            </div>
            <span className="text-gray-500">{integration.type}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

