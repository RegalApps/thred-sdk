import { Card } from "@/components/ui/card"
import { Activity } from "lucide-react"

export default function PipelineDeals() {
  return (
    <Card className="bg-black border border-[#00FF00]/20 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="h-5 w-5 text-[#00FF00]" />
        <h2 className="text-lg uppercase">5 DEALS IN PIPELINE</h2>
      </div>

      <div className="space-y-4 font-mono">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span>MIKE CARR</span>
            <span className="text-[#00FF00]">$7000</span>
          </div>
          <div className="text-sm text-gray-500">STATUS: HOT</div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span>EMILY JOHANSON</span>
            <span className="text-gray-500">$3000</span>
          </div>
          <div className="text-sm text-gray-500">LAST CONTACTED: 2 MONTHS AGO</div>
        </div>

        <div className="text-sm text-[#00FF00] mt-4">{">"} AGENT NOTIFIED SEAN 4 HOT & 1 COLD BY 7:00 PM</div>
      </div>
    </Card>
  )
}

