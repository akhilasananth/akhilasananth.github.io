import styles from './homeNav.module.css'
import React, {forwardRef, useRef} from 'react';
import PopOnHoverElement from "../PopOnHoverElement/PopOnHoverElement.tsx";
import configs from "../../configs/config.json";

interface HomeNavProps {
    currentPagePath: string
}

const goombaImg: string = configs.nav.pop_up_images.goomba

const HomeNav: React.FC<HomeNavProps> = ({currentPagePath = '/'}) => {

    const isCurrentHome = currentPagePath === '/home';
    const home = {
        isCurrentHome,
        elementRef: useRef<HTMLDivElement | null>(null),
        label: isCurrentHome ? "You're Home" : "HomeNav",
    };

    return (
        <div className={styles.navItem} style={{"top": "1rem", "marginBottom": "1.5rem"}}>
            <div ref={home.elementRef} className={styles.homeNav}>
                {isCurrentHome ? <img className={styles.door} src="/images/nav/door.png"/>
                    : <a href="/home"><img src="/images/nav/home.png"/></a>}
            </div>
            {isCurrentHome && (
                <PopOnHoverElement elementRef={home.elementRef} popElementImagePath={goombaImg}
                                   popElementImageAlt={home.label} popLabel={home.label}/>
            )}
        </div>

    )
};

export default HomeNav;