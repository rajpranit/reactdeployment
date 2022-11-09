import { getAllQuotes } from "../lib/api";
import useHttp from "../hooks/use-http";

import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const AllQuotes = () => {
  const { sendRequest, status, data: loadedData } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "error") {
    return <div className="centered focused">Error</div>;
  }

  if (status === "completed" && (!loadedData || loadedData.length === 0)) {
    return (
      <div className="centered">
        {" "}
        <NoQuotesFound />{" "}
      </div>
    );
  }

  return (
    <>
      <QuoteList quotes={loadedData} />
    </>
  );
};

export default AllQuotes;
