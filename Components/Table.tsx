import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import { AiOutlinePlus } from 'react-icons/ai';

type KeyValue = {
    [key: string]: string | (() => JSX.Element)
}

type TableProps = {
    data: KeyValue | KeyValue[]
    title?: string
    orientation?: 'horizontal' | 'vertical'
    accordion?: boolean
    className?: string   
}
export default function Table(props: TableProps) {

    const tableRef = React.useRef<HTMLDivElement>(null)
    const accordionIcon = React.useRef<HTMLDivElement>(null)

    const arrData:KeyValue[] = Array.isArray(props.data) ? props.data : [props.data]

    const header = Object.keys(arrData[0])
    const orientation = props.orientation || 'horizontal'

    const handleTitleClick = () => {

        ReactGA.event({
            category: 'Table',
            action: 'Click',
            label: `accordion-${props.title ?? ''}-${tableRef.current?.dataset.expanded}`
        })
        
        if(!tableRef.current || !props.accordion) return;

        tableRef.current.dataset.expanded = tableRef.current.dataset.expanded === 'true' ? 'false' : 'true'

        Array.from(tableRef.current.querySelectorAll<HTMLElement>(`[data-line]`)).forEach(element => {

            const opacity = element.style.opacity === '0' ? '1' : '0'

            if(opacity === '0') {
                element.style.opacity = opacity
                setTimeout(() => {
                    element.classList.add('hidden')
                }, 150)
            } else {
                element.classList.remove('hidden')
                setTimeout(() => {
                    element.style.opacity = opacity
                }, 10)
            }

            setTimeout(() => {
                if(accordionIcon.current) {
                    accordionIcon.current.classList.toggle('rotate-45')
                }
            }, 150)
        })
    }

    useEffect(() => {
        if(props.accordion) {
            Array.from(tableRef.current?.querySelectorAll<HTMLElement>(`[data-line]`) || []).forEach(element => {
                if(!element.classList.contains('hidden')) return;
                element.style.opacity = '0'
            })
        }
    }, [])
    
    return (
        <div ref={tableRef} className={`m-auto w-full text-slate-800 bg-slate-300 dark:bg-slate-800/50 md:rounded-t-xl ${props.className ?? ''}`} data-expanded={props.accordion ? 'false' : 'true'}>
            <table className="text-sm w-full">
                <thead>
                    <tr>
                        <th colSpan={header.length} onClick={handleTitleClick} className={`dark:border-slate-600 bg-slate-500 dark:bg-slate-800/50 text-slate-300 font-medium p-4 text-left ${props.accordion ? 'cursor-pointer hover:bg-slate-700 hover:text-slate-300 ease-in-out duration-200' : ''} md:rounded-t-xl`}>
                            <div className='flex justify-between'>
                                {props.title}

                                {props.accordion && (
                                    <div ref={accordionIcon} className='ml-auto ease-in-out duration-200'>
                                        <AiOutlinePlus />
                                    </div>
                                )}
                            </div>
                        </th>
                    </tr>
                    {orientation === 'horizontal' && (
                        <tr data-line={0} className={props.accordion ? 'ease-in-out duration-200 hidden' : ''}>
                            {header.map((head, index) => (
                                <th key={`header_${index}`} className="border-b dark:border-slate-600 font-medium p-4 pt-0 text-slate-400 text-left">{head}</th>
                            ))}
                        </tr>
                    )}
                </thead>
                <tbody>
                    <TBody data={arrData} orientation={orientation} accordion={props.accordion || false} />
                    <tr data-line={header.length} className={props.accordion ? 'ease-in-out duration-200 hidden' : ''}>
                        <td colSpan={header.length} className="p-2 bg-slate-500 dark:bg-slate-800/50"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

type TBodyProps = {
    data: KeyValue[]
    orientation?: 'horizontal' | 'vertical'
    accordion: boolean
}
function TBody(props: TBodyProps) {
    return <>
        { props.orientation === 'horizontal' ? (
            props.data.map((data, index) => (
                <tr key={index} className={`border-b border-slate-100 dark:border-slate-600 ${props.accordion ? 'ease-in-out duration-200 hidden' : ''}`} data-line={index}>
                    {Object.values(data).map((value, index) => (
                            <td className={`break-all bg-white dark:bg-slate-800 ${ index > 0 ? 'border-l' : ''} border-slate-100 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400`}><TableContent value={value} /></td>
                        )
                    )}
                </tr>                                
            ))
        ) : (
            Object.keys(props.data[0]).map((head, index) => {
                return (
                    <tr key={`header_${index}`} data-line={index} className={props.accordion ? 'ease-in-out duration-200 hidden' : ''}>
                        <th className="border-b dark:border-slate-600 bg-slate-500 dark:bg-slate-800/50 text-slate-300 font-medium p-4 text-left">{head}</th>
        
                        {props.data.map((item) => {
                            const value = item[head]
                            return (
                                <td key={index} className="w-max text-center border-b dark:bg-slate-800 border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"><TableContent value={value} /></td>
                            )
                        })}
        
                    </tr>
                )
            })
        )}
    </>
}


function TableContent(props: {value: string | (() => JSX.Element)}) {

    if(typeof props.value === 'string') return (<>{props.value}</>)

    const Value = props.value as () => JSX.Element

    return (<Value />)
}