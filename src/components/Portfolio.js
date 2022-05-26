import React from "react";
import { projects } from '../projects';

export default function Portfolio () {
    return (
        <section>
            <div>
                <h1 className="d-flex justify-content-center p-4">Here are some Projects that I have made!</h1>
            </div>
            <div className="d-flex justify-content-center p-4">
                {projects.map((project) => (
                    <a href={project.link} key={project.image}>
                        <div>
                            <img alt="Projects" src={project.image} />
                            <div>
                                <h1 className="h2">{project.title}</h1>
                                <p>{project.desctiption}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}