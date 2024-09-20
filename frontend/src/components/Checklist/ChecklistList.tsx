import React from "react";
import { Checklist } from "../../interfaces";
import CardList from "../CardList/CardList";

type Props = {
  checklists: Checklist[];
};

const ChecklistList = ({ checklists }: Props) => {
  return (
    <>
      {!(checklists.length === 0) ? (
        <CardList searchResults={checklists} />
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

export default ChecklistList;
