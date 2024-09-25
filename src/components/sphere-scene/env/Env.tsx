import React, { useState, useTransition } from 'react'
import s from './Env.module.scss'
import { Environment } from '@react-three/drei'
import { useControls } from 'leva'

export const Env = () => {
  const [preset, setPreset] = useState<
    | 'sunset'
    | 'dawn'
    | 'night'
    | 'warehouse'
    | 'forest'
    | 'apartment'
    | 'studio'
    | 'city'
    | 'park'
    | 'lobby'
    | undefined
  >('sunset')
  const [inTransition, startTransition] = useTransition()

  const { blur } = useControls({
    blur: { value: 0.65, min: 0, max: 1 },
    preset: {
      value: preset,
      options: [
        'sunset',
        'dawn',
        'night',
        'warehouse',
        'forest',
        'apartment',
        'studio',
        'city',
        'park',
        'lobby'
      ],
      onChange: (value) => startTransition(() => setPreset(value))
    }
  })

  return <Environment preset={preset} background blur={blur} />
}
