import { Studio } from 'sanity'
import config from '../../sanity.config'

export default function SanityStudioPage() {
  return (
    <div style={{ height: '100vh', position: 'fixed', inset: 0, zIndex: 9999 }}>
      <Studio config={config} />
    </div>
  )
}
