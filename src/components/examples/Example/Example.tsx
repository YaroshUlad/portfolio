import React from 'react';
import s from './Example.module.css'

export const Example = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.imageWrapper}>
                some image
                <button>to web-site</button>
            </div>
            <div className={s.titleWrapper}>
                <h3>Example title</h3>
            </div>
            <div className={s.descriptionWrapper}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam architecto, assumenda cum dolor eum
                    explicabo magnam minus repellat rerum voluptates!</p>
            </div>

        </div>
    );
};