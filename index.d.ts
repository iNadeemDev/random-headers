import headers = require('./lib/headers');
import userAgents = require('./lib/userAgents');

// Export the types
export type HeadersType = typeof headers;
export type UserAgentsType = typeof userAgents;

// Declare functions using those types
export declare function randomHeaders(): { 
    [key: string]: string;
};

export declare function randomUserAgent(): string;