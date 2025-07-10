import styles from "./image.module.css"
import React from "react";
import {symbol} from "zod";

interface ImageProps {
    path: string;
    alt?: string;
    style?: React.CSSProperties;
    caption?: string;
    sourceLink?: string;
}

const Image: React.FC<ImageProps> = ({path = null, alt = '', caption = '', sourceLink = null, style}) => {
    return (
        <>
            {path && (
                <figure className={styles.figure}>
                    <img src={path} alt={alt} className={styles.image} style={style}/>
                    <figcaption className={styles.figcaption}>
                        {caption}
                        {sourceLink && (
                            <>
                                {': '}
                                <a href={sourceLink} target="_blank" rel="noopener noreferrer">
                                    {sourceLink}
                                </a>
                            </>
                        )}
                    </figcaption>
                </figure>
            )}
        </>
    );

}

export default Image