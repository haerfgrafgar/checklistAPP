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
    <div className="card shadow-sm mb-4" style={{ borderRadius: "10px" }}>
      <div className="card-body">
        <h2 className="card-title">
          {searchResult.numDocumento} ({searchResult.dueDate})
        </h2>
        <p className="card-text text-muted">{searchResult.revisao}</p>
        <p className="card-text">{searchResult.titutlo}</p>
        <AddChecklistForm id={searchResult.id} verificador={verificador} />
      </div>
    </div>
  );
};

export default Card;
