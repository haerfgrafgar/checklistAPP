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
        <div className="row mt-3 ms-3">
          {searchResult.map((user) => (
            <div className="col-md-3 mb-4" key={user.username}>
              <div
                className="card"
                style={{ height: "100%", borderRadius: "10px" }}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{user.username}</h5>
                  <h6>Current Task</h6>
                  <div className="mt-auto">
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => handleClick(user.username)}
                    >
                      Detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListUsersPage;
