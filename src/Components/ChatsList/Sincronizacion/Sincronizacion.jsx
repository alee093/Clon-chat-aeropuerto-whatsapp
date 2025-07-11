import React, { useState } from 'react'
import './Sincronizacion.css'

const Sincronizacion = () => {
    const [visible, setVisible] = useState(true)

    if (!visible) return null
    return (
        <div className='sincronizacion-container'>
            <div className="notification-container">
                <svg className='notification-icon' viewBox="0 0 48 48" height="48" width="48" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 48 48"><title>alert-notification</title><path fill="#52bdeb" d="M24.154,2C11.919,2,2,11.924,2,24.165S11.919,46.33,24.154,46.33 s22.154-9.924,22.154-22.165S36.389,2,24.154,2z M23.41,17.428V16.81c0-0.706,0.618-1.324,1.324-1.324s1.323,0.618,1.323,1.324 v0.618c2.559,0.618,4.412,2.823,4.412,5.559v3.176l-8.294-8.294C22.527,17.692,22.969,17.516,23.41,17.428z M24.733,33.134 c-0.971,0-1.765-0.794-1.765-1.765h3.529C26.498,32.34,25.704,33.134,24.733,33.134z M31.969,32.251l-1.765-1.765H17.233v-0.882 l1.765-1.765v-4.853c0-1.059,0.265-2.029,0.794-2.912l-2.559-2.559l1.147-1.147l14.735,14.736L31.969,32.251z"></path></svg>
            </div>
            <div className="text-container">
                <h3 className='title-sincronizacion'>Activa la sincronización en segundo plano</h3>
                <p className='text-sincronizacion'>Sincroniza los mensajes en segundo plano para obtener un rendimiento más rápido</p>
            </div>
            <div className="eliminate-button-container">
                <button className='eliminate-button' onClick={() => {
                    setVisible(false)
                }}>
                    <svg className='eliminate-icon' viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#8797a1" enable-background="new 0 0 24 24"><title>x</title><path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default Sincronizacion
