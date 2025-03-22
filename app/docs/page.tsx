import Link from "next/link"
import { Search, FileText, Code, Play, BookOpen, Coffee, Star, ArrowRight, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import CodeSnippet from "@/components/code-snippet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocumentationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-[#00FF00]/20 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">DOCUMENTATION</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="SEARCH DOCS..."
                className="pl-8 pr-3 py-1 bg-black border border-[#00FF00]/30 text-xs text-white focus:border-[#00FF00]/60 focus:outline-none rounded-none"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-[#00FF00]/30 text-[#00FF00] hover:bg-[#00FF00]/10 rounded-none"
            >
              <GitHub className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Main content - now full width */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-8">
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
            </div>

            <div className="mb-12">
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
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-weight-500 mb-4">Quick Start</h2>
              <p className="text-gray-400 mb-6">
                Get started with Thred AI SDK in just a few minutes. Follow these steps to add migration capabilities to
                your application.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">1. Install the SDK</h3>
                <div className="relative">
                  <div className="absolute right-2 top-2 flex space-x-2">
                    <button className="text-gray-400 hover:text-white">
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="bg-black/50 border border-[#00FF00]/20 p-3 rounded-none font-mono text-sm">
                    <pre>npm install @thred/migration-sdk</pre>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Or with yarn: <code className="bg-black/30 px-1">yarn add @thred/migration-sdk</code>
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">2. Configure the SDK</h3>
                <Tabs defaultValue="react" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="react">React</TabsTrigger>
                    <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                    <TabsTrigger value="vue">Vue</TabsTrigger>
                  </TabsList>
                  <TabsContent value="react">
                    <CodeSnippet
                      code={`
// src/App.jsx
import { ThredProvider } from '@thred/migration-sdk';

function App() {
  return (
    <ThredProvider apiKey={process.env.REACT_APP_THRED_API_KEY}>
      <YourApp />
    </ThredProvider>
  );
}
                    `}
                    />
                  </TabsContent>
                  <TabsContent value="nextjs">
                    <CodeSnippet
                      code={`
// src/app/layout.tsx
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
}
                    `}
                    />
                  </TabsContent>
                  <TabsContent value="vue">
                    <CodeSnippet
                      code={`
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createThred } from '@thred/migration-sdk-vue';

const app = createApp(App);
app.use(createThred({
  apiKey: import.meta.env.VITE_THRED_API_KEY
}));
app.mount('#app');
                    `}
                    />
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">3. Add the Migration Button</h3>
                <Tabs defaultValue="react" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="react">React</TabsTrigger>
                    <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                    <TabsTrigger value="vue">Vue</TabsTrigger>
                  </TabsList>
                  <TabsContent value="react">
                    <CodeSnippet
                      code={`
// src/components/OnboardingPage.jsx
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
}
                    `}
                    />
                  </TabsContent>
                  <TabsContent value="nextjs">
                    <CodeSnippet
                      code={`
// src/app/onboarding/page.tsx
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
}
                    `}
                    />
                  </TabsContent>
                  <TabsContent value="vue">
                    <CodeSnippet
                      code={`
<!-- src/components/OnboardingPage.vue -->
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
</script>
                    `}
                    />
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mt-8">
                <Link href="/docs/quick-start" className="text-[#00FF00] hover:underline inline-flex items-center">
                  Read the full Quick Start guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-weight-500 mb-4">Core Concepts</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Migration Flow</h3>
                  <p className="text-gray-400 mb-4">
                    The Thred AI SDK handles the entire migration process through a series of steps:
                  </p>
                  <ol className="space-y-2 text-gray-400 list-decimal pl-5">
                    <li>User initiates migration by clicking the migration button</li>
                    <li>OAuth authentication with the source platform</li>
                    <li>Data discovery and schema analysis</li>
                    <li>AI-powered field mapping between platforms</li>
                    <li>Data extraction from source platform</li>
                    <li>Data transformation and normalization</li>
                    <li>Data loading into destination platform</li>
                    <li>Verification and validation of migrated data</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Data Mapping</h3>
                  <p className="text-gray-400">
                    Thred AI SDK uses machine learning to automatically map fields between different platforms. For
                    example, it understands that "ticket.requester" in Zendesk corresponds to "issue.reporter" in Jira.
                    You can also provide custom mapping rules for specific use cases.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Error Handling</h3>
                  <p className="text-gray-400">
                    The SDK includes robust error handling to manage API rate limits, connection issues, and data
                    validation errors. Failed operations are automatically retried with exponential backoff, and
                    detailed error logs are provided for troubleshooting.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/docs/core-concepts" className="text-[#00FF00] hover:underline inline-flex items-center">
                  Learn more about Core Concepts <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-weight-500 mb-4">Next Steps</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/docs/quick-start"
                  className="bg-black border border-[#00FF00]/20 p-6 hover:border-[#00FF00]/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Play className="h-5 w-5 text-[#00FF00]" />
                    <h3 className="text-lg font-medium">Quick Start Guide</h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Get up and running with Thred AI SDK in minutes with our step-by-step guide.
                  </p>
                </Link>

                <Link
                  href="/docs/api-reference"
                  className="bg-black border border-[#00FF00]/20 p-6 hover:border-[#00FF00]/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-5 w-5 text-[#00FF00]" />
                    <h3 className="text-lg font-medium">API Reference</h3>
                  </div>
                  <p className="text-gray-400 text-sm">Explore the complete API reference for Thred AI SDK.</p>
                </Link>

                <Link
                  href="/docs/examples"
                  className="bg-black border border-[#00FF00]/20 p-6 hover:border-[#00FF00]/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-[#00FF00]" />
                    <h3 className="text-lg font-medium">Examples</h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    View example implementations for different frameworks and use cases.
                  </p>
                </Link>

                <Link
                  href="/docs/faq"
                  className="bg-black border border-[#00FF00]/20 p-6 hover:border-[#00FF00]/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Coffee className="h-5 w-5 text-[#00FF00]" />
                    <h3 className="text-lg font-medium">FAQ</h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Find answers to frequently asked questions about Thred AI SDK.
                  </p>
                </Link>
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

