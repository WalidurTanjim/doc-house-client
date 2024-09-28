import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className='w-full md:w-[600px] mx-auto mb-10 text-center'>
            <h1 className='text-2xl md:text-3xl text-slate-900 font-medium mb-2'>{title ? title : undefined}</h1>
            <p className='text-gray-600'>{subTitle ? subTitle : undefined}</p>
        </div>
    );
};

export default SectionTitle;