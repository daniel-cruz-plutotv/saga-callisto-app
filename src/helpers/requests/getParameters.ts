export const getUrlParameterByKey = (url:string, paramKey: string):string => {
    paramKey = paramKey.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + paramKey + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}