"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Search,
  FileText,
  Code,
  Star,
  ArrowRight,
  Copy,
  Check,
  ChevronDown,
  ChevronRight,
  Zap,
  Bot,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "getting-started": true,
    "core-concepts": false,
    "api-reference": false,
    examples: false,
    faq: false,
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null)

  // Handle copy code functionality
  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedSnippet(id)
    setTimeout(() => setCopiedSnippet(null), 2000)
  }

  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Scroll to section when clicking on sidebar link
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let currentActiveSection = activeSection

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop < 200) {
          currentActiveSection = section.id
        }
      })

      if (currentActiveSection !== activeSection) {
        setActiveSection(currentActiveSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-[#00FF00]/20 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
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
              <span className="font-mono font-bold">THRED_AI</span>
            </Link>
            <span className="text-gray-500">|</span>
            <h1 className="text-lg font-bold">DOCUMENTATION</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="SEARCH DOCS..."
                className="pl-8 pr-3 py-1 bg-black border border-[#00FF00]/30 text-xs text-white focus:border-[#00FF00]/60 focus:outline-none rounded-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-[#00FF00]/30 text-[#00FF00] hover:bg-[#00FF00]/10 rounded-none"
              onClick={() => window.open("https://github.com/thred-ai/migration-sdk", "_blank")}
            >
              <GitHub className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r border-[#00FF00]/20 bg-black/30 hidden md:block overflow-y-auto sticky top-[57px] h-[calc(100vh-57px)]">
          <nav className="p-4">
            <div className="mb-6">
              <div
                className="flex items-center justify-between cursor-pointer py-2 text-sm font-medium"
                onClick={() => toggleSection("getting-started")}
              >
                <span>GETTING STARTED</span>
                {expandedSections["getting-started"] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </div>
              {expandedSections["getting-started"] && (
                <ul className="ml-4 space-y-2 mt-2">
                  <li>
                    <a
                      href="#introduction"
                      className={`text-xs ${activeSection === "introduction" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("introduction")
                      }}
                    >
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#installation"
                      className={`text-xs ${activeSection === "installation" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("installation")
                      }}
                    >
                      Installation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#quick-start"
                      className={`text-xs ${activeSection === "quick-start" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("quick-start")
                      }}
                    >
                      Quick Start
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <div className="mb-6">
              <div
                className="flex items-center justify-between cursor-pointer py-2 text-sm font-medium"
                onClick={() => toggleSection("core-concepts")}
              >
                <span>CORE CONCEPTS</span>
                {expandedSections["core-concepts"] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </div>
              {expandedSections["core-concepts"] && (
                <ul className="ml-4 space-y-2 mt-2">
                  <li>
                    <a
                      href="#migration-flow"
                      className={`text-xs ${activeSection === "migration-flow" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("migration-flow")
                      }}
                    >
                      Migration Flow
                    </a>
                  </li>
                  <li>
                    <a
                      href="#data-mapping"
                      className={`text-xs ${activeSection === "data-mapping" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("data-mapping")
                      }}
                    >
                      Data Mapping
                    </a>
                  </li>
                  <li>
                    <a
                      href="#error-handling"
                      className={`text-xs ${activeSection === "error-handling" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("error-handling")
                      }}
                    >
                      Error Handling
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <div className="mb-6">
              <div
                className="flex items-center justify-between cursor-pointer py-2 text-sm font-medium"
                onClick={() => toggleSection("api-reference")}
              >
                <span>API REFERENCE</span>
                {expandedSections["api-reference"] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </div>
              {expandedSections["api-reference"] && (
                <ul className="ml-4 space-y-2 mt-2">
                  <li>
                    <a
                      href="#thred-provider"
                      className={`text-xs ${activeSection === "thred-provider" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("thred-provider")
                      }}
                    >
                      ThredProvider
                    </a>
                  </li>
                  <li>
                    <a
                      href="#migration-button"
                      className={`text-xs ${activeSection === "migration-button" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("migration-button")
                      }}
                    >
                      MigrationButton
                    </a>
                  </li>
                  <li>
                    <a
                      href="#use-migration"
                      className={`text-xs ${activeSection === "use-migration" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("use-migration")
                      }}
                    >
                      useMigration
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <div className="mb-6">
              <div
                className="flex items-center justify-between cursor-pointer py-2 text-sm font-medium"
                onClick={() => toggleSection("examples")}
              >
                <span>EXAMPLES</span>
                {expandedSections["examples"] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </div>
              {expandedSections["examples"] && (
                <ul className="ml-4 space-y-2 mt-2">
                  <li>
                    <a
                      href="#react-example"
                      className={`text-xs ${activeSection === "react-example" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("react-example")
                      }}
                    >
                      React
                    </a>
                  </li>
                  <li>
                    <a
                      href="#nextjs-example"
                      className={`text-xs ${activeSection === "nextjs-example" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("nextjs-example")
                      }}
                    >
                      Next.js
                    </a>
                  </li>
                  <li>
                    <a
                      href="#vue-example"
                      className={`text-xs ${activeSection === "vue-example" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("vue-example")
                      }}
                    >
                      Vue
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <div className="mb-6">
              <div
                className="flex items-center justify-between cursor-pointer py-2 text-sm font-medium"
                onClick={() => toggleSection("faq")}
              >
                <span>FAQ</span>
                {expandedSections["faq"] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </div>
              {expandedSections["faq"] && (
                <ul className="ml-4 space-y-2 mt-2">
                  <li>
                    <a
                      href="#common-issues"
                      className={`text-xs ${activeSection === "common-issues" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("common-issues")
                      }}
                    >
                      Common Issues
                    </a>
                  </li>
                  <li>
                    <a
                      href="#troubleshooting"
                      className={`text-xs ${activeSection === "troubleshooting" ? "text-[#00FF00]" : "text-gray-400"} hover:text-[#00FF00] block py-1`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("troubleshooting")
                      }}
                    >
                      Troubleshooting
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <div className="pt-4 border-t border-[#00FF00]/20">
              <div className="bg-[#00FF00]/10 p-3 rounded-none">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-[#00FF00]" />
                  <span className="text-sm font-medium">Need Help?</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">
                  Join our Discord community or open a GitHub issue for support.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-[#00FF00]/30 text-[#00FF00] hover:bg-[#00FF00]/10 rounded-none text-xs"
                  onClick={() => window.open("https://discord.gg/thred-ai", "_blank")}
                >
                  JOIN DISCORD
                </Button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <section id="introduction" className="mb-16">
              <h1 className="text-3xl font-weight-500 mb-4">Introduction to Thred AI SDK</h1>
              <p className="text-gray-400 mb-6">
                Thred AI SDK is an embeddable solution that simplifies the migration of user profiles and related data
                between two SaaS platforms. This documentation will help you integrate Thred AI SDK into your
                application and offer seamless migrations to your users.
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <span>Last updated: March 17, 2025</span>
                <span>•</span>
                <Link href="#" className="text-[#00FF00] hover:underline">
                  Edit this page
                </Link>
              </div>

              <div className="bg-black/30 border border-[#00FF00]/20 p-4 rounded-none mb-8">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-[#00FF00] mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Getting Help</h3>
                    <p className="text-sm text-gray-400">
                      If you're stuck or have questions, join our{" "}
                      <Link href="#" className="text-[#00FF00] hover:underline">
                        Discord community
                      </Link>{" "}
                      or{" "}
                      <Link href="#" className="text-[#00FF00] hover:underline">
                        open a GitHub issue
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-weight-500 mb-4">What is Thred AI SDK?</h2>
              <p className="text-gray-400 mb-4">
                Thred AI SDK is a developer toolkit that enables SaaS platforms to offer seamless data migration from
                competitor platforms. It handles the complex process of extracting, transforming, and loading user data,
                tickets, and workflows between different systems.
              </p>
              <p className="text-gray-400 mb-6">
                By integrating Thred AI SDK, you can provide your users with a simple "Migrate from [Competitor]" button
                that eliminates the traditional pain points of SaaS migrations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black border border-[#00FF00]/20 p-6 rounded-none">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <FileText className="h-5 w-5 text-[#00FF00] mr-2" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF00]">✓</span>
                      <span>Reduce customer onboarding time from months to minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF00]">✓</span>
                      <span>Eliminate engineering resources spent on custom migration scripts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF00]">✓</span>
                      <span>Maintain data integrity with AI-powered field mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF00]">✓</span>
                      <span>Provide a seamless user experience with real-time progress tracking</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-black border border-[#00FF00]/20 p-6 rounded-none">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Code className="h-5 w-5 text-[#00FF00] mr-2" />
                    Supported Platforms
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <span>Zendesk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <span>Asana</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <span>Jira</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <span>Salesforce</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <span>HubSpot</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <span>Linear</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <span>Trello</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <span>And more...</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="installation" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">Installation</h2>
              <p className="text-gray-400 mb-6">
                Getting started with Thred AI SDK is simple. You can install it via npm or yarn.
              </p>

              <div className="mb-6">
                <div className="relative">
                  <div className="absolute right-2 top-2">
                    <button
                      className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                      onClick={() => handleCopyCode("npm-install", "npm install @thred/migration-sdk")}
                    >
                      {copiedSnippet === "npm-install" ? (
                        <Check className="h-4 w-4 text-[#00FF00]" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <div className="bg-black/50 border border-[#00FF00]/20 p-3 rounded-none font-mono text-sm">
                    <pre>npm install @thred/migration-sdk</pre>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Or with yarn:
                  <button
                    className="bg-black/30 px-1 ml-1 inline-flex items-center"
                    onClick={() => handleCopyCode("yarn-add", "yarn add @thred/migration-sdk")}
                  >
                    <code>yarn add @thred/migration-sdk</code>
                    {copiedSnippet === "yarn-add" ? (
                      <Check className="h-3 w-3 text-[#00FF00] ml-1" />
                    ) : (
                      <Copy className="h-3 w-3 text-gray-500 ml-1" />
                    )}
                  </button>
                </p>
              </div>

              <div className="bg-black/30 border border-[#00FF00]/20 p-4 rounded-none mb-6">
                <div className="flex items-start gap-2">
                  <Zap className="h-5 w-5 text-[#00FF00] mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">API Key Required</h3>
                    <p className="text-sm text-gray-400">
                      You'll need an API key to use the Thred AI SDK. You can get one by{" "}
                      <Link href="#" className="text-[#00FF00] hover:underline">
                        signing up for a free account
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="quick-start" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">Quick Start</h2>
              <p className="text-gray-400 mb-6">
                Get started with Thred AI SDK in just a few minutes. Follow these steps to add migration capabilities to
                your application.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">1. Configure the SDK</h3>
                <Tabs defaultValue="react" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="react">React</TabsTrigger>
                    <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                    <TabsTrigger value="vue">Vue</TabsTrigger>
                  </TabsList>
                  <TabsContent value="react">
                    <div className="relative">
                      <div className="absolute right-2 top-2">
                        <button
                          className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                          onClick={() =>
                            handleCopyCode(
                              "react-config",
                              `// src/App.jsx
import { ThredProvider } from '@thred/migration-sdk';

function App() {
  return (
    <ThredProvider apiKey={process.env.REACT_APP_THRED_API_KEY}>
      <YourApp />
    </ThredProvider>
  );
}`,
                            )
                          }
                        >
                          {copiedSnippet === "react-config" ? (
                            <Check className="h-4 w-4 text-[#00FF00]" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                        <pre className="text-gray-300">
                          <code>{`// src/App.jsx
import { ThredProvider } from '@thred/migration-sdk';

function App() {
  return (
    <ThredProvider apiKey={process.env.REACT_APP_THRED_API_KEY}>
      <YourApp />
    </ThredProvider>
  );
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="nextjs">
                    <div className="relative">
                      <div className="absolute right-2 top-2">
                        <button
                          className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                          onClick={() =>
                            handleCopyCode(
                              "nextjs-config",
                              `// src/app/layout.tsx
import { ThredProvider } from '@thred/migration-sdk';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThredProvider apiKey={process.env.THRED_API_KEY}>
          {children}
        </ThredProvider>
      </body>
    </html>
  );
}`,
                            )
                          }
                        >
                          {copiedSnippet === "nextjs-config" ? (
                            <Check className="h-4 w-4 text-[#00FF00]" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                        <pre className="text-gray-300">
                          <code>{`// src/app/layout.tsx
import { ThredProvider } from '@thred/migration-sdk';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThredProvider apiKey={process.env.THRED_API_KEY}>
          {children}
        </ThredProvider>
      </body>
    </html>
  );
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="vue">
                    <div className="relative">
                      <div className="absolute right-2 top-2">
                        <button
                          className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                          onClick={() =>
                            handleCopyCode(
                              "vue-config",
                              `// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createThred } from '@thred/migration-sdk-vue';

const app = createApp(App);
app.use(createThred({
  apiKey: import.meta.env.VITE_THRED_API_KEY
}));
app.mount('#app');
                  `,
                            )
                          }
                        >
                          {copiedSnippet === "vue-config" ? (
                            <Check className="h-4 w-4 text-[#00FF00]" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                        <pre className="text-gray-300">
                          <code>{`// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createThred } from '@thred/migration-sdk-vue';

const app = createApp(App);
app.use(createThred({
  apiKey: import.meta.env.VITE_THRED_API_KEY
}));
app.mount('#app');
                  `}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">2. Add the Migration Button</h3>
                <Tabs defaultValue="react" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="react">React</TabsTrigger>
                    <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                    <TabsTrigger value="vue">Vue</TabsTrigger>
                  </TabsList>
                  <TabsContent value="react">
                    <div className="relative">
                      <div className="absolute right-2 top-2">
                        <button
                          className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                          onClick={() =>
                            handleCopyCode(
                              "react-button",
                              `// src/components/OnboardingPage.jsx
import { MigrationButton } from '@thred/migration-sdk';

function OnboardingPage() {
  return (
    <div className="onboarding-container">
      <h1>Welcome to Our Platform</h1>
      <p>Get started by migrating your data from another platform</p>
      
      <MigrationButton 
        sourceApp="zendesk"
        buttonText="Migrate from Zendesk"
        onMigrationStart={() => console.log('Migration started')}
        onMigrationComplete={(data) => {
          console.log(\`Migration complete: \${data.recordsCount} records\`);
        }}
      />
    </div>
  );
}`,
                            )
                          }
                        >
                          {copiedSnippet === "react-button" ? (
                            <Check className="h-4 w-4 text-[#00FF00]" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                        <pre className="text-gray-300">
                          <code>{`// src/components/OnboardingPage.jsx
import { MigrationButton } from '@thred/migration-sdk';

function OnboardingPage() {
  return (
    <div className="onboarding-container">
      <h1>Welcome to Our Platform</h1>
      <p>Get started by migrating your data from another platform</p>
      
      <MigrationButton 
        sourceApp="zendesk"
        buttonText="Migrate from Zendesk"
        onMigrationStart={() => console.log('Migration started')}
        onMigrationComplete={(data) => {
          console.log(\`Migration complete: \${data.recordsCount} records\`);
        }}
      />
    </div>
  );
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="nextjs">
                    <div className="relative">
                      <div className="absolute right-2 top-2">
                        <button
                          className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                          onClick={() =>
                            handleCopyCode(
                              "nextjs-button",
                              `// src/app/onboarding/page.tsx
'use client'

import { MigrationButton } from '@thred/migration-sdk';

export default function OnboardingPage() {
  return (
    <div className="onboarding-container">
      <h1>Welcome to Our Platform</h1>
      <p>Get started by migrating your data from another platform</p>
      
      <MigrationButton 
        sourceApp="asana"
        buttonText="Migrate from Asana"
        onMigrationStart={() => console.log('Migration started')}
        onMigrationComplete={(data) => {
          console.log(\`Migration complete: \${data.recordsCount} records\`);
        }}
      />
    </div>
  );
}`,
                            )
                          }
                        >
                          {copiedSnippet === "nextjs-button" ? (
                            <Check className="h-4 w-4 text-[#00FF00]" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                        <pre className="text-gray-300">
                          <code>{`// src/app/onboarding/page.tsx
'use client'

import { MigrationButton } from '@thred/migration-sdk';

export default function OnboardingPage() {
  return (
    <div className="onboarding-container">
      <h1>Welcome to Our Platform</h1>
      <p>Get started by migrating your data from another platform</p>
      
      <MigrationButton 
        sourceApp="asana"
        buttonText="Migrate from Asana"
        onMigrationStart={() => console.log('Migration started')}
        onMigrationComplete={(data) => {
          console.log(\`Migration complete: \${data.recordsCount} records\`);
        }}
      />
    </div>
  );
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="vue">
                    <div className="relative">
                      <div className="absolute right-2 top-2">
                        <button
                          className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                          onClick={() =>
                            handleCopyCode(
                              "vue-button",
                              `<!-- src/components/OnboardingPage.vue -->
<template>
  <div class="onboarding-container">
    <h1>Welcome to Our Platform</h1>
    <p>Get started by migrating your data from another platform</p>
    
    <ThredMigrationButton 
      source-app="jira"
      button-text="Migrate from Jira"
      @migration-start="onMigrationStart"
      @migration-complete="onMigrationComplete"
    />
  </div>
</template>

<script setup>
import { ThredMigrationButton } from '@thred/migration-sdk-vue';

const onMigrationStart = () => {
  console.log('Migration started');
};

const onMigrationComplete = (data) => {
  console.log(\`Migration complete: \${data.recordsCount} records\`);
};
</script>`,
                            )
                          }
                        >
                          {copiedSnippet === "vue-button" ? (
                            <Check className="h-4 w-4 text-[#00FF00]" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                        <pre className="text-gray-300">
                          <code>{`<!-- src/components/OnboardingPage.vue -->
<template>
  <div class="onboarding-container">
    <h1>Welcome to Our Platform</h1>
    <p>Get started by migrating your data from another platform</p>
    
    <ThredMigrationButton 
      source-app="jira"
      button-text="Migrate from Jira"
      @migration-start="onMigrationStart"
      @migration-complete="onMigrationComplete"
    />
  </div>
</template>

<script setup>
import { ThredMigrationButton } from '@thred/migration-sdk-vue';

const onMigrationStart = () => {
  console.log('Migration started');
};

const onMigrationComplete = (data) => {
  console.log(\`Migration complete: \${data.recordsCount} records\`);
};
</script>`}</code>
                        </pre>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mt-8">
                <Link href="#core-concepts" className="text-[#00FF00] hover:underline inline-flex items-center">
                  Continue to Core Concepts <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </section>

            <section id="migration-flow" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">Migration Flow</h2>
              <p className="text-gray-400 mb-6">
                The Thred AI SDK handles the entire migration process through a series of steps:
              </p>

              <div className="relative mb-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#00FF00]/20"></div>
                <div className="space-y-8">
                  <div className="relative pl-10">
                    <div className="absolute left-0 w-8 h-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
                      <span className="text-[#00FF00] font-bold">1</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">User Initiates Migration</h3>
                    <p className="text-gray-400 text-sm">
                      The user clicks on the migration button in your application, which triggers the migration flow.
                    </p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 w-8 h-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
                      <span className="text-[#00FF00] font-bold">2</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">OAuth Authentication</h3>
                    <p className="text-gray-400 text-sm">
                      The user authenticates with the source platform using OAuth, granting Thred AI SDK secure access
                      to their data.
                    </p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 w-8 h-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
                      <span className="text-[#00FF00] font-bold">3</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Data Discovery and Schema Analysis</h3>
                    <p className="text-gray-400 text-sm">
                      Thred AI SDK analyzes the data structure of the source platform to understand the available data
                      and its relationships.
                    </p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 w-8 h-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
                      <span className="text-[#00FF00] font-bold">4</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">AI-Powered Field Mapping</h3>
                    <p className="text-gray-400 text-sm">
                      The SDK automatically maps fields between the source and destination platforms using machine
                      learning.
                    </p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 w-8 h-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
                      <span className="text-[#00FF00] font-bold">5</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Data Extraction</h3>
                    <p className="text-gray-400 text-sm">
                      Data is extracted from the source platform in batches to avoid rate limits and ensure reliability.
                    </p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 w-8 h-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
                      <span className="text-[#00FF00] font-bold">6</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Data Transformation</h3>
                    <p className="text-gray-400 text-sm">
                      The extracted data is transformed to match the structure and requirements of the destination
                      platform.
                    </p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 w-8 h-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
                      <span className="text-[#00FF00] font-bold">7</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Data Loading</h3>
                    <p className="text-gray-400 text-sm">
                      The transformed data is loaded into the destination platform, preserving relationships and
                      integrity.
                    </p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 w-8 h-8 rounded-none bg-[#00FF00]/10 flex items-center justify-center">
                      <span className="text-[#00FF00] font-bold">8</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Verification and Validation</h3>
                    <p className="text-gray-400 text-sm">
                      The SDK verifies that all data has been migrated correctly and validates the integrity of the
                      migration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 border border-[#00FF00]/20 p-4 rounded-none">
                <div className="flex items-start gap-2">
                  <Zap className="h-5 w-5 text-[#00FF00] mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Real-time Progress Tracking</h3>
                    <p className="text-sm text-gray-400">
                      Throughout the migration process, the SDK provides real-time progress updates that you can display
                      to your users.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="data-mapping" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">Data Mapping</h2>
              <p className="text-gray-400 mb-6">
                Thred AI SDK uses machine learning to automatically map fields between different platforms. For example,
                it understands that "ticket.requester" in Zendesk corresponds to "issue.reporter" in Jira. You can also
                provide custom mapping rules for specific use cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-black border border-[#00FF00]/20 rounded-none">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bot className="h-5 w-5 text-[#00FF00]" />
                      AI-Powered Mapping
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#00FF00]">✓</span>
                        <span>Automatic field detection and mapping</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00FF00]">✓</span>
                        <span>Semantic understanding of field purposes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00FF00]">✓</span>
                        <span>Relationship preservation between entities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00FF00]">✓</span>
                        <span>Continuous learning from successful migrations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-black border border-[#00FF00]/20 rounded-none">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-[#00FF00]" />
                      Custom Mapping Rules
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <div className="bg-black/50 p-3 rounded-none font-mono text-xs">
                        <pre className="text-gray-300">
                          <code>{`// Custom mapping configuration
{
  "fieldMappings": [
    {
      "source": "zendesk.ticket.custom_fields.product_id",
      "destination": "jira.issue.fields.customfield_10042",
      "transform": (value) => value.toString()
    }
  ]
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-400 mb-6">
                The SDK provides a user interface for reviewing and customizing field mappings before the migration
                begins. This allows users to ensure that their data is mapped correctly and to make any necessary
                adjustments.
              </p>

              <div className="bg-black/30 border border-[#00FF00]/20 p-4 rounded-none">
                <h3 className="font-medium mb-2">Example Field Mappings</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#00FF00]/20">
                        <th className="text-left py-2 px-4">Source Field (Zendesk)</th>
                        <th className="text-left py-2 px-4">Destination Field (Jira)</th>
                        <th className="text-left py-2 px-4">Transformation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">ticket.subject</td>
                        <td className="py-2 px-4">issue.summary</td>
                        <td className="py-2 px-4">None</td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">ticket.description</td>
                        <td className="py-2 px-4">issue.description</td>
                        <td className="py-2 px-4">Markdown conversion</td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">ticket.priority</td>
                        <td className="py-2 px-4">issue.priority</td>
                        <td className="py-2 px-4">Value mapping (High → Critical)</td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">ticket.tags</td>
                        <td className="py-2 px-4">issue.labels</td>
                        <td className="py-2 px-4">Array transformation</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">ticket.custom_fields.product_id</td>
                        <td className="py-2 px-4">issue.fields.customfield_10042</td>
                        <td className="py-2 px-4">String conversion</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="error-handling" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">Error Handling</h2>
              <p className="text-gray-400 mb-6">
                The SDK includes robust error handling to manage API rate limits, connection issues, and data validation
                errors. Failed operations are automatically retried with exponential backoff, and detailed error logs
                are provided for troubleshooting.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black/30 border border-[#00FF00]/20 p-6 rounded-none">
                  <h3 className="text-lg font-medium mb-3">Common Error Types</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <div>
                        <span className="font-medium">API Rate Limits</span>
                        <p className="text-gray-400 text-xs mt-1">
                          Automatically handles rate limiting with exponential backoff and retry logic.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <div>
                        <span className="font-medium">Authentication Failures</span>
                        <p className="text-gray-400 text-xs mt-1">
                          Provides clear error messages and recovery paths for OAuth token issues.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <div>
                        <span className="font-medium">Data Validation Errors</span>
                        <p className="text-gray-400 text-xs mt-1">
                          Identifies and reports data that doesn't meet the destination platform's requirements.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <div>
                        <span className="font-medium">Network Connectivity Issues</span>
                        <p className="text-gray-400 text-xs mt-1">
                          Handles temporary network failures with automatic reconnection and resumption.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-black/30 border border-[#00FF00]/20 p-6 rounded-none">
                  <h3 className="text-lg font-medium mb-3">Error Handling Strategies</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <div>
                        <span className="font-medium">Automatic Retries</span>
                        <p className="text-gray-400 text-xs mt-1">
                          Failed operations are automatically retried with exponential backoff.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <div>
                        <span className="font-medium">Partial Success</span>
                        <p className="text-gray-400 text-xs mt-1">
                          Migration continues even if some records fail, with detailed reporting on failures.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <div>
                        <span className="font-medium">Rollback Capability</span>
                        <p className="text-gray-400 text-xs mt-1">
                          Option to roll back changes if critical errors occur during migration.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00FF00]">•</span>
                      <div>
                        <span className="font-medium">Detailed Logging</span>
                        <p className="text-gray-400 text-xs mt-1">
                          Comprehensive logs for troubleshooting and auditing migration processes.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute right-2 top-2">
                  <button
                    className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                    onClick={() =>
                      handleCopyCode(
                        "error-handling",
                        `// Example of custom error handling
import { MigrationButton, MigrationError } from '@thred/migration-sdk';

function OnboardingPage() {
  return (
    <MigrationButton 
      sourceApp="zendesk"
      buttonText="Migrate from Zendesk"
      onError={(error) => {
        if (error instanceof MigrationError) {
          switch (error.code) {
            case 'RATE_LIMIT_EXCEEDED':
              console.log('Rate limit exceeded, retrying in', error.retryAfter, 'seconds');
              break;
            case 'AUTHENTICATION_FAILED':
              console.log('Authentication failed:', error.message);
              // Prompt user to re-authenticate
              break;
            case 'DATA_VALIDATION_ERROR':
              console.log('Data validation error:', error.details);
              // Show user the validation issues
              break;
            default:
              console.error('Migration error:', error);
          }
        } else {
          console.error('Unexpected error:', error);
        }
      }}
    />
  );
}`,
                      )
                    }
                  >
                    {copiedSnippet === "error-handling" ? (
                      <Check className="h-4 w-4 text-[#00FF00]" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                  <pre className="text-gray-300">
                    <code>{`// Example of custom error handling
import { MigrationButton, MigrationError } from '@thred/migration-sdk';

function OnboardingPage() {
  return (
    <MigrationButton 
      sourceApp="zendesk"
      buttonText="Migrate from Zendesk"
      onError={(error) => {
        if (error instanceof MigrationError) {
          switch (error.code) {
            case 'RATE_LIMIT_EXCEEDED':
              console.log('Rate limit exceeded, retrying in', error.retryAfter, 'seconds');
              break;
            case 'AUTHENTICATION_FAILED':
              console.log('Authentication failed:', error.message);
              // Prompt user to re-authenticate
              break;
            case 'DATA_VALIDATION_ERROR':
              console.log('Data validation error:', error.details);
              // Show user the validation issues
              break;
            default:
              console.error('Migration error:', error);
          }
        } else {
          console.error('Unexpected error:', error);
        }
      }}
    />
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="thred-provider" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">ThredProvider</h2>
              <p className="text-gray-400 mb-6">
                The <code className="bg-black/30 px-1">ThredProvider</code> component is the main entry point for the
                Thred AI SDK. It initializes the SDK and provides the necessary context for all other components.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Props</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#00FF00]/20">
                        <th className="text-left py-2 px-4">Prop</th>
                        <th className="text-left py-2 px-4">Type</th>
                        <th className="text-left py-2 px-4">Required</th>
                        <th className="text-left py-2 px-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">apiKey</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">Your Thred AI API key</td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">theme</td>
                        <td className="py-2 px-4">object</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">Custom theme configuration for the UI components</td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">debug</td>
                        <td className="py-2 px-4">boolean</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">Enable debug mode for detailed logging</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">children</td>
                        <td className="py-2 px-4">ReactNode</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">Your application components</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="relative">
                <div className="absolute right-2 top-2">
                  <button
                    className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                    onClick={() =>
                      handleCopyCode(
                        "thred-provider",
                        `// Example usage of ThredProvider
import { ThredProvider } from '@thred/migration-sdk';

function App() {
  return (
    <ThredProvider 
      apiKey={process.env.REACT_APP_THRED_API_KEY}
      theme={{
        colors: {
          primary: '#00FF00',
          background: '#000000',
          text: '#FFFFFF'
        }
      }}
      debug={process.env.NODE_ENV === 'development'}
    >
      <YourApp />
    </ThredProvider>
  );
}`,
                      )
                    }
                  >
                    {copiedSnippet === "thred-provider" ? (
                      <Check className="h-4 w-4 text-[#00FF00]" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                  <pre className="text-gray-300">
                    <code>{`// Example usage of ThredProvider
import { ThredProvider } from '@thred/migration-sdk';

function App() {
  return (
    <ThredProvider 
      apiKey={process.env.REACT_APP_THRED_API_KEY}
      theme={{
        colors: {
          primary: '#00FF00',
          background: '#000000',
          text: '#FFFFFF'
        }
      }}
      debug={process.env.NODE_ENV === 'development'}
    >
      <YourApp />
    </ThredProvider>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="migration-button" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">MigrationButton</h2>
              <p className="text-gray-400 mb-6">
                The <code className="bg-black/30 px-1">MigrationButton</code> component provides a button that users can
                click to initiate a migration from a source platform.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Props</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#00FF00]/20">
                        <th className="text-left py-2 px-4">Prop</th>
                        <th className="text-left py-2 px-4">Type</th>
                        <th className="text-left py-2 px-4">Required</th>
                        <th className="text-left py-2 px-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">sourceApp</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">The source platform to migrate from (e.g., "zendesk")</td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">buttonText</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">Custom text for the button (default: "Migrate from [SourceApp]")</td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">onMigrationStart</td>
                        <td className="py-2 px-4">function</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">Callback function called when migration starts</td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">onMigrationComplete</td>
                        <td className="py-2 px-4">function</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">Callback function called when migration completes</td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">onError</td>
                        <td className="py-2 px-4">function</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">Callback function called when an error occurs</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">className</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">Custom CSS class for styling the button</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="relative">
                <div className="absolute right-2 top-2">
                  <button
                    className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                    onClick={() =>
                      handleCopyCode(
                        "migration-button",
                        `// Example usage of MigrationButton
import { MigrationButton } from '@thred/migration-sdk';

function OnboardingPage() {
  return (
    <div className="onboarding-container">
      <h1>Welcome to Our Platform</h1>
      <p>Get started by migrating your data from another platform</p>
      
      <MigrationButton 
        sourceApp="zendesk"
        buttonText="Migrate from Zendesk"
        className="custom-button"
        onMigrationStart={() => {
          console.log('Migration started');
          // Show loading indicator
        }}
        onMigrationComplete={(data) => {
          console.log(\`Migration complete: \${data.recordsCount} records\`);
          // Show success message
          // Redirect to dashboard
        }}
        onError={(error) => {
          console.error('Migration error:', error);
          // Show error message
        }}
      />
    </div>
  );
}`,
                      )
                    }
                  >
                    {copiedSnippet === "migration-button" ? (
                      <Check className="h-4 w-4 text-[#00FF00]" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                  <pre className="text-gray-300">
                    <code>{`// Example usage of MigrationButton
import { MigrationButton } from '@thred/migration-sdk';

function OnboardingPage() {
  return (
    <div className="onboarding-container">
      <h1>Welcome to Our Platform</h1>
      <p>Get started by migrating your data from another platform</p>
      
      <MigrationButton 
        sourceApp="zendesk"
        buttonText="Migrate from Zendesk"
        className="custom-button"
        onMigrationStart={() => {
          console.log('Migration started');
          // Show loading indicator
        }}
        onMigrationComplete={(data) => {
          console.log(\`Migration complete: \${data.recordsCount} records\`);
          // Show success message
          // Redirect to dashboard
        }}
        onError={(error) => {
          console.error('Migration error:', error);
          // Show error message
        }}
      />
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="use-migration" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">useMigration</h2>
              <p className="text-gray-400 mb-6">
                The <code className="bg-black/30 px-1">useMigration</code> hook provides a more flexible way to
                integrate migration functionality into your application.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Parameters</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#00FF00]/20">
                        <th className="text-left py-2 px-4">Parameter</th>
                        <th className="text-left py-2 px-4">Type</th>
                        <th className="text-left py-2 px-4">Required</th>
                        <th className="text-left py-2 px-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">options</td>
                        <td className="py-2 px-4">object</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">Configuration options for the migration</td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">options.sourceApp</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">Yes</td>
                        <td className="py-2 px-4">The source platform to migrate from</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">options.onError</td>
                        <td className="py-2 px-4">function</td>
                        <td className="py-2 px-4">No</td>
                        <td className="py-2 px-4">Callback function called when an error occurs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Return Value</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#00FF00]/20">
                        <th className="text-left py-2 px-4">Property</th>
                        <th className="text-left py-2 px-4">Type</th>
                        <th className="text-left py-2 px-4">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">startMigration</td>
                        <td className="py-2 px-4">function</td>
                        <td className="py-2 px-4">Function to start the migration process</td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">cancelMigration</td>
                        <td className="py-2 px-4">function</td>
                        <td className="py-2 px-4">Function to cancel the migration process</td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">status</td>
                        <td className="py-2 px-4">string</td>
                        <td className="py-2 px-4">
                          Current status of the migration (idle, authenticating, migrating, completed, error)
                        </td>
                      </tr>
                      <tr className="border-b border-[#00FF00]/10">
                        <td className="py-2 px-4">progress</td>
                        <td className="py-2 px-4">number</td>
                        <td className="py-2 px-4">Progress percentage of the migration (0-100)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">error</td>
                        <td className="py-2 px-4">Error | null</td>
                        <td className="py-2 px-4">Error object if an error occurred, null otherwise</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="relative">
                <div className="absolute right-2 top-2">
                  <button
                    className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                    onClick={() =>
                      handleCopyCode(
                        "use-migration",
                        `// Example usage of useMigration
import { useMigration } from '@thred/migration-sdk';

function CustomMigrationUI() {
  const { startMigration, cancelMigration, status, progress, error } = useMigration({
    sourceApp: 'zendesk',
    onError: (error) => {
      console.error('Migration error:', error);
    }
  });

  return (
    <div className="migration-container">
      <h2>Migrate from Zendesk</h2>
      
      {status === 'idle' && (
        <button onClick={startMigration}>
          Start Migration
        </button>
      )}
      
      {status === 'authenticating' && (
        <div>
          <p>Authenticating with Zendesk...</p>
        </div>
      )}
      
      {status === 'migrating' && (
        <div>
          <p>Migration in progress: {progress.toFixed(0)}%</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: \`\${progress}%\` }}></div>
          </div>
          <button onClick={cancelMigration}>Cancel</button>
        </div>
      )}
      
      {status === 'completed' && (
        <div>
          <p>Migration completed successfully!</p>
        </div>
      )}
      
      {status === 'error' && (
        <div>
          <p>Error: {error?.message}</p>
          <button onClick={startMigration}>Retry</button>
        </div>
      )}
    </div>
  );
}`,
                      )
                    }
                  >
                    {copiedSnippet === "use-migration" ? (
                      <Check className="h-4 w-4 text-[#00FF00]" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                  <pre className="text-gray-300">
                    <code>{`// Example usage of useMigration
import { useMigration } from '@thred/migration-sdk';

function CustomMigrationUI() {
  const { startMigration, cancelMigration, status, progress, error } = useMigration({
    sourceApp: 'zendesk',
    onError: (error) => {
      console.error('Migration error:', error);
    }
  });

  return (
    <div className="migration-container">
      <h2>Migrate from Zendesk</h2>
      
      {status === 'idle' && (
        <button onClick={startMigration}>
          Start Migration
        </button>
      )}
      
      {status === 'authenticating' && (
        <div>
          <p>Authenticating with Zendesk...</p>
        </div>
      )}
      
      {status === 'migrating' && (
        <div>
          <p>Migration in progress: {progress.toFixed(0)}%</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: \`\${progress}%\` }}></div>
          </div>
          <button onClick={cancelMigration}>Cancel</button>
        </div>
      )}
      
      {status === 'completed' && (
        <div>
          <p>Migration completed successfully!</p>
        </div>
      )}
      
      {status === 'error' && (
        <div>
          <p>Error: {error?.message}</p>
          <button onClick={startMigration}>Retry</button>
        </div>
      )}
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="react-example" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">React Example</h2>
              <p className="text-gray-400 mb-6">
                Here's a complete example of how to use the Thred AI SDK in a React application.
              </p>

              <div className="relative">
                <div className="absolute right-2 top-2">
                  <button
                    className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                    onClick={() =>
                      handleCopyCode(
                        "react-example",
                        `// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// src/App.js
import { ThredProvider } from '@thred/migration-sdk';
import OnboardingPage from './OnboardingPage';

function App() {
  return (
    <ThredProvider apiKey={process.env.REACT_APP_THRED_API_KEY}>
      <div className="App">
        <header className="App-header">
          <h1>My SaaS Platform</h1>
        </header>
        <main>
          <OnboardingPage />
        </main>
      </div>
    </ThredProvider>
  );
}

export default App;

// src/OnboardingPage.js
import { useState } from 'react';
import { MigrationButton } from '@thred/migration-sdk';

function OnboardingPage() {
  const [migrationComplete, setMigrationComplete] = useState(false);
  const [migrationData, setMigrationData] = useState(null);

  return (
    <div className="onboarding-container">
      <h2>Welcome to Our Platform</h2>
      
      {!migrationComplete ? (
        <div>
          <p>Get started by migrating your data from another platform</p>
          
          <MigrationButton 
            sourceApp="zendesk"
            buttonText="Migrate from Zendesk"
            onMigrationStart={() => {
              console.log('Migration started');
            }}
            onMigrationComplete={(data) => {
              console.log(\`Migration complete: \${data.recordsCount} records\`);
              setMigrationComplete(true);
              setMigrationData(data);
            }}
          />
        </div>
      ) : (
        <div>
          <h3>Migration Complete!</h3>
          <p>Successfully migrated {migrationData.recordsCount} records.</p>
          <button onClick={() => window.location.href = '/dashboard'}>
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

export default OnboardingPage;`,
                      )
                    }
                  >
                    {copiedSnippet === "react-example" ? (
                      <Check className="h-4 w-4 text-[#00FF00]" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                  <pre className="text-gray-300">
                    <code>{`// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// src/App.js
import { ThredProvider } from '@thred/migration-sdk';
import OnboardingPage from './OnboardingPage';

function App() {
  return (
    <ThredProvider apiKey={process.env.REACT_APP_THRED_API_KEY}>
      <div className="App">
        <header className="App-header">
          <h1>My SaaS Platform</h1>
        </header>
        <main>
          <OnboardingPage />
        </main>
      </div>
    </ThredProvider>
  );
}

export default App;

// src/OnboardingPage.js
import { useState } from 'react';
import { MigrationButton } from '@thred/migration-sdk';

function OnboardingPage() {
  const [migrationComplete, setMigrationComplete] = useState(false);
  const [migrationData, setMigrationData] = useState(null);

  return (
    <div className="onboarding-container">
      <h2>Welcome to Our Platform</h2>
      
      {!migrationComplete ? (
        <div>
          <p>Get started by migrating your data from another platform</p>
          
          <MigrationButton 
            sourceApp="zendesk"
            buttonText="Migrate from Zendesk"
            onMigrationStart={() => {
              console.log('Migration started');
            }}
            onMigrationComplete={(data) => {
              console.log(\`Migration complete: \${data.recordsCount} records\`);
              setMigrationComplete(true);
              setMigrationData(data);
            }}
          />
        </div>
      ) : (
        <div>
          <h3>Migration Complete!</h3>
          <p>Successfully migrated {migrationData.recordsCount} records.</p>
          <button onClick={() => window.location.href = '/dashboard'}>
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

export default OnboardingPage;`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="nextjs-example" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">Next.js Example</h2>
              <p className="text-gray-400 mb-6">
                Here's a complete example of how to use the Thred AI SDK in a Next.js application with the App Router.
              </p>

              <div className="relative">
                <div className="absolute right-2 top-2">
                  <button
                    className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                    onClick={() =>
                      handleCopyCode(
                        "nextjs-example",
                        `// src/app/layout.tsx
import { ThredProvider } from '@thred/migration-sdk';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThredProvider apiKey={process.env.THRED_API_KEY}>
          {children}
        </ThredProvider>
      </body>
    </html>
  );
}

// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My SaaS Platform</h1>
      <p className="mb-4">Get started with our powerful tools and features.</p>
      <Link href="/onboarding" className="bg-blue-500 text-white px-4 py-2 rounded">
        Get Started
      </Link>
    </div>
  );
}

// src/app/onboarding/page.tsx
'use client';

import { useState } from 'react';
import { MigrationButton } from '@thred/migration-sdk';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const router = useRouter();
  const [migrationComplete, setMigrationComplete] = useState(false);
  const [migrationData, setMigrationData] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform</h1>
      
      {!migrationComplete ? (
        <div>
          <p className="mb-4">Get started by migrating your data from another platform</p>
          
          <MigrationButton 
            sourceApp="zendesk"
            buttonText="Migrate from Zendesk"
            onMigrationStart={() => {
              console.log('Migration started');
            }}
            onMigrationComplete={(data) => {
              console.log(\`Migration complete: \${data.recordsCount} records\`);
              setMigrationComplete(true);
              setMigrationData(data);
            }}
          />
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-2">Migration Complete!</h2>
          <p className="mb-4">Successfully migrated {migrationData.recordsCount} records.</p>
          <button 
            onClick={() => router.push('/dashboard')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}`,
                      )
                    }
                  >
                    {copiedSnippet === "nextjs-example" ? (
                      <Check className="h-4 w-4 text-[#00FF00]" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                  <pre className="text-gray-300">
                    <code>{`// src/app/layout.tsx
import { ThredProvider } from '@thred/migration-sdk';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThredProvider apiKey={process.env.THRED_API_KEY}>
          {children}
        </ThredProvider>
      </body>
    </html>
  );
}

// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My SaaS Platform</h1>
      <p className="mb-4">Get started with our powerful tools and features.</p>
      <Link href="/onboarding" className="bg-blue-500 text-white px-4 py-2 rounded">
        Get Started
      </Link>
    </div>
  );
}

// src/app/onboarding/page.tsx
'use client';

import { useState } from 'react';
import { MigrationButton } from '@thred/migration-sdk';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const router = useRouter();
  const [migrationComplete, setMigrationComplete] = useState(false);
  const [migrationData, setMigrationData] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform</h1>
      
      {!migrationComplete ? (
        <div>
          <p className="mb-4">Get started by migrating your data from another platform</p>
          
          <MigrationButton 
            sourceApp="zendesk"
            buttonText="Migrate from Zendesk"
            onMigrationStart={() => {
              console.log('Migration started');
            }}
            onMigrationComplete={(data) => {
              console.log(\`Migration complete: \${data.recordsCount} records\`);
              setMigrationComplete(true);
              setMigrationData(data);
            }}
          />
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-2">Migration Complete!</h2>
          <p className="mb-4">Successfully migrated {migrationData.recordsCount} records.</p>
          <button 
            onClick={() => router.push('/dashboard')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="vue-example" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">Vue Example</h2>
              <p className="text-gray-400 mb-6">
                Here's a complete example of how to use the Thred AI SDK in a Vue application.
              </p>

              <div className="relative">
                <div className="absolute right-2 top-2">
                  <button
                    className="p-1.5 rounded-md bg-black/30 border border-[#00FF00]/20 text-gray-400 hover:text-white transition-colors"
                    onClick={() =>
                      handleCopyCode(
                        "vue-example",
                        `// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createThred } from '@thred/migration-sdk-vue';

const app = createApp(App);
app.use(createThred({
  apiKey: import.meta.env.VITE_THRED_API_KEY
}));
app.mount('#app');

// src/App.vue
<template>
  <div id="app">
    <header>
      <h1>My SaaS Platform</h1>
    </header>
    <main>
      <OnboardingPage />
    </main>
  </div>
</template>

<script>
import OnboardingPage from './components/OnboardingPage.vue';

export default {
  name: 'App',
  components: {
    OnboardingPage
  }
}
</script>

// src/components/OnboardingPage.vue
<template>
  <div class="onboarding-container">
    <h2>Welcome to Our Platform</h2>
    
    <div v-if="!migrationComplete">
      <p>Get started by migrating your data from another platform</p>
      
      <ThredMigrationButton 
        source-app="jira"
        button-text="Migrate from Jira"
        @migration-start="onMigrationStart"
        @migration-complete="onMigrationComplete"
      />
    </div>
    
    <div v-else>
      <h3>Migration Complete!</h3>
      <p>Successfully migrated {{ migrationData.recordsCount }} records.</p>
      <button @click="goToDashboard">
        Go to Dashboard
      </button>
    </div>
  </div>
</template>

<script>
import { ThredMigrationButton } from '@thred/migration-sdk-vue';

export default {
  name: 'OnboardingPage',
  components: {
    ThredMigrationButton
  },
  data() {
    return {
      migrationComplete: false,
      migrationData: null
    }
  },
  methods: {
    onMigrationStart() {
      console.log('Migration started');
    },
    onMigrationComplete(data) {
      console.log(\`Migration complete: \${data.recordsCount} records\`);
      this.migrationComplete = true;
      this.migrationData = data;
    },
    goToDashboard() {
      this.$router.push('/dashboard');
    }
  }
}
</script>`,
                      )
                    }
                  >
                    {copiedSnippet === "vue-example" ? (
                      <Check className="h-4 w-4 text-[#00FF00]" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                  <pre className="text-gray-300">
                    <code>{`// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createThred } from '@thred/migration-sdk-vue';

const app = createApp(App);
app.use(createThred({
  apiKey: import.meta.env.VITE_THRED_API_KEY
}));
app.mount('#app');

// src/App.vue
<template>
  <div id="app">
    <header>
      <h1>My SaaS Platform</h1>
    </header>
    <main>
      <OnboardingPage />
    </main>
  </div>
</template>

<script>
import OnboardingPage from './components/OnboardingPage.vue';

export default {
  name: 'App',
  components: {
    OnboardingPage
  }
}
</script>

// src/components/OnboardingPage.vue
<template>
  <div class="onboarding-container">
    <h2>Welcome to Our Platform</h2>
    
    <div v-if="!migrationComplete">
      <p>Get started by migrating your data from another platform</p>
      
      <ThredMigrationButton 
        source-app="jira"
        button-text="Migrate from Jira"
        @migration-start="onMigrationStart"
        @migration-complete="onMigrationComplete"
      />
    </div>
    
    <div v-else>
      <h3>Migration Complete!</h3>
      <p>Successfully migrated {{ migrationData.recordsCount }} records.</p>
      <button @click="goToDashboard">
        Go to Dashboard
      </button>
    </div>
  </div>
</template>

<script>
import { ThredMigrationButton } from '@thred/migration-sdk-vue';

export default {
  name: 'OnboardingPage',
  components: {
    ThredMigrationButton
  },
  data() {
    return {
      migrationComplete: false,
      migrationData: null
    }
  },
  methods: {
    onMigrationStart() {
      console.log('Migration started');
    },
    onMigrationComplete(data) {
      console.log(\`Migration complete: \${data.recordsCount} records\`);
      this.migrationComplete = true;
      this.migrationData = data;
    },
    goToDashboard() {
      this.$router.push('/dashboard');
    }
  }
}
</script>`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="common-issues" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">Common Issues</h2>
              <p className="text-gray-400 mb-6">
                Here are some common issues you might encounter when using the Thred AI SDK and how to resolve them.
              </p>

              <div className="space-y-6">
                <div className="bg-black/30 border border-[#00FF00]/20 p-4 rounded-none">
                  <h3 className="font-medium mb-2">API Key Not Working</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    If your API key is not working, make sure you've set it up correctly in your environment variables.
                  </p>
                  <div className="bg-black/50 p-3 rounded-none font-mono text-xs">
                    <pre className="text-gray-300">
                      <code>{`// .env file
REACT_APP_THRED_API_KEY=your_api_key_here

// Next.js .env.local file
THRED_API_KEY=your_api_key_here

// Vue .env file
VITE_THRED_API_KEY=your_api_key_here`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-black/30 border border-[#00FF00]/20 p-4 rounded-none">
                  <h3 className="font-medium mb-2">OAuth Authentication Failures</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    If users are having trouble authenticating with the source platform, check the following:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li>Ensure the source platform is supported by Thred AI SDK</li>
                    <li>Verify that the user has the necessary permissions on the source platform</li>
                    <li>Check if there are any CORS issues in your application</li>
                    <li>Make sure your API key has the correct permissions</li>
                  </ul>
                </div>

                <div className="bg-black/30 border border-[#00FF00]/20 p-4 rounded-none">
                  <h3 className="font-medium mb-2">Migration Stalls or Fails</h3>
                  <p className="text-sm text-gray-400 mb-2">If a migration stalls or fails, try the following:</p>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    <li>Check the error message for specific details about what went wrong</li>
                    <li>Verify that the source platform's API is operational</li>
                    <li>Ensure the user has the necessary permissions to access all the data being migrated</li>
                    <li>Try reducing the batch size or concurrency settings if rate limits are being hit</li>
                    <li>Check your network connection and firewall settings</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="troubleshooting" className="mb-16">
              <h2 className="text-2xl font-weight-500 mb-4">Troubleshooting</h2>
              <p className="text-gray-400 mb-6">
                Here are some troubleshooting tips for common issues with the Thred AI SDK.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Enable Debug Mode</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Enable debug mode to get more detailed logs about what's happening during the migration process.
                  </p>
                  <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                    <pre className="text-gray-300">
                      <code>{`// Enable debug mode
<ThredProvider 
  apiKey={process.env.REACT_APP_THRED_API_KEY}
  debug={true}
>
  <YourApp />
</ThredProvider>`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Check Browser Console</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    The SDK logs detailed information to the browser console. Check for any error messages or warnings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Verify API Key Permissions</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Make sure your API key has the necessary permissions for the operations you're trying to perform.
                  </p>
                  <div className="bg-black/50 border border-[#00FF00]/20 p-4 rounded-none font-mono text-sm">
                    <pre className="text-gray-300">
                      <code>{`// Check API key permissions
curl -X GET "https://api.thred.ai/v1/permissions" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Contact Support</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    If you're still having issues, contact our support team for assistance.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#00FF00]/30 text-[#00FF00] hover:bg-[#00FF00]/10 rounded-none"
                    onClick={() => window.open("mailto:support@thred.ai", "_blank")}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </div>
              </div>
            </section>

            <div className="border-t border-[#00FF00]/20 pt-8 mt-16">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm text-gray-500 mb-4 md:mb-0">Last updated: March 17, 2025</div>
                <div className="flex items-center gap-4">
                  <Link href="#" className="text-[#00FF00] hover:underline text-sm">
                    Edit this page
                  </Link>
                  <span className="text-gray-500">|</span>
                  <Link href="#" className="text-[#00FF00] hover:underline text-sm">
                    Report an issue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function GitHub(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

