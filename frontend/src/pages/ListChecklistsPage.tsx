import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { Checklist } from "../interfaces";
import {
  GetChecklistById,
  GetAllChecklists,
  GetAllAssignedChecklists,
} from "../api";
import Search from "../components/Search/Search";
import CardList from "../components/CardList/CardList";
import { getToken } from "../Helper";

type Props = {};

const ListChecklistsPage = (props: Props) => {
  const token = getToken();
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
    const result = await GetAllAssignedChecklists(token!.given_name);
    console.log(token);

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

export default ListChecklistsPage;
