import React from 'react';

export const Row = ({ children, ...rest }) => (
    <div {...rest} className='grid grid-cols-12 gap-4'>
        {children}
    </div>
);
export const Container = ({ children, ...rest }) => (
    <div {...rest} className='container max-w-7xl m-auto px-8'>
        {children}
    </div>
);
export const Section = ({ children, ...rest }) => (
    <section {...rest} className='pt-24 pb-24 lg:pt-32 lg:pb-32'>
        {children}
    </section>
);
