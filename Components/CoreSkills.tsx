
import { SectionTitle } from './SectionTitle'

import { IoLogoNodejs } from 'react-icons/io'
import { IoLogoReact } from 'react-icons/io5'
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb'
import { FaLaravel } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import TechIcons from './TechIcons'

type CoreSkillsProps = {
}
export function CoreSkills(props: CoreSkillsProps) {
    return (
        <section className="flex flex-col mt-8 max-w-xs justify-center">
                    
            <SectionTitle title="Core Skills" className='mt-auto md:hidden' />

            <div className="flex flex-wrap text-center m-auto gap-4">
                    <TechIcons techName="TypeScript" textSize={4} className='flex-1' />
                    <TechIcons techName="NodeJs" textSize={4} className='flex-1' />
                    <TechIcons techName="React" textSize={4} className='flex-1' />
                    <TechIcons techName="Next.js" textSize={4} className='flex-1' />
                    <TechIcons techName="Laravel" textSize={4} className='flex-1' />
                    <TechIcons techName="Tailwind" textSize={4} className='flex-1' />
            </div>
        </section>        
    )
}