import React from 'react'
import dayjs from 'dayjs'
var relativeTime = require('dayjs/plugin/relativeTime')

function Landing({ user }) {
    var [messages, setMessages] = React.useState(null)
    var [time, setTime] = React.useState(null)
    var [loading, setLoading] = React.useState(true)


    function getMessages() {
        fetch('/api/admin/getMessages')
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    setMessages(data.messages)
                }

            })
    }
    var [alerts, setAlerts] = React.useState(null)
    function getAlerts() {
        fetch('/api/admin/sendAlerts')
            .then(res => res.json())
            .then(data => {

                if (data.status === 200)
                    setAlerts(data.alerts)
            })

    }
    var [projects, setProjects] = React.useState(null)

    function getProject() {
        fetch('/api/admin/project')
            .then(res => res.json())
            .then(data => {
                setLoading(false)

                if (data.status === 200) {
                    setProjects(data.project)
                }
            })
    }

    React.useEffect(() => {
        getMessages()
        getAlerts()
        getProject()
    }, [])


    function mail(email) {
        window.open(`mailto:${email}`)
    }

    var [showAlert, setShowAlert] = React.useState(false)

    function del(id) {
        fetch('/api/admin/deleteMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    getMessages()
                    setShowAlert(true)
                    setTimeout(() => {
                        setShowAlert(false)
                    }, 3000)
                }
            })
    }

    function delAlert(id) {
        fetch('/api/admin/deleteAlerts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    getAlerts()
                    setShowAlert(true)
                    setTimeout(() => {
                        setShowAlert(false)
                    }, 3000)
                }
            })
    }

    function validateAlert(e) {
        e.preventDefault()
        var foprmInputs = document.querySelectorAll('#my_modal_3 input')

        for (var i = 0; i < foprmInputs.length; i++) {
            foprmInputs[i].classList.remove('border-red-500')
            if (foprmInputs[i].value === '') {
                foprmInputs[i].classList.add('border-red-500')
                return
            }
        }
        saveAlerts()
    }

    function saveAlerts() {
        var title = document.getElementById("title")
        var description = document.getElementById("message")
        var image = document.getElementById("image")
        var close = document.getElementById("closeBtn")

        fetch('/api/admin/sendAlerts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                description: description.value,
                image: image.value
            })
        })
            .then(res => res.json())
            .then(data => {

                if (data.status === 200) {
                    getAlerts()
                    close.click()
                    title.value = ''
                    description.value = ''
                    image.value = ''
                }
            }
            )
    }

    function validateAlert2(e) {
        e.preventDefault()
        var foprmInputs = document.querySelectorAll('#my_modal_4 input')

        for (var i = 0; i < foprmInputs.length; i++) {
            foprmInputs[i].classList.remove('border-red-500')
            if (foprmInputs[i].value === '') {
                foprmInputs[i].classList.add('border-red-500')
                return
            }
        }
        saveProject()
    }

    function saveProject() {
        var title = document.getElementById("title2")
        var client = document.getElementById("client")
        var image2 = document.getElementById("image2")
        var type = document.getElementById("type")
        var close = document.getElementById("closeBtn2")

        fetch('/api/admin/project', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                client: client.value,
                image: image2.value,
                type: type.value
            })
        })
            .then(res => res.json())
            .then(data => {

                if (data.status === 200) {
                    getProject()
                    close.click()
                    title.value = ''
                    client.value = ''
                    image2.value = ''
                    type.value = ''
                }
            }
            )
    }

    function delProject(id) {
        fetch('/api/admin/deleteProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    getProject()
                    setShowAlert(true)
                    setTimeout(() => {
                        setShowAlert(false)
                    }, 3000)
                }
            })
    }

    function validImage() {
        var image = document.getElementById("image")
        var imagePreview = document.getElementById("imagePreview")
        // check if image is previewed
        if (image.value === '') {
            imagePreview.src = ''
            return
        }
        // check if image is valid
        imagePreview.src = image.value
    }
    function validImageproj() {
        var image = document.getElementById("image2")
        var imagePreview = document.getElementById("imagePreview2")
        // check if image is previewed
        if (image.value === '') {
            imagePreview.src = ''
            return
        }
        // check if image is valid
        imagePreview.src = image.value
    }


    if (loading) return (

        <div className="Loading">
            <img src="https://i.ibb.co/pPFrPqq/ARTVERSE-2.gif" alt="Loading Animation" border="0" />
        </div>
    )


    return (
        <div className='admin'>
            <div className="adm-logout">
                <h1 className='sm:text-3xl text-xl font-bold'>Admin Panel</h1>
                <div className="adm-info">
                    <h1 className='text-2xl font-bold'>Hello {user.name}</h1>
                    <button className='btn btn-warning' onClick={logout}>Logout</button>
                </div>
            </div>
            {(showAlert) && <div className="addelete">
                <div className="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>The Message is deleted</span>
                </div>
            </div>}
            <div className="ad-card">
                <h1 className='sm:text-3xl text-xl font-bold'>Latest Messages</h1>
                <div className="ad-messa-cont">
                    {messages && messages.map((message, index) => {
                        dayjs.extend(relativeTime)
                        var day = new Date(message.createdAt)
                        var dates = dayjs().to(dayjs(day))
                        return (
                            <div className="ad-messa" key={index}>
                                <div className="adm-sa">
                                    <h3 >{message.name} says </h3>
                                    <span >{dates}</span>
                                </div>
                                {/* <p>{message.email}</p> */}
                                <p>{message.message}</p>
                                <div className="ad-btns">
                                    <button className='bg-slate-800 p-2 rounded-xl' onClick={() => mail(message.email)}>Reply</button>
                                    <button className='bg-red-800 p-2 rounded-xl' onClick={() => del(message._id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                    {(messages && messages.length == 0) && <div className="ad-messa">
                        <h3 >No Messages</h3>
                    </div>}
                </div>
            </div>
            <div className="ad-card">
                <h1 className='sm:text-3xl text-xl font-bold'>Latest Alerts</h1>
                <div className="ad-messa-cont">
                    {(alerts && alerts.length !== 0) && alerts.map((alert, index) => {
                        dayjs.extend(relativeTime)
                        var day = new Date(alert.createdAt)
                        var dates = dayjs().to(dayjs(day))
                        return (
                            <div className="ad-messa" key={index}>
                                <div className="adm-sa">
                                    <h3 >{alert.title}</h3>
                                    <span >{dates}</span>
                                    {(index == 0) && <span className='text-green-500'>Active</span>}
                                </div>
                                <img className='ad-alert-img' src={alert.image} alt="" />
                                <div className="ad-btns">
                                    <button className='bg-red-800 p-2 rounded-xl' onClick={() => delAlert(alert._id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}

                    {(alerts && alerts.length == 0) && <div className="ad-messa">
                        <h3 >You do not have any alerts. Create One?</h3>

                    </div>}

                    <div className="ad-btns">
                        <div className="btn btn-warning" onClick={() => window.my_modal_3.showModal()}>Create an Alert</div>
                        <dialog id="my_modal_3" className="modal">
                            <form method="dialog" className="modal-box" >
                                <button htmlFor="my-modal-3" id='closeBtn' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <h3 className="font-bold text-lg">Create an Alert!</h3>
                                <p className="py-4">Alert helps you to show important updates once user visits your website.</p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" placeholder="Title" className="input input-bordered" id="title" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input placeholder="Description" className="input input-bordered" id="message"></input>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Link. (Upload to any server and paste it here)</span>
                                    </label>
                                    <input placeholder="Image Url" onChange={validImage} className="input input-bordered" id="image"></input>
                                </div>
                                <img src="" alt="" className='p-5' id='imagePreview' />
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" onClick={(e) => validateAlert(e)}>Create</button>
                                </div>
                            </form>
                        </dialog>
                    </div>

                </div>
            </div>

            <div className="ad-card">
                <h1 className='sm:text-3xl text-xl font-bold'>Your Projects</h1>
                <div className="ad-messa-cont">
                    {(projects && projects.length !== 0) && projects.map((alert, index) => {
                        dayjs.extend(relativeTime)
                        var day = new Date(alert.createdAt)
                        var dates = dayjs().to(dayjs(day))
                        return (
                            <div className="ad-messa" key={index}>
                                <div className="adm-sa">
                                    <h3 >{alert.title}</h3>
                                    <span >{dates}</span>
                                </div>
                                <img className='ad-alert-img' src={alert.image} alt="" />
                                <div className="ad-btns">
                                    <button className='bg-red-800 p-2 rounded-xl' onClick={() => delProject(alert._id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}

                    {(projects && projects.length == 0) && <div className="ad-messa">
                        <h3 >You haven&apos;t added any project data on website. Add some</h3>

                    </div>}

                    <div className="ad-btns">
                        <div className="btn btn-primary" onClick={() => window.my_modal_4.showModal()}>Add a Project</div>
                        <dialog id="my_modal_4" className="modal">
                            <form method="dialog" className="modal-box" >
                                <button htmlFor="my-modal-3" id='closeBtn2' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <h3 className="font-bold text-lg">Add your recent Project!</h3>
                                <p className="py-4">Alert helps you to show important updates once user visits your website.</p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" placeholder="Title" className="input input-bordered" id="title2" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Client&apos;s name</span>
                                    </label>
                                    <input placeholder="Client's Name" className="input input-bordered" id="client"></input>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type (Video editing, web development, Music production etc)</span>
                                    </label>
                                    <input placeholder="Type" className="input input-bordered" id="type"></input>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Link. (Upload to any server and paste it here)</span>
                                    </label>
                                    <input placeholder="Image Url" onChange={validImageproj} className="input input-bordered" id="image2"></input>
                                </div>
                                <img src="" alt="" className='p-5' id='imagePreview2' />

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" onClick={(e) => validateAlert2(e)}>Create</button>
                                </div>
                            </form>
                        </dialog>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Landing



async function logout() {
    await fetch('/api/logout', {
        method: 'POST',
    });
    window.location.href = '/login'
}
