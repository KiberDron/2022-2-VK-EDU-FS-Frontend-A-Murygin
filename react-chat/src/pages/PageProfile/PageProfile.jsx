import React, { useState, useEffect } from 'react'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import ProfileImage from '../../components/ProfileImage/ProfileImage'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import classes from './PageProfile.module.scss';


export default function PageProfile({handleLoginClick}) {
    return (
        <>
            <ProfileHeader onClick={handleLoginClick}></ProfileHeader>
            <ProfileImage></ProfileImage>
            <ProfileInfo></ProfileInfo>
        </>
    )
}