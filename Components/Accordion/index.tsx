import { useState } from "react";
import { IconType } from "react-icons"

import styles from './Accordion.module.css'

import { AccordionItem, AccordionItemProps } from "./AccordionItem"

type Item = {
    title: string
    icon: IconType
    description: string
    content: AccordionItemProps
    tags?: string
}
type AccordionProps = {
    data: Item[]
    children?: React.ReactElement
}
export function Accordion({ data, children }: AccordionProps) {

    const [selected, setSelected] = useState(-1)

    const handleItemClick = (key: number) => {
        setSelected(key)
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapButtons}>
                { data.map((item, key) => (
                    <div key={key} className={styles.item} onClick={() => handleItemClick(key)}>
                        <div className={styles.itemTitle}>{item.title}<div className={styles.icon}>{<item.icon />}</div></div>
                        <div className={styles.description}>{item.description}</div>
                        <div className={styles.tags}>{item.tags}</div>
                    </div>
                )) }    
            </div>
            <div className={styles.wrapChildren}>
                {(children && selected === -1) && <div className={styles.itemContent}>{children}</div>}
                <AccordionChild item={data.filter((item, key) => (selected === key))[0] ?? undefined} />
            </div>
        </div>
    )
}

type AccordionChildProps = {
    item?: Item
}
function AccordionChild({ item }: AccordionChildProps) {
    
    if(!item?.content) return <></>

    return (
        <div className={styles.itemContent}>
            <AccordionItem {...item.content} />
        </div>
    )
}