(function(){

    function getCurrentTime() {
        let currentTime = Date.now();
        let hours = new Date(currentTime).getHours();
        let minutes = new Date(currentTime).getMinutes();
        let seconds = new Date(currentTime).getSeconds();
        console.debug(`Current Time Data: \n\t Hours: ${hours}\n\t Minutes: ${minutes}\n\t Seconds: ${seconds}`);
        if (seconds < 10) {
            seconds = `0` + `${seconds}`;
        }

        if (hours < 11) {
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
        
        console.debug(`Current Date Data: \n\t Month: ${month}\n\t Day: ${day}\n\t Year: ${year}`);

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
        console.debug("Injecting Hello Message.");

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
        console.debug("Method 'InjectHelloMessage' ran successfully.");
    }

    function setDateTime() {
        console.debug("Setting Date/Time/Day");
        let time = getCurrentTime();
        let date = getCurrentDate();
        console.debug(`${time}  |  ${date}`);

        let timeElement = document.getElementById("time");
        timeElement.innerHTML = time;

        let dateElement = document.getElementById("date");
        dateElement.innerHTML = date;
        var t = setTimeout(setDateTime, 500);
        console.debug("Date, Time, and Day injected into front-end.");
    }

    function setWeather() {
        //TODO: Setup weather API wrapper to pull weather data

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

    // run logic
    injectHelloMessage();
    setDateTime();
})();