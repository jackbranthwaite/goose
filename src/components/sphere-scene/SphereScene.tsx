'use client'
import React from 'react'
import s from './SphereScene.module.scss'
import { Canvas } from '@react-three/fiber'
import { Sphere } from '../sphere/Sphere'
import {
  AccumulativeShadows,
  OrbitControls,
  RandomizedLight
} from '@react-three/drei'
import { Env } from './env/Env'

export default function SphereScene() {
  return (
    <div className={s.sphereSceneWrapper}>
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <group position={[0, -0.65, 0]}>
          <Sphere />
          <AccumulativeShadows
            temporal
            frames={200}
            color="purple"
            colorBlend={1}
            opacity={1}
            scale={10}
            alphaTest={0.85}
          >
            <RandomizedLight
              amount={8}
              radius={5}
              ambient={0.5}
              position={[5, 3, 2]}
              bias={0.001}
            />
          </AccumulativeShadows>
        </group>
        <Env />
        <OrbitControls
          autoRotate
          autoRotateSpeed={4}
          enablePan={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
          enableZoom={false}
        />
      </Canvas>
    </div>
  )
}
