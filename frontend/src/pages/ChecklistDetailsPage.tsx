import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { GetCheckById, GetChecklistById, RespondCheck } from "../api";
import { Check, Checklist } from "../interfaces";
import { mapCheckToRespondCheckDto } from "../mappers/Check";
import { translateSituacao } from "../Helper";

type Props = {};

const ChecklistDetailsPage = (props: Props) => {
  const [checklist, setChecklist] = useState<Checklist>();
  const id = Number(useLocation().pathname.slice(20));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<string[]>([]);

  const buttonRefJump = useRef<HTMLButtonElement>(null);
  const buttonRefPrev = useRef<HTMLButtonElement>(null);
  const buttonRefC = useRef<HTMLButtonElement>(null);
  const buttonRefNC = useRef<HTMLButtonElement>(null);
  const buttonRefNA = useRef<HTMLButtonElement>(null);
  const buttonRefP = useRef<HTMLButtonElement>(null);

  const checkOnClickUpdate = async (check: Check, choice: number) => {
    check.situacao = choice;
    await RespondCheck(check.id, mapCheckToRespondCheckDto(check));
    fetchData();
  };

  async function fetchData() {
    try {
      const data = await GetChecklistById(id);
      if (typeof data === "string") {
        return 0;
      }
      setChecklist(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "f":
          if (buttonRefC.current) {
            buttonRefC.current.click();
          }
          break;
        case "g":
          if (buttonRefNC.current) {
            buttonRefNC.current.click();
          }
          break;
        case "h":
          if (buttonRefNA.current) {
            buttonRefNA.current.click();
          }
          break;
        case "j":
          if (buttonRefP.current) {
            buttonRefP.current.click();
          }
          break;
        case "Enter":
          if (buttonRefP.current) {
            buttonRefJump.current.click();
          }
          break;
        case "Backspace":
          if (buttonRefP.current) {
            buttonRefPrev.current.click();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    checklist &&
      setQuestions(checklist?.checks.map((check) => check.descricao));
  }, [checklist]);

  const handleNext = () => {
    if (currentQuestionIndex <= questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <>
      {currentQuestionIndex === checklist?.checks.length && (
        <div>
          <h1>Informações gerais:</h1>
          <p className="m-0">Id: {checklist?.id}</p>
          <p className="m-0">NumDestaLV: {checklist?.numDestaLV}</p>
          <p className="m-0">NumContrato: {checklist?.numContrato}</p>
          <p className="m-0">NumDocumento: {checklist?.numDocumento}</p>
          <p className="m-0">Projeto: {checklist?.projeto}</p>
          <p className="m-0">Revisao: {checklist?.revisao}</p>
          <p className="m-0">Titulo: {checklist?.titutlo}</p>
          <p className="m-0">Verificador: {checklist?.verificador}</p>
          <p className="m-0">CreatedOn: {checklist?.createdOn}</p>
          <p className="m-0">DueDate: {checklist?.dueDate}</p>

          <h1 className="mt-5">Checks:</h1>

          <ul className="mt-3">
            {checklist?.checks.map((check) => (
              <li className="d-flex" key={check.id}>
                <div className="ms-5">{check.item}</div>
                <div className="ms-5 w-50">{check.descricao}</div>
                <div className="ms-5 w-25">
                  {translateSituacao(check.situacao)}
                </div>
                <div className="ms-5 w-25">
                  <div className="d-flex">
                    <button
                      onClick={() => {
                        checkOnClickUpdate(check, 1);
                      }}
                    >
                      C
                    </button>
                    <button
                      onClick={() => {
                        checkOnClickUpdate(check, 2);
                      }}
                    >
                      NC
                    </button>
                    <button
                      onClick={() => {
                        checkOnClickUpdate(check, 3);
                      }}
                    >
                      NA
                    </button>
                    <button
                      onClick={() => {
                        checkOnClickUpdate(check, 4);
                      }}
                    >
                      P
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {currentQuestionIndex !== checklist?.checks.length && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>{checklist?.checks[currentQuestionIndex].descricao}</h2>

          <div>
            <button
              ref={buttonRefPrev}
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="me-5"
            >
              Previous
            </button>

            <button
              ref={buttonRefC}
              onClick={() => {
                checkOnClickUpdate(checklist!.checks[currentQuestionIndex], 1);
                handleNext();
              }}
              className="me-1"
            >
              C
            </button>
            <button
              ref={buttonRefNC}
              onClick={() => {
                checkOnClickUpdate(checklist!.checks[currentQuestionIndex], 2);
                handleNext();
              }}
              className="me-1"
            >
              NC
            </button>
            <button
              ref={buttonRefNA}
              onClick={() => {
                checkOnClickUpdate(checklist!.checks[currentQuestionIndex], 3);
                handleNext();
              }}
              className="me-1"
            >
              NA
            </button>
            <button
              ref={buttonRefP}
              onClick={() => {
                checkOnClickUpdate(checklist!.checks[currentQuestionIndex], 4);
                handleNext();
              }}
            >
              P
            </button>

            <button
              ref={buttonRefJump}
              onClick={() => {
                checkOnClickUpdate(checklist!.checks[currentQuestionIndex], 0);
                handleNext();
              }}
              className="ms-5"
            >
              Jump
            </button>
          </div>

          <p>
            Item {currentQuestionIndex + 1} / {questions.length}
          </p>
        </div>
      )}
    </>
  );
};

export default ChecklistDetailsPage;
