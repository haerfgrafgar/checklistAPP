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
      <div
        style={{ minHeight: "100vh", backgroundColor: "rgb(211, 211, 211)" }}
      >
        {serverError && <h1>{serverError}</h1>}
        <h1
          className="display-4 text-center"
          style={{ fontWeight: "bold", color: "#343a40" }}
        >
          EXECUTANTE:
        </h1>

        <div style={{ width: "99%", margin: "0 auto" }}>
          <ChecklistList checklists={searchResult}></ChecklistList>
        </div>
      </div>
    </>
  );
};

export default ListChecklistsPage;
