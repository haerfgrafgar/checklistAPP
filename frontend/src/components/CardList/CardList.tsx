import React, { SyntheticEvent } from "react";
import Card from "./cards/Card";
import { Checklist } from "../../interfaces";
import { v4 as uuidv4 } from "uuid";

type Props = {
  searchResults: Checklist[];
  verificador?: boolean;
};

const CardList: React.FC<Props> = ({
  searchResults,
  verificador,
}: Props): JSX.Element => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card
              key={uuidv4()}
              id={result.id}
              searchResult={result}
              verificador={verificador}
            />
          );
        })
      ) : (
        <h1>No results</h1>
      )}
    </>
  );
};

export default CardList;
