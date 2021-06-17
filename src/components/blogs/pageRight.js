import React, { useState } from 'react';


import { Dropdown } from 'react-bootstrap';


const PageRight = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="md:hidden">
                <Dropdown>
                    <Dropdown.Toggle
                        className="w-full"

                        id="dropdown-basic">
                        FILTER BY TOPIC
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item > <p className="text-16px leading-24px mt-8px">
                            quis nostrud exerci tation ullamcorper
                        </p></Dropdown.Item>
                        <Dropdown.Item >  <p className="text-16px">
                            dolore te feugait nulla facilisi.
                        </p></Dropdown.Item>
                        <Dropdown.Item>   <p className="text-16px">
                            Ut wisi enim ad minim veniam,
                        </p></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div id="example-collapse-text " className="md:block hidden">
                <div className="w-full pl-20px pr-20px md:pl-0 md:pr-0 mt-50px md:mt-0 md:w-184px lg:w-210px xl:w-330px absolute top-605px left-0 md:relative md:top-0px">
                    <div className="bg-indigo-100 w-200px p-20px rounded-md shadow-md ">
                        <h4 className="text-blue text-18px ">FILTER BY TOPIC</h4>
                        <p className="text-16px leading-24px mt-8px">
                            quis nostrud exerci tation ullamcorper
                        </p>
                        <p className="text-16px">
                            dolore te feugait nulla facilisi.
                        </p>
                        <p className="text-16px">
                            Ut wisi enim ad minim veniam,
                        </p>
                        <p className="text-16px">
                            Ut wisi enim ad minim
                        </p>
                        <p className="text-16px">
                            Duis autem vel eum.
                        </p>
                        <p className="text-16px">
                            Ut feugait nulla facilisi.
                        </p>


                    </div>
                </div>
            </div>

        </>
    )
};

export default PageRight
