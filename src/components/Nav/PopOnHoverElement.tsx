import React, {useEffect, useRef} from 'react';
import styles from './PopOnHoverElement.module.css';
import clsx from 'clsx';

// Make any character (like a mushroom) pop out of any element
interface PopOnHoverElementProps {
    elementRef?: React.RefObject<HTMLAnchorElement | null>,
    popElementImagePath: string,
    popElementImageAlt: string,
    popLabel: string
}

const PopOnHoverElement: React.FC<PopOnHoverElementProps> = (
    {
        elementRef,
        popElementImagePath,
        popElementImageAlt = '',
        popLabel = ''
    }) => {

    const popElement = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const elementNode = elementRef?.current;
        const popElementNode = popElement.current;

        if (!elementNode || !popElementNode) return;

        const onMouseEnter = () => {
            console.log("Here shroom should pop out");
            popElementNode.classList.add(styles.shroomVisible);
        };

        const onMouseLeave = () => {
            popElementNode.classList.remove(styles.shroomVisible);
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
