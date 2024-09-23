import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
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
    navigate("/");
  };

  async function fetchData() {
    try {
      const data = await GetChecklistById(id);
      if (typeof data === "string") {
        return 0;
      }
      console.log(data.data);
      await setChecklist(data.data);
      return;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
        <h1>Informações gerais:</h1>
        <p className="m-0">Id: {checklist?.id}</p>
        <p className="m-0">NumDestaLV: {checklist?.numDestaLV}</p>
        <p className="m-0">NumContrato: {checklist?.numContrato}</p>
        <p className="m-0">NumDocumento: {checklist?.numDocumento}</p>
        <p className="m-0">Projeto: {checklist?.projeto}</p>
        <p className="m-0">Revisao: {checklist?.revisao}</p>
        <p className="m-0">Titulo: {checklist?.titutlo}</p>
        <p className="m-0">Verificador: {checklist?.verificador}</p>
        <p className="m-0">Executante: {checklist?.executante}</p>
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

      <div className="d-flex">
        {isChecklistCompleted && (
          <div>
            <button onClick={handleOnEnviar}>
              <h1>EMITIR</h1>
            </button>
          </div>
        )}
        <button>
          <h1>REJEITAR</h1>
        </button>
      </div>
    </>
  );
};

export default ChecklistDetailsPage;
