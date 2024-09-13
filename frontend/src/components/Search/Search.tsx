import { ChangeEvent, SyntheticEvent } from "react";
import { GetChecklistById } from "../../api";

type Props = {
  onClick: (e: SyntheticEvent) => void;
  onClickB: (e: SyntheticEvent, id: number) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ onClick, onClickB, search, handleChange }: Props) => {
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => onClick(e)}>A</button>
      <button onClick={(e) => onClickB(e, Number(search))}>B</button>
    </div>
  );
};

export default Search;
