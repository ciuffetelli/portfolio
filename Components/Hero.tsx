
import { IoLogoNodejs } from 'react-icons/io'
import { IoLogoReact } from 'react-icons/io5'
import { TbBrandNextjs, TbBrandTailwind } from 'react-icons/tb'
import { FaLaravel } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

import { Button } from 'Components/Button'
import { TextAnimated } from 'Components/TextAnimated'

type HeroProps = {
}
export function Hero(props: HeroProps) {

    const header = 'My passion for the power of code, allows me to create digital experiences that are powered by creativity and technology. My mission is to empower brands  through innovative design, unlock new levels of creativity, and provide an exceptional experience for everyone. This drives my life.'

    const handleLetsChat = () => {
        location.href = "mailto:seufetelli@gmail.com"
    }

    return (
        <div className="flex flex-col md:flex-row w-full h-full align-middle mt-4 gap-4">
            <div className="flex flex-1 flex-col justify-around items-center">
                <div className="bg-sky-600 text-white font-semibold p-1 w-max mb-4 mr-auto text-center">
                    Front-end<br/>Engineer
                </div>
                <TextAnimated text={header} />

                <p  className="mt-4 mb-4 mb:w-2/3">If you're curious about what I do and would like to know more, I'd be happy to share it with you! Talking about my current projects, past experiences, or future goals, I'm always excited to share knowledge, especially about my work. Don't hesitate to reach out and start the conversation!</p>

                <Button text="Let's Chat" className='mb-4' onClick={handleLetsChat} />
            </div>
            <section className="flex flex-col mt-8 justify-center">
                <h2 className='text-lg text-slate-700 dark:text-slate-300 font-semibold border-b-2 opacity-80 mb-8'>Core skills</h2>
                <div className="flex text-center m-auto gap-4">
                    <div>
                        <div className='m-2' style={{color: '#3178c6'}}>
                            <SiTypescript className="text-8xl m-auto"/>
                            <span className="text-2xl">TypeScript</span>
                        </div>
                        <div className='m-2' style={{color: '#6af5b6'}}>
                            <IoLogoNodejs className="text-8xl m-auto"/>
                            <span className="text-2xl">NodeJs</span>
                        </div>
                        <div className='m-2' style={{color: '#61dafb'}}>
                            <IoLogoReact className="text-8xl m-auto"/>
                            <span className="text-2xl">React</span>
                        </div>
                    </div>
                    <div>
                        <div className='m-2' style={{color: '#808080'}}>
                            <TbBrandNextjs className="text-8xl m-auto"/>
                            <span className="text-2xl">NextJs</span>
                        </div>
                        <div className='m-2' style={{color: '#f9322c'}}>
                            <FaLaravel className="text-8xl m-auto"/>
                            <span className="text-2xl">Laravel</span>
                        </div>
                        <div className='m-2' style={{color: '#38bdf8'}}>
                            <TbBrandTailwind className="text-8xl m-auto"/>
                            <span className="text-2xl">Tailwind</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}