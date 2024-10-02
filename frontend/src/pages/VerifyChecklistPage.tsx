import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import {
  EnviarParaAprovacao,
  GetAllAnterioresChecklist,
  GetCheckById,
  GetChecklistById,
  RejeitarChecklist,
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
  const [anterioresChecklists, setAnterioresChecklists] =
    useState<Checklist[]>();
  const { id } = useParams();

  const navigate = useNavigate();

  const handleOnEnviar = async () => {
    await EnviarParaAprovacao(checklist!.id);
    navigate("/");
  };

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
        fetchData();
        return;
      });
    } else {
      check.situacao = choice;
      check.motivo = "";
      await RespondCheck(check.id, mapCheckToRespondCheckDto(check));
      fetchData();
    }
  };

  const onClickRejeitar = async () => {
    await RejeitarChecklist(checklist!.id);
    navigate("/");
  };

  const handleSituacaoOnClick = (motivo: string) => {
    if (motivo === "") return;
    Swal.fire(motivo);
  };

  async function fetchData() {
    try {
      const data = await GetChecklistById(id);
      if (typeof data === "string") {
        return 0;
      }
      setChecklist(data.data);

      const anterioresChecklistsData = await GetAllAnterioresChecklist(id);
      if (typeof anterioresChecklistsData === "string") {
        return 0;
      }
      setAnterioresChecklists(anterioresChecklistsData.data.reverse());

      return;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(checklist);
  }, [checklist]);

  useEffect(() => {
    var completed;
    if (checklist) {
      completed = checklist.checks.every((check) => {
        return check.situacao === 1 || check.situacao === 3;
      });
      setIsChecklistCompleted(completed);
    }
  }, [checklist]);

  return (
    <>
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
                <li className="list-group-item">Versao: {checklist?.versao}</li>
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
              className="list-group-item d-flex justify-content-between align-items-center"
              key={check.id}
            >
              <div className="flex-shrink-0" style={{ width: "50px" }}>
                {check.item}
              </div>
              <div className="flex-grow-1 ms-3">{check.descricao}</div>

              <div className="d-flex align-items-center">
                {anterioresChecklists?.map((previousChecklist) => (
                  <button
                    onClick={() =>
                      handleSituacaoOnClick(
                        previousChecklist.checks[check.item - 1].motivo
                      )
                    }
                    className={
                      previousChecklist.checks[check.item - 1].situacao === 1 ||
                      previousChecklist.checks[check.item - 1].situacao === 3
                        ? "btn btn-success ms-2"
                        : "btn btn-danger ms-2"
                    }
                    key={previousChecklist.checks[check.item - 1].id}
                  >
                    {translateSituacao(
                      previousChecklist.checks[check.item - 1].situacao
                    )}
                  </button>
                ))}
                <div
                  style={{
                    width: "2px",
                    backgroundColor: "black",
                    height: "30px",
                    margin: "0 5px",
                  }}
                ></div>

                <button
                  className={
                    check.situacao === 1 || check.situacao === 3
                      ? "btn btn-success me-2"
                      : "btn btn-danger me-2"
                  }
                >
                  {translateSituacao(check.situacao)}
                </button>
              </div>

              <div className="ms-4">
                <div className="btn-group" role="group">
                  <button
                    onClick={() => checkOnClickUpdate(check, 1)}
                    className="btn btn-success"
                  >
                    CO
                  </button>
                  <button
                    onClick={() => checkOnClickUpdate(check, 3)}
                    className="btn btn-success"
                  >
                    NA
                  </button>
                  <button
                    onClick={() => checkOnClickUpdate(check, 2)}
                    className="btn btn-danger"
                  >
                    NC
                  </button>
                  <button
                    onClick={() => checkOnClickUpdate(check, 4)}
                    className="btn btn-danger"
                  >
                    PE
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-4 mb-2">
        <div className="d-flex justify-content-center">
          {isChecklistCompleted && (
            <div>
              <button
                onClick={handleOnEnviar}
                className="btn btn-success btn-lg me-2" // Bootstrap classes for styling
              >
                EMITIR
              </button>
            </div>
          )}
          <button
            onClick={onClickRejeitar}
            className="btn btn-danger btn-lg" // Bootstrap classes for styling
          >
            REJEITAR
          </button>
        </div>
      </div>
    </>
  );
};

export default ChecklistDetailsPage;
