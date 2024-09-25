import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/sphere-scene/SphereScene'), {
  ssr: false
})

export default function Goose() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <Scene />
    </div>
  )
}
