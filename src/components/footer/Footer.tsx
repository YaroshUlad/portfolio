import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={s.footerBlock}>
            <div className={s.container}>
                <div className={s.titleWrapper}>
                    <h3>Yarosh Uladzimir</h3>
                </div>
                <div className={s.socialMediaLinksWrapper}>
                    <div className={s.linkWrapper}>
                        some link
                    </div>
                    <div className={s.linkWrapper}>
                        some link
                    </div>
                    <div className={s.linkWrapper}>
                        some link
                    </div>
                    <div className={s.linkWrapper}>
                        some link
                    </div>
                </div>
                <div className={s.copyRightWrapper}>
                    <span>© 2019 Minsk, All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
};
