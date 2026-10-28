import { Navigate, useParams } from 'react-router-dom'
import { projects, getProject } from '../data/projects'
import ArticlePage from '../components/ArticlePage'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <Navigate to="/" replace />

  const i = projects.indexOf(project)
  const prev = projects[i - 1]
  const next = projects[i + 1]

  return (
    <ArticlePage
      backTo="/#inventory"
      backLabel="BACK TO INVENTORY"
      number={project.number}
      category={project.category}
      title={project.title}
      summary={project.summary}
      meta={[...project.meta, { label: 'YEAR', value: project.date }]}
      blocks={project.body}
      prev={prev && { to: `/project/${prev.slug}`, label: prev.title }}
      next={next && { to: `/project/${next.slug}`, label: next.title }}
    />
  )
}
