import React from 'react'
import './ChatsList.css'
import HeaderInput from './HeaderInput/HeaderInput'
import Sincronizacion from './Sincronizacion/Sincronizacion'
import AeropuertoChat from './AeropuertoChat/AeropuertoChat'


const ChatsList = () => {
    return (
        <div className='chats-list'>
            <HeaderInput />
            <Sincronizacion />
            <AeropuertoChat />
        </div>
    )
}

export default ChatsList
