import React from 'react';
import { graphql } from 'gatsby';
import PostsPagination from '../components/new-blog/PostsPagination';

const BlogCategoriesTemplate = ({ pageContext, location, data }) => {
    const { category, categoriesList, seoTitle, seoDescription } = pageContext;
    const { currentPage, numPages, limit, categorySlug, heading } = pageContext;

    const prevPagePath =
        currentPage - 1 === 1 || currentPage - 1 === 0
            ? `/blog/${categorySlug}/`
            : `/blog/${categorySlug}/` + (currentPage - 1).toString();
    const nextPagePath = `/blog/${categorySlug}/` + (currentPage + 1).toString();

    const getPageNumberPath = (currentIndex) => {
        if (currentIndex === 0) {
            return `/blog/${categorySlug}`;
        }

        return `/blog/${categorySlug}/` + (currentIndex + 1);
    };

    return (
        <PostsPagination
            data={data}
            seoTitle={seoTitle}
            seoDescription={seoDescription}
            location={location}
            categoriesList={categoriesList}
            category={category}
            heading={heading}
            currentPage={currentPage}
            prevPagePath={prevPagePath}
            nextPagePath={nextPagePath}
            getPageNumberPath={getPageNumberPath}
            numPages={numPages}
            limit={limit}
        />
    );
};

export default BlogCategoriesTemplate;

export const query = graphql`
    query BlogsCategoryQuery($skip: Int!, $limit: Int!, $category: String!) {
        allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { templateKey: { eq: "blog-post" }, categories: { eq: $category } } }
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
