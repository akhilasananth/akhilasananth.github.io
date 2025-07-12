import React, {useEffect, useRef} from 'react';
import styles from './PopOnHoverElement.module.css';
import clsx from 'clsx';

// Make any character (like a mushroom) pop out of any element
interface PopOnHoverElementProps {
    elementRef?: React.RefObject<HTMLAnchorElement | HTMLDivElement | null>,
    popElementImagePath: string,
    popElementImageAlt: string,
    popLabel: string,
    popDistance?: string | null
}

const PopOnHoverElement: React.FC<PopOnHoverElementProps> = (
    {
        elementRef,
        popElementImagePath,
        popElementImageAlt = '',
        popLabel = '',
        popDistance = null
    }) => {

    const popElement = useRef<HTMLDivElement>(null)

    if (popDistance && !popDistance.includes('rem')) {
        throw new Error('popDistance or the translation distance must have rem');
    }


    useEffect(() => {
        const elementNode = elementRef?.current;
        const popElementNode = popElement.current;

        if (!elementNode || !popElementNode) return;

        const onMouseEnter = () => {
            popElementNode.classList.add(styles.shroomVisible);
            if (popDistance) {
                popElementNode.style.transform = `translateX(${popDistance})`
            }
        };

        const onMouseLeave = () => {
            popElementNode.classList.remove(styles.shroomVisible);
            if (popDistance) {
                popElementNode.style.transform = ''
            }
        };

        elementNode.addEventListener("mouseenter", onMouseEnter);
        elementNode.addEventListener("mouseleave", onMouseLeave);

        return () => {
            elementNode.removeEventListener("mouseenter", onMouseEnter);
            elementNode.removeEventListener("mouseleave", onMouseLeave);
        };
    }, [elementRef?.current]);


    return (
        <span ref={popElement} className={clsx(styles.shroom, styles.shroomHidden)}>
            <img src={popElementImagePath} alt={popElementImageAlt}/>
            <span className={styles.label}>{popLabel}</span>
        </span>
    );
};

export default PopOnHoverElement;
