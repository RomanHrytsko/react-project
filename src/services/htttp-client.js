class HttpClient {
    get(url, params) {
        return fetch(url)
    }
}
export const httpClient = new HttpClient();