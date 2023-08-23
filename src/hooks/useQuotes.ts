import { useState, useEffect } from "react";
import { QuotesType } from "../types/types";
import {
  fetchNewContent,
  getRandomQuote,
  getRandomTime,
  playChangeAnimation,
  initialQuotes,
  delay,
  HALFWAY_FADE_TIME
} from "../service";

export function useQuotes() {
  const [quotes, setQuotes] = useState<QuotesType[]>(initialQuotes);

  useEffect(() => {
    const intervalId = setInterval(refreshRandomQuote,  getRandomTime(25000, 10000));

    return () => clearInterval(intervalId);
  }, []);

  async function refreshRandomQuote() {
    const quote = getRandomQuote(quotes);
    const quoteLength = quote.length;
    
    const newContent = await fetchNewContent(quoteLength);

    playChangeAnimation(quote);
    await delay(HALFWAY_FADE_TIME); // waits for element to disappear (opacity 0 in .scss)

    setQuotes((quotes) => [...quotes]);
    quote.content = newContent;
  }
  
  return { quotes };
}

  


