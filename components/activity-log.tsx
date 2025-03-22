import { History } from "lucide-react"

export default function ActivityLog() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <History className="h-5 w-5 text-[#00FF00]" />
        <h2 className="text-lg uppercase">ACTIVITY</h2>
      </div>

      <div className="font-mono space-y-4 text-sm">
        <div className="bg-black border border-[#00FF00]/20 p-4 rounded-lg">
          <div className="flex items-start gap-2">
            <span className="text-[#00FF00]">{">"}</span>
            <div className="space-y-2">
              <span>
                AGENT EMAILED COMMISSION STATEMENT AND PERFORMANCE REPORT WITH ACTION STEPS TO 2X EARNINGS FOR EOQ
              </span>
            </div>
          </div>
        </div>

        <div className="bg-black border border-[#00FF00]/20 p-4 rounded-lg">
          <div className="flex items-start gap-2">
            <span className="text-[#00FF00]">{">"}</span>
            <div className="space-y-2">
              <span>YOU HAVE 2 STRONG BUYING INTENT EMAILS FROM JENNY (HOT) AND 1 VM FROM JOHN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

