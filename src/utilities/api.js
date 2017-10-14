const Api = {
    apiKey : 'apiKey=25ef7e27e5574eb7a24dac16295f9a9b',
    baseUrl : 'https://newsapi.org/v1/',
    endArticles: 'articles',
    endSources: 'sources',
    sources: [],

    get : (endPoint, params) => {
        url = Api.baseUrl + endPoint + '?' + Api.apiKey;
        params.forEach(param=>url += '&' + param)

        return fetch(url );

    },
    getArticles : () => {
        return Api.get(Api.endArticles, ['source=the-next-web'])
    },
    getSources: () => {
        return Api.get(Api.endSources);
    }
}

export default Api;