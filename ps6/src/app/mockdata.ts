export interface Weather {
  city: string;
  weather: string;
  description: string;
  temp: number;
  feels: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export const weatherData: Weather[] = [
  {
    city: 'Charlotte',
    weather: 'Rain',
    description: 'moderate rain',
    temp: 28.11,
    feels: 25.77,
    temp_min: 26.67,
    temp_max: 29.44,
    pressure: 1009,
    humidity: 39
  },
  {
    city: 'Boston',
    weather: 'Snow',
    description: 'moderate snow',
    temp: 13.18,
    feels: 12.05,
    temp_min: 12.22,
    temp_max: 14.44,
    pressure: 1016,
    humidity: 87
  },
  {
    city: 'Denver',
    weather: 'Rain',
    description: 'light rain',
    temp: 29.91,
    feels: 35.26,
    temp_min: 29,
    temp_max: 31,
    pressure: 1018,
    humidity: 83
  }
];
