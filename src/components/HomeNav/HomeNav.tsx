import styles from './homeNav.module.css'
import React, {useRef} from 'react';
import PopOnHoverElement from "../PopOnHoverElement/PopOnHoverElement.tsx";
import configs from "../../configs/config.json";

interface HomeNavProps {
    currentPagePath: string
}

const goombaImg: string = configs.nav.pop_up_images.goomba
const princessPeachImg: string = configs.nav.pop_up_images.peach

const HomeNav: React.FC<HomeNavProps> = ({currentPagePath = '/'}) => {

    const isCurrentHome = currentPagePath === '/home';
    const home = {
        isCurrentHome,
        elementRef: useRef<HTMLDivElement | null>(null),
        label: isCurrentHome ? "You're Home!" : "Let's Go Home!",
    };

    return (
        <div className={styles.navItem}>
            <div ref={home.elementRef} className={styles.homeNav}>
                {isCurrentHome ? <img className={styles.door} src="/images/nav/door.png"/>
                    : <a href="/home"><img className={styles.homeImg} src="/images/nav/home.png"/></a>}
            </div>
            {isCurrentHome ?
                <PopOnHoverElement elementRef={home.elementRef} popElementImagePath={goombaImg}
                                   popElementImageAlt={home.label} popLabel={home.label} popDistance="7rem"/>
                : <PopOnHoverElement elementRef={home.elementRef} popElementImagePath={princessPeachImg}
                                     popElementImageAlt={home.label} popLabel={home.label}/>
            }
        </div>

    )
};

export default HomeNav;