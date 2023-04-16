import { IconType } from 'react-icons';

import { IoLogoNodejs } from 'react-icons/io'
import { IoLogoReact } from 'react-icons/io5'
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb'
import { FaLaravel, FaPhp, FaWordpress } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

const techs: {
    [key: string]: {
        icon: IconType
        color: string
}} = {
    'TypeScript': {
        icon: SiTypescript,
        color: '#3178c6'
    },
    'NodeJs': {
        icon: IoLogoNodejs,
        color: '#6af5b6'
    },
    'React': {
        icon: IoLogoReact,
        color: '#61dafb'
    },
    'Next.js': {
        icon: TbBrandNextjs,
        color: '#808080'
    },
    'Laravel': {
        icon: FaLaravel,
        color: '#f9322c'
    },
    'Tailwind': {
        icon: TbBrandTailwind,
        color: '#38bdf8'
    },
    'PHP': {
        icon: FaPhp,
        color: '#8892bf'
    },
    'WordPress': {
        icon: FaWordpress,
        color: '#21759b'
    }
}

type TechIconsProps = {
    techName: keyof typeof techs,
    textSize?: number,
    className?: string
}
export default function TechIcons(props: TechIconsProps) {

    const selectedTech = techs[props.techName] ?? {icon: false, color: 'unset'}

    return (
        <div className={props.className ?? ''} style={{color: selectedTech.color}}>
            {selectedTech.icon && <selectedTech.icon className={`text-${props.textSize ? props.textSize * 2 : 2}xl m-auto`} />}
            <span className={`text-${props.textSize ?? 1}xl`}>{props.techName}</span>
        </div>
    )
}