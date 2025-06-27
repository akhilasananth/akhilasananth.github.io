import styles from './homeNav.module.css'

function HomeNav({isCurrentHome = false}) {
    return (
        <div className={styles.homeNav}>
            {isCurrentHome ? <img className={styles.door} src="/images/nav/door.png"/>
                : <a href="/home"><img src="/images/nav/home.png"/></a>}

        </div>
    )
}

export default HomeNav;