# Random Headers

`random-headers` is a lightweight Node.js package that generates random HTTP request headers and User-Agent strings. This package is useful for web scraping, testing, or any use case where you need to simulate different browser headers dynamically.

## Installation

You can install the package via npm:

```bash
npm install random-headers
```

## Features

- Generate random HTTP headers based on real browsers.
- Get random User-Agent strings for common browsers (Chrome, Firefox, Safari, Edge, etc.).
- Command-line support to quickly generate random headers and user agents.

## Usage

### In Code (JavaScript)

Here’s an example of how you can use the randomHeaders and randomUserAgent functions in your Node.js application:

```js
const { randomHeaders, randomUserAgent } = require('random-headers');

// Generate a set of random headers
const headers = randomHeaders();
console.log(headers);

// Generate a random User-Agent string
const userAgent = randomUserAgent();
console.log(userAgent);
```

### Example Output:
```js
// Headers
{
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'en-US,en;q=0.8',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/58.0.3029.110 Chrome/58.0.3029.110 Safari/537.36'
}

// User-Agent
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36
```

## Command-Line Usage

You can also generate random headers or user agents directly from the command line:

1. Generate Random Headers:

```bash
npx random-headers
```

2. Generate Random User-Agent:

```bash
npx random-user-agent
```

## API

#### `randomHeaders(): { [key: string]: string }`

Generates a random set of HTTP headers based on real-world browser data.

#### `Returns:`

- A JavaScript object containing key-value pairs of HTTP headers.

#### `randomUserAgent(): string`

Generates a random User-Agent string from different browsers and platforms.

#### Returns:

- A string representing a random User-Agent.

## TypeScript Support

This package includes TypeScript type declarations. You can use it seamlessly in TypeScript projects.

Example:

```js
import { randomHeaders, randomUserAgent } from 'random-headers';

const headers = randomHeaders();
const userAgent = randomUserAgent();
```

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/iNadeemDev/random-headers/blob/main/LICENSE) file for details.

## Contributing

Feel free to open issues or submit pull requests if you want to contribute to the project.