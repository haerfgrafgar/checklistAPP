import { useEffect, useState } from "react";
import { GetAllUsers } from "../api";
import { AccountDto } from "../interfaces";
import { useNavigate } from "react-router";

const ListUsersPage = () => {
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
      {serverError ? (
        <p>{serverError}</p>
      ) : (
        searchResult.map((user) => (
          <button
            key={user.username}
            onClick={() => handleClick(user.username)}
          >
            {user.username}
          </button>
        ))
      )}
    </div>
  );
};

export default ListUsersPage;
