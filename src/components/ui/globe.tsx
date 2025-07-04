"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 1500,
  height: 1500,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0,
  dark: 1,
  diffuse: 0.7,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 0, 0],
  glowColor: [0.53, 0.81, 0.98],
  markers: [
    { location: [30.0444, 31.2357], size: 0.08 },      // Cairo 🇪🇬
    { location: [40.7128, -74.006], size: 0.08 },      // New York 🇺🇸
    { location: [43.651070, -79.347015], size: 0.08 }, // Toronto 🇨🇦
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
  focusLocation,
}: {
  className?: string
  config?: COBEOptions
  focusLocation?: [number, number] | null
}) {
  const phiRef = useRef(0)
  const thetaRef = useRef(0)
  const widthRef = useRef(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<boolean>(false)
  const lastPointer = useRef<{ x: number; y: number } | null>(null)
  const autoRotateRef = useRef(true)
  const [r, setR] = useState(0)

  const [_, rerender] = useState(false)

  const onResize = () => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (autoRotateRef.current && !pointerInteracting.current) {
          phiRef.current += 0.002
        }

        state.phi = phiRef.current
        state.theta = thetaRef.current
        state.width = widthRef.current * 2
        state.height = widthRef.current * 2
      },
    })

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1"
    }, 300)

    return () => globe.destroy()
  }, [config, r])

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    pointerInteracting.current = true
    lastPointer.current = { x: e.clientX, y: e.clientY }
    canvasRef.current!.style.cursor = "grabbing"
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (pointerInteracting.current && lastPointer.current) {
      const deltaX = e.clientX - lastPointer.current.x
      const deltaY = e.clientY - lastPointer.current.y
      phiRef.current += deltaX / 200
      thetaRef.current += deltaY / 200
      thetaRef.current = Math.max(-1.2, Math.min(1.2, thetaRef.current))
      lastPointer.current = { x: e.clientX, y: e.clientY }
      rerender((r) => !r)
    }
  }

  const handlePointerUp = () => {
    pointerInteracting.current = false
    lastPointer.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
  }

    useEffect(() => {
    if (focusLocation) {
      autoRotateRef.current = false;
  
      const [lat, lng] = focusLocation;
  
       const lngOffset = -0.25 * 360 // 18% من المحيط
        phiRef.current = -(lng - lngOffset) * (Math.PI / 180) // لليسار
        thetaRef.current = lat * (Math.PI / 180) - 0.5 // لأعلى
        setR(0)

  
      const timeout = setTimeout(() => {
        autoRotateRef.current = true;
      }, 1000);
  
      return () => clearTimeout(timeout);
    }
  }, [focusLocation]);


  return (
    <div
      className={cn(
        "absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] aspect-[1/1] overflow-visible scale-[1.5] translate-y-1/3",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp}
        onTouchMove={(e) =>
          e.touches[0] &&
          handlePointerMove({
            clientX: e.touches[0].clientX,
            clientY: e.touches[0].clientY,
          } as any)
        }
      />
    </div>
  )
}
