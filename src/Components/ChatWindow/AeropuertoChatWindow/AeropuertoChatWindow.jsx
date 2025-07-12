import React from 'react'
import './AeropuertoChatWindow.css'
import ChatHeader from './ChatHeader/ChatHeader'
import ChatInput from './ChatInput/ChatInput'


const AeropuertoChatWindow = () => {
    return (
        <div className='aeropuerto-chat-window-container'>
            <ChatHeader />
            <ChatInput />
        </div>
    )
}

export default AeropuertoChatWindow
