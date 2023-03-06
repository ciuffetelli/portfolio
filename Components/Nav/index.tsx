import styles from './Nav.module.css'

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

export function Nav() {
    
    const handleEmailClick = () => {
        location.href = "mailto:seufetelli@gmail.com"
    }
    return (
        <div className={styles.container}>
            <div className={styles.name}><strong>Daniel</strong> Ciuffetelli</div>
            <div className={styles.items}></div>
            <div className={styles.icons}>
                <div className={styles.social}>
                    <a href="https://github.com/ciuffetelli" target="_new"><AiFillGithub /></a>
                    <a href="https://www.linkedin.com/in/ciuffetelli" target="_new"><AiFillLinkedin /></a>
                </div>
                <span onClick={handleEmailClick} style={{cursor: 'pointer'}}><AiOutlineMail /></span>
            </div>
        </div>
    )
}