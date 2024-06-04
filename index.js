function shout(string) {
    // Returns the string in uppercase
    return string.toUpperCase();
  }
  
  function whisper(string) {
    // Returns the string in lowercase
    return string.toLowerCase();
  }
  
  function logShout(string) {
    // Logs the string in uppercase to the console
    console.log(string.toUpperCase());
  }
  
  function logWhisper(string) {
    // Logs the string in lowercase to the console
    console.log(string.toLowerCase());
  }
  
  function sayHiToHeadphonedRoommate(message) {
    // Handles different message cases
    if (message === message.toLowerCase()) {
      return "I can't hear you!";
    } else if (message === message.toUpperCase()) {
      return "YES INDEED!";
    } else if (message === "Let's have dinner together!") {
      return "I would love to!";
    } else {
      // Handle other cases (optional)
      return "What did you say?";
    }
  }