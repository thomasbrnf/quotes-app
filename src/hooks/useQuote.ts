import { useEffect, useState, useRef } from "react";
import { fetchQuote, delay, InitialQuote, HALFWAY_FADE_TIME, FADE_CLASS } from "../service";
import { QuoteType } from "../types/types";

export function useQuote(updated: Date | null) {
  const [quote, setQuote] = useState<QuoteType>(InitialQuote);

  const quoteElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(updated) {
    fetchAndAnimate();
  }
  }, [updated]);

  const fetchAndAnimate = async () => {
    const result = await fetchQuote(quote.length);

    quoteElementRef.current?.classList.add(FADE_CLASS);


    await delay(HALFWAY_FADE_TIME);

    setQuote({
      ...quote,
      content: result.content,
      author: result.author,
    });


      quoteElementRef.current?.addEventListener("animationend", () => {
        quoteElementRef.current?.classList.remove(FADE_CLASS);
      })

  };

  return { quote, quoteElementRef }
}
