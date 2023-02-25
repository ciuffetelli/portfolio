import styles from './Nav.module.css'

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

export function Nav() {
    
    return (
        <div className={styles.container}>
            <div className={styles.name}><strong>Daniel</strong> Ciuffetelli</div>
            <div className={styles.items}></div>
            <div className={styles.icons}>
                <div className={styles.social}>
                    <a href="https://github.com/ciuffetelli" target="_new"><AiFillGithub /></a>
                    <a href="https://www.linkedin.com/in/ciuffetelli" target="_new"><AiFillLinkedin /></a>
                </div>
                <a href="mailto:daniel@ciuffetelli.co.uk"><AiOutlineMail /></a>
            </div>
        </div>
    )
}