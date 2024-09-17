import React, { useEffect, useState } from "react";
import { GetAllAssignedChecklists, GetAllUsers } from "../api";
import { AccountDto } from "../interfaces";
import { useNavigate } from "react-router";

type Props = {};

const ListUsersPage = (props: Props) => {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState<AccountDto[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const fetchData = async () => {
    const result = await GetAllUsers();

    if (typeof result === "string") {
      setServerError(result);
      setSearchResult([]);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
      setServerError("");
    }
  };

  const handleClick = async (username: string) => {
    navigate("/checklists/user/" + username);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {searchResult.map((user) => (
        <button key={user.username} onClick={() => handleClick(user.username)}>
          {user.username}
        </button>
      ))}
    </div>
  );
};

export default ListUsersPage;
