'use client'
import React from 'react'
import s from './SphereScene.module.scss'
import { Canvas } from '@react-three/fiber'

export default function SphereScene() {
  return (
    <div className={s.sphereSceneWrapper}>
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <group position={[0, -0.65, 0]}></group>
      </Canvas>
    </div>
  )
}
