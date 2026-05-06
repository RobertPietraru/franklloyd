import { getProject, getAdjacentProjects } from '$lib/data/projects';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const project = getProject(params.slug);
	if (!project) error(404, 'Proiect negăsit');
	const adjacent = getAdjacentProjects(params.slug);
	return { project, ...adjacent };
};
