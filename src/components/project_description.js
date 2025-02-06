import React from 'react';
import Button from "../components/button"


const ProjectDescription = ({ role, duration, description, link, title, linkActive }) => {
    return (
        <div className='sticky top-10'>
            <p className='text-zinc-50 text-sm md:text-base mb-3'>
                <strong>My Role: </strong>
                {role}
            </p>
            <p className='text-zinc-50 text-sm md:text-base mb-3'>
                <strong>Duration: </strong>
                {duration}
            </p>
            <p className='text-zinc-50 text-sm md:text-base'>
                <strong>Description: </strong>
                {description}
            </p>
            {linkActive && (
                <a href={link} target='_blank' rel='noreferrer' className='inline-block mt-5'>
                    <Button direction={'next'}>
                        {title}
                    </Button>
                </a>
            )}
        </div>
    );
};

export default ProjectDescription;