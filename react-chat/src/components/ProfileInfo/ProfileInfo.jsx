import React from 'react'
import classes from './ProfileInfo.module.scss'


export default function ProfileInfo(props) {
    
    return (
        <article className={classes.profile_info}>
            <div className={classes.info_block_extended}>
                <div className={classes.info_block}>
                    <span className={classes.info_block_title}>Full name</span>
                    <input className={classes.input} name="full_name" placeholder="Enter your full name" type="text"/>
                </div>
            </div>
            <div className={classes.info_block_extended}>
                <div className={classes.info_block}>
                    <span className={classes.info_block_title}>Username</span>
                    <input className={classes.input} name="username" placeholder="Enter your username" type="text"/>
                </div>
                <span className={classes.info_block_description}>Minimum length is 5 characters</span>
            </div>
            <div className={classes.info_block_extended}>
                <div className={classes.info_block}>
                    <span className={classes.info_block_title}>Bio</span>
                    <input className={classes.input} name="bio" placeholder="Enter your bio" type="text"/>
                </div>
                <span className={classes.info_block_description}>Any details about you</span>
            </div>
        </article>
    )
}