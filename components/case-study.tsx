"use client"

import { useState } from "react"
import { ArrowRight, Check, Clock, Database, Shield, Zap, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState<"challenge" | "solution" | "results">("challenge")
  const [showDemo, setShowDemo] = useState(false)
  const [migrationStep, setMigrationStep] = useState(0)
  const [migrationProgress, setMigrationProgress] = useState(0)

  const startDemo = () => {
    setShowDemo(true)
    setMigrationStep(1)

    // Simulate migration progress
    const interval = setInterval(() => {
      setMigrationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setMigrationStep(2), 500)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-[#00FF00]/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                className="h-8 w-8 text-[#00FF00]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L1 7L12 12L23 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 17L12 22L23 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 12L12 17L23 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-bold">THRED_AI</span>
            </div>
            <div>
              <Badge className="bg-[#00FF00]/20 text-[#00FF00] hover:bg-[#00FF00]/30">CASE STUDY</Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 border-b border-[#00FF00]/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-weight-500 mb-6">
              Pylon's Migration Success Story: <br />
              Figma to Pylon in One Click
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-8">
              How Pylon used Thred's 1-click SDK to convert Figma's support data, saving months of engineering work and
              providing a seamless transition for users.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-black/30 border border-[#00FF00]/20 px-4 py-2 rounded-md">
                <div className="text-xs text-gray-400">Time Saved</div>
                <div className="text-xl font-bold">3 Months</div>
              </div>
              <div className="bg-black/30 border border-[#00FF00]/20 px-4 py-2 rounded-md">
                <div className="text-xs text-gray-400">Records Migrated</div>
                <div className="text-xl font-bold">53,421</div>
              </div>
              <div className="bg-black/30 border border-[#00FF00]/20 px-4 py-2 rounded-md">
                <div className="text-xs text-gray-400">Engineering Cost Saved</div>
                <div className="text-xl font-bold">$108,000</div>
              </div>
              <div className="bg-black/30 border border-[#00FF00]/20 px-4 py-2 rounded-md">
                <div className="text-xs text-gray-400">Implementation Time</div>
                <div className="text-xl font-bold">2 Days</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90 rounded-none" onClick={startDemo}>
                See Migration Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-[#00FF00]/30 text-[#00FF00] hover:bg-[#00FF00]/10 rounded-none"
              >
                Download Full Case Study
              </Button>
            </div>
          </div>
        </section>

        {showDemo && (
          <section className="py-12 border-b border-[#00FF00]/20 bg-black/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-weight-500 mb-6">Migration Demo</h2>
              <div className="w-full bg-black border border-[#00FF00]/20 rounded-none p-6 font-mono">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#00FF00]">$</span>
                    <span className="text-gray-400">PYLON_MIGRATION_DEMO</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
                      <span className="text-[#00FF00]">1</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span>CONNECT TO ZENDESK (FIGMA'S SUPPORT PLATFORM)</span>
                        <Check className="h-4 w-4 text-[#00FF00]" />
                      </div>
                      <div className="text-xs text-gray-500">OAUTH AUTHENTICATION SUCCESSFUL</div>
                    </div>
                  </div>

                  {migrationStep >= 1 && (
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-8 w-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
                        <span className="text-[#00FF00]">2</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span>MIGRATING FIGMA SUPPORT DATA TO PYLON</span>
                          {migrationStep > 1 ? (
                            <Check className="h-4 w-4 text-[#00FF00]" />
                          ) : (
                            <span>{migrationProgress}%</span>
                          )}
                        </div>
                        <Progress
                          value={migrationProgress}
                          className="h-2 mt-2 bg-black"
                          indicatorClassName="bg-[#00FF00]"
                        />
                      </div>
                    </div>
                  )}

                  {migrationStep >= 2 && (
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
                        <span className="text-[#00FF00]">3</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span>MIGRATION COMPLETE</span>
                          <Check className="h-4 w-4 text-[#00FF00]" />
                        </div>
                        <div className="text-xs text-gray-500">
                          ALL FIGMA SUPPORT DATA SUCCESSFULLY MIGRATED TO PYLON
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {migrationStep >= 2 && (
                  <div className="border-t border-[#00FF00]/20 pt-4">
                    <div className="text-sm mb-4">MIGRATION SUMMARY:</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>SUPPORT AGENTS:</span>
                        <span className="text-[#00FF00]">247</span>
                      </div>
                      <div className="flex justify-between">
                        <span>SUPPORT TICKETS:</span>
                        <span className="text-[#00FF00]">53,421</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CUSTOM WORKFLOWS:</span>
                        <span className="text-[#00FF00]">18</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CUSTOM FIELDS:</span>
                        <span className="text-[#00FF00]">32</span>
                      </div>
                      <div className="flex justify-between">
                        <span>KNOWLEDGE BASE ARTICLES:</span>
                        <span className="text-[#00FF00]">1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span>TIME SAVED:</span>
                        <span className="text-[#00FF00]">~720 HOURS</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between border-t border-[#00FF00]/20 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-[#00FF00] animate-pulse"></div>
                    <span className="text-xs">ZENDESK (FIGMA)</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#00FF00]" />
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-[#00FF00] animate-pulse"></div>
                    <span className="text-xs">PYLON PLATFORM</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-12 border-b border-[#00FF00]/20">
          <div className="container mx-auto px-4">
            <div className="flex border-b border-[#00FF00]/20 mb-8">
              <button
                className={`px-4 py-2 font-medium ${activeTab === "challenge" ? "text-[#00FF00] border-b-2 border-[#00FF00]" : "text-gray-400"}`}
                onClick={() => setActiveTab("challenge")}
              >
                The Challenge
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === "solution" ? "text-[#00FF00] border-b-2 border-[#00FF00]" : "text-gray-400"}`}
                onClick={() => setActiveTab("solution")}
              >
                The Solution
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === "results" ? "text-[#00FF00] border-b-2 border-[#00FF00]" : "text-gray-400"}`}
                onClick={() => setActiveTab("results")}
              >
                The Results
              </button>
            </div>

            {activeTab === "challenge" && (
              <div>
                <h2 className="text-2xl font-weight-500 mb-4">The Challenge: Breaking Free from Zendesk</h2>
                <p className="text-gray-400 mb-6">
                  As Figma's user base grew exponentially, their support needs evolved beyond what Zendesk could
                  efficiently handle. Pylon offered a more tailored solution for design-focused companies, but the
                  migration barrier was significant:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-black/30 border border-[#00FF00]/20 p-6 rounded-none">
                    <h3 className="text-lg font-bold mb-3">Migration Complexity</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">✕</span>
                        <span>Over 50,000 support tickets with complex threading and attachments</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">✕</span>
                        <span>Custom fields specific to design workflows and feedback</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">✕</span>
                        <span>Intricate automation rules and macros built over years</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">✕</span>
                        <span>Integration with internal tools and design systems</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-black/30 border border-[#00FF00]/20 p-6 rounded-none">
                    <h3 className="text-lg font-bold mb-3">Business Constraints</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">✕</span>
                        <span>Engineering team focused on core product development</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">✕</span>
                        <span>3-month estimated timeline for custom migration scripts</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">✕</span>
                        <span>Risk of data loss or corruption during manual migration</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <span className="text-red-500">✕</span>
                        <span>Need for minimal disruption to support operations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-black/20 border border-[#00FF00]/20 p-6 rounded-none">
                  <blockquote className="text-lg italic mb-4">
                    "We were effectively locked into Zendesk despite Pylon being a much better fit for our needs. The
                    migration effort seemed insurmountable given our engineering priorities and timeline constraints."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <img
                      src="/placeholder.svg?height=48&width=48"
                      alt="David Vega"
                      className="w-12 h-12 rounded-none"
                    />
                    <div>
                      <div className="font-medium">David Vega</div>
                      <div className="text-sm text-gray-400">Director of IT, Figma</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "solution" && (
              <div>
                <h2 className="text-2xl font-weight-500 mb-4">The Solution: Thred's 1-Click Migration SDK</h2>
                <p className="text-gray-400 mb-6">
                  Pylon integrated Thred's Migration SDK into their platform, offering Figma a seamless migration path
                  from Zendesk with minimal engineering effort.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-black border border-[#00FF00]/20 rounded-none">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-[#00FF00]" />
                        Simple Implementation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400 mb-4">
                        Pylon added a "Migrate from Zendesk" button to their onboarding flow with just a few lines of
                        code.
                      </p>
                      <div className="bg-black/50 p-3 rounded-none font-mono text-xs">
                        <pre className="text-gray-300">
                          <code>{`
<ThredMigration 
  apiKey={process.env.THRED_API_KEY}
  sourceApp="zendesk"
  buttonText="Migrate from Zendesk"
  onComplete={handleMigrationComplete}
/>
                          `}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-black border border-[#00FF00]/20 rounded-none">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-[#00FF00]" />
                        AI-Powered Mapping
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400">
                        Thred's AI automatically mapped Zendesk's data schema to Pylon's structure, including:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-[#00FF00] shrink-0 mt-0.5" />
                          <span>Custom fields specific to design workflows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-[#00FF00] shrink-0 mt-0.5" />
                          <span>User roles and permissions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-[#00FF00] shrink-0 mt-0.5" />
                          <span>Ticket categories and priorities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-[#00FF00] shrink-0 mt-0.5" />
                          <span>Automation rules and workflows</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-black border border-[#00FFকিন্ত0]/20 rounded-none">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-[#00FF00]" />
                        Secure & Controlled
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400">
                        The migration process maintained data integrity and security:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-[#00FF00] shrink-0 mt-0.5" />
                          <span>OAuth authentication with Zendesk</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-[#00FF00] shrink-0 mt-0.5" />
                          <span>End-to-end encryption of all data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-[#00FF00] shrink-0 mt-0.5" />
                          <span>Incremental migration with validation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-[#00FF00] shrink-0 mt-0.5" />
                          <span>Real-time progress monitoring</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-black/20 border border-[#00FF00]/20 p-6 rounded-none">
                  <blockquote className="text-lg italic mb-4">
                    "Integrating Thred's SDK took our engineering team less than two days. The migration experience we
                    could offer Figma was seamless - they simply clicked a button and watched as their years of support
                    data transferred automatically to our platform."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <img src="/placeholder.svg?height=48&width=48" alt="Alex Chen" className="w-12 h-12 rounded-none" />
                    <div>
                      <div className="font-medium">Alex Chen</div>
                      <div className="text-sm text-gray-400">CTO, Pylon</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "results" && (
              <div>
                <h2 className="text-2xl font-weight-500 mb-4">The Results: Seamless Migration, Immediate Value</h2>
                <p className="text-gray-400 mb-6">
                  The migration from Zendesk to Pylon was completed in a fraction of the expected time, with significant
                  benefits for all parties involved.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">For Figma</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-none bg-[#00FF00]/10 flex items-center justify-center shrink-0">
                          <Clock className="h-5 w-5 text-[#00FF00]" />
                        </div>
                        <div>
                          <h4 className="font-bold">Time Savings</h4>
                          <p className="text-sm text-gray-400">
                            Migration completed in 2 days instead of the estimated 3 months, allowing immediate use of
                            Pylon's advanced features.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-none bg-[#00FF00]/10 flex items-center justify-center shrink-0">
                          <Database className="h-5 w-5 text-[#00FF00]" />
                        </div>
                        <div>
                          <h4 className="font-bold">Data Integrity</h4>
                          <p className="text-sm text-gray-400">
                            100% of support tickets, user data, and custom workflows were preserved with their full
                            history and relationships.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-none bg-[#00FF00]/10 flex items-center justify-center shrink-0">
                          <Zap className="h-5 w-5 text-[#00FF00]" />
                        </div>
                        <div>
                          <h4 className="font-bold">Zero Downtime</h4>
                          <p className="text-sm text-gray-400">
                            Support operations continued uninterrupted during migration, with no impact on customer
                            service quality.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">For Pylon</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-none bg-[#00FF00]/10 flex items-center justify-center shrink-0">
                          <Shield className="h-5 w-5 text-[#00FF00]" />
                        </div>
                        <div>
                          <h4 className="font-bold">Competitive Advantage</h4>
                          <p className="text-sm text-gray-400">
                            Removed the biggest barrier to customer acquisition by offering a frictionless migration
                            path from competitors.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-none bg-[#00FF00]/10 flex items-center justify-center shrink-0">
                          <Database className="h-5 w-5 text-[#00FF00]" />
                        </div>
                        <div>
                          <h4 className="font-bold">Engineering Focus</h4>
                          <p className="text-sm text-gray-400">
                            Engineering resources remained focused on core product development instead of building
                            custom migration tools.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-none bg-[#00FF00]/10 flex items-center justify-center shrink-0">
                          <Zap className="h-5 w-5 text-[#00FF00]" />
                        </div>
                        <div>
                          <h4 className="font-bold">Scalable Solution</h4>
                          <p className="text-sm text-gray-400">
                            The same migration path is now available to all potential customers, creating a repeatable
                            onboarding process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/20 border border-[#00FF00]/20 p-6 rounded-none">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold">ROI Summary</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00FF00]">$108K</div>
                      <div className="text-sm text-gray-400">Engineering Cost Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00FF00]">98%</div>
                      <div className="text-sm text-gray-400">Time Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00FF00]">100%</div>
                      <div className="text-sm text-gray-400">Data Integrity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00FF00]">0</div>
                      <div className="text-sm text-gray-400">Support Disruptions</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-weight-500 mb-4">Ready to Break Vendor Lock-in?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join Pylon and other leading SaaS companies in offering seamless migrations to your customers with Thred
              AI SDK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90 rounded-none">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-[#00FF00]/30 text-[#00FF00] hover:bg-[#00FF00]/10 rounded-none"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#00FF00]/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <svg
                className="h-6 w-6 text-[#00FF00]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L1 7L12 12L23 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 17L12 22L23 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 12L12 17L23 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">THRED_AI MIGRATION SDK</span>
            </div>
            <div className="text-xs text-gray-500">© 2025 Thred AI. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

