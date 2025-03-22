"use client"

import { useEffect, useState, useRef } from "react"

export default function AnimatedLocks() {
  const [unlockedStates, setUnlockedStates] = useState([false, false, false, false, false])
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Create an Intersection Observer to detect when the component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        // If the component is visible and hasn't animated yet
        if (entries[0].isIntersecting && !hasAnimated) {
          console.log("AnimatedLocks is now visible, starting animation")
          setHasAnimated(true)

          // Sequentially unlock the locks with delays
          const unlockSequence = [0, 1, 2, 3, 4]

          unlockSequence.forEach((lockIndex, i) => {
            setTimeout(
              () => {
                setUnlockedStates((prev) => {
                  const newState = [...prev]
                  newState[lockIndex] = true
                  return newState
                })
              },
              500 + i * 800, // Start sooner (500ms) for more immediate feedback
            )
          })
        }
      },
      {
        threshold: 0.1, // Lower threshold - trigger when just 10% is visible
        rootMargin: "0px 0px -100px 0px", // Trigger a bit before the element is fully in view
      },
    )

    // Start observing the container
    if (containerRef.current) {
      observer.observe(containerRef.current)
      console.log("Observer attached to AnimatedLocks")
    }

    // Clean up the observer when component unmounts
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [hasAnimated])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[300px] flex flex-col items-center justify-center"
      data-animation-triggered={hasAnimated ? "true" : "false"}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>

      {/* Terminal window frame */}
      <div className="relative w-full max-w-md bg-black border border-[#00FF00]/40 rounded-sm overflow-hidden shadow-[0_0_15px_rgba(0,255,0,0.3)]">
        {/* Terminal header */}
        <div className="bg-black border-b border-[#00FF00]/30 p-2 flex items-center">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-gray-400 mx-auto font-mono">THE_SPICE_MUST_FLOW.exe</div>
        </div>

        {/* Terminal content */}
        <div className="p-4 font-mono text-sm">
          <div className="mb-4">
            <span className="text-gray-300">initiating_vendor_lockpick.sh</span>
          </div>

          {/* Locks */}
          <div className="space-y-4">
            {unlockedStates.map((isUnlocked, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`transition-all duration-500 ${isUnlocked ? "text-[#00FF00]" : "text-gray-500"}`}>
                  {isUnlocked ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 animate-pulse"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <div
                    className={`h-1 ${isUnlocked ? "bg-[#00FF00]" : "bg-gray-700"} rounded-full overflow-hidden transition-all duration-700 relative`}
                  >
                    {isUnlocked && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00FF00] to-[#7FFF7F] animate-pulse"></div>
                    )}
                  </div>
                </div>
                <div
                  className={`text-xs ${isUnlocked ? "text-[#00FF00]" : "text-gray-500"} min-w-[100px] transition-all duration-500`}
                >
                  {isUnlocked ? <span className="animate-pulse">ACCESS_GRANTED</span> : <span>LOCKED</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Status messages that appear as locks are unlocked */}
          <div className="mt-6 space-y-1">
            {unlockedStates[0] && (
              <div className="text-xs text-gray-400 animate-fadeIn">
                <span className="text-[#00FF00]">&gt;</span> Bypassing authentication...
              </div>
            )}
            {unlockedStates[1] && (
              <div className="text-xs text-gray-400 animate-fadeIn">
                <span className="text-[#00FF00]">&gt;</span> Extracting customer data schema...
              </div>
            )}
            {unlockedStates[2] && (
              <div className="text-xs text-gray-400 animate-fadeIn">
                <span className="text-[#00FF00]">&gt;</span> Mapping relationships...
              </div>
            )}
            {unlockedStates[3] && (
              <div className="text-xs text-gray-400 animate-fadeIn">
                <span className="text-[#00FF00]">&gt;</span> Preparing migration pipeline...
              </div>
            )}
            {unlockedStates[4] && (
              <div className="text-xs text-gray-400 animate-fadeIn">
                <span className="text-[#00FF00] font-bold">&gt;</span>{" "}
                <span className="text-[#00FF00]">VENDOR LOCK-IN NEUTRALIZED</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

