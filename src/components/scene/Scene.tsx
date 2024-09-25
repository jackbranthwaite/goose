'use client'
import React, { Suspense } from 'react'
import s from './Scene.module.scss'
import { Canvas } from '@react-three/fiber'
import { Goose } from '../goose/Goose'
import {
  useProgress,
  Html,
  ScrollControls,
  OrbitControls
} from '@react-three/drei'

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)}% loaded</Html>
}

export default function Scene() {
  return (
    <div className={s.canvasWrapper}>
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <directionalLight intensity={6} position={[2, 2, 1]} />
        {/* Add 3D objects here */}
        <Suspense fallback={<Loader />}>
          <ScrollControls damping={0.2} pages={3}>
            <Goose />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}
