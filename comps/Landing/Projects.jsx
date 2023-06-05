import React, { useState, useEffect } from 'react'

function Projects() {
    const [projects, setProjects] = useState([])
    function getProject() {
        fetch('/api/admin/project')
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    setProjects(data.project)
                }
            })
    }

    useEffect(() => {
        getProject()
    }, [])


    return (
        <div className='Service'>
            <h1 className='projHead'>Our Projects</h1>
            <p>These are some projects which we have done.</p>
            <div className="s-cards">
                {projects.map((project, index) => (
                    <div className="p-card" key={index}>
                        <div className="p-img-wrap">
                            <img src={project.image} alt="" />
                        </div>
                        <p className='client'>Client: {project.client}</p>
                        <h3>{project.title}</h3>
                        <p>{project.type}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects