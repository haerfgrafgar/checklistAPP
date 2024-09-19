import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router";

type Props = {
  id: number;
};

const AddChecklistForm = ({ id }: Props) => {
  const navigate = useNavigate();

  const onClickRespond = (id: number) => {
    navigate("/checklists/respond/" + id);
  };

  const onClickEdit = (id: number) => {
    navigate("/checklists/edit/" + id);
  };

  return (
    <>
      <div className="d-flex">
        <button
          className="w-50"
          type="button"
          onClick={() => onClickRespond(id)}
        >
          Respond
        </button>
        <button className="w-50" type="button" onClick={() => onClickEdit(id)}>
          Edit
        </button>
      </div>
    </>
  );
};

export default AddChecklistForm;
