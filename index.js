const headers = require('./lib/headers');
const userAgents = require('./lib/userAgents');

function randomHeaders() {
    const browsers = Object.keys(headers);
    const randomBrowser = browsers[Math.floor(Math.random() * browsers.length)];
    const browserHeaders = { ...headers[randomBrowser] };
    browserHeaders["User-Agent"] = userAgents[randomBrowser][Math.floor(Math.random() * userAgents[randomBrowser].length)];
    return browserHeaders;
}

function randomUserAgent() {
    const browsers = Object.keys(userAgents);
    const randomBrowser = browsers[Math.floor(Math.random() * browsers.length)];
    return userAgents[randomBrowser][Math.floor(Math.random() * userAgents[randomBrowser].length)];
}

module.exports = { randomHeaders, randomUserAgent };
