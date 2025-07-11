import React from 'react'
import './App.css'
import HeaderMain from './Components/HeaderMain/HeaderMain'
import ChatsList from './Components/ChatsList/ChatsList'
import DownloadWhatsappWindow from './Components/ChatWindow/DownloadWhatsappWindow'

function App() {

    return (
        <div className='app-container'>
            <HeaderMain />
            <ChatsList />
            <DownloadWhatsappWindow />
        </div>
    )
}

export default App
