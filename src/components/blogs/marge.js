import React, { useState } from 'react'
import PageLeft from './pageLeft';
import PageRight from './pageRight';
import { blogData } from '../blog-one/blogData';

function Marge() {
    const [item, setItem] = useState(blogData);
    return (
        <div>
            <div className="max-w-1366pmx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px mt-87px">

                <div className="flex justify-center sm:flex-row flex-col-reverse">
                    <div className="flex flex-wrap justify-between md:mr-25px rounded-lg">
                        {item.map((curItem, index) => (
                            <div className={index === 0 ? 'bigger-box' : ""}><PageLeft key={curItem.id} {...curItem} /></div>

                        ))}
                    </div>

                    <PageRight />

                </div>
            </div>

        </div>
    )
}

export default Marge
