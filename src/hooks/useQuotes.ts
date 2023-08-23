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

 

  useEffect(() => {
    
    async function refreshRandomQuote() {
      const quote = getRandomQuote(quotes);
      const quoteLength = quote.length;
  
      const newContent = await fetchNewContent(quoteLength);
  
      playChangeAnimation(quote);
      await delay(HALFWAY_FADE_TIME);
  
      setQuotes((quotes) => [...quotes]);
      quote.content = newContent;
    }

    const intervalId = setInterval(
      refreshRandomQuote,
      getRandomTime(MAX_RELOAD_TIME, MIN_RELOAD_TIME),
    );

    return () => clearInterval(intervalId);
  }, []);

  return { quotes };
}
