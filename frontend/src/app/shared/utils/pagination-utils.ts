export const range = (start: number, end: number): number[] => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

export const rangePages = (totalPages: number, currentPage: number): (number | string)[] => {
    if (6 >= totalPages) {
        return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - 1, 1);
    const rightSiblingIndex = Math.min(currentPage + 1, totalPages);

    const shouldShowLeftDots = leftSiblingIndex >= 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * 1;
        const leftRange = range(1, leftItemCount);

        return [...leftRange, '...', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * 1;
        const rightRange = range(totalPages - rightItemCount + 1, totalPages);
        return [firstPageIndex, '...', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }

    return [];
};
