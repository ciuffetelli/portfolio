import React, { useState, useEffect } from 'react';

import TechIcons from 'Components/TechIcons';

type ProjectStacksProps = {
    stacks: string[]
}
export function ProjectStacks(props: ProjectStacksProps) {

    return (
        <div className='flex gap-4 justify-center'>
        {
            props.stacks.map((stack, index) => (
                <span key={index}>
                    <TechIcons techName={stack} />
                </span>
            ))
        }                
        </div>
    )
}