import styles from './homeNav.module.css'
import React, {forwardRef} from 'react';

interface HomeNavProps {
    isCurrentHome: boolean
}

const HomeNav = forwardRef<HTMLDivElement, HomeNavProps>(({isCurrentHome = false}, ref) => (
    <div ref={ref} className={styles.homeNav}>
        {isCurrentHome ? <img className={styles.door} src="/images/nav/door.png"/>
            : <a href="/home"><img src="/images/nav/home.png"/></a>}
    </div>

));

export default HomeNav;