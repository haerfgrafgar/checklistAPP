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
      <div className="d-flex">
        <button
          className="w-50"
          type="button"
          onClick={() => onClickVerify(id)}
        >
          Verify
        </button>
        <button className="w-50" type="button" onClick={() => onClickEdit(id)}>
          Edit
        </button>
      </div>
    );
  }

  return (
    <>
      {token?.role === "Admin" ? (
        <div className="d-flex">
          <button
            className="w-50"
            type="button"
            onClick={() => onClickRespond(id)}
          >
            Respond
          </button>
          <button
            className="w-50"
            type="button"
            onClick={() => onClickEdit(id)}
          >
            Edit
          </button>
        </div>
      ) : (
        <button
          className="w-100"
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
