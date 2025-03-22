import { Card } from "@/components/ui/card"
import { MessageSquare, Mail, Phone, Globe, Users, LifeBuoy, Clock, MessageCircle } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-[#00FF00]/20 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">SUPPORT</h1>
          <div className="flex items-center gap-3">
            <button className="text-xs text-[#00FF00] border border-[#00FF00]/30 px-3 py-1 hover:bg-[#00FF00]/10">
              OPEN_TICKET
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Need assistance?</h2>
            <p className="text-gray-400">Contact our support team through your preferred channel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-black border border-[#00FF00]/20 p-6 hover:border-[#00FF00]/40 transition-all">
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="h-10 w-10 text-[#00FF00] mb-4" />
                <h3 className="text-lg font-bold mb-2">Live Chat</h3>
                <p className="text-sm text-gray-400 mb-4">Chat directly with our support engineers.</p>
                <button className="text-xs text-[#00FF00] border border-[#00FF00]/30 px-3 py-1 hover:bg-[#00FF00]/10 mt-auto">
                  START_CHAT
                </button>
              </div>
            </Card>

            <Card className="bg-black border border-[#00FF00]/20 p-6 hover:border-[#00FF00]/40 transition-all">
              <div className="flex flex-col items-center text-center">
                <Mail className="h-10 w-10 text-[#00FF00] mb-4" />
                <h3 className="text-lg font-bold mb-2">Email Support</h3>
                <p className="text-sm text-gray-400 mb-4">Send us an email and we'll respond within 24 hours.</p>
                <a
                  href="mailto:support@thred.ai"
                  className="text-xs text-[#00FF00] border border-[#00FF00]/30 px-3 py-1 hover:bg-[#00FF00]/10 mt-auto"
                >
                  SEND_EMAIL
                </a>
              </div>
            </Card>

            <Card className="bg-black border border-[#00FF00]/20 p-6 hover:border-[#00FF00]/40 transition-all">
              <div className="flex flex-col items-center text-center">
                <Phone className="h-10 w-10 text-[#00FF00] mb-4" />
                <h3 className="text-lg font-bold mb-2">Phone Support</h3>
                <p className="text-sm text-gray-400 mb-4">Call us directly for urgent issues.</p>
                <a
                  href="tel:+18005551234"
                  className="text-xs text-[#00FF00] border border-[#00FF00]/30 px-3 py-1 hover:bg-[#00FF00]/10 mt-auto"
                >
                  CALL_SUPPORT
                </a>
              </div>
            </Card>
          </div>

          <Card className="bg-black border border-[#00FF00]/20 p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#00FF00]"></span>
              <h3 className="text-lg uppercase font-bold">SUPPORT TICKET</h3>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">SUBJECT</label>
                <input
                  type="text"
                  className="w-full bg-black border border-[#00FF00]/30 p-2 text-sm"
                  placeholder="BRIEFLY DESCRIBE YOUR ISSUE"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">CATEGORY</label>
                <select className="w-full bg-black border border-[#00FF00]/30 p-2 text-sm">
                  <option>API INTEGRATION</option>
                  <option>DATA MIGRATION</option>
                  <option>ACCOUNT & BILLING</option>
                  <option>ERROR TROUBLESHOOTING</option>
                  <option>FEATURE REQUEST</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1">PRIORITY</label>
                <select className="w-full bg-black border border-[#00FF00]/30 p-2 text-sm">
                  <option>LOW - GENERAL QUESTION</option>
                  <option>MEDIUM - MINOR ISSUE</option>
                  <option>HIGH - AFFECTING WORKFLOW</option>
                  <option>CRITICAL - SYSTEM DOWN</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1">DESCRIPTION</label>
                <textarea
                  className="w-full bg-black border border-[#00FF00]/30 p-2 text-sm min-h-[120px]"
                  placeholder="PLEASE PROVIDE DETAILS ABOUT YOUR ISSUE"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm mb-1">ATTACHMENTS</label>
                <div className="border border-dashed border-[#00FF00]/30 p-4 text-center">
                  <p className="text-sm text-gray-400">DRAG FILES HERE OR CLICK TO UPLOAD</p>
                  <p className="text-xs text-gray-500 mt-1">SUPPORTS PNG, JPG, PDF, LOG (MAX 10MB)</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-black bg-[#00FF00] border border-[#00FF00] px-4 py-2 font-bold hover:bg-[#00FF00]/90"
              >
                SUBMIT_TICKET
              </button>
            </form>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-black border border-[#00FF00]/20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-[#00FF00]" />
                <h3 className="font-bold">SELF-SERVICE RESOURCES</h3>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="hover:text-[#00FF00] cursor-pointer flex items-center gap-2">
                  <span>→</span> Knowledge Base
                </li>
                <li className="hover:text-[#00FF00] cursor-pointer flex items-center gap-2">
                  <span>→</span> API Documentation
                </li>
                <li className="hover:text-[#00FF00] cursor-pointer flex items-center gap-2">
                  <span>→</span> Video Tutorials
                </li>
                <li className="hover:text-[#00FF00] cursor-pointer flex items-center gap-2">
                  <span>→</span> Frequently Asked Questions
                </li>
                <li className="hover:text-[#00FF00] cursor-pointer flex items-center gap-2">
                  <span>→</span> Troubleshooting Guide
                </li>
              </ul>
            </Card>

            <Card className="bg-black border border-[#00FF00]/20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-[#00FF00]" />
                <h3 className="font-bold">COMMUNITY</h3>
              </div>

              <ul className="space-y-3 text-sm">
                <li className="hover:text-[#00FF00] cursor-pointer flex items-center gap-2">
                  <span>→</span> Developer Forum
                </li>
                <li className="hover:text-[#00FF00] cursor-pointer flex items-center gap-2">
                  <span>→</span> GitHub Discussions
                </li>
                <li className="hover:text-[#00FF00] cursor-pointer flex items-center gap-2">
                  <span>→</span> Slack Community
                </li>
                <li className="hover:text-[#00FF00] cursor-pointer flex items-center gap-2">
                  <span>→</span> Discord Server
                </li>
                <li className="hover:text-[#00FF00] cursor-pointer flex items-center gap-2">
                  <span>→</span> Stack Overflow Questions
                </li>
              </ul>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black border border-[#00FF00]/20 p-4">
              <div className="flex flex-col items-center text-center">
                <LifeBuoy className="h-8 w-8 text-[#00FF00] mb-2" />
                <h4 className="font-bold mb-1">PRIORITY SUPPORT</h4>
                <p className="text-xs text-gray-400">
                  Enterprise customers get dedicated support with 1-hour response time.
                </p>
              </div>
            </Card>

            <Card className="bg-black border border-[#00FF00]/20 p-4">
              <div className="flex flex-col items-center text-center">
                <Clock className="h-8 w-8 text-[#00FF00] mb-2" />
                <h4 className="font-bold mb-1">SUPPORT HOURS</h4>
                <p className="text-xs text-gray-400">
                  24/7 for critical issues. Standard support: Mon-Fri, 9AM-6PM EST.
                </p>
              </div>
            </Card>

            <Card className="bg-black border border-[#00FF00]/20 p-4">
              <div className="flex flex-col items-center text-center">
                <MessageCircle className="h-8 w-8 text-[#00FF00] mb-2" />
                <h4 className="font-bold mb-1">AVERAGE RESPONSE</h4>
                <p className="text-xs text-gray-400">
                  Critical: &lt;1hr, High: &lt;4hrs, Medium: &lt;8hrs, Low: &lt;24hrs
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

