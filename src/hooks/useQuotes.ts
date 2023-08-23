import { useState, useEffect } from "react";
import { QuotesType } from "../types/types";
import {
  fetchNewContent,
  getRandomQuote,
  getRandomTime,
  playChangeAnimation,
  initialQuotes,
  delay,
  HALFWAY_FADE_TIME,
  MAX_RELOAD_TIME,
  MIN_RELOAD_TIME,
} from "../service";

export function useQuotes() {
  const [quotes, setQuotes] = useState<QuotesType[]>(initialQuotes);

  async function refreshRandomQuote() {
    const quote = getRandomQuote(quotes);
    const quoteLength = quote.length;

    const newContent = await fetchNewContent(quoteLength);

    playChangeAnimation(quote);
    await delay(HALFWAY_FADE_TIME); // waits for element to disappear (opacity 0 in .scss)

    setQuotes((quotes) => [...quotes]);
    quote.content = newContent;
  }

  useEffect(() => {
    const intervalId = setInterval(
      refreshRandomQuote,
      getRandomTime(MAX_RELOAD_TIME, MIN_RELOAD_TIME),
    );

    return () => clearInterval(intervalId);
  }, [refreshRandomQuote]);

  return { quotes };
}
