import React, { useState, useEffect } from 'react';
import TechIcons from 'Components/TechIcons';

export type Filters = {
    stacks: string[],
    types: string[],
}

type ProjectsFilterProps = {
    stacks: string[],
    types: string[],
}
export function ProjectsFilter(props: ProjectsFilterProps) {

    const [filters, setFilters] = useState<Filters>({
        stacks: [],
        types: [],
    })    

    const handleFilterSelect = (filter: string, category: 'stack' | 'type') => {
        setFilters(filters => {

            const stacks = (category === 'stack') ?
                filters.stacks.includes(filter) ? filters.stacks.filter(stack => stack !== filter) : [...filters.stacks, filter]
            : filters.stacks

            const types = (category === 'type') ?
                filters.types.includes(filter) ? filters.types.filter(type => type !== filter) : [...filters.types, filter]
            : filters.types

            return {
                ...filters,
                stacks,
                types,
            }
        })
    }

    useEffect(() => {
        Array.from(document.querySelectorAll<HTMLElement>('[data-stacks]')).map( item => {

            const stacks = item.getAttribute('data-stacks')?.split(',') || []
            const types = item.getAttribute('data-types')?.split(',') || []

            const isStack = filters.stacks.length > 0 ? filters.stacks.some(stack => stacks.includes(stack)) : true
            const isType = filters.types.length > 0 ? filters.types.some(type => types.includes(type)) : true

            if(isStack && isType) {
                item.classList.remove('hidden')
                setTimeout(() => {
                    item.style.opacity = '1'
                }, 50)
            } else {
                item.style.opacity = '0'
                setTimeout(() => {
                    item.classList.add('hidden')
                }, 150)
            }
        })
    }, [filters])       

    return (
        <div className='w-full md:container p-4 bg-sky-200/40 dark:bg-sky-950/40 md:rounded-xl'>
            
            <h2>Technologies:</h2>
            <div className='flex flex-wrap gap-2'>
                {props.stacks.sort().map((stack, index) => (
                    <div key={index} onClick={() => handleFilterSelect(stack, 'stack')} className={`border-4 text-center bg-sky-200 dark:bg-sky-950 text-sky-600 dark:text-sky-200 hover:scale-110 hover:brightness-95 dark:hover:brightness-150 cursor-pointer p-2 rounded-md ease-in-out duration-200 ${filters.stacks.includes(stack) ? 'border-sky-600' : 'border-sky-200 dark:border-sky-950'}`}>
                        <TechIcons techName={stack} />
                    </div>
                ))}
            </div>         

            <h2>Types:</h2>
            <div className='flex flex-wrap gap-2'>
                {props.types.sort().map((type, index) => (
                    <div key={index} onClick={() => handleFilterSelect(type, 'type')} className={`border-4 text-center bg-sky-200 dark:bg-sky-950 text-sky-600 dark:text-sky-200 hover:scale-110 hover:brightness-95 dark:hover:brightness-150 cursor-pointer p-2 rounded-md ease-in-out duration-200 ${filters.types.includes(type) ? 'border-sky-600' : 'border-sky-200 dark:border-sky-950'}`}>
                        {type}
                    </div>
                ))}
            </div>                
        </div>
    )
}