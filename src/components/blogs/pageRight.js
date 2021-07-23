import React, { useEffect, useState } from 'react';

import { Dropdown } from 'react-bootstrap';


const PageRight = ({ fiulterCategory, data }) => {

    const [category, setCategory] = useState()

    useEffect(() => {
        var array1 = [];
        data.map(x => {
            if (!array1.includes(x.frontmatter.category)) {
                array1.push(x.frontmatter.category)
            }
        })
        setCategory(array1)

    }, [])


    return (
        <>
            <div className='md:hidden'>
                <Dropdown>
                    <Dropdown.Toggle className='w-full' id='dropdown-basic'>
                        FILTER BY TOPIC
                    </Dropdown.Toggle>

                    <Dropdown.Menu >

                        {category?.map((cat, Index) => (
                            <Dropdown.Item >
                                <p
                                    onClick={() => fiulterCategory(cat)}
                                    key={Index}
                                    className="text-16px leading-24px mt-8px cursor-pointer ">
                                    {cat}

                                </p>
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div id="example-collapse-text " className="md:block ">
                <div className="w-full pl-20px pr-20px md:pl-0 md:pr-0 mt-50px md:mt-0 md:w-184px lg:w-210px xl:w-330px absolute top-605px left-0 md:relative md:top-0px">
                    <div className="bg-indigo-100 w-200px p-20px rounded-md shadow-md hidden md:block ">
                        <p className="text-blue text-18px ">FILTER BY TOPIC</p>
                        {category?.map((cat, Index) => (
                            <p
                                onClick={() => fiulterCategory(cat)}
                                key={Index}
                                className="text-16px leading-24px mt-8px cursor-pointer ">
                                {cat}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageRight;
