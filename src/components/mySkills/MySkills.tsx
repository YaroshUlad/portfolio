import React from 'react';
import s from './MySkills.module.css'
import {Skill} from "./skill/Skill";

export const MySkills = () => {
    return (
        <div className={s.mySkillsBlock}>
            <div className={s.container}>
                <div className={s.titleWrapper}>
                    <h2>My Skills</h2>
                </div>
                <div className={s.skillsWrapper}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>

            </div>

        </div>
    );
};