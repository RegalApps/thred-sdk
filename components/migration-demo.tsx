"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Check, ArrowRight } from "lucide-react"

export default function MigrationDemo() {
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showDemo, setShowDemo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDemo(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!showDemo) return

    if (step === 0) {
      const timer = setTimeout(() => {
        setStep(1)
      }, 2000)
      return () => clearTimeout(timer)
    }

    if (step === 1) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => setStep(2), 500)
            return 100
          }
          return prev + 1
        })
      }, 50)
      return () => clearInterval(interval)
    }
  }, [step, showDemo])

  if (!showDemo) {
    return (
      <div className="w-full h-[400px] bg-black/30 border border-[#00FF00]/20 rounded-none flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-[#00FF00] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="w-full bg-black/30 border border-[#00FF00]/20 rounded-none p-6 font-mono">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-200">MIGRATION_DEMO</span>
        </div>

        {step >= 0 && (
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
              <span className="text-[#00FF00]">1</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-white">CONNECT TO SOURCE</span>
                <Check className="h-4 w-4 text-[#00FF00]" />
              </div>
              <div className="text-xs text-white">ZENDESK AUTHENTICATION SUCCESSFUL</div>
            </div>
          </div>
        )}

        {step >= 1 && (
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
              <span className="text-[#00FF00]">2</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-white">MIGRATING DATA</span>
                {step > 1 ? <Check className="h-4 w-4 text-[#00FF00]" /> : <span>{progress}%</span>}
              </div>
              <Progress value={progress} className="h-2 mt-2 bg-black" indicatorClassName="bg-[#00FF00]" />
            </div>
          </div>
        )}

        {step >= 2 && (
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
              <span className="text-[#00FF00]">3</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-white">MIGRATION COMPLETE</span>
                <Check className="h-4 w-4 text-[#00FF00]" />
              </div>
              <div className="text-xs text-white">ALL DATA SUCCESSFULLY MIGRATED</div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-[#00FF00]/20 pt-4">
        <div className="text-sm mb-4">MIGRATION SUMMARY:</div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>USERS:</span>
            <span className="text-[#00FF00]">247</span>
          </div>
          <div className="flex justify-between">
            <span>TICKETS:</span>
            <span className="text-[#00FF00]">1,893</span>
          </div>
          <div className="flex justify-between">
            <span>WORKFLOWS:</span>
            <span className="text-[#00FF00]">12</span>
          </div>
          <div className="flex justify-between">
            <span>CUSTOM FIELDS:</span>
            <span className="text-[#00FF00]">38</span>
          </div>
          <div className="flex justify-between">
            <span>TIME SAVED:</span>
            <span className="text-[#00FF00]">~120 HOURS</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#00FF00]/20 pt-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-[#00FF00] animate-pulse"></div>
          <span className="text-xs">ZENDESK</span>
        </div>
        <ArrowRight className="h-4 w-4 text-[#00FF00]" />
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-[#00FF00] animate-pulse"></div>
          <span className="text-xs">YOUR PLATFORM</span>
        </div>
      </div>
    </div>
  )
}

