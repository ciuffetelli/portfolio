import ReactGA from 'react-ga';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

import { DarkMode } from './Darkmode'

export function Nav() {
    
    const handleGithubClick = () => {
        ReactGA.set({ nav: 'Github' });
    }

    const handleLinkedinClick = () => {
        ReactGA.set({ nav: 'Linkedin' });
    }

    const handleEmailClick = () => {
        
        ReactGA.set({ nav: 'Email' });

        location.href = "mailto:seufetelli@gmail.com"
    }
    return (
        <div className="flex items-center justify-between w-full">
            <div className="hidden">
                <strong>Daniel</strong> Ciuffetelli</div>
            <div className="">
                <DarkMode />
            </div>
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