'using strict';

/** A JS Console wrapper with better Date/Time output
 * 
 * If [isDate] is set to true, the date will be printed
 * 
 * If [isTime] is set to true, the time will be printed
*/
const consoleService = function(isDate, isTime){
    let dateTime = new Date();
    let formattedDateTime;
    
    let log = function(input) {
        if (!isDate && !isTime) {
            console.log("[LOG]: " + input);
        } else {
            refreshDateTime();
            console.log(formattedDateTime + " [LOG]: " + input);
        }
    };

    let warn = function(input) {
        if (!isDate && !isTime) {
            console.warn("[WARN]: " + input);
        } else {
            refreshDateTime();
            console.warn(formattedDateTime + " [WARN]: " + input);
        }
    };

    let debug = function(input){
        if (!isDate && !isTime) {
            console.debug("[DEBUG]: " + input);
        } else {
            refreshDateTime();
            console.debug(formattedDateTime + " [DEBUG]: " + input);
        }
    };

    let error = function(input){
        if (!isDate && !isTime) {
            console.error("[ERROR]: " + input);
        } else {
            refreshDateTime();
            console.error(formattedDateTime + " [ERROR]: " + input);
        }
    };

    let info = function(input){
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
