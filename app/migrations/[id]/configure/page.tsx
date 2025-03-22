"use client"

import { useState } from "react"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Update the layout to be full-width without sidebar
export default function ConfigureMigrationPage({ params }: { params: { id: string } }) {
  const [batchSize, setBatchSize] = useState(500)
  const [concurrency, setConcurrency] = useState(5)
  const [retryAttempts, setRetryAttempts] = useState(3)
  const [includeDeleted, setIncludeDeleted] = useState(false)
  const [fieldMappingStrategy, setFieldMappingStrategy] = useState("AI_ASSISTED")
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setSaved(true)

      // Reset saved status after 3 seconds
      setTimeout(() => {
        setSaved(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-[#00FF00]/20 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href={`/migrations/${params.id}`} className="text-[#00FF00] hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              BACK TO MIGRATION
            </Link>
            <span className="text-gray-500 mx-2">|</span>
            <h1 className="text-lg font-bold">CONFIGURE MIGRATION</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="default"
              size="sm"
              className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90 rounded-none"
              onClick={handleSave}
              disabled={isSaving}
            >
              <Save className="h-4 w-4 mr-1" />
              {isSaving ? "SAVING..." : saved ? "SAVED!" : "SAVE CHANGES"}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto w-full">
        <div className="container mx-auto px-4 py-6">
          <Card className="bg-black border border-[#00FF00]/20 p-6 rounded-none mb-6">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-lg uppercase">PERFORMANCE SETTINGS</h2>
            </div>

            <div className="space-y-6 font-mono">
              <div>
                <div className="flex justify-between mb-2">
                  <div className="text-sm">BATCH SIZE</div>
                  <div className="text-xs text-[#00FF00]">{batchSize} RECORDS</div>
                </div>
                <Slider
                  value={[batchSize]}
                  min={50}
                  max={1000}
                  step={50}
                  className="w-full"
                  onValueChange={(value) => setBatchSize(value[0])}
                />
                <div className="text-xs text-gray-500 mt-1">RECORDS PROCESSED PER API CALL</div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <div className="text-sm">CONCURRENCY</div>
                  <div className="text-xs text-[#00FF00]">{concurrency} THREADS</div>
                </div>
                <Slider
                  value={[concurrency]}
                  min={1}
                  max={10}
                  step={1}
                  className="w-full"
                  onValueChange={(value) => setConcurrency(value[0])}
                />
                <div className="text-xs text-gray-500 mt-1">PARALLEL PROCESSING THREADS</div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <div className="text-sm">RETRY ATTEMPTS</div>
                  <div className="text-xs text-[#00FF00]">{retryAttempts} RETRIES</div>
                </div>
                <Slider
                  value={[retryAttempts]}
                  min={0}
                  max={10}
                  step={1}
                  className="w-full"
                  onValueChange={(value) => setRetryAttempts(value[0])}
                />
                <div className="text-xs text-gray-500 mt-1">FAILED API CALL RETRY COUNT</div>
              </div>
            </div>
          </Card>

          <Card className="bg-black border border-[#00FF00]/20 p-6 rounded-none mb-6">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-lg uppercase">DATA SETTINGS</h2>
            </div>

            <div className="space-y-6 font-mono">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm">INCLUDE DELETED RECORDS</div>
                  <div className="text-xs text-gray-500">MIGRATE RECORDS MARKED AS DELETED IN SOURCE</div>
                </div>
                <Switch checked={includeDeleted} onCheckedChange={setIncludeDeleted} />
              </div>

              <div>
                <div className="text-sm mb-3">FIELD MAPPING STRATEGY</div>
                <RadioGroup value={fieldMappingStrategy} onValueChange={setFieldMappingStrategy} className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="AI_ASSISTED" id="ai_assisted" className="mt-1" />
                    <div>
                      <Label htmlFor="ai_assisted" className="text-sm font-medium">
                        AI-ASSISTED MAPPING
                      </Label>
                      <p className="text-xs text-gray-500">USE MACHINE LEARNING TO AUTO-MAP FIELDS BETWEEN SYSTEMS</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="MANUAL" id="manual" className="mt-1" />
                    <div>
                      <Label htmlFor="manual" className="text-sm font-medium">
                        MANUAL MAPPING
                      </Label>
                      <p className="text-xs text-gray-500">DEFINE CUSTOM FIELD MAPPINGS BETWEEN SYSTEMS</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="TEMPLATE" id="template" className="mt-1" />
                    <div>
                      <Label htmlFor="template" className="text-sm font-medium">
                        USE TEMPLATE
                      </Label>
                      <p className="text-xs text-gray-500">APPLY PRE-DEFINED MAPPING TEMPLATE</p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Card>

          <div className="flex justify-end mt-6">
            <Button
              variant="default"
              className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90 rounded-none"
              onClick={handleSave}
              disabled={isSaving}
            >
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? "SAVING..." : saved ? "SAVED!" : "SAVE CHANGES"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

