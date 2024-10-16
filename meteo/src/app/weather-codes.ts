export const WeatherCodes = (code: number) => {
    switch (code) {
        case 0: return { name: 'Beau' };
        case 1: return { name: 'A peu près beau' };
        case 2: return { name: 'Pas ouf' };
        case 3: return { name: 'Couvert' };
        case 45: return { name: 'Brouillard' };
        case 48: return { name: 'Brouillard givrant' };
        case 51 : return { name: 'Crachin' };
        case 53 : return { name: 'Bon Crachin' };
        case 55 : return { name: 'Bon gros Crachin' };
        
        case 61 : return { name: 'Pluie' };
        case 63 : return { name: 'Bonne Pluie' };
        case 65 : return { name: 'Bonne grosse Pluie' };

        case 80 : return { name: 'Averses' };
        case 81 : return { name: 'Bonnes Averses' };
        case 82 : return { name: 'Bonnes grosses Averses' };
        default: return { name: 'tout pourri (code ' + code + ')' };
    }
}

/*

0 	Clear sky
1, 2, 3 	Mainly clear, partly cloudy, and overcast
45, 48 	Fog and depositing rime fog
51, 53, 55 	Drizzle: Light, moderate, and dense intensity
56, 57 	Freezing Drizzle: Light and dense intensity
61, 63, 65 	Rain: Slight, moderate and heavy intensity
66, 67 	Freezing Rain: Light and heavy intensity
71, 73, 75 	Snow fall: Slight, moderate, and heavy intensity
77 	Snow grains
80, 81, 82 	Rain showers: Slight, moderate, and violent
85, 86 	Snow showers slight and heavy
95 * 	Thunderstorm: Slight or moderate
96, 99 * 	Thunderstorm with slight and heavy hail

*/