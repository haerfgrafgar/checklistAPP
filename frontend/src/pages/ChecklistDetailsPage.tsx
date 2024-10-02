import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  EnviarParaAprovacao,
  GetCheckById,
  GetChecklistById,
  RespondCheck,
} from "../api";
import { Check, Checklist } from "../interfaces";
import { mapCheckToRespondCheckDto } from "../mappers/Check";
import { translateSituacao } from "../Helper";
import Swal from "sweetalert2";

type Props = {};

const ChecklistDetailsPage = (props: Props) => {
  const [isChecklistCompleted, setIsChecklistCompleted] =
    useState<boolean>(false);
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

  const navigate = useNavigate();

  const checkOnClickUpdate = async (check: Check, choice: number) => {
    if (choice === 2 || choice === 4) {
      Swal.fire({
        title: "Motivo: ",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Edit",
        showLoaderOnConfirm: true,
        preConfirm: async (text) => {
          check.situacao = choice;
          check.motivo = text;
          console.log(check);
          await RespondCheck(check.id, mapCheckToRespondCheckDto(check));
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        handleNext();
        return;
      });
    } else {
      check.situacao = choice;
      await RespondCheck(check.id, mapCheckToRespondCheckDto(check));
      handleNext();
    }
  };

  const handleOnEnviar = async () => {
    await EnviarParaAprovacao(checklist!.id);
    navigate("/");
  };

  async function fetchData() {
    try {
      const data = await GetChecklistById(id);
      if (typeof data === "string") {
        return 0;
      }
      await setChecklist(data.data);
      return;
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
    if (checklist !== undefined) {
      setQuestions(checklist?.checks.map((check) => check.descricao));
      console.log(checklist);
    }
  }, [checklist]);

  useEffect(() => {
    if (currentQuestionIndex === checklist?.checks.length) {
      const completed = checklist.checks.every((check) => {
        return check.situacao === 1 || check.situacao === 3;
      });
      setIsChecklistCompleted(completed);
    }
  }, [currentQuestionIndex, checklist?.checks.length]);

  // useEffect(() => {
  //   if (checklist?.checks[0].situacao === 1) {
  //     handleNext();
  //   }
  // }, [questions]);

  const handleNext = () => {
    if (currentQuestionIndex <= questions.length - 1) {
      let index = currentQuestionIndex + 1;

      while (
        (checklist?.checks[index]?.situacao === 1 ||
          checklist?.checks[index]?.situacao === 3) &&
        index <= questions.length - 1
      ) {
        console.log("loop");
        index += 1;
      }

      setCurrentQuestionIndex(index);
    }
    //BUT MAYBE NOT AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    fetchData();
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSituacaoOnClick = (motivo: string) => {
    if (motivo === "") return;
    Swal.fire(motivo);
  };

  return (
    <>
      {currentQuestionIndex === checklist?.checks.length && (
        <div>
          <div className="container mt-4">
            <div className="card ">
              <div className="card-header text-white bg-dark">
                <h1>Informações gerais</h1>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    NumDestaLV: {checklist?.numDestaLV}
                  </li>
                  <li className="list-group-item">
                    NumContrato: {checklist?.numContrato}
                  </li>
                  <li className="list-group-item">
                    NumDocumento: {checklist?.numDocumento}
                  </li>
                  <li className="list-group-item">
                    Projeto: {checklist?.projeto}
                  </li>
                  <li className="list-group-item">
                    Revisao: {checklist?.revisao}
                  </li>
                  <li className="list-group-item">
                    Versao: {checklist?.versao}
                  </li>
                  <li className="list-group-item">
                    Titulo: {checklist?.titutlo}
                  </li>
                  <li className="list-group-item">
                    Verificador: {checklist?.verificador}
                  </li>
                  <li className="list-group-item">
                    Executante: {checklist?.executante}
                  </li>
                  <li className="list-group-item">
                    CreatedOn: {checklist?.createdOn}
                  </li>
                  <li className="list-group-item">
                    DueDate: {checklist?.dueDate}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h1 className="mt-5">Checks:</h1>

          <ul className="mt-3 list-group">
            {checklist?.checks.map((check) => (
              <li
                className="list-group-item d-flex align-items-center"
                key={check.id}
              >
                <div className="flex-grow-1 ms-3">{check.item}</div>
                <div className="flex-grow-1 ms-3">{check.descricao}</div>
                <button
                  className={
                    check.situacao === 1 || check.situacao === 3
                      ? "btn btn-success ms-3"
                      : "btn btn-danger ms-3"
                  }
                  onClick={() => handleSituacaoOnClick(check.motivo)}
                >
                  {translateSituacao(check.situacao)}
                </button>
                <div className="ms-3">
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-success"
                      onClick={() => checkOnClickUpdate(check, 1)}
                    >
                      CO
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => checkOnClickUpdate(check, 3)}
                    >
                      NA
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => checkOnClickUpdate(check, 2)}
                    >
                      NC
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => checkOnClickUpdate(check, 4)}
                    >
                      PE
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {currentQuestionIndex !== checklist?.checks.length && (
        <div className="text-center mt-5">
          <h2>{checklist?.checks[currentQuestionIndex].descricao}</h2>

          <div className="mt-4">
            <button
              ref={buttonRefPrev}
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="btn btn-secondary me-3"
            >
              Previous
            </button>

            <div className="btn-group" role="group">
              <button
                ref={buttonRefC}
                onClick={async () => {
                  await checkOnClickUpdate(
                    checklist!.checks[currentQuestionIndex],
                    1
                  );
                }}
                className="btn btn-success me-1"
              >
                C
              </button>
              <button
                ref={buttonRefNC}
                onClick={async () => {
                  await checkOnClickUpdate(
                    checklist!.checks[currentQuestionIndex],
                    2
                  );
                }}
                className="btn btn-warning me-1"
              >
                NC
              </button>
              <button
                ref={buttonRefNA}
                onClick={async () => {
                  await checkOnClickUpdate(
                    checklist!.checks[currentQuestionIndex],
                    3
                  );
                }}
                className="btn btn-info me-1"
              >
                NA
              </button>
              <button
                ref={buttonRefP}
                onClick={async () => {
                  await checkOnClickUpdate(
                    checklist!.checks[currentQuestionIndex],
                    4
                  );
                }}
                className="btn btn-danger"
              >
                P
              </button>
            </div>

            <button
              ref={buttonRefJump}
              onClick={() => {
                checkOnClickUpdate(checklist!.checks[currentQuestionIndex], 0);
              }}
              className="btn btn-outline-primary ms-5"
            >
              Jump
            </button>
          </div>

          <p className="mt-3">
            Item {currentQuestionIndex + 1} / {checklist?.checks.length}
          </p>
        </div>
      )}

      {isChecklistCompleted && (
        <div className="text-center mt-4 mb-2">
          <button
            onClick={handleOnEnviar}
            className="btn btn-success btn-lg"
            style={{ padding: "10px 20px", borderRadius: "5px" }}
          >
            <h1 className="m-0">ENVIAR</h1>
          </button>
        </div>
      )}
    </>
  );
};

export default ChecklistDetailsPage;
