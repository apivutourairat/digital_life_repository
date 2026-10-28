import { Navigate, useParams } from 'react-router-dom'
import { logs, getLog } from '../data/logs'
import ArticlePage from '../components/ArticlePage'

export default function LogPage() {
  const { slug } = useParams()
  const log = getLog(slug)
  if (!log) return <Navigate to="/" replace />

  const i = logs.indexOf(log)
  const prev = logs[i - 1]
  const next = logs[i + 1]

  return (
    <ArticlePage
      backTo="/#logs"
      backLabel="BACK TO SYSTEM LOGS"
      kicker={`LOG ENTRY #${log.number} // ${log.topic}`}
      title={log.title}
      meta={[
        { label: 'DATE', value: log.date },
        { label: 'WORDS', value: log.words },
      ]}
      blocks={log.body}
      prev={prev && { to: `/log/${prev.slug}`, label: prev.topic }}
      next={next && { to: `/log/${next.slug}`, label: next.topic }}
    />
  )
}
