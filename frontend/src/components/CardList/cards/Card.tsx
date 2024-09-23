import { SyntheticEvent } from "react";
import { Checklist } from "../../../interfaces";
import AddChecklistForm from "../../forms/CheckButtons";
import { useNavigate } from "react-router";

type Props = {
  id: number;
  searchResult: Checklist;
  verificador?: boolean;
};

const Card: React.FC<Props> = ({
  id,
  searchResult,
  verificador,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <div className="details">
        <h2>
          {searchResult.numDocumento} ({searchResult.dueDate})
        </h2>
        <p>{searchResult.revisao}</p>
      </div>
      <p>{searchResult.titutlo}</p>
      <AddChecklistForm
        id={searchResult.id}
        verificador={verificador}
      ></AddChecklistForm>
    </div>
  );
};

export default Card;
