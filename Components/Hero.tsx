

import { Button } from 'Components/Button'
import { TextAnimated } from 'Components/TextAnimated'
import { CoreSkills } from './CoreSkills'

import { AiFillLinkedin } from 'react-icons/ai'

type HeroProps = {
}
export function Hero(props: HeroProps) {

    return (
        <section className="flex flex-wrap container p-4 align-middle mt-4 gap-4">
            <div className="flex flex-1 flex-col justify-evenly items-center">
                <TextAnimated text="My passion for the power of code, allows me to create digital experiences that are powered by creativity and technology." className="h-44" />

                <p  className="mt-4 mb-4 max-w-md text-center">My mission is to empower brands  through innovative design, unlock new levels of creativity, and provide an exceptional experience for everyone. This drives my life.</p>

                <Button text="Get connected" href='https://www.linkedin.com/in/ciuffetelli/' target='_blank' icon={AiFillLinkedin} className='mb-4' />
            </div>

            <CoreSkills />

        </section>
    )
}