import { useEffect, useState } from "react";
import { Checklist } from "../interfaces";
import { GetAllAssignedChecklistsExecutante } from "../api";
import CardList from "../components/CardList/CardList";
import { getToken } from "../Helper";
import { useParams } from "react-router-dom";

const ListUserChecklistsPage = () => {
  const token = getToken();
  const { username } = useParams<{ username: string }>();
  const [searchResult, setSearchResult] = useState<Checklist[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const makeApiRequest = async () => {
    if (username == null) {
      console.log("Username not found.");
      return;
    }

    const result = await GetAllAssignedChecklistsExecutante(username);

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
      <CardList searchResults={searchResult} />
    </>
  );
};

export default ListUserChecklistsPage;
