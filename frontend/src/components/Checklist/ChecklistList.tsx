import React from "react";
import { Checklist } from "../../interfaces";
import CardList from "../CardList/CardList";

type Props = {
  checklists: Checklist[];
  verificador?: boolean;
};

const ChecklistList = ({ checklists, verificador }: Props) => {
  return (
    <>
      {!(checklists.length === 0) ? (
        <CardList searchResults={checklists} verificador={verificador} />
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

export default ChecklistList;
