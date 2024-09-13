import { SyntheticEvent } from "react";
import { Checklist } from "../../interfaces";
import AddChecklistForm from "../forms/CheckButtons";
import { useNavigate } from "react-router";

type Props = {
  id: number;
  searchResult: Checklist;
  onPropDrilling: (e: SyntheticEvent) => void;
};

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPropDrilling,
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
        onPropDrilling={onPropDrilling}
        id={searchResult.id}
      ></AddChecklistForm>
    </div>
  );
};

export default Card;
