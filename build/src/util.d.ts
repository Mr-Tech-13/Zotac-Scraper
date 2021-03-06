import { Browser, Page, HTTPResponse } from 'puppeteer';
import { StatusCodeRangeArray, Store } from './store/model';
export declare function getSleepTime(store: Store): number;
export declare function delay(ms: number): Promise<unknown>;
export declare function noop(): void;
export declare function isStatusCodeInRange(statusCode: number, range: StatusCodeRangeArray): boolean;
export declare function usingResponse<T>(browser: Browser, url: string, cb: (response: HTTPResponse | null, page: Page, browser: Browser) => Promise<T>): Promise<T>;
export declare function usingPage<T>(browser: Browser, cb: (page: Page, browser: Browser) => Promise<T>): Promise<T>;
export declare function closePage(page: Page): Promise<void>;
export declare function getRandomUserAgent(): Promise<string>;
