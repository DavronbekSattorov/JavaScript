class Fetch {
    async getCurrent(input){
        const myKey = "2f075ceb6a3766af8b5f4cc667ea9320";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`);

        const data = await response.json();

        console.log(data);

        return data;
    }
}