'using strict';

var consoleService = function(isDate, isTime){
    let dateTime = new Date();
    let formattedDateTime;
    
    var log = function(input) {
        if (!isDate && !isTime) {
            console.log("[LOG]: " + input);
        } else {
            refreshDateTime();
            console.log(formattedDateTime + " [LOG]: " + input);
        }
    };

    var warn = function(input) {
        if (!isDate && !isTime) {
            console.warn("[WARN]: " + input);
        } else {
            refreshDateTime();
            console.warn(formattedDateTime + " [WARN]: " + input);
        }
    };

    var debug = function(input){
        if (!isDate && !isTime) {
            console.debug("[DEBUG]: " + input);
        } else {
            refreshDateTime();
            console.debug(formattedDateTime + " [DEBUG]: " + input);
        }
    };

    var error = function(input){
        if (!isDate && !isTime) {
            console.error("[ERROR]: " + input);
        } else {
            refreshDateTime();
            console.error(formattedDateTime + " [ERROR]: " + input);
        }
    };

    var info = function(input){
        if (!isDate && !isTime) {
            console.info("[INFO]: " + input);
        } else {
            refreshDateTime();
            console.info(formattedDateTime + " [INFO]: " + input);
        }
    };

    function refreshDateTime() {
        dateTime = new Date(Date.now());
        if (isDate && isTime){
            formattedDateTime = dateTime.toDateString() + " " + dateTime.toLocaleTimeString();
        } else if (isDate && !isTime) {
            formattedDateTime = dateTime.toDateString();
        } else if (!isDate && isTime) {
            formattedDateTime = dateTime.toLocaleTimeString();
        }
    }

    return {
        log: log,
        warn: warn,
        debug: debug,
        error: error,
        info: info
    };
};
