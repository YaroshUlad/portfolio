import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.container}>
                <div className={s.navWrapper}>
                    <div className={s.navItem}>
                        {/*<NavLink to={'/main'}>Main</NavLink>*/}
                        <a href="#">Main</a>
                    </div>
                    <div className={s.navItem}>
                        <a href="#skills">My skills</a>
                    </div>
                    <div className={s.navItem}>
                        <a href={'#examples'}>Examples</a>
                    </div>
                    <div className={s.navItem}>
                        <a  href={'#contacts'}>Contacts</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};
