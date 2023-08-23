import { QuoteAPI } from "../types/types";

export const fetchQuote = async (length: number): Promise<QuoteAPI> => {
  const result = await fetch(`/random?maxLength=${length}&minLength=${length}`);
  return await result.json();
};
