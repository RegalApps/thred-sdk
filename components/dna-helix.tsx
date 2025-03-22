"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

interface DNAHelixProps {
  isAnimating: boolean
  onAnimationComplete: () => void
}

export default function DNAHelix({ isAnimating, onAnimationComplete }: DNAHelixProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>()
  const startTimeRef = useRef<number>(0)
  const animationDuration = 2000 // 2 seconds for the animation

  useEffect(() => {
    if (!containerRef.current || !isAnimating) return

    // Set up scene
    const scene = new THREE.Scene()

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    // Set up renderer with alpha (transparency)
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.innerHTML = ""
    containerRef.current.appendChild(renderer.domElement)

    // Create neon green material
    const neonGreenMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      emissive: 0x00ff00,
      emissiveIntensity: 2,
    })

    // Create DNA helix
    const dnaGroup = new THREE.Group()
    scene.add(dnaGroup)

    // Parameters for the DNA
    const radius = 0.5
    const height = 3
    const turns = 2
    const strandsPerTurn = 10
    const sphereRadius = 0.1

    // Create the strands
    for (let i = 0; i < turns * strandsPerTurn; i++) {
      const angle = (i / strandsPerTurn) * Math.PI * 2
      const y = (i / (turns * strandsPerTurn)) * height - height / 2

      // First strand
      const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(sphereRadius, 8, 8), neonGreenMaterial)
      sphere1.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
      dnaGroup.add(sphere1)

      // Second strand (opposite side)
      const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(sphereRadius, 8, 8), neonGreenMaterial)
      sphere2.position.set(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius)
      dnaGroup.add(sphere2)

      // Connect the strands with "rungs"
      if (i % 2 === 0) {
        const cylinderGeometry = new THREE.CylinderGeometry(0.03, 0.03, radius * 2, 8)
        const cylinder = new THREE.Mesh(cylinderGeometry, neonGreenMaterial)
        cylinder.position.set(0, y, 0)
        cylinder.rotation.z = angle
        dnaGroup.add(cylinder)
      }
    }

    // Position the DNA initially off-screen to the left
    dnaGroup.position.x = -10

    // Animation function
    const animate = (time: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = time
      }

      const elapsedTime = time - startTimeRef.current
      const progress = Math.min(elapsedTime / animationDuration, 1)

      // Move the DNA from left to right
      dnaGroup.position.x = -10 + progress * 20 // Move from -10 to +10

      // Rotate the DNA for effect
      dnaGroup.rotation.y += 0.03

      renderer.render(scene, camera)

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate)
      } else {
        // Animation complete
        setTimeout(() => {
          onAnimationComplete()
        }, 200)
        startTimeRef.current = 0
      }
    }

    // Start the animation
    requestRef.current = requestAnimationFrame(animate)

    // Clean up
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
      renderer.dispose()
    }
  }, [isAnimating, onAnimationComplete])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: isAnimating ? 1 : 0, transition: "opacity 0.3s" }}
    />
  )
}

