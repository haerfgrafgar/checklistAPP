import { useEffect, useState } from "react";
import { Checklist } from "../interfaces";
import { GetAllAssignedChecklists } from "../api";

import CardList from "../components/CardList/CardList";
import { getToken } from "../Helper";

const ListChecklistsPage = () => {
  const token = getToken();
  const [searchResult, setSearchResult] = useState<Checklist[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const makeApiRequest = async () => {
    const result = await GetAllAssignedChecklists(token!.given_name);

    if (typeof result === "string") {
      setServerError(result);
      setSearchResult([]);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
      setServerError("");
    }
  };
  useEffect(() => {
    token && makeApiRequest();
  }, []);

  return (
    <>
      {serverError && <h1>{serverError}</h1>}
      {!(searchResult.length === 0) ? (
        <CardList searchResults={searchResult} />
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

export default ListChecklistsPage;
