//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and `runTests` with `switch` for test type messages.

// Function to simulate browser launch using if-else
function launchBrowser(browserName) {
    if (browserName.toLowerCase() === "chrome") {
        console.log("Launching Chrome browser...");
    } else {
        console.log("Launching other browser: " + browserName);
    }
}

// Function to simulate running tests using switch
function runTests(testType) {
    switch (testType.toLowerCase()) {
        case "smoke":
            console.log("Running Smoke Tests...");
            break;
        case "sanity":
            console.log("Running Sanity Tests...");
            break;
        case "regression":
            console.log("Running Regression Tests...");
            break;
        default:
            console.log("Unknown test type provided. Running Smoke Tests by default...");
    }
}

// Call the functions with sample inputs
let browser = "Chrome";
let test = "Sanity";

launchBrowser(browser);  // Output: Launching Chrome browser...
runTests(test);          // Output: Running Sanity Tests...
