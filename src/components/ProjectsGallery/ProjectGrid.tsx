import ProjectCard from "../ProjectsGallery/ProjectCard";
import ProjectModal from "../ProjectsGallery/ProjectModal";
import React, { useState } from "react";

interface Project {
    id: number;
    name: string;
    workImage: string;
    shortDescription: string;
    features: string[];
    tools: {
        programming_language: string[];
        used_tools: string[];
    };
    githubLink: string;
    liveLink: string;
}

interface ProjectGridProps {
    projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
    const [openModalId, setOpenModalId] = useState<number | null>(null);

    const openDialog = (projectId: number) => {
        setOpenModalId(projectId);
    };

    const closeDialog = () => {
        setOpenModalId(null);
    };

    return (
        <div className="relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="opacity-0 translate-y-8 animate-fade-in-up cursor-pointer"
                        onClick={() => openDialog(project.id)}
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            <ProjectModal projects={projects} openModalId={openModalId} onClose={closeDialog} />
        </div>
    );
};

export default ProjectGrid;
