import { site } from '../data/site'
import { projects } from '../data/projects'
import { logs } from '../data/logs'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import InventoryCard from '../components/InventoryCard'
import Transmission from '../components/Transmission'
import LogCard from '../components/LogCard'

const { inventory, transmissions, logs: logsSection } = site.sections

export default function Home() {
  return (
    <>
      <Hero />

      <section id="inventory">
        <SectionHeader
          module={inventory.module}
          title={inventory.title}
          meta={`TOTAL UNITS: ${String(projects.length).padStart(2, '0')}`}
        />
        <div className="inventory-grid">
          {projects.map((project) => (
            <InventoryCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="transmissions" style={{ background: 'rgba(0,0,0,0.05)', padding: '100px 0' }}>
        <SectionHeader module={transmissions.module} title={transmissions.title} meta={transmissions.meta} />
        <Transmission />
      </section>

      <section id="logs">
        <SectionHeader module={logsSection.module} title={logsSection.title} meta={logsSection.meta} />
        <div className="log-list">
          {logs.map((log) => (
            <LogCard key={log.slug} log={log} />
          ))}
        </div>
      </section>
    </>
  )
}
