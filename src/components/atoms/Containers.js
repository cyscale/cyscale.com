import React from 'react';

export const Row = ({ children, className = '', ...rest }) => (
    <div {...rest} className={'grid grid-cols-12 gap-4 ' + className}>
        {children}
    </div>
);
export const Container = ({ children, className, ...rest }) => (
    <div {...rest} className={'container max-w-7xl m-auto px-4 lg:px-8 ' + className || ''}>
        {children}
    </div>
);
export const Section = ({ children, className, ...rest }) => (
    <section {...rest} className={'pt-24 pb-24 lg:pt-32 lg:pb-32 ' + className || ''}>
        {children}
    </section>
);
