class HttpClient {
    get(url, params) {
        return fetch(url, params)
    }


}

export const httpClient = new HttpClient()