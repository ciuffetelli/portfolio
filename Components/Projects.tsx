import { useEffect, useRef, useState } from 'react'
import ReactGA from 'react-ga';

import projects from 'models/projects';

import { Image } from 'Components/Image'
import { SectionTitle } from 'Components/SectionTitle'
import { Button } from 'Components/Button'
import { Modal, ModalElement } from 'Components/Modal'

import { FcPrevious, FcNext } from 'react-icons/fc'

export function Projects() {

    const [isMobile, setIsMobile] = useState(false)
    const [itemActive, setItemActive] = useState(0)

    const modalRef = useRef<ModalElement>(null)

    const content = projects.getHomeProjects()

    const triggerGA = (label: string) => {
        ReactGA.event({
            category: 'Projects',
            action: 'Clicked',
            label: label
        })
    }

    const handleItemClick = (index: number) => {
        setItemActive(itemActive => index === itemActive ? 0 : index)

        if(isMobile) {
            modalRef.current?.open()
        }
    }

    const handlePrevius = () => {
        setItemActive(itemActive => {
            if(itemActive === 0) {
                modalRef.current?.close()
                return 0
            }

            return itemActive - 1
        })
    }

    const handleNext = () => {
        setItemActive(itemActive => {
            if(itemActive === content.length - 1) {
                modalRef.current?.close()
                return 0
            }

            return itemActive + 1
        })
    }

    useEffect(() => {
        
        setIsMobile(window.innerWidth < 768)

        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 768)
        })
    }, [])

    useEffect(() => {

        document.querySelectorAll('[data-project-details]').forEach((item, index) => {
            item.classList.add("opacity-0")
            item.classList.add('-z-10')
        })

        document.querySelector(`[data-project-details="${itemActive}"]`)?.classList.add("opacity-1")
        document.querySelector(`[data-project-details="${itemActive}"]`)?.classList.remove("opacity-0")
        document.querySelector(`[data-project-details="${itemActive}"]`)?.classList.remove('-z-10')

        triggerGA(content[itemActive].title)

    }, [itemActive])
    return (
        <section className="container flex flex-col m-auto p-8 justify-start">
            
            <SectionTitle title="Projects" className='mb-8' />

            <div className='flex relative h-full'>
                <div className='flex flex-wrap gap-4 w-max md:w-1/2'>
                    {content.map((item, index) => (
                        item.image ?
                        <div key={`project-image-${index}`} className={`rounded-xl ${item.background} w-64 h-64 p-1 md:p-4 border-slate-700 border-2 hover:cursor-pointer md:hover:scale-110 hover:border-4 ${itemActive === index ? 'scale-105 border-2' : ''} ease-in-out duration-200`} onClick={() => handleItemClick(index)}>
                            <Image src={item.image} alt={item.title} />
                        </div>
                        : ''
                    ))}
                </div>

                <div className='hidden md:flex absolute -z-10 right-0 w-3/4 h-full bg-sky-200 dark:bg-sky-950 opacity-30 rounded-xl'></div>

                <div className='w-1/2 text-slate-800 dark:text-white'>
                    <div className='relative flex w-full h-full justify-center items-center m-auto'>

                        {content.map((item, index) => (
                            <div key={`project-details-${index}`} className='absolute hidden md:flex flex-col w-full h-full p-4 gap-2 justify-between items-center opacity-0 ease-in-out duration-200' data-project-details={index}>
                                <h2 className='text-4xl mr-auto'>{ item.title }</h2>
                                <p className=''>{ item.description }</p>
                                
                                { item.href && <a href={item.href} target='_blank' rel="noreferrer">{ item.href }</a>}

                                <div className='flex gap-2'>
                                    { item.image &&  <Button text='Read more' href={`/projects/${item.title}`} />}
                                    <Button text='Find out more' href={`/projects`} />
                                </div>
                            </div>
                        ))}                
                              
                    </div>
                </div>
            </div>

            <Modal forwardRef={modalRef}>
                <div className='flex flex-col w-full h-full dark:text-white justify-evenly items-center'>

                    <h2 className='text-4xl mr-auto'>{ content[itemActive].title }</h2>

                    <p className='text-center'>{ content[itemActive].description }</p>

                    { content[itemActive].href && <a href={content[itemActive].href} target='_blank' rel="noreferrer">{ content[itemActive].href }</a>}
                            
                    <div className='flex gap-2'>
                        <Button icon={FcPrevious} onClick={handlePrevius} />
                        { content[itemActive].image &&  <Button text='Read more' href={`/projects/${content[itemActive].title}`} />}
                        <Button text='Find out more' href={`/projects`} />
                        <Button icon={FcNext} onClick={handleNext} />
                    </div>
                </div>
            </Modal>

        </section>
    )
}