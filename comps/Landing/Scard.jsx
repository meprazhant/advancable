import React from 'react'

function Scard({ img, title, desc, bc }) {
    console.log(img)
    return (
        <div className='s-card' style={{ backgroundColor: bc }}>
            <div className="s-img">
                <img src={img} alt="designing" />
            </div>
            <div className="s-text">
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>Place an Order</button>
            </div>
        </div>
    )
}

export default Scard