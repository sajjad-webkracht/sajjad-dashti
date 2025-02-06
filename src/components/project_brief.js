import React from 'react';

const Brief = ({ brief, problem, solution }) => {
    return (
        <div className='text-zinc-50'>
            <div>
                <h2 className='text-2xl font-bold mb-3'>Project Brief</h2>
                <p className=''>{brief}</p>
            </div>
            <div className='flex flex-col md:flex-row mt-12 gap-8'>
                <div className='bg-zinc-900 p-8 w-full md:w-1/2'>
                    <h2 className='text-xl font-bold mb-2'>Problem</h2>
                    <p>{problem}</p>
                </div>
                <div className='bg-zinc-900 p-8 w-full md:w-1/2'>
                    <h2 className='text-xl font-bold mb-2'>Solution</h2>
                    <p>{solution}</p>
                </div>
            </div>
        </div>
    );
};

export default Brief;