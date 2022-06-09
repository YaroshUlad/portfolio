import React from 'react';
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <div className={s.contactsTitle}>
                    <h2>Contacts</h2>
                </div>
                <div className={s.formWrapper}>
                    <form className={s.form} action="">
                        <input type='email' placeholder={'enter your email'}/>
                        <input type="text" placeholder={"enter message's theme"}/>
                        <textarea placeholder={'enter your message'} name="textArea" id="1" cols={30}
                                  rows={10}>sadas</textarea>
                        <button>Send message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
