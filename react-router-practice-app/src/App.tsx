import { Redirect, Route, Switch } from "react-router";
import NewQuotePage from "./pages/NewQuote";
import QuoteDetailPage from "./pages/QuoteDetail";
import QuotesListPage from "./pages/AllQuotes";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>

        <Route path="/quotes" exact>
          <QuotesListPage />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetailPage />
        </Route>
        <Route path="/new-quote">
          <NewQuotePage />
        </Route>
      </Switch>
    </div>
  );
}

// /quotes/:quoteId
// /quotes/:quoteId/comments
// /quotes
// /new-quote
export default App;
