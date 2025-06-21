import { useEffect, useRef } from 'react';

export default function WhoAmI() {
    const textRef = useRef<HTMLSpanElement>(null);
    const roles = [
        'Software Engineer',
        'Fullstack Developer',
        'Creative',
        'Traveller',
        'Storyteller',
        'Runner',
        'Human',
    ];

    useEffect(() => {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeSpeed = 100;
        const deleteSpeed = 50;
        const pauseBetween = 1200;

        const type = () => {
            const role = roles[roleIndex];
            if (textRef.current) {
                textRef.current.textContent = role.slice(0, charIndex);
            }

            if (!isDeleting) {
                if (charIndex < role.length) {
                    charIndex++;
                    setTimeout(type, typeSpeed);
                } else {
                    isDeleting = true;
                    setTimeout(type, pauseBetween);
                }
            } else {
                if (charIndex > 0) {
                    charIndex--;
                    setTimeout(type, deleteSpeed);
                } else {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    setTimeout(type, typeSpeed);
                }
            }
        };

        type();
    }, []);

    return <span ref={textRef}></span>;
}
