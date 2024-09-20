import { useEffect, useState } from "react";
import { Checklist } from "../interfaces";
import { GetAllAssignedChecklistsExecutante } from "../api";

import CardList from "../components/CardList/CardList";
import { getToken } from "../Helper";
import ChecklistList from "../components/Checklist/ChecklistList";

const ListChecklistsPage = () => {
  const token = getToken();
  const [searchResult, setSearchResult] = useState<Checklist[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const makeApiRequest = async () => {
    const result = await GetAllAssignedChecklistsExecutante(token!.given_name);

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
      <h1>EXECUTANTE:</h1>
      <ChecklistList checklists={searchResult}></ChecklistList>
    </>
  );
};

export default ListChecklistsPage;
