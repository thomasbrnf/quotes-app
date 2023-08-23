export interface QuotesType {
  content: string;
  length: number;
  element: HTMLElement | null;
}

export interface QuoteType {
  content: string;
  author: string;
  length: number;
}

export interface QuoteAPI {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: string[];
}
