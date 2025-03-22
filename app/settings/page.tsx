import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Save, RefreshCw } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-[#00FF00]/20 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">SETTINGS</h1>
          <div className="flex items-center gap-3">
            <button className="text-xs text-[#00FF00] border border-[#00FF00]/30 px-3 py-1 hover:bg-[#00FF00]/10">
              SAVE_CHANGES
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-black border border-[#00FF00]/20 p-6">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-lg uppercase">GENERAL SETTINGS</h2>
              </div>

              <div className="space-y-6 font-mono">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm">AUTO-DETECT SCHEMA CHANGES</div>
                    <div className="text-xs text-gray-500">NOTIFY WHEN SOURCE DATA STRUCTURE CHANGES</div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm">ENABLE AI FIELD MAPPING</div>
                    <div className="text-xs text-gray-500">USE ML TO AUTO-MAP FIELDS BETWEEN SYSTEMS</div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm">REAL-TIME SYNC</div>
                    <div className="text-xs text-gray-500">KEEP SYSTEMS IN SYNC AFTER INITIAL MIGRATION</div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm">DARK MODE</div>
                    <div className="text-xs text-gray-500">TOGGLE INTERFACE THEME</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>

            <Card className="bg-black border border-[#00FF00]/20 p-6">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-lg uppercase">PERFORMANCE SETTINGS</h2>
              </div>

              <div className="space-y-6 font-mono">
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="text-sm">BATCH SIZE</div>
                    <div className="text-xs text-[#00FF00]">500 RECORDS</div>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
                  <div className="text-xs text-gray-500 mt-1">RECORDS PROCESSED PER API CALL</div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <div className="text-sm">CONCURRENCY</div>
                    <div className="text-xs text-[#00FF00]">5 THREADS</div>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
                  <div className="text-xs text-gray-500 mt-1">PARALLEL PROCESSING THREADS</div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <div className="text-sm">RETRY ATTEMPTS</div>
                    <div className="text-xs text-[#00FF00]">3 RETRIES</div>
                  </div>
                  <Slider defaultValue={[30]} max={100} step={1} className="w-full" />
                  <div className="text-xs text-gray-500 mt-1">FAILED API CALL RETRY COUNT</div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="text-sm">THROTTLING</div>
                    <div className="text-xs text-gray-500">RESPECT API RATE LIMITS</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>

            <Card className="bg-black border border-[#00FF00]/20 p-6">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-lg uppercase">NOTIFICATION SETTINGS</h2>
              </div>

              <div className="space-y-6 font-mono">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm">EMAIL NOTIFICATIONS</div>
                    <div className="text-xs text-gray-500">SEND MIGRATION STATUS UPDATES</div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm">SLACK INTEGRATION</div>
                    <div className="text-xs text-gray-500">POST UPDATES TO SLACK CHANNEL</div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm">WEBHOOK NOTIFICATIONS</div>
                    <div className="text-xs text-gray-500">SEND EVENTS TO CUSTOM ENDPOINT</div>
                  </div>
                  <Switch />
                </div>

                <div>
                  <div className="text-sm mb-2">NOTIFICATION FREQUENCY</div>
                  <select className="w-full bg-black border border-[#00FF00]/30 p-2 text-xs">
                    <option>REAL-TIME</option>
                    <option>HOURLY DIGEST</option>
                    <option>DAILY SUMMARY</option>
                    <option>ONLY ON COMPLETION/FAILURE</option>
                  </select>
                </div>
              </div>
            </Card>

            <Card className="bg-black border border-[#00FF00]/20 p-6">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-lg uppercase">API SETTINGS</h2>
              </div>

              <div className="space-y-6 font-mono">
                <div>
                  <div className="text-sm mb-2">API KEY</div>
                  <div className="flex">
                    <input
                      type="password"
                      value="••••••••••••••••••••••••"
                      readOnly
                      className="flex-1 bg-black border border-[#00FF00]/30 p-2 text-xs"
                    />
                    <button className="bg-[#00FF00]/10 border border-[#00FF00]/30 px-3 text-[#00FF00]">
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">USED FOR SDK AUTHENTICATION</div>
                </div>

                <div>
                  <div className="text-sm mb-2">WEBHOOK SECRET</div>
                  <div className="flex">
                    <input
                      type="password"
                      value="••••••••••••••••••••••••"
                      readOnly
                      className="flex-1 bg-black border border-[#00FF00]/30 p-2 text-xs"
                    />
                    <button className="bg-[#00FF00]/10 border border-[#00FF00]/30 px-3 text-[#00FF00]">
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">VERIFY INCOMING WEBHOOK REQUESTS</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm">ENABLE CORS</div>
                    <div className="text-xs text-gray-500">ALLOW CROSS-ORIGIN REQUESTS</div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm">DEBUG MODE</div>
                    <div className="text-xs text-gray-500">VERBOSE LOGGING FOR TROUBLESHOOTING</div>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="flex items-center gap-2 text-[#00FF00] border border-[#00FF00]/30 px-4 py-2 hover:bg-[#00FF00]/10">
              <Save className="h-4 w-4" />
              <span>SAVE ALL SETTINGS</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

