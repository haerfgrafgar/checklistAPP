import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import { getToken } from "../../Helper";

type Props = {
  id: number;
  verificador?: boolean;
};

const AddChecklistForm = ({ id, verificador }: Props) => {
  const token = getToken();
  const navigate = useNavigate();

  const onClickRespond = (id: number) => {
    navigate("/checklists/respond/" + id);
  };

  const onClickEdit = (id: number) => {
    navigate("/checklists/edit/" + id);
  };

  const onClickVerify = (id: number) => {
    navigate("/checklists/verificador/" + id);
  };

  if (verificador) {
    return (
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary w-50 me-2" // Bootstrap button styles
          type="button"
          onClick={() => onClickVerify(id)}
        >
          Verify
        </button>
        <button
          className="btn btn-secondary w-50" // Bootstrap button styles
          type="button"
          onClick={() => onClickEdit(id)}
        >
          Edit
        </button>
      </div>
    );
  }

  return (
    <>
      {token?.role === "Admin" ? (
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary w-50 me-2" // Bootstrap button styles
            type="button"
            onClick={() => onClickRespond(id)}
          >
            Respond
          </button>
          <button
            className="btn btn-secondary w-50" // Bootstrap button styles
            type="button"
            onClick={() => onClickEdit(id)}
          >
            Edit
          </button>
        </div>
      ) : (
        <button
          className="btn btn-warning w-100" // Bootstrap button styles
          type="button"
          onClick={() => onClickRespond(id)}
        >
          Respond
        </button>
      )}
    </>
  );
};

export default AddChecklistForm;
