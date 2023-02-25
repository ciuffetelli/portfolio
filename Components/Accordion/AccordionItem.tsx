import styles from './Accordion.module.css'

export type AccordionItemProps = {
    option?: string
    title: string
    highlight?: string
    text: string
}
export function AccordionItem({option, title, highlight, text}: AccordionItemProps) {
    return (
        <div className={styles.accordionItem}>
            <small className={styles.option}>{option}</small>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.highlight}>{highlight}</h2>
            <p className={styles.text}>{text.replace(/\\n/g, "\n")}</p>
        </div>
    )
}