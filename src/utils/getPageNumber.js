export const getPageNumber = (query) => {
    let pageNumber;

    try {
      pageNumber = parseInt(query.get('page')) || 1;
    } catch (error) {
      pageNumber = 1;
    }

    return pageNumber > 0 ? pageNumber : 1;
};
