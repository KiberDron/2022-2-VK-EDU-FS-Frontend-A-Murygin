import React from 'react'
import classes from './ProfileImage.module.scss'
import CameraAlt from '@mui/icons-material/CameraAlt';


export default function ProfileImage() {
    return (
        <div className={classes.profile_image}>
            <img className={classes.image} src="https://bit.ly/3Eg3ck7" alt="profile_image" />
            <span className={classes.add_photo}>
                <CameraAlt></CameraAlt>
            </span>
        </div>
    )
}