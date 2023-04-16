import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import ReactGA from 'react-ga';

import projects from 'models/projects';
import Template from 'Template';
import Table from 'Components/Table';
import { ProjectStacks } from 'Components/ProjectStacks';
import { GitHub } from 'Components/GitHub';

import { FaExternalLinkAlt } from 'react-icons/fa';

type ProjectsProps = {
}
export default function Projects(props: ProjectsProps) {

    const router = useRouter()
    const { projectName } = router.query

    const project = projects.get(projectName as string)

    useEffect(() => {
        if(!project) {
            router.push('/')
        }        
    }, [])

    if(!project) return (<></>)

    const tableData: {
        [key: string]: any
    } = {
        'Type': project.type,
        'Techs': () => <ProjectStacks stacks={project.stacks} />
    }    

    const handleProjectImageClick = (project: string) => {
        ReactGA.event({
            category: 'Project-Image',
            action: 'Click',
            label: project,
        });
    } 

    return (
        <Template title={project.title} back={{title: 'Projects', href:'/projects'}}>

            <div className={`relative w-64 h-64 md:w-96 md:h-96 m-auto border-2 rounded-xl ${project.background}`}>
                <Image src={project.image} alt={project.title} fill className='rounded-xl' />
                    { project.href && (
                        <a href={project.href} target='_blank' rel="noreferrer" onClick={() => handleProjectImageClick(project.title)} className='flex absolute w-full h-full justify-center items-center bg-slate-700/75 opacity-0 hover:opacity-100 rounded-xl cursor-pointer ease-in-out duration-200'>
                            <FaExternalLinkAlt className='text-8xl' />
                        </a>
                    )}
            </div>

            <p className='max-w-lg text-l md:text-xl text-center p-4 opacity-70'>{ project.description }</p>

            <div className='max-w-md'>
                <Table title="Technical Data Sheet" data={tableData} orientation='vertical' />
            </div>

            <GitHub />

        </Template>
    )
}