export const getQueryParam = (url) => {
    const queryParam = {}
    const query = url.split("?").length > 1 ? url.split("?")[1] : "";
    const  queryArr = query.split("&");
    for (let i = 0; i < queryArr.length; i++) {
        const queryPair = queryArr[i].split("=");
        queryParam[queryPair[0]] = queryPair[1];
    }

    return queryParam;
}
