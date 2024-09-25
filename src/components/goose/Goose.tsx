'use client'
import React, { useEffect, useRef } from 'react'
import s from './Goose.module.scss'
import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { Group } from 'three'
import { useFrame } from '@react-three/fiber'

useGLTF.preload('/goose_with_knife.glb')

export const Goose = () => {
  const group = useRef<Group | null>(null)
  const { nodes, materials, animations, scene } = useGLTF(
    '/goose_with_knife.glb'
  )

  const { actions, clips } = useAnimations(animations, scene)
  // const scroll = useScroll()

  useEffect(() => {
    // @ts-ignore
    actions['Armature|walk'].play()
  }, [])

  // If you add actions['Armature|walk'].play().paused = true above and uncomment this
  // then the animation will run on scroll
  // useFrame(
  //   () =>
  //     // @ts-ignore
  //     (actions['Armature|walk'].time =
  //       // @ts-ignore
  //       (actions['Armature|walk'].getClip().duration * scroll.offset) / 2)
  // )

  return (
    <group ref={group}>
      <primitive object={scene} scale={0.06} />
    </group>
  )
}
