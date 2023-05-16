import React, { useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch';
import ClearInput from '../../assets/images/close-search.svg';
import { css } from 'twin.macro';
import FocusLock from 'react-focus-lock';
import classnames from 'classnames';
import { Link } from 'gatsby';
import useMediaQuery from '../../hooks/useMediaQuery';
import { algoiaSearchKey, algoliaAppID, algoliaIndex } from '../../common/constants';

const client = algoliasearch(algoliaAppID, algoiaSearchKey);
const index = client.initIndex(algoliaIndex);
async function performSearch(query, notDesktop) {
    try {
        const { hits } = await index.search(query, {
            attributesToSnippet: [`content:${notDesktop ? '10' : '21'}`, 'title'],
            hitsPerPage: 20
        });
        return hits;
    } catch (err) {
        console.error(err);
        return [];
    }
}

function groupByCategory(hits) {
    return hits.reduce((categories, hit) => {
        const category = hit.category;
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(hit);
        return categories;
    }, {});
}

function sortCategories(categories) {
    return Object.entries(categories).sort(([categoryA], [categoryB]) => {
        if (categoryA === 'blog') return 1;
        if (categoryB === 'blog') return -1;
        return categoryA.localeCompare(categoryB);
    });
}

const CustomSearch = ({ searchBar, setSearchBar }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const notDesktop = useMediaQuery('(max-width: 1280px)');

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value.trim()) {
            const hits = await performSearch(e.target.value, notDesktop);
            const groupedResults = groupByCategory(hits);
            setResults(groupedResults);
        } else {
            setResults([]);
        }
    };

    const renderSnippet = (snippet) => {
        const highlightedValue = snippet.value
            .replace(/<em>/g, '<span class="highlight">')
            .replace(/<\/em>/g, '</span>');
        return (
            <span
                dangerouslySetInnerHTML={{
                    __html: highlightedValue
                }}
            />
        );
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape' || event.keyCode === 27) {
            setSearchBar(!searchBar);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
        //eslint-disable-next-line
    }, [setSearchBar]);

    return (
        <div
            className='w-full'
            css={css`
                position: static;
                background-color: #ffffff;
                padding: 1rem 0;
            `}
        >
            <FocusLock>
                <div
                    className='relative'
                    css={css`
                        width: 100%;
                    `}
                >
                    <div>
                        <input
                            type='text'
                            value={query}
                            onChange={handleSearch}
                            placeholder='Search for cloud security knowledge…'
                            className='py-2 outline-none font-hind'
                            css={css`
                                width: 70rem;
                                height: 3rem;
                                font-size: 1.5rem;
                                padding: 0.5rem 0;

                                @media (max-width: 1280px) {
                                    height: 2rem;
                                    font-size: 1rem;
                                }
                            `}
                        />
                        <img
                            src={ClearInput}
                            alt=''
                            width={16}
                            className='absolute right-0 top-1 lg:top-3 cursor-pointer'
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    setSearchBar(!searchBar);
                                }
                            }}
                            //eslint-disable-next-line
                            tabIndex={0}
                            onClick={() => {
                                if (query === '') {
                                    setSearchBar(!searchBar);
                                }

                                setQuery('');
                                setResults([]);
                            }}
                        />
                    </div>
                    {query !== '' && Object.keys(results).length >= 1 && (
                        <div className='block bg-white mt-2'>
                            {' '}
                            <hr
                                css={css`
                                    border: 0;
                                    height: 1px;
                                    background-color: #e8eef8;
                                    width: 100%;
                                `}
                            />
                        </div>
                    )}
                    <div
                        css={css`
                            background-color: white;
                            max-height: ${notDesktop ? '18.75rem' : '25rem'};
                            overflow-y: scroll;
                        `}
                        className={classnames({
                            'pb-4': query !== '' && Object.keys(results).length !== 0
                        })}
                    >
                        {sortCategories(results).map(([category, hits], index) => (
                            <div key={category} className='pt-6'>
                                <p className='text-xs font-hind text-blue font-bold uppercase'>{category}</p>
                                <div>
                                    {hits.map((hit) => (
                                        <Link to={hit.permalink} key={hit.objectID} className='mt-4 block'>
                                            <p className='font-hind font-semibold text-lg'>
                                                {renderSnippet(hit._snippetResult.title)}
                                            </p>
                                            <p className='font-base font-hind font-normal'>
                                                {renderSnippet(hit._snippetResult.content)}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FocusLock>
        </div>
    );
};

export default CustomSearch;
