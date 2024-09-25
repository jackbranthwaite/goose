import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/scene/Scene'), {
  ssr: false
})

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <Scene />
    </div>
  )
}
