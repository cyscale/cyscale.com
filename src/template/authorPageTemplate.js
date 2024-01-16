import React from 'react';
import { graphql } from 'gatsby';
import PostsPagination from '../components/new-blog/PostsPagination';

const BlogCategoriesTemplate = ({ pageContext, location, data }) => {
    const { seoTitle, seoDescription } = pageContext;
    const { currentPage, numPages, limit, authorSlug } = pageContext;

    const prevPagePath =
        currentPage - 1 === 1 || currentPage - 1 === 0
            ? `/blog/${authorSlug}/`
            : `/blog/${authorSlug}/` + (currentPage - 1).toString();
    const nextPagePath = `/blog/${authorSlug}/` + (currentPage + 1).toString();

    const getPageNumberPath = (currentIndex) => {
        if (currentIndex === 0) {
            return `/blog/${authorSlug}`;
        }

        return `/blog/${authorSlug}/` + (currentIndex + 1);
    };

    return (
        <PostsPagination
            data={data}
            seoTitle={seoTitle}
            seoDescription={seoDescription}
            location={location}
            currentPage={currentPage}
            prevPagePath={prevPagePath}
            nextPagePath={nextPagePath}
            getPageNumberPath={getPageNumberPath}
            numPages={numPages}
            limit={limit}
            author={pageContext.authors}
        />
    );
};

export default BlogCategoriesTemplate;

export const query = graphql`
    query BlogsCategoryQuery($skip: Int!, $limit: Int!, $authors: String!) {
        allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { templateKey: { eq: "blog-post" }, authors: { eq: $authors } } }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    frontmatter {
                        authors
                        categories
                        title
                        seoTitle
                        description
                        seoDescription
                        date
                        featuredpost
                        permalink
                        featuredimage {
                            publicURL
                            childImageSharp {
                                gatsbyImageData(width: 820, layout: CONSTRAINED)
                            }
                        }
                    }
                    rawMarkdownBody
                }
            }
        }
    }
`;
