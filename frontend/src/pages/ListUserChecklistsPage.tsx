import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { Checklist } from "../interfaces";
import { GetAllAssignedChecklists } from "../api";
import CardList from "../components/CardList/CardList";
import { getToken } from "../Helper";
import { useParams } from "react-router-dom";

type Props = {};

const ListUserChecklistsPage = (props: Props) => {
  const token = getToken();
  const { username } = useParams<{ username: string }>();
  const [searchResult, setSearchResult] = useState<Checklist[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [modifyArray, setModifyArray] = useState<string[]>([]); // --> onPropDrilling

  const onPropDrilling = (e: any) => {
    e.preventDefault();
    console.log(e);
    const updatedArray = [...modifyArray, e.target[0].any];
    setModifyArray(updatedArray);
    console.log(modifyArray);
  };

  const makeApiRequest = async () => {
    if (username == null) {
      console.log("Username not found.");
      return;
    }

    const result = await GetAllAssignedChecklists(username);

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
      <CardList searchResults={searchResult} onPropDrilling={onPropDrilling} />
    </>
  );
};

export default ListUserChecklistsPage;
