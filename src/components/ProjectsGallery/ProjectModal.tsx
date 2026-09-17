import React from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaTools } from "react-icons/fa";

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

interface ProjectModalProps {
    projects: Project[];
    openModalId: number | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ projects, openModalId, onClose }) => {
    // const dialogRef = useRef<HTMLDialogElement>(null);

    // useEffect(() => {
    //     const dialog = dialogRef.current;
    //     if (!dialog) return;

    //     if (openModalId !== null) {
    //         dialog.showModal();
    //     } else {
    //         dialog.close();
    //     }
    // }, [openModalId]);

    // const handleClose = () => {
    //     onClose();
    // };

    const currentProject = projects.find((project) => project.id === openModalId);

    if (!currentProject) return null;

    return (
        <dialog className="border-none rounded-2xl" open={openModalId !== null} onClose={onClose} >
            <div className="block justify-center items-center">
                <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative">
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 w-10 h-10 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center z-10 transition-all duration-300 hover:scale-110"
                        onClick={onClose}
                        aria-label="Close project details"
                    >
                        <FaTimes />
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                        {/* Project Image */}
                        <div className="bg-gray-50 flex items-center justify-center p-8">
                            <img
                                src={currentProject.workImage}
                                alt={`Screenshot of ${currentProject.name}`}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Project Details */}
                        <div className="p-8 lg:p-12 overflow-y-auto">
                            <div className="mb-8">
                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                    {currentProject.name}
                                </h1>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {currentProject.shortDescription}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <a
                                    href={currentProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-black text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1"
                                    aria-label={`View source code for ${currentProject.name} on GitHub`}
                                >
                                    <FaGithub />
                                    <span>View Code</span>
                                </a>
                                <a
                                    href={currentProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30"
                                    aria-label={`View live demo of ${currentProject.name}`}
                                >
                                    <FaExternalLinkAlt />
                                    <span>Live Demo</span>
                                </a>
                            </div>

                            {/* Features Section */}
                            <div className="mb-8">
                                <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-4">
                                    <FaCode className="text-purple-500" />
                                    Features
                                </h3>
                                <ul className="space-y-2" role="list">
                                    {currentProject.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-700 pl-6 relative">
                                            <span
                                                className="absolute left-0 top-2 text-purple-500 font-bold"
                                                aria-hidden="true"
                                            >
                                                →
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies Section */}
                            <div>
                                <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 mb-4">
                                    <FaTools className="text-purple-500" />
                                    Technologies
                                </h3>

                                {/* Programming Languages */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                                        Languages
                                    </h4>
                                    <div className="flex flex-wrap gap-2" role="list">
                                        {currentProject.tools.programming_language.map((lang, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                                role="listitem"
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Tools */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                                        Tools & Frameworks
                                    </h4>
                                    <div className="flex flex-wrap gap-2" role="list">
                                        {currentProject.tools.used_tools.map((tool, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                                role="listitem"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default ProjectModal;
