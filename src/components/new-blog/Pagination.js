import React from 'react';
import { Link } from 'gatsby';
import Back from '../../assets/images/back-pagination.svg';
import { DOTS, usePagination } from '../../hooks/usePagination';
import classnames from 'classnames';
import Forward from '../../assets/images/forward-pagination.svg';
import { css } from 'twin.macro';

const paginationButton = css`
    height: 2.5rem;
    width: 2.5rem;
`;

const Pagination = ({
    numPages,
    currentPage,
    limit,
    prevPagePath,
    nextPagePath,
    getPageNumberPath,
    isFirst,
    isLast
}) => {
    const totalCount = numPages * limit;
    const siblingCount = 1;
    const pageSize = limit;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    return (
        <>
            {numPages >= 2 && (
                <div className='flex justify-center mb-20'>
                    <div className='flex justify-between'>
                        {!isFirst && (
                            <Link
                                to={prevPagePath}
                                rel='prev'
                                className='bg-transparent text-grey2 flex justify-center items-center rounded-md hover:bg-grey3'
                                css={paginationButton}
                            >
                                <img src={Back} alt='' />
                            </Link>
                        )}
                        {paginationRange.map((pageNumber) => {
                            if (pageNumber === DOTS) {
                                return (
                                    <a className='flex items-center mx-0.5 sm:mx-2' key={pageNumber + 1}>
                                        <span>&bull;&bull;&bull;</span>
                                    </a>
                                );
                            }

                            return (
                                <Link
                                    key={pageNumber + 1}
                                    to={getPageNumberPath(pageNumber - 1)}
                                    className={classnames('flex justify-center items-center mx-0.5 sm:mx-2', {
                                        'bg-white rounded-md': currentPage === pageNumber,
                                        'bg-transparent rounded-md hover:bg-grey3': currentPage !== pageNumber
                                    })}
                                    css={paginationButton}
                                >
                                    <span>{pageNumber}</span>
                                </Link>
                            );
                        })}
                        {!isLast && (
                            <Link
                                to={nextPagePath}
                                rel='next'
                                className='bg-transparent flex justify-center items-center rounded-md hover:bg-grey3'
                                css={paginationButton}
                            >
                                <img src={Forward} alt='' />
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Pagination;
