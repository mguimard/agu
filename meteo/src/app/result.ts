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


/*

{
"id":3021747,
"name":"Daoulas",
"latitude":48.36088,
"longitude":-4.25976,
"country_code" : "FR"
}

*/