import React from 'react'
import './AeropuertoChat.css'
import profile from "../../../assets/aeropuerto-profile.png"

const AeropuertoChat = () => {
    return (
        <button className='aeropuerto-chat-container'>
            <div className="profile-container">
                <img className='profile-image' src={profile} alt='profile' />
            </div>
            <div className='message-time-container'>
                <div className='name-time-container'>
                    <h3 className='name'>Aeropuertos Argentina</h3>
                    <span className='time'>10:04 p. m.</span>
                </div>
                <div className='message-container'>
                    <p className='message'>Hola, ¿en que podemos ayudarte?</p>
                </div>
            </div>
        </button>
    )
}

export default AeropuertoChat
