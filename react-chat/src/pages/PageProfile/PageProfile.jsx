import React, { useState, useEffect } from 'react'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import ProfileImage from '../../components/ProfileImage/ProfileImage'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'

export default function PageProfile () {
  const [name, setName] = useState('Andrey Murygin')
  const [username, setUsername] = useState('@andrey')
  const [bio, setBio] = useState('Struggling with React')

  function getProfileInfo () {
    let name = localStorage.getItem('name') || ''
    if (name) { name = JSON.parse(name) };
    let username = localStorage.getItem('username') || ''
    if (username) { username = JSON.parse(username) };
    let bio = localStorage.getItem('bio') || ''
    if (bio) { bio = JSON.parse(bio) };
    return [name, username, bio]
  }

  function saveProfileInfo (name, username, bio) {
    localStorage.setItem('name', JSON.stringify(name))
    localStorage.setItem('username', JSON.stringify(username))
    localStorage.setItem('bio', JSON.stringify(bio))
  }

  function handleSubmit (event) {
    event.preventDefault()
    if (name === '') {
      alert('You must fill your name')
      return
    }
    if (username.length < 6 || username[0] !== '@') {
      alert('You username must contain at least 5 characters and start with @')
      return
    }
    saveProfileInfo(name, username, bio)
    alert('Your profile information has been saved')
  }

  function loadProfileInfo () {
    const profileInfo = getProfileInfo()
    if (profileInfo[0] && profileInfo[1]) {
      setName(profileInfo[0])
      setUsername(profileInfo[1])
      setBio(profileInfo[2])
    }
  }

  useEffect(loadProfileInfo, [])

  return (
        <>
            {ProfileHeader({
              onClick: handleSubmit
            })}
            <ProfileImage></ProfileImage>
            {ProfileInfo({
              name,
              setName,
              username,
              setUsername,
              bio,
              setBio
            })}
        </>
  )
}
