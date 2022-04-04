import React, { useEffect, useState } from 'react';

import { Dropdown } from 'react-bootstrap';

const PageRight = ({ filterCategory, data, appliedFilter }) => {
    const [category, setCategory] = useState();

    useEffect(() => {
        var array1 = ['All'];
        data.map((x) => {
            if (!array1.includes(x.frontmatter.categories[0])) {
                return array1.push(x.frontmatter.categories[0]);
            }
            return null;
        });
        setCategory(array1);
    }, [data]);

    return (
        <>
            <div className='block lg:hidden absolute top-4 left-0 w-full'>
                <div className='px-2'>
                    <Dropdown>
                        <Dropdown.Toggle className='w-full' id='dropdown-basic'>
                            FILTER BY TOPIC
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {category?.map((cat, key) => (
                                <Dropdown.Item key={key} onClick={() => filterCategory(cat)}>
                                    <p className='text-base leading-normal mb-1 cursor-pointer '>{cat}</p>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div id='example-collapse-text' className='hidden lg:block absolute left-full top-6'>
                <div className='w-full pl-20px pr-20px md:pl-0 md:pr-0 mt-50px md:mt-0 md:w-184px lg:w-210px xl:w-330px absolute top-605px left-0 md:relative md:top-0px'>
                    <div className='bg-indigo-100 w-200px p-20px rounded-md shadow-md hidden md:block '>
                        <p className='text-blue text-18px '>FILTER BY TOPIC</p>
                        {category?.map((cat, key) => (
                            <button
                                key={key}
                                tabIndex={key}
                                onClick={() => filterCategory(cat)}
                                className={`w-full text-left p-1  block mb-1 text-sm leading-normal cursor-pointer ${
                                    cat === appliedFilter ? 'underline' : ''
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageRight;
