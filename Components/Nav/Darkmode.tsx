import { useEffect, useState } from 'react'

import ReactGA from 'react-ga';

import { BsMoonStars } from 'react-icons/bs'
import { CiLight } from 'react-icons/ci'

export function DarkMode() {

    const [darkMode, setDarkMode] = useState(false)

    const handleDarkModeClick = () => {
        setDarkMode(darkMode => !darkMode)

        localStorage.theme = !darkMode ? 'dark' : 'light';

        ReactGA.event({
            category: 'Navigation',
            action: `Clicked ${ (!darkMode) ? 'Dark' : 'Light' } Mode`,
        })
    }

    useEffect(() => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    useEffect(() => {
        
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }
    }, [])
    return (
        <span onClick={handleDarkModeClick} className="flex relative w-5 h-5 cursor-pointer">
            <BsMoonStars className="text-l absolute opacity-0 dark:opacity-100 ease-in-out duration-500" />
            <CiLight className="text-l absolute opacity-100 dark:opacity-0 ease-in-out duration-500" />
        </span>
    )
}