"use client"

import { useState } from "react"
import { AlertCircle, ArrowRight, CheckCircle, Clock, User, Bot, FileText } from "lucide-react"
import Link from "next/link"

export default function MigrationStatus() {
  const [showAIAssessment, setShowAIAssessment] = useState(false)
  const [selectedErrorId, setSelectedErrorId] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState(1)

  const knownErrors = [
    {
      id: "err-1",
      title: "SCHEMA MISMATCH DETECTED",
      description: "Custom fields in HubSpot don't match Salesforce mappings",
      severity: "high",
    },
    {
      id: "err-2",
      title: "API RATE LIMITS EXCEEDED",
      description: "Stripe API throttling detected, slowing down migration",
      severity: "medium",
    },
    {
      id: "err-3",
      title: "DATA VALIDATION ERRORS",
      description: "2 records with missing required fields need review",
      severity: "low",
    },
  ]

  const assessmentSteps = [
    {
      id: 1,
      title: "AI ANALYSIS",
      description: "AI is analyzing the error patterns and potential solutions",
      icon: Bot,
      status: currentStep >= 1 ? "active" : "pending",
    },
    {
      id: 2,
      title: "HUMAN REVIEW REQUIRED",
      description: "Review AI findings and provide additional context",
      icon: User,
      status: currentStep >= 2 ? "active" : "pending",
    },
    {
      id: 3,
      title: "SOLUTION GENERATION",
      description: "AI is generating recommended solutions based on your input",
      icon: FileText,
      status: currentStep >= 3 ? "active" : "pending",
    },
    {
      id: 4,
      title: "IMPLEMENTATION",
      description: "Apply the recommended solution to resolve the issue",
      icon: CheckCircle,
      status: currentStep >= 4 ? "active" : "pending",
    },
  ]

  const handleErrorClick = (errorId: string) => {
    setSelectedErrorId(errorId)
    setShowAIAssessment(true)
    setCurrentStep(1)

    // Simulate progression through steps
    const timer1 = setTimeout(() => setCurrentStep(2), 3000)

    return () => {
      clearTimeout(timer1)
    }
  }

  const handleContinueToReview = () => {
    setCurrentStep(3)

    // Simulate final step after a delay
    setTimeout(() => setCurrentStep(4), 3000)
  }

  const selectedError = knownErrors.find((err) => err.id === selectedErrorId)

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="h-5 w-5 text-[#FF3A29]" />
        <h2 className="text-lg uppercase">POTENTIAL MIGRATION ISSUES</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm">
        {knownErrors.map((error) => (
          <div
            key={error.id}
            className={`bg-black/30 border ${
              error.severity === "high"
                ? "border-[#FF3A29]/30"
                : error.severity === "medium"
                  ? "border-[#FFB800]/30"
                  : "border-[#00FF00]/30"
            } p-3 rounded-md cursor-pointer hover:bg-black/50 transition-colors ${
              selectedErrorId === error.id ? "ring-1 ring-[#00FF00]" : ""
            }`}
            onClick={() => handleErrorClick(error.id)}
          >
            <div className="flex items-start gap-2">
              <span
                className={
                  error.severity === "high"
                    ? "text-[#FF3A29]"
                    : error.severity === "medium"
                      ? "text-[#FFB800]"
                      : "text-[#00FF00]"
                }
              >
                {">"}
              </span>
              <div>
                <span className="block font-bold">{error.title}</span>
                <span className="block text-gray-400 text-xs mt-1">{error.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAIAssessment && selectedError && (
        <div className="mt-4 p-4 border border-[#00FF00]/20 bg-black/30 rounded-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-[#00FF00]">$</span>
              <h3 className="font-bold">{currentStep < 4 ? "AI ASSESSMENT IN PROGRESS" : "ASSESSMENT COMPLETE"}</h3>
            </div>
            <button onClick={() => setShowAIAssessment(false)} className="text-xs text-gray-400 hover:text-white">
              DISMISS
            </button>
          </div>

          {/* Assessment Steps */}
          <div className="mb-4">
            <div className="flex flex-col space-y-4">
              {assessmentSteps.map((step) => (
                <div key={step.id} className="flex items-start gap-3">
                  <div
                    className={`rounded-full p-1.5 ${
                      step.status === "active"
                        ? step.id === currentStep
                          ? "bg-[#00FF00]/20 text-[#00FF00] animate-pulse"
                          : "bg-[#00FF00]/20 text-[#00FF00]"
                        : "bg-gray-800 text-gray-500"
                    }`}
                  >
                    <step.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`text-sm font-bold ${
                        step.status === "active"
                          ? step.id === currentStep
                            ? "text-[#00FF00]"
                            : "text-white"
                          : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className={`text-xs ${step.status === "active" ? "text-gray-300" : "text-gray-500"}`}>
                      {step.description}
                    </div>
                  </div>
                  <div className="text-xs">
                    {step.status === "active" && step.id === currentStep && (
                      <span className="flex items-center text-[#00FF00]">
                        <Clock className="h-3 w-3 mr-1 animate-pulse" />
                        IN PROGRESS
                      </span>
                    )}
                    {step.status === "active" && step.id < currentStep && (
                      <span className="flex items-center text-[#00FF00]">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        COMPLETE
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Step Content */}
          <div className="space-y-2 text-sm border-t border-[#00FF00]/10 pt-3 mt-3">
            {currentStep === 1 && (
              <>
                <div className="flex items-start gap-2">
                  <span className="text-[#00FF00]">{">"}</span>
                  <span>ANALYZING {selectedError.title}...</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00FF00]">{">"}</span>
                  <span>ESTIMATED COMPLETION: 30 SECONDS</span>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="flex items-start gap-2">
                  <span className="text-[#00FF00]">{">"}</span>
                  <span>AI ANALYSIS COMPLETE</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00FF00]">{">"}</span>
                  <span>HUMAN REVIEW REQUIRED: PLEASE PROVIDE ADDITIONAL CONTEXT</span>
                </div>
                <div className="mt-3 p-3 bg-black/50 border border-[#00FF00]/20">
                  <div className="text-xs text-gray-400 mb-2">ISSUE DETAILS:</div>
                  <div className="text-sm mb-3">
                    {selectedError.id === "err-1" &&
                      "Custom field 'deal_stage' in HubSpot has 8 possible values, while Salesforce only supports 5 stages. AI suggests mapping strategy needed."}
                    {selectedError.id === "err-2" &&
                      "Stripe API rate limits exceeded at 100 requests/min. Current migration attempting 150 requests/min. Throttling recommended."}
                    {selectedError.id === "err-3" &&
                      "2 customer records missing required 'email' field. Data validation rules preventing import."}
                  </div>
                  <button
                    onClick={handleContinueToReview}
                    className="bg-[#00FF00]/20 hover:bg-[#00FF00]/30 text-[#00FF00] px-3 py-1.5 text-xs w-full"
                  >
                    CONTINUE WITH AI RECOMMENDED SOLUTION
                  </button>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <div className="flex items-start gap-2">
                  <span className="text-[#00FF00]">{">"}</span>
                  <span>GENERATING SOLUTION BASED ON CONTEXT...</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00FF00]">{">"}</span>
                  <span>ESTIMATED COMPLETION: 15 SECONDS</span>
                </div>
              </>
            )}

            {currentStep === 4 && (
              <>
                <div className="flex items-start gap-2">
                  <span className="text-[#00FF00]">{">"}</span>
                  <span>SOLUTION GENERATED SUCCESSFULLY</span>
                </div>
                <div className="mt-3 p-3 bg-black/50 border border-[#00FF00]/20">
                  <div className="text-xs text-gray-400 mb-2">RECOMMENDED SOLUTION:</div>
                  <div className="text-sm mb-3">
                    {selectedError.id === "err-1" &&
                      "Create custom mapping for 'deal_stage' field: Combine 'Qualified' and 'Needs Analysis' stages from HubSpot into single 'Qualified' stage in Salesforce. View full mapping in detailed assessment."}
                    {selectedError.id === "err-2" &&
                      "Reduce concurrency from 5 to 3 threads and implement exponential backoff retry strategy. Estimated completion time will increase by 35%."}
                    {selectedError.id === "err-3" &&
                      "Apply data transformation rule to populate missing email fields with '[no-email]@placeholder.com' and flag for manual review post-migration."}
                  </div>
                </div>
              </>
            )}

            <div className="mt-4">
              <Link
                href={`/migrations/assessment/${selectedErrorId || "latest"}`}
                className="flex items-center gap-1 text-[#00FF00] hover:underline"
              >
                <span>VIEW DETAILED ASSESSMENT</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

