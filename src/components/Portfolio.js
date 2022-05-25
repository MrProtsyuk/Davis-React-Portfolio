import React from "react";
import { projects } from '../projects';

export default function Portfolio () {
    return (
        <section>
            <div>
                <h1>Here are some Projects that I have made!</h1>
            </div>
            <div>
                {projects.map((project) => (
                    <a href={project.link} key={project.image}>
                        <div>
                            <img alt="Projects" src={project.image} />
                            <div>
                                <h1>{project.title}</h1>
                                <p>{project.desctiption}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}