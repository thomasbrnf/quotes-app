import { QuoteType, QuotesType } from "../types/types";

export const MIN_RELOAD_TIME = 10000;
export const MAX_RELOAD_TIME = 25000;

export const FADE_TIME = 7000;
export const HALFWAY_FADE_TIME = 3500;
export const FADE_CLASS = "fade";

export const initialQuotes: QuotesType[] = [
  {
    content: `So many books, so little time.`,
    length: 30,
    element: null,
  },
  {
    content: `Without music, life would be a mistake.`,
    length: 40,
    element: null,
  },
  {
    content: `I solemnly swear that I am up to no good.`,
    length: 42,
    element: null,
  },
  {
    content: `So many books, so little time.`,
    length: 30,
    element: null,
  },
  {
    content: `It does not do to dwell on dreams and forget to live.`,
    length: 48,
    element: null,
  },
];

export const InitialQuote: QuoteType = {
  content: `Be yourself, everyone else is already taken.`,
  author: `Oscar Wilde`,
  length: 44,
};
