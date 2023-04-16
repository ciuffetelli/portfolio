import Image from 'next/image';
import ReactGA from 'react-ga';

import projects from 'models/projects';

import Template from 'Template';
import { SectionTitle } from 'Components/SectionTitle';
import { ProjectDetails } from 'Components/ProjectDetails';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectsFilter, Filters } from 'Components/ProjectsFilter';

export default function Projects() {
    const projectList = projects.all()
    const availableFilters = projectList.reduce((state: Filters, project) => {

        const stacks = (state.stacks.includes(project.stacks[0])) ? state.stacks : [...state.stacks, ...project.stacks]
        const types = (state.types.includes(project.type)) ? state.types : [...state.types, project.type]

        return {
            ...state,
            stacks,
            types,
        }
    }, {
        stacks: [],
        types: [],
    })

    const handleProjectImageClick = (project: string) => {
        ReactGA.event({
            category: 'Project-Image',
            action: 'Click',
            label: project,
        });
    } 

    return (
        <Template title='Projects' back={{title: 'Home', href: '/'}}>

            <ProjectsFilter stacks={availableFilters.stacks} types={availableFilters.types} />

            <div className='container'>
                { projectList.map((project, index) => (
                    <div key={index} data-stacks={project.stacks} data-types={project.type} className='mt-4 ease-in-out duration-200' style={{opacity: 1}}>
                        
                        <div className='p-4'>
                            <SectionTitle title={project.title} />
                        </div>

                        <div className={`flex ${index % 2 === 0 ? 'flex-wrap-reverse' : 'flex-wrap'} mt-4`}>
                            { index % 2 === 0 && <ProjectDetails project={project} />}
                            <div className={`flex flex-1 md:justify-${index % 2 === 0 ? 'start' : 'end'} pb-2 md:p-2 md:p${index % 2 === 0 ? 'l' : 'r'}-4`}>
                                <div className={`relative w-64 h-64 md:w-96 md:h-96 m-auto border-2 rounded-xl ${project.background}`}>
                                    <Image src={project.image} alt={project.title} fill className='rounded-xl' />
                                    { project.href && (
                                        <a href={project.href} target='_blank' rel="noreferrer" onClick={() => handleProjectImageClick(project.title)} className='flex absolute w-full h-full justify-center items-center bg-slate-700/75 opacity-0 hover:opacity-100 rounded-xl cursor-pointer ease-in-out duration-200'>
                                            <FaExternalLinkAlt className='text-8xl' />
                                        </a>
                                    )}
                                </div>
                            </div>
                            { index % 2 !== 0 && <ProjectDetails project={project} />}                        
                        </div>
                    </div>
                ))}
            </div>

        </Template>
    )
}