import React from 'react';
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.greetingArea}>
                    <span>Hi There</span>
                    <h1>I am Yarosh Uladzimir</h1>
                    <span>a Front-end developer</span>
                </div>
                <div className={s.photoArea}>
                    <div className={s.photoWrapper}>
                        photo will be there
                    </div>
                </div>
            </div>

        </div>
    );
};