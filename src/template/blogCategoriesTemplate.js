import React from 'react';
import { graphql } from 'gatsby';
import PostsPagination from '../components/new-blog/PostsPagination';

const BlogCategoriesTemplate = ({ pageContext, location, data }) => {
    const { category, categoriesList, seoTitle, seoDescription } = pageContext;
    const { currentPage, numPages, limit } = pageContext;

    const prevPagePath =
        currentPage - 1 === 1 || currentPage - 1 === 0
            ? `/blog/${category.toLowerCase()}/`
            : `/blog/${category.toLowerCase()}/` + (currentPage - 1).toString();
    const nextPagePath = `/blog/${category.toLowerCase()}/` + (currentPage + 1).toString();

    const getPageNumberPath = (currentIndex) => {
        if (currentIndex === 0) {
            return `/blog/${category.toLowerCase()}`;
        }

        return `/blog/${category.toLowerCase()}/` + (currentIndex + 1);
    };

    return (
        <PostsPagination
            data={data}
            seoTitle={seoTitle}
            seoDescription={seoDescription}
            location={location}
            categoriesList={categoriesList}
            category={category}
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
