import React from 'react'
import classes from './ProfileInfo.module.scss'
import PropTypes from 'prop-types'

function ProfileInfo (props) {
  const handleNameChange = (event) => {
    props.setName(event.target.value)
  }
  const handleUsernameChange = (event) => {
    props.setUsername(event.target.value)
  }
  const handleBioChange = (event) => {
    props.setBio(event.target.value)
  }

  return (
        <article className={classes.profile_info}>
            <div className={classes.info_block_extended}>
                <div className={classes.info_block}>
                    <span className={classes.info_block_title}>Full name</span>
                    <input
                        className={classes.input}
                        name="full_name"
                        placeholder="Enter your full name"
                        type="text"
                        value={props.name}
                        onChange={handleNameChange}/>
                </div>
            </div>
            <div className={classes.info_block_extended}>
                <div className={classes.info_block}>
                    <span className={classes.info_block_title}>Username</span>
                    <input
                        className={classes.input}
                        name="username"
                        placeholder="Enter your username"
                        type="text"
                        value={props.username}
                        onChange={handleUsernameChange}/>
                </div>
                <span className={classes.info_block_description}>Minimum length is 5 characters</span>
            </div>
            <div className={classes.info_block_extended}>
                <div className={classes.info_block}>
                    <span className={classes.info_block_title}>Bio</span>
                    <input
                        className={classes.input}
                        name="bio"
                        placeholder="Enter your bio"
                        type="text"
                        value={props.bio}
                        onChange={handleBioChange}/>
                </div>
                <span className={classes.info_block_description}>Any details about you</span>
            </div>
        </article>
  )
}

ProfileInfo.propTypes = {
  setName: PropTypes.any,
  setUsername: PropTypes.any,
  setBio: PropTypes.any,
  name: PropTypes.string,
  username: PropTypes.string,
  bio: PropTypes.string
}

export default ProfileInfo
