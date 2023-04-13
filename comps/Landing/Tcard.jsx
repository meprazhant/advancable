import React from 'react'

function Scard({ img, title, desc, bc }) {
    return (
        <div className='s-card' style={{ backgroundColor: bc }}>
            <div className="t-img">
                <img src={img} alt="designing" />
                <h1>{title}</h1>
            </div>
            <div className="t-text">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Scard