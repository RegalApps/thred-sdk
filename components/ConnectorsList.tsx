import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const connectors = [
  {
    name: "HubSpot",
    category: "CRM",
    features: ["Contact Import", "Deal Sync", "Custom Fields"],
    popular: true,
  },
  {
    name: "Salesforce",
    category: "CRM",
    features: ["Lead Import", "Opportunity Sync", "Custom Objects"],
    popular: true,
  },
  {
    name: "Stripe",
    category: "Payments",
    features: ["Customer Import", "Payment History", "Subscription Data"],
    popular: true,
  },
  {
    name: "QuickBooks",
    category: "Accounting",
    features: ["Customer Import", "Invoice Sync", "Payment Records"],
    popular: false,
  },
  {
    name: "Zendesk",
    category: "Support",
    features: ["Ticket Import", "User Sync", "Conversation History"],
    popular: false,
  },
  {
    name: "Shopify",
    category: "E-commerce",
    features: ["Order Import", "Customer Sync", "Product Catalog"],
    popular: true,
  },
]

export default function ConnectorsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {connectors.map((connector) => (
        <Card
          key={connector.name}
          className="bg-black border border-green-500/20 p-6 hover:border-green-500/40 transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-lg font-medium">{connector.name}</h4>
              <p className="text-gray-400 text-sm">{connector.category}</p>
            </div>
            {connector.popular && (
              <Badge className="bg-[#39FF14]/20 text-[#39FF14] hover:bg-[#39FF14]/30">Popular</Badge>
            )}
          </div>
          <ul className="space-y-2">
            {connector.features.map((feature) => (
              <li key={feature} className="flex items-center text-sm text-gray-300">
                <Check className="h-4 w-4 text-[#39FF14] mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  )
}

