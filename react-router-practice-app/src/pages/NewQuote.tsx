import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = ({author, text}: {author:string, text: string}) => {
    console.log(author, text);
  }
  
  return <QuoteForm onAddQuote={addQuoteHandler} isLoading={true} />
}

export default NewQuote;