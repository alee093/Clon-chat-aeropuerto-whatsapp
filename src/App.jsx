import React, {useState} from 'react'
import './App.css'
import HeaderMain from './Components/HeaderMain/HeaderMain'
import ChatsList from './Components/ChatsList/ChatsList'
import DownloadWhatsappWindow from './Components/ChatWindow/DownloadWhatsappWindow'
import { useActive } from './context/ActiveContext'
import AeropuertoChatWindow from './Components/ChatWindow/AeropuertoChatWindow/AeropuertoChatWindow'


function App() {
    const {active} = useActive()
    return (
        <div className='app-container'>
            <HeaderMain />
            <ChatsList/>
            {active === false && <DownloadWhatsappWindow />}
            {active === true && <AeropuertoChatWindow />}
        </div>
    )
}

export default App
