import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

import { Project } from 'models/projects';

import Table from 'Components/Table';
import { ProjectStacks } from 'Components/ProjectStacks';


type ProjectDetailsProps = {
    project: Project
}
export function ProjectDetails(props: ProjectDetailsProps) {

    const tableData: {
        [key: string]: any
    } = {
        'Type': props.project.type,
        'Techs': () => <ProjectStacks stacks={props.project.stacks} />
    }

    props.project.href && (tableData['URL'] = () => <ProjectsLink href={props.project.href ?? ''} project={props.project.title} type="url" />)
    props.project.repository && (tableData['GitHub'] = () => <ProjectsLink href={props.project.repository ?? ''} project={props.project.title} type="github" />)

    return (
        <div className='flex sm:w-full md:flex-1 flex-col text-center justify-evenly gap-4'>
            <p className='text-l md:text-xl p-4 opacity-70'>{ props.project.description }</p>
            <Table title="Technical Data Sheet" data={tableData} orientation='vertical' accordion={true} className='md:mt-0' />
        </div>
    )
}

function ProjectsLink (props: {project: string, href: string, type: 'url' | 'github'}) {

    const handleProjectLinkClick = (project: string, type: string) => {
        ReactGA.event({
            category: `Project-Details-${type}`,
            action: 'Click',
            label: project,
        });
    }


    return (
        <a href={props.href} target="_blank" onClick={() => handleProjectLinkClick(props.project, props.type)} className='text-sky-600 dark:text-sky-200 hover:underline'>
            {props.href}
        </a>
    )
}