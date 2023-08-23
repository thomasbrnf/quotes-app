import { QuotesType } from "../types/types";
import { useQuotes } from "../hooks";
import "../styles/Quotes.scss";

export function Quotes() {
  const { quotes } = useQuotes();

  return (
    <div className="quotes">
      {quotes.map((quote: QuotesType, i) => {
        const className = `quote-bg-${i + 1} blur`;
        return (
          <p ref={(el) => (quote.element = el)} key={i} className={className}>
            “{quote.content}”
          </p>
        );
      })}
        <div>
            <div className="glowing-box left"></div>
            <div className="glowing-box right"></div>
        </div>
    </div>
  );
}
