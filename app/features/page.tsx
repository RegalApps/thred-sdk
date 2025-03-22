import SdkFeatures from "@/components/sdk-features"
import { Card } from "@/components/ui/card"
import { Code, Bot, Database, Shield, Workflow, BarChart, Layers } from "lucide-react"
import FeatureCard from "@/components/feature-card"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-[#00FF00]/20 bg-black/50 backdrop-blur-sm sticky top-0 z-10"></header>

      <main className="flex-1 overflow-auto w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-4xl font-weight-500 mb-4 leading-tight">
              EXPLORE THE THRED_AI MIGRATION SDK.
              <br />
              YOUR SECRET WEAPON AGAINST VENDOR LOCK-IN.
            </h2>
          </div>

          <SdkFeatures />

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-lg font-weight-500 uppercase">ADDITIONAL FEATURES</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Database className="h-5 w-5 text-[#39FF14]" />}
                title="Multi-Database Support"
                description="Connect and migrate data between SQL, NoSQL, and graph databases with automatic schema mapping."
              />

              <FeatureCard
                icon={<Shield className="h-5 w-5 text-[#39FF14]" />}
                title="Enterprise Security"
                description="End-to-end encryption, role-based access control, and compliance with SOC2, GDPR, and HIPAA."
              />

              <FeatureCard
                icon={<Workflow className="h-5 w-5 text-[#39FF14]" />}
                title="Custom Workflows"
                description="Create complex data transformation pipelines with conditional logic and validation rules."
              />

              <FeatureCard
                icon={<BarChart className="h-5 w-5 text-[#39FF14]" />}
                title="Migration Analytics"
                description="Detailed insights into migration performance, data quality, and system optimization."
              />

              <FeatureCard
                icon={<Layers className="h-5 w-5 text-[#39FF14]" />}
                title="Versioning & Rollback"
                description="Track changes with point-in-time recovery and the ability to revert to previous states."
              />

              <FeatureCard
                icon={<Bot className="h-5 w-5 text-[#39FF14]" />}
                title="AI Data Enrichment"
                description="Automatically enhance migrated data with AI-powered entity recognition and classification."
              />
            </div>
          </div>

          <Card className="bg-black border border-[#00FF00]/20 p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-weight-500 mb-3 flex items-center">
                <Code className="h-5 w-5 text-[#00FF00] mr-2" />
                SDK Implementation Example
              </h3>
            </div>

            <div className="bg-black/50 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
              <pre className="text-gray-300">
                <code>{`
// Add the Thred Migration Button to your app
import { ThredMigration } from '@thred/migration-sdk';

const MigrationButton = () => {
  return (
    <ThredMigration 
      apiKey={process.env.THRED_API_KEY}
      sourceApp="zendesk"
      buttonText="Migrate from Zendesk"
      onComplete={(data) => {
        console.log(\`Migration complete: \${data.recordsCount} records\`);
      }}
    />
  );
};
`}</code>
              </pre>
            </div>

            <div className="text-sm text-gray-400">
              This example demonstrates how to add the Thred Migration Button to your app, configure it with Zendesk as
              the source, and handle the completion event when migration is finished.
            </div>
          </Card>

          <div className="text-center p-6 bg-black border border-[#00FF00]/20 rounded-lg">
            <h3 className="text-lg font-weight-500 mb-2">Ready to integrate the Migration SDK?</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get started with our comprehensive documentation and developer resources.
            </p>
            <div className="flex justify-center gap-4">
              <button className="text-xs text-[#00FF00] border border-[#00FF00]/30 px-4 py-2 hover:bg-[#00FF00]/10">
                VIEW_DOCUMENTATION
              </button>
              <button className="text-xs text-black bg-[#00FF00] border border-[#00FF00] px-4 py-2 hover:bg-[#00FF00]/90">
                GET_API_KEY
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

