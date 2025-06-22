import {useRef} from 'react';
import useSound from 'use-sound';
import './NavElement.css';
import clsx from 'clsx';

const NavElement = ({label = '', iconImagePath = '', navRef = ''}) => {
    const shroomRef = useRef(null);
    const menuItemRef = useRef(null);
    const shroomImagePath = '/images/nav/descShroom.png';

    return (
        <div style={{position: 'relative', width: '6rem', height: '6rem'}}>
            <span ref={shroomRef} className={clsx("shroom", "shroom-hidden")}>
                <img src={shroomImagePath} alt="Mario Shroom"/>
                <p>{label}</p>
            </span>
            <a ref={menuItemRef}
               href={navRef}
               onMouseEnter={() => {
                   shroomRef.current.classList.add('shroom-visible');
               }}
               onMouseLeave={() => {
                   shroomRef.current.classList.remove('shroom-visible');
               }}
            >
                <img src={iconImagePath} alt={label}/>
            </a>
        </div>
    );
};

export default NavElement;
