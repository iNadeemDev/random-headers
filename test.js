const { randomHeaders, randomUserAgent } = require('./index');

function testRandomHeaders() {
    const headers = randomHeaders();
    
    // Check if it returns an object
    console.assert(typeof headers === 'object', 'randomHeaders should return an object');

    // Check for specific header fields
    const expectedHeaders = ['Accept', 'Accept-Encoding', 'Accept-Language', 'User-Agent'];
    expectedHeaders.forEach(field => {
        console.assert(headers[field], `Header '${field}' should be present`);
    });

    // Check if User-Agent is a non-empty string
    console.assert(typeof headers['User-Agent'] === 'string' && headers['User-Agent'].length > 0, 'User-Agent should be a non-empty string');

    console.log('Random Headers Test Passed!');
}

function testRandomUserAgent() {
    const userAgent = randomUserAgent();

    // Check if it returns a string
    console.assert(typeof userAgent === 'string', 'randomUserAgent should return a string');

    // Check if the User-Agent string is not empty
    console.assert(userAgent.length > 0, 'User-Agent should not be an empty string');

    console.log('Random User Agent Test Passed!');
}

// Run tests
testRandomHeaders();
testRandomUserAgent();
