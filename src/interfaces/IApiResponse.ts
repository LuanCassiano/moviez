export interface IApiResponse<T = undefined> {
    page: number;
    results: T;
}
