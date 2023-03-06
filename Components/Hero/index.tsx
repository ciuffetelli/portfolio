import Image from 'next/image'
import profile from '../../public/img/profile.png'

import styles from './Hero.module.css'

import { IoLogoNodejs } from 'react-icons/io'
import { IoLogoReact } from 'react-icons/io5'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaLaravel } from 'react-icons/fa'

export function Hero() {

    const handleLetsChat = () => {
        location.href = "mailto:seufetelli@gmail.com"
    }
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.title}>Developer Engineer</div>
                <h1  className={styles.subTitle}>Passionate about the power of code</h1>
                <p  className={styles.text}>If you are interested in my work, do not hesitate to contact me.</p>
                <div className={styles.link} onClick={handleLetsChat}>Let`s Chat!</div>
            </div>
            <div className={styles.rightSide}>
                <Image className={styles.image} src={profile} alt="Daniel's Picture" priority={true} />
                <div className={`${styles.tech} ${styles.iconNode}`}><IoLogoNodejs className={styles.icon} /></div>
                <div className={`${styles.tech} ${styles.iconReact}`}><IoLogoReact className={styles.icon} /></div>
                <div className={`${styles.tech} ${styles.iconNext}`}><TbBrandNextjs className={styles.icon} /></div>
                <div className={`${styles.tech} ${styles.iconLaravel}`}><FaLaravel className={styles.icon} /></div>
            </div>
        </div>
    )
}