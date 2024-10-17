export interface Forecast {
    latitude: number;
    longitude: number;
    current: {
        time: number;
        temperature_2m: number;
        weather_code: number;
    };
    daily : {
        time: number[];
        weather_code: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
    };
}