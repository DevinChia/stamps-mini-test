const apiKey = process.env.API_KEY;

const url = `https://api.openweathermap.org/data/2.5/forecast?q=Jakarta,ID&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        const dailyTemperatures = {};
        const dateFormatter = new Intl.DateTimeFormat("en-GB", {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        console.log("Weather Forecast:")
        for (let i = 0; i < data.list.length; i++) {
            const timezone = data.city.timezone;
            const localTime = new Date((data.list[i].dt + timezone) * 1000);
            const localDate = localTime.toISOString().split("T")[0];
            const temperature = data.list[i].main.temp;
            if (dailyTemperatures[localDate]) {
                dailyTemperatures[localDate].push(temperature)
            }
            else {
                dailyTemperatures[localDate] = [temperature];
            }
        }

        for (const [date, temperatures] of Object.entries(dailyTemperatures)) {
            const sumTemp = temperatures.reduce((sum, temp) => {
                return sum + temp;
            }, 0)
            const averageTemp = sumTemp / temperatures.length;
            
            console.log(`${dateFormatter.format(new Date(`${date}T00:00:00`))}: ${averageTemp.toFixed(2)}°C`);
        }
    }
    catch (error) {
        console.error("Failed to get weather:", error);
    }
}

getWeather();