import { InitialQuote, initialQuotes, HALFWAY_FADE_TIME, FADE_CLASS, FADE_TIME } from "./CONSTANTS";
import { playChangeAnimation } from "./quotes.service";
import { fetchNewContent } from "./quotes.service";
import { getRandomQuote } from "./quotes.service";
import { getRandomTime } from "./quotes.service";
import { fetchQuote } from "./quote.api";
import { delay } from "./quotes.service";

export { HALFWAY_FADE_TIME, FADE_CLASS, FADE_TIME, fetchNewContent, getRandomQuote, getRandomTime, fetchQuote, delay, initialQuotes, InitialQuote, playChangeAnimation }