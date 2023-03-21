import React from "react"
import RightArrow from '../sharedComponent/RightArrow';
import { Link } from 'gatsby';


const LearnMoreLink = ({ link }) => {
    return (
        <Link to={link} className='lg:mt-4'>
            <RightArrow fillColor={'#0F26AA'} marginTop={'-0.25rem'} />
            <span className='text-md ml-2 text-blue inline-block font-bold text-base'>Learn more</span>
        </Link>
    );
};

export default LearnMoreLink