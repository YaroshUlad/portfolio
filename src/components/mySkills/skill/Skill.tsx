import React from 'react';
import s from './Skill.module.css'

export const Skill = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.logoWrapper}>
                some logo
            </div>
            <div className={s.titleWrapper}>
                <h3>Skill Title</h3>
            </div>
            <div className={s.descriptionWrapper}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam architecto, assumenda cum dolor eum
                    explicabo magnam minus repellat rerum voluptates!</p>
            </div>

        </div>
    );
};
