import { getAllProjects, getProject } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map(project => ({
    'project-slug': project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: { 'project-slug': string } }) {
  const project = getProject(params['project-slug'])
  if (!project) return notFound()

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-gray-700">{project.description}</p>
      <img src={project.image} alt={project.title} className="mt-6 rounded-lg shadow-md" />
    </main>
  )
}
