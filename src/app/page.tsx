import dynamic from 'next/dynamic'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link href={'/goose'}>goose</Link>
        <Link href={'/sphere'}>sphere</Link>
      </div>
    </div>
  )
}
