import styles from "./ccTitle.module.css"
import {useEffect, useRef} from "react";

const CCTitle = () => {
    const animatedRef = useRef<HTMLDivElement | null>(null);
    const animatedText = "w a t e r"

    let delay = 100;

    useEffect(() => {
        const wordE = animatedRef.current;
        if (wordE) {
            wordE.innerHTML = animatedText!
                .split("")
                .map((letter) => {
                    console.log(letter);
                    return `<span>` + letter + `</span>`;
                })
                .join("");

            Array.from(wordE.children).forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add(styles.wavy);
                }, index * 60 + delay);
            });
        }
    }, [animatedText, animatedRef]);


    return (
        <h1>
            Un<span className={styles.hinged}>hinged</span> Like <span ref={animatedRef}>{animatedText}</span>, no <span
            className={styles.fallingText}>WD-40</span>
        </h1>
    )
}

export default CCTitle;