# Task 2 – Jakarta Weather Forecast

A JavaScript program that retrieves the 5-day weather forecast for Jakarta using the OpenWeatherMap API and displays the average temperature for each day.

## Requirements
- Uses the OpenWeatherMap 5-day forecast API.
- Retrieves weather data for Jakarta, Indonesia.
- Groups forecast temperatures by Jakarta's local date.
- Calculates one average temperature per day.
- Displays temperatures in Celsius.
- Uses an environment variable to protect the API key.

## How to Run

Create a `.env` file using `.env.example` and add your OpenWeatherMap API key.

```bash
node --env-file=.env weather.js
```

## Output

See `output.png` for the program's terminal output.