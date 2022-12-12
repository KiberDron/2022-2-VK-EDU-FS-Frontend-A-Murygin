import React, { useState, useEffect } from 'react';
import classes from './PageLogin.module.scss';
import Google from '@mui/icons-material/Google';


export default function PageLogin() {

    return (
        <>
            <div className={classes.login_page}>
                <div className={classes.content}>
                    <h1 className={classes.title}>Messenger</h1>
                    <button className={classes.button_login_google}>
                        <Google className={classes.button_icon}></Google>
                        <a className={classes.button_text} href='http://127.0.0.1:9000/social-auth/login/google-oauth2'>LOGIN WITH GOOGLE</a>
                    </button>
                </div>
            </div>
        </>
    )
}