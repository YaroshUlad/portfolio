import React from 'react';
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <div className={s.container}>
                <div className={s.contactsTitle}>
                    <h2>Contacts</h2>
                </div>
                <div className={s.formWrapper}>
                    <form className={s.form} action="">
                        <input type='email' placeholder={'enter your email'}/>
                        <input type="text" placeholder={"enter message's theme"}/>
                        <textarea placeholder={'enter your message'} name="textArea" id="1" cols={30}
                                  rows={10}/>
                        <button>Send message</button>
                    </form>
                </div>
                <div className={s.contactsData}>
                    <span>phone number will be here</span>
                    <span>telegram will be here</span>
                    <span>viber will be here</span>
                    <span>whatsUp will be here</span>
                    <span>email will be here</span>
                </div>
            </div>
        </div>
    );
};
