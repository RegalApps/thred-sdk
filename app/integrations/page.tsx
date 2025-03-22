import ConnectorsList from "@/components/ConnectorsList"

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-[#00FF00]/20 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">INTEGRATIONS</h1>
        </div>
      </header>

      <main className="flex-1 overflow-auto w-full">
        <div className="container mx-auto px-4 py-8">
          <ConnectorsList />
        </div>
      </main>
    </div>
  )
}

