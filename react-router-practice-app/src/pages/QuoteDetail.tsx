import { Fragment } from "react";
import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const {quoteId} = useParams<{quoteId: string}>()
  return <Fragment>
    <h1>QuoteDetail</h1>
    <p>{quoteId}</p>

    <Route path={`/quotes/:quoteId/comments`}>
      <Comments />
    </Route>
  </Fragment>
}

export default QuoteDetail;