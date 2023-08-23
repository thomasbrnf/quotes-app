import { useQuote } from '../hooks';
import '../styles/Quote.scss'

export function Quote({updated}: {updated: Date | null}) {
  const { quote, quoteElementRef } = useQuote(updated);

  return (
    <div ref={quoteElementRef} className='quote'>
      <p className="content">“{quote.content}”</p>
      <p className="author">― {quote.author}</p>
      <div className="shadow"></div>
    </div>
  );
}