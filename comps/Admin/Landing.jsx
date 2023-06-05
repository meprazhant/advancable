import React from 'react'

function Landing() {
    function getMessages() {
        fetch('/api/admin/getMessages')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    React.useEffect(() => {
        getMessages()
    }, [])

    return (
        <div className='admin'>
            <div className="ad-card">
                <h1>Latest Messages</h1>
                <div className="ad-messa-cont">
                    asdas
                </div>
            </div>
        </div>
    )
}

export default Landing