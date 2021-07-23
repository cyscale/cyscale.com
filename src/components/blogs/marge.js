import React, { useState, useEffect } from 'react';
import PageLeft from './pageLeft';
import PageRight from './pageRight';
import { useStaticQuery, graphql } from 'gatsby';
import { globalHistory } from "@reach/router";
function Marge() {
    const [allItem, setAllItem] = useState([]);
    const [activeAuthor, setActiveAuthor] = useState("");
    console.log(globalHistory.location.search?.split("=")[1])

    useEffect(() => {
        setActiveAuthor(globalHistory?.location.search?.split("=")[1])
    }, [globalHistory.location.search])

    const data = useStaticQuery(graphql`
        query HeaderQuery {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            ) {
                nodes {
                    frontmatter {
                        authors
                        category
                        description
                        date
                        featuredimage {
                            publicURL
                        }
                        permalink
                        featuredpost
                        templateKey
                        title
                        tags
                    }
                }
            }
        }
    `);

    const {
        allMarkdownRemark: { nodes }
    } = data;

    useEffect(() => {
        setAllItem(nodes);
    }, [nodes]);




    const fiulterCategory = name => {
        setAllItem(nodes.filter(data => data.frontmatter.category === name));
    };

    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row justify-between max-w-1366pmx-auto pl-20px pr-20px md:pl-40px md:pr-40px lg:pl-60px lg:pr-60px xl:pl-80px xl:pr-80px 2xl:pl-80px 2xl:pr-80px mt-40px'>
                <div className='flex-col'>
                    <div className='block md:mr-25px rounded-lg'>
                        {allItem.map(
                            (curItem, index) =>
                                curItem.frontmatter.featuredpost && (
                                    <div key={index} className='bigger-box'>
                                        <PageLeft data={curItem.frontmatter} feature={true} />
                                    </div>
                                )
                        )}
                    </div>

                    <div className='flex justify-center sm:flex-row flex-col-reverse'>
                        {!!activeAuthor ?
                            <div className='flex flex-wrap justify-between md:mr-25px rounded-lg'>
                                {allItem.map((curItem, index) => (
                                    activeAuthor.replace(/_/gi, " ") === curItem.frontmatter.authors && <PageLeft key={index} data={curItem.frontmatter} />
                                ))}
                            </div>
                            :
                            <div className='flex flex-wrap justify-between md:mr-25px rounded-lg'>
                                {allItem.map((curItem, index) => (
                                    <PageLeft key={index} data={curItem.frontmatter} />
                                ))}
                            </div>
                        }
                    </div>
                </div>
                <PageRight fiulterCategory={fiulterCategory} data={nodes} />
            </div>
        </div>
    );
}

export default Marge;
