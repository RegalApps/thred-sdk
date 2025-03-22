"use client"

import { Zap, Settings, Code, Bot } from "lucide-react"

export default function SdkFeatures() {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black border border-[#00FF00]/20 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-4 w-4 text-[#00FF00]" />
            <h3 className="uppercase font-bold">AI-FIRST AUTOMATION</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-[#00FF00]">{">"}</span>
              <span>AUTO-MAP FIELDS WITH AI</span>
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-xs pl-6">
              <span>USES ML TO DETECT SCHEMA SIMILARITIES AND AUTO-MAP DATA</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00FF00]">{">"}</span>
              <span>SMART DATA CLEANING</span>
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-xs pl-6">
              <span>DEDUPLICATES, NORMALIZES, AND ENRICHES RECORDS AUTOMATICALLY</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00FF00]">{">"}</span>
              <span>ERROR HANDLING & ROLLBACK</span>
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-xs pl-6">
              <span>DETECTS CONFLICTS AND OFFERS AI-DRIVEN RESOLUTION</span>
            </div>
          </div>
        </div>

        <div className="bg-black border border-[#00FF00]/20 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="h-4 w-4 text-[#00FF00]" />
            <h3 className="uppercase font-bold">USER-CONFIGURABLE OPTIONS</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-[#00FF00]">{">"}</span>
              <span>CUSTOM FIELD MAPPING</span>
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-xs pl-6">
              <span>USERS CAN OVERRIDE AI SUGGESTIONS AND MANUALLY MAP FIELDS</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00FF00]">{">"}</span>
              <span>TRANSFORMATION RULES</span>
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-xs pl-6">
              <span>DEFINE LOGIC FOR MERGING, FORMATTING, OR RESTRUCTURING DATA</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00FF00]">{">"}</span>
              <span>PARTIAL VS. FULL MIGRATION</span>
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-xs pl-6">
              <span>USERS CAN CHOOSE TO IMPORT ONLY SPECIFIC DATASETS</span>
            </div>
          </div>
        </div>

        <div className="bg-black border border-[#00FF00]/20 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Code className="h-4 w-4 text-[#00FF00]" />
            <h3 className="uppercase font-bold">PLUG & PLAY INTEGRATION</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-[#00FF00]">{">"}</span>
              <span>PRE-BUILT API CONNECTORS</span>
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-xs pl-6">
              <span>SUPPORTS MAJOR SAAS PLATFORMS (HUBSPOT, SALESFORCE, STRIPE)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00FF00]">{">"}</span>
              <span>CUSTOM API & WEBHOOK SUPPORT</span>
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-xs pl-6">
              <span>FOR PLATFORMS WITHOUT NATIVE INTEGRATIONS</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00FF00]">{">"}</span>
              <span>BATCH & STREAMING MODE</span>
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-xs pl-6">
              <span>ALLOWS LARGE MIGRATIONS IN CHUNKS OR REAL-TIME SYNCING</span>
            </div>
          </div>
        </div>

        <div className="bg-black border border-[#00FF00]/20 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Bot className="h-4 w-4 text-[#00FF00]" />
            <h3 className="uppercase font-bold">EMBEDDABLE & WHITE-LABEL</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-[#00FF00]">{">"}</span>
              <span>NO-CODE UI COMPONENTS</span>
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-xs pl-6">
              <span>"MIGRATE FROM [X]" BUTTON WITH PROGRESS TRACKING</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00FF00]">{">"}</span>
              <span>AI AGENT-ASSISTED MIGRATION</span>
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-xs pl-6">
              <span>CONVERSATIONAL AI GUIDES USERS THROUGH SETUP</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00FF00]">{">"}</span>
              <span>EMBED CODE</span>
            </div>
            <div className="flex items-start gap-2 text-gray-500 text-xs pl-6 font-mono">
              <span>{'<script src="https://thred.ai/sdk.js"></script>'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

