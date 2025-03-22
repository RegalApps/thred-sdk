"use client"

import Link from "next/link"
import { ArrowRight, Code, Zap, Shield, Clock, Database, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import PricingCard from "@/components/pricing-card"
import TestimonialCard from "@/components/testimonial-card"
import MigrationDemo from "@/components/migration-demo"
import AnimatedLocks from "@/components/animated-locks"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex flex-col min-h-screen w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-[#00FF00]/20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <Image
            src="/thred_logo.svg"
            alt="Thred Logo Background"
            width={1000}
            height={1000}
            className="w-[150%] max-w-none opacity-50"
            style={{ transform: "rotate(30deg)" }}
            priority
            loading="eager"
            onLoad={(e) => console.log("Logo loaded successfully")}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block bg-[#00FF00]/10 px-4 py-2 rounded-md mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#00FF00]" />
                  <span className="text-sm font-mono">KILL VENDOR LOCK-IN</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold leading-tight uppercase tracking-tight text-white">
                <div>ONE_CLICK</div>
                <div>MIGRATION SDK</div>
                <div>FOR SAAS PLATFORMS</div>
              </h1>

              <p className="text-xl text-white max-w-2xl">
                Stop spending engineering hours on clunky migration scripts. Thred instantly syncs user data, tickets,
                and workflows between platforms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90 rounded-none">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00FF00]/30 text-[#00FF00] hover:bg-[#00FF00]/10 rounded-none"
                  onClick={() => router.push("/documentation")}
                >
                  View Documentation
                </Button>
              </div>
            </div>

            <div className="flex-1">
              <MigrationDemo />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 border-b border-[#00FF00]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-weight-500 mb-4">THRED JUST WORKS</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Seamlessly migrate user profiles, tickets, and workflows between SaaS platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-[#00FF00]/20 p-6 hover:border-[#00FF00]/40 transition-all">
              <div className="h-12 w-12 rounded-none bg-[#00FF00]/10 flex items-center justify-center mb-4">
                <span className="text-[#00FF00] text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Embed the SDK</h3>
              <p className="text-gray-400">
                Add a "Connect to [Competitor]" button to your onboarding flow with a few lines of code.
              </p>
            </div>

            <div className="bg-black border border-[#00FF00]/20 p-6 hover:border-[#00FF00]/40 transition-all">
              <div className="h-12 w-12 rounded-none bg-[#00FF00]/10 flex items-center justify-center mb-4">
                <span className="text-[#00FF00] text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Connect APIs</h3>
              <p className="text-gray-400">
                Users authenticate with their existing SaaS provider, granting secure access to their data.
              </p>
            </div>

            <div className="bg-black border border-[#00FF00]/20 p-6 hover:border-[#00FF00]/40 transition-all">
              <div className="h-12 w-12 rounded-none bg-[#00FF00]/10 flex items-center justify-center mb-4">
                <span className="text-[#00FF00] text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Automated Migration</h3>
              <p className="text-gray-400">
                Thred AI handles the complex data mapping, transformation, and migration in the background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-b border-[#00FF00]/20">
        <div className="container mx-auto px-4">
          <div className="inline-block bg-[#00FF00]/10 px-4 py-2 rounded-md mb-4">
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-[#00FF00]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                <line x1="10" y1="15" x2="14" y2="15"></line>
              </svg>
              <span className="text-sm font-mono">FOR REBELS BY REBELS</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 mb-16">
            {/* Left side with text */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-weight-500 mb-4">INCUMBENTS WILL HATE YOU</h2>
              <p className="text-xl text-gray-400 mb-6">
                Steal their data moat and free your customers from vendor lock-in. Migrate users at scale.
              </p>
              <div className="bg-black/30 border border-[#00FF00]/20 p-4 rounded-none mb-6">
                <p className="text-sm text-gray-400 italic">
                  "The most dangerous tool we've seen in years. It completely neutralizes our customer retention
                  strategy."
                  <span className="block mt-2 text-xs">— Anonymous Big Tech Executive</span>
                </p>
              </div>
              <Button className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90 rounded-none w-full md:w-auto">
                VIEW IMPLEMENTATION GUIDE
              </Button>
            </div>

            {/* Right side with animated locks */}
            <div className="flex-1">
              <AnimatedLocks />
            </div>
          </div>

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-weight-500 mb-3">ENGINEERED TO MIGRATE. DESIGNED TO STEAL.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Automate SaaS-to-SaaS Migration. No Scripts. No Downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code className="h-5 w-5 text-[#00FF00]" />}
              title="Embeddable Migration UI"
              description="Add a branded migration button to your app with minimal code changes."
            />

            <FeatureCard
              icon={<Database className="h-5 w-5 text-[#00FF00]" />}
              title="Automated Data Mapping"
              description="AI-powered field mapping between different data schemas and structures."
            />

            <FeatureCard
              icon={<Bot className="h-5 w-5 text-[#00FF00]" />}
              title="AI-Powered Transformations"
              description="Intelligent data transformations that preserve relationships and context."
            />

            <FeatureCard
              icon={<Shield className="h-5 w-5 text-[#00FF00]" />}
              title="Secure OAuth Connections"
              description="Secure API connections with OAuth for seamless user authentication."
            />

            <FeatureCard
              icon={<Clock className="h-5 w-5 text-[#00FF00]" />}
              title="Real-time Progress Tracking"
              description="Monitor migration progress with detailed analytics and status updates."
            />

            <FeatureCard
              icon={<Zap className="h-5 w-5 text-[#00FF00]" />}
              title="Incremental Syncing"
              description="Keep data in sync during migration for a seamless transition period."
            />
          </div>

          <div className="mt-16 text-center">
            <Link href="/features" className="text-[#00FF00] hover:underline inline-flex items-center">
              View All Features <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-20 border-b border-[#00FF00]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-weight-500 mb-4">REAL-WORLD USE CASES</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Thred helps businesses eliminate vendor lock-in and simplify migrations.
            </p>
          </div>

          <div className="bg-black/30 border border-[#00FF00]/20 p-8 rounded-none mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-weight-500 mb-4">Figma's Migration from Zendesk to Pylon</h3>
                <div className="mb-4 text-sm">
                  <span className="bg-[#00FF00]/10 text-[#00FF00] px-2 py-1">HYPOTHETICAL CASE STUDY</span>
                </div>
                <p className="text-gray-400 mb-6">
                  As Figma's Director of IT, David Vega faced the daunting task of migrating years of support data from
                  Zendesk to Pylon. What would have taken months of engineering work was completed in days with Thred AI
                  SDK.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00FF00]">✓</span>
                    <span>Migrated 50,000+ support tickets with full history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00FF00]">✓</span>
                    <span>Preserved all user assignments and custom workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00FF00]">✓</span>
                    <span>Reduced migration time from 3 months to 2 days</span>
                  </li>
                </ul>
                <Button className="bg-[#39FF14] text-black hover:bg-[#39FF14]/90 rounded-none font-medium" asChild>
                  <Link href="/case-study">Read Full Case Study</Link>
                </Button>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-[#00FF00]/30 blur-md"></div>
                  <div className="relative bg-black border border-[#00FF00]/40 p-6 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[#00FF00]">$</span>
                      <span className="text-gray-400">MIGRATION_SUMMARY</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>TICKETS_MIGRATED:</span>
                        <span className="text-[#00FF00]">53,421</span>
                      </div>
                      <div className="flex justify-between">
                        <span>USERS_MAPPED:</span>
                        <span className="text-[#00FF00]">1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CUSTOM_FIELDS:</span>
                        <span className="text-[#00FF00]">32</span>
                      </div>
                      <div className="flex justify-between">
                        <span>WORKFLOWS:</span>
                        <span className="text-[#00FF00]">18</span>
                      </div>
                      <div className="flex justify-between">
                        <span>TIME_SAVED:</span>
                        <span className="text-[#00FF00]">~720 HOURS</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ENGINEERING_COST_SAVED:</span>
                        <span className="text-[#00FF00]">$108,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Thred AI SDK eliminated the biggest barrier to customer acquisition. Now companies can switch to our platform without the migration headache."
              author="Sarah Chen"
              role="CPO at Linear"
              avatar="/placeholder.svg?height=64&width=64"
            />

            <TestimonialCard
              quote="We were locked into our previous tool because migration seemed impossible. Thred made it seamless to move all our data to the new platform."
              author="Michael Rodriguez"
              role="Engineering Lead at Replit"
              avatar="/placeholder.svg?height=64&width=64"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-b border-[#00FF00]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-weight-500 mb-4">TRANSPARENT AND SCALABLE PRICING.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your migration needs. All plans include our core migration features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Startup"
              price="$499"
              period="/month"
              description="Perfect for startups looking to offer migration from competitors"
              features={[
                "Up to 1,000 migrations per month",
                "5 source platforms",
                "Basic data mapping",
                "Email support",
                "Standard API rate limits",
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
            />

            <PricingCard
              title="Growth"
              price="$1,499"
              period="/month"
              description="For growing companies with more migration needs"
              features={[
                "Up to 10,000 migrations per month",
                "15 source platforms",
                "Advanced data mapping",
                "Priority email support",
                "Higher API rate limits",
                "Custom branding",
              ]}
              buttonText="Get Started"
              buttonVariant="default"
              highlighted={true}
            />

            <PricingCard
              title="Enterprise"
              price="Custom"
              period=""
              description="For large organizations with complex migration requirements"
              features={[
                "Unlimited migrations",
                "Unlimited source platforms",
                "AI-powered data transformations",
                "Dedicated support manager",
                "Custom integrations",
                "SLA guarantees",
                "On-premise deployment option",
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-black to-black border border-[#00FF00]/40 p-12 rounded-none text-center">
            <h2 className="text-3xl md:text-4xl font-weight-500 mb-6">YOU NEVER FORGET YOUR FIRST MIGRATION</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join the companies that are making migrations seamless for their customers. Get started with Thred today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90 rounded-none">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#00FF00]/30 text-[#00FF00] hover:bg-[#00FF00]/10 rounded-none"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

