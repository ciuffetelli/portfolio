import Link from 'next/link';
import ReactGA from 'react-ga';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

import { DarkMode } from './Darkmode'

export function Nav() {
    
    const handleGithubClick = () => {
        ReactGA.event({
            category: 'Navigation',
            action: 'Clicked Github',
        })
    }

    const handleLinkedinClick = () => {
        ReactGA.event({
            category: 'Navigation',
            action: 'Clicked Linkedin',
        })
    }

    const handleEmailClick = () => {
        
        ReactGA.event({
            category: 'Navigation',
            action: 'Clicked Email',
        })

        location.href = "mailto:seufetelli@gmail.com"
    }
    return (
        <div className="flex items-center justify-between w-full">
            
            <DarkMode />

            <Link href='/' className="ml-8">
                <strong>Daniel</strong> Ciuffetelli
            </Link>

            <div className="flex ml-auto gap-4 w-max">
                <a href="https://github.com/ciuffetelli" onClick={handleGithubClick} target="_new">
                    <AiFillGithub className='text-xl' />
                </a>
                
                <a href="https://www.linkedin.com/in/ciuffetelli" onClick={handleLinkedinClick} target="_new">
                    <AiFillLinkedin className='text-xl' />
                </a>
                
                <span onClick={handleEmailClick} style={{cursor: 'pointer'}}>
                    <AiOutlineMail className='text-xl' />
                </span>
            </div>
        </div>
    )
}