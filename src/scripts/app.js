"using strict";
var logService = consoleService(false, true);
var weatherService = weatherService();
(function(){

    function getCurrentTime() {
        let currentTime = Date.now();
        let hours = new Date(currentTime).getHours();
        let minutes = new Date(currentTime).getMinutes();
        let seconds = new Date(currentTime).getSeconds();

        if (seconds < 10) {
            seconds = `0` + `${seconds}`;
        }

        if (hours < 12) {
            if (hours === 0) {
                return `${hours + 12} : ${minutes} : ${seconds} AM`;
            } else {
                return `${hours} : ${minutes} : ${seconds} AM`;
            }
        } else {
            if (hours === 12) {
                return `${hours} : ${minutes} : ${seconds} PM`;
            } else {
                return `${hours - 12} : ${minutes} : ${seconds} PM`;
            }
        }
    }

    function getCurrentDate() {
        let currentTime = Date.now();
        let month = new Date(currentTime).getMonth() + 1; // Janary starts at 0
        let day = new Date(currentTime).getDate();
        let year = new Date(currentTime).getFullYear();

        let dayOfTheWeek = new Date(currentTime).getDay();
        setDay(dayOfTheWeek);

        return `${month} . ${day} . ${year}`;
    }

    function setDay(day) {
        let dayElement = document.getElementById("day");
        switch (day) {
            case 1:
                dayElement.innerHTML = "Monday";
                break;
            case 2:
                dayElement.innerHTML = "Tuesday";
                break;
            case 3:
                dayElement.innerHTML = "Wednesday";
                break;
            case 4:
                dayElement.innerHTML = "Thursday";
                break;
            case 5:
                dayElement.innerHTML = "Friday";
                break;
            case 6:
                dayElement.innerHTML = "Saturday";
                break;
            case 7:
                dayElement.innerHTML = "Sunday";
                break;
            default:
                break;
        }
    }

    function injectHelloMessage() {
        logService.debug("Injecting Hello Message.");

        let currentTime = Date.now();
        let hours = new Date(currentTime).getHours();
        let isMorning = true;

        if (hours > 11) {
            isMorning = false;
        }

        let greeting = `Hello, ${username}` 
        if (isMorning) {
            greeting = `Good Morning, ${username}`
        } else {
            greeting = `Good Evening, ${username}`
        }

        let welcomeElement = document.getElementById("welcome-message");
        welcomeElement.innerHTML = greeting;
        logService.debug("Method 'InjectHelloMessage' ran successfully.");
    }

    function setDateTime() {
        let time = getCurrentTime();
        let date = getCurrentDate();

        let timeElement = document.getElementById("time");
        timeElement.innerHTML = time;

        let dateElement = document.getElementById("date");
        dateElement.innerHTML = date;
        setTimeout(setDateTime, 500);
    }

    function setWeather() {
        //TODO: Setup weather API wrapper to pull weather data
        getLocation();
        weatherService.get

        //TODO: User weather wrapper to set innerhtml weather element to have correct data
    }

    function injectQuicklinks() {
        let quicklinkElement = document.getElementById("link-content");
        let newElement = document.createElement("div");
        newElement.innerHTML = "";
        quicklinkElement.appendChild();
    }

    function collectRSSFeed() {
        //TODO: Setup RSS Feed wrapper to collect RSS Feed and parse data into application friendly format

        //TODO: Use RSS Feed wrapper to show data in rss feed element
    }

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(setLocalPosition);
        } else {
            logService.log("Geolocation is not supported by this browser.");
        }
    }
      
    function setLocalPosition(position) {
        logService.debug("Local Latitude: " + position.coords.latitude + "\nLocal Longitude: " + position.coords.longitude);
        localLat = position.coords.latitude;
        localLong = position.coords.longitude;
    }

    // run logic
    logService.log("App Started.");
    injectHelloMessage();
    setDateTime();
    getLocation();
})();