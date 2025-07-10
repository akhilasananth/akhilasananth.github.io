import styles from './Nav.module.css';
import PopOnHoverElement from '../PopOnHoverElement/PopOnHoverElement.tsx';
import configs from '../../configs/config.json'
import React, {useRef} from "react";

const Nav: React.FC = () => {
    const project = {
        img: configs.nav.main_images.project,
        elementRef: useRef<HTMLAnchorElement | null>(null),
        href: '/projects',
        label: 'Projects'
    }

    const resume = {
        img: configs.nav.main_images.resume,
        elementRef: useRef<HTMLAnchorElement | null>(null),
        href: '/resume',
        label: 'Resume'
    }

    const bookReviews = {
        img: configs.nav.main_images.book_reviews,
        elementRef: useRef<HTMLAnchorElement | null>(null),
        href: '/book-reviews',
        label: 'Book Reviews'
    }

    const blog = {
        img: configs.nav.main_images.blog,
        elementRef: useRef<HTMLAnchorElement | null>(null),
        href: '/blog',
        label: 'Blog'
    }

    const creativeCorner = {
        img: configs.nav.main_images.creative_corner,
        elementRef: useRef<HTMLAnchorElement | null>(null),
        href: '/creative-corner',
        label: 'Creative Corner'
    }

    const powerupMushroomImg: string = configs.nav.pop_up_images.powerup_mushroom


    return (
        <div className={styles.navContainer}>
            <nav className={styles.nav}>
                <div className={styles.navItem}>
                    <a ref={project.elementRef} href={project.href}><img src={project.img} alt={project.label}/></a>
                    <PopOnHoverElement elementRef={project.elementRef} popElementImagePath={powerupMushroomImg}
                                       popElementImageAlt={project.label} popLabel={project.label}/>
                </div>

                <div className={styles.navItem}>
                    <a ref={resume.elementRef} href={resume.href}><img src={resume.img} alt={resume.label}/></a>
                    <PopOnHoverElement elementRef={resume.elementRef} popElementImagePath={powerupMushroomImg}
                                       popElementImageAlt={resume.label} popLabel={resume.label}/>
                </div>

                <div className={styles.navItem}>
                    <a ref={bookReviews.elementRef} href={bookReviews.href}><img src={bookReviews.img}
                                                                                 alt={bookReviews.label}/></a>
                    <PopOnHoverElement elementRef={bookReviews.elementRef} popElementImagePath={powerupMushroomImg}
                                       popElementImageAlt={bookReviews.label} popLabel={bookReviews.label}/>
                </div>

                <div className={styles.navItem}>
                    <a ref={blog.elementRef} href={blog.href}><img src={blog.img} alt={blog.label}/></a>
                    <PopOnHoverElement elementRef={blog.elementRef} popElementImagePath={powerupMushroomImg}
                                       popElementImageAlt={blog.label} popLabel={blog.label}/>
                </div>

                <div className={styles.navItem}>
                    <a ref={creativeCorner.elementRef} href={creativeCorner.href}><img src={creativeCorner.img}
                                                                                       alt={creativeCorner.label}/></a>
                    <PopOnHoverElement elementRef={creativeCorner.elementRef} popElementImagePath={powerupMushroomImg}
                                       popElementImageAlt={creativeCorner.label} popLabel={creativeCorner.label}/>
                </div>
            </nav>
        </div>
    )
}

export default Nav;