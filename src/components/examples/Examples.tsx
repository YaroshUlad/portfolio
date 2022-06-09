import React from 'react';
import s from './Examples.module.css'
import {Skill} from "../mySkills/skill/Skill";

export const Examples = () => {
    return (
        <div className={s.examplesBlock}>
            <div className={s.container}>
                <div className={s.titleWrapper}>
                    <h2>Examples</h2>
                </div>
                <div className={s.examplesWrapper}>
                    <Skill/>
                </div>

            </div>
        </div>
    );
};
