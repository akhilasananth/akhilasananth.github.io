import React, {useEffect, useRef} from "react";
import clsx from "clsx";
import styles from "./ImageReveal.module.css";

interface ImageRevealProps {
    selector: string;
    underImgPath: string;
    overImgPath: string;
}

const ImageReveal: React.FC<ImageRevealProps> = ({selector, underImgPath, overImgPath}) => {
    const overImgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const mdElementNode = document.querySelector(selector)
        const overImgNode = overImgRef.current;

        if (!mdElementNode || !overImgNode) return;

        const handleScroll = () => {
            const scrollTop = mdElementNode.scrollTop;
            const scrollRange = mdElementNode.scrollHeight - mdElementNode.clientHeight;
            const progress = scrollRange > 0 ? scrollTop / scrollRange : 0;


            const clipPercent = Math.min(progress * 100, 100);

            overImgNode.style.clipPath = `inset(${clipPercent}% 0% 0% 0%)`;
            overImgNode.style.opacity = Math.min(1 - progress * 0.5, 1).toString();
        };

        mdElementNode.addEventListener("scroll", handleScroll);

        return () => {
            mdElementNode.removeEventListener("scroll", handleScroll);
        };
    }, [selector, overImgRef]);

    return (
        <div className={styles.imagesContainer}>
            <img
                src={underImgPath}
                className={clsx(styles.img, styles.under)}
            />
            <img
                ref={overImgRef}
                src={overImgPath}
                className={clsx(styles.img, styles.over)}
            />
        </div>
    );
};

export default ImageReveal;
