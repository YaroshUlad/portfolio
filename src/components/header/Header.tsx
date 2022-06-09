import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.container}>
                <div className={s.navWrapper}>
                    <div className={s.navItem}><a href="#">Main</a></div>
                    <div className={s.navItem}><a href="#">My skills</a></div>
                    <div className={s.navItem}><a href="#">Examples</a></div>
                    <div className={s.navItem}><a href="#">Contacts</a></div>
                </div>
            </nav>
        </header>
    );
};
