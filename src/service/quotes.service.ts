import { fetchQuote, FADE_CLASS } from ".";
import { QuotesType } from "../types/types";

export const delay = (time: number) =>
  new Promise((res) => setTimeout(res, time));

function getRandomIndex(quotes: QuotesType[]) {
  return Math.floor(Math.random() * quotes.length);
}

export function getRandomTime(from: number, to: number) {
  return Math.floor(Math.random() * (from - to + 1)) + to;
}

export function playChangeAnimation(quote: QuotesType) {
  quote.element?.classList.add(FADE_CLASS);
  addAnimationListener(quote);
}

function addAnimationListener(quote: QuotesType) {
  quote.element?.addEventListener("animationend", () => {
    quote.element?.classList.remove(FADE_CLASS);
  });
}

export function getRandomQuote(quotes: QuotesType[]) {
  const index = getRandomIndex(quotes);

  return quotes[index];
}

export async function fetchNewContent(length: number) {
  const response = await fetchQuote(length);

  return response.content;
}
