import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'

import { AiOutlineClose } from 'react-icons/ai'

export type ModalElement = {
    open: () => void
    close: () => void
}

type ModalProps = {
    forwardRef: React.RefObject<ModalElement>
    children: React.ReactNode
}
export function Modal(props: ModalProps) {

    const [modalOpen, setModalOpen] = useState(false)

    const modalRef = useRef<HTMLDivElement>(null)

    const handleOpen = () => {
        setModalOpen(true)
    }

    const handleClose = () => {
        setModalOpen(false)
    }

    useEffect(() => {

        const modal = modalRef.current as HTMLDivElement

        if(modalOpen) {

            modal.classList.remove('hidden')

            setTimeout(() => {
                modal.style.opacity = '1'
            }, 50)
        } else {
            
            modal.style.opacity = '0'

            setTimeout(() => {
                modal.classList.add('hidden')
            }, 200)
        }
    }, [modalOpen])

    useImperativeHandle(props.forwardRef, () => ({
        open: handleOpen,
        close: handleClose
    }))
    return (
        <div ref={modalRef} className="hidden fixed top-0 left-0 w-screen h-screen bg-sky-200 dark:bg-sky-950 opacity-0 ease-in-out duration-200">
            <div className='flex justify-end pt-4 pr-4 text-3xl' onClick={handleClose}><AiOutlineClose /></div>
            <div className='w-full h-full p-2'>
                {props.children}
            </div>
        </div>
    )
}