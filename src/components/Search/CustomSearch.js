import React, { useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch';
import ClearInput from '../../assets/images/close-search.svg';
import { css } from 'twin.macro';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import FocusLock from 'react-focus-lock';
import classnames from 'classnames';
import { Link } from 'gatsby';

const client = algoliasearch(`appId`, `apiKey`);
const index = client.initIndex(`indexName`);

async function performSearch(query) {
    try {
        const { hits } = await index.search(query, {
            attributesToSnippet: ['content:5', 'title'],
            hitsPerPage: 7
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

const CustomSearch = ({ searchBar, setSearchBar }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useLockBodyScroll();

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value.trim()) {
            const hits = await performSearch(e.target.value);
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
    }, [setSearchBar]);

    return (
        <div
            css={css`
                height: 100vh;
                width: 100vw;
                background: rgba(235, 235, 235, 0.65);
                backdrop-filter: blur(6px);
                display: flex;
                justify-content: center;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 100;
            `}
        >
            <FocusLock>
                <div
                    className='relative inline-block'
                    css={css`
                        width: 50rem;
                        margin-top: 7rem;
                    `}
                >
                    <div className='shadow-2xl rounded-md'>
                        <input
                            type='text'
                            value={query}
                            onChange={handleSearch}
                            placeholder='Search...'
                            className={classnames({
                                'py-2 px-4 outline-none': true,
                                'rounded-t-md': query !== '' && Object.keys(results).length >= 1,
                                'rounded-md': query === '' || Object.keys(results).length === 0
                            })}
                            css={css`
                                width: 50rem;
                            `}
                        />
                        <img
                            src={ClearInput}
                            alt=''
                            width={16}
                            className='absolute right-4 top-3 cursor-pointer'
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    setSearchBar(!searchBar);
                                }
                            }}
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
                        <div className='px-4 block bg-white'>
                            {' '}
                            <hr
                                css={css`
                                    border: 0;
                                    height: 1px;
                                    background-color: #e8eef8;
                                    width: 100%;
                                    padding: 0 1rem;
                                `}
                            />
                        </div>
                    )}
                    <div
                        css={css`
                            background-color: white;
                        `}
                        className={classnames({
                            'px-4 pb-4 rounded-b-md': query !== '' && Object.keys(results).length !== 0
                        })}
                    >
                        {Object.entries(results).map(([category, hits], index) => (
                            <div key={category} className='pt-3'>
                                <p className='text-xs font-hind text-blue font-bold uppercase'>{category}</p>
                                <div>
                                    {hits.map((hit) => (
                                        <Link to={hit.permalink} key={hit.objectID} className='mt-2 block'>
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
