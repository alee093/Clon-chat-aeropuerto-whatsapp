import React from 'react'
import './ChatInput.css'

const ChatInput = () => {
    return (
        <div className='chat-input-container'>
            <div className='plus-icon-container'>
                <svg viewBox="0 0 24 24" width="30" preserveAspectRatio="xMidYMid meet" class="x11xpdln x1d8287x x1h4ghdb"><title>plus</title><path fill="#d0d7db" d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path></svg>
            </div>
            <div className='aeropuerto-input-container'>
                <form className='chat-form'>
                    <input type="text" placeholder='Escribe un mensaje' className='chat-input' />
                    <button type='submit' className='send-button'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>send</title><path fill="#7b8b94" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChatInput
