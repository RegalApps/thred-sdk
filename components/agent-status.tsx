import { AlertCircle } from "lucide-react"

export default function AgentStatus() {
  return (
    <div className="mb-8">
      <div className="inline-block bg-white/10 px-4 py-2 rounded-md mb-4">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-[#00FF00]" />
          <span className="uppercase font-bold">YOUR THRED AGENT IS WORKING</span>
        </div>
      </div>

      <div className="font-mono space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <span className="text-[#00FF00]">{">"}</span>
          <span>AGENT PROCESSED ALL DEALS 4/4 BY 7:00 PM</span>
        </div>
      </div>
    </div>
  )
}

