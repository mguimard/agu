export interface Result {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    country_code: string;
}

export interface ResultResponse {
    results: Result[]
}
