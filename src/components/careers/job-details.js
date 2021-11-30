import React from 'react';
import Description from './description';
import Apply from './apply-form';

const Details = ({ data }) => {
    return (
        <div>
          
            <Description data={data} />
            {!data.frontmatter.disabled ? <Apply data={data} /> : <div className='mb-12'></div>}
        </div>
    );
};

export default Details;
