
import { getProject, getAllProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map(project => ({
    'project-slug': project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: { 'project-slug': string } }) {
  const project = getProject(params['project-slug']);
  if (!project) return notFound();

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-6">{project.description}</p>
      <img src={project.image} alt={project.title} className="rounded-xl shadow" />
    </main>
  );
}
