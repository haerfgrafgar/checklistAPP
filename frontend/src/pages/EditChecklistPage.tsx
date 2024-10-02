import React, { useEffect, useState } from "react";
import {
  AddCheck,
  DeleteCheck,
  DeleteChecklist,
  EditCheck,
  EditChecklist,
  GetChecklistById,
} from "../api";
import { Checklist, ChecklistDto } from "../interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import { mapChecklistToChecklistDto } from "../mappers/Checklist";
import { translateSituacao } from "../Helper";
import { CheckDto } from "../Classes";
import Swal from "sweetalert2";
import { mapCheckToCheckDto } from "../mappers/Check";
import MenuChecklistAddClass from "../components/menus/MenuChecklistAddClass";

const EditChecklistPage = () => {
  const navigate = useNavigate();
  const [checklist, setChecklist] = useState<Checklist>();
  const [formData, setFormData] = useState<ChecklistDto>({
    titutlo: "",
    numDestaLV: "",
    numContrato: "",
    numDocumento: "",
    projeto: "",
    revisao: 0,
    verificador: "",
    executante: "",
    dueDate: "",
    anteriorId: 0,
    caminho: "",
    emitido: false,
    paraVerificar: false,
    versao: 0,
  });
  const [newCheckDescricao, setNewCheckDescricao] = useState<string>("");

  const id = Number(useLocation().pathname.slice(17));

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
  }, []);

  useEffect(() => {
    checklist && setFormData(mapChecklistToChecklistDto(checklist));
  }, [checklist]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "revisao" ? Number(value) : value,
    });

    console.log(formData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    EditChecklist(checklist!.id, formData);
  };

  const handleEdit = async (id: number, check: CheckDto) => {
    Swal.fire({
      title: "Descrição: ",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Edit",
      showLoaderOnConfirm: true,
      preConfirm: async (text) => {
        check.descricao = text;
        await EditCheck(id, check);
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        fetchData();
      }
    });
  };

  const handleDelete = async (id: number) => {
    await DeleteChecklist(id);
    navigate("/checklists/verificador");
  };

  const handleCheckDelete = async (id: number) => {
    await DeleteCheck(id);
    fetchData();
  };

  const handleCheckAdd = () => {
    //e.preventDefault();
    const checkInstance = new CheckDto(0, newCheckDescricao, 4, "");
    console.log(checkInstance);
    AddCheck(checkInstance, checklist!.id);
  };

  const handleSituacaoOnClick = (motivo: string) => {
    if (motivo === "") return;
    Swal.fire(motivo);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-3 mb-5">
        <h1
          className="display-4 text-center"
          style={{ fontWeight: "bold", color: "#343a40" }}
        >
          Informações Gerais:
        </h1>
        <div className="row mt-5">
          {[
            { label: "Num Desta LV", name: "numDestaLV" },
            { label: "Num Contrato", name: "numContrato" },
            { label: "Num Documento", name: "numDocumento" },
            { label: "Projeto", name: "projeto" },
            { label: "Titulo", name: "titutlo" },
            { label: "Verificador", name: "verificador" },
            { label: "Executante", name: "executante" },
            { label: "Due Date", name: "dueDate", type: "date" },
          ].map(({ label, name, type = "text" }) => (
            <div className="col-md-6 mb-3" key={name}>
              <label className="form-label">{label}</label>
              <input
                type={type}
                className="form-control"
                name={name}
                value={formData[name]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button type="submit" className="btn btn-primary btn-lg me-3">
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg"
            onClick={() => handleDelete(checklist!.id)}
          >
            Delete
          </button>
        </div>
      </form>

      <hr style={{ border: "1px solid black", margin: "20px 0" }} />

      {checklist && (
        <div>
          <MenuChecklistAddClass
            checklistId={checklist!.id}
          ></MenuChecklistAddClass>
        </div>
      )}

      <hr style={{ border: "1px solid black", margin: "20px 0" }} />

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
                  className="btn btn-primary me-2"
                  onClick={() =>
                    handleEdit(check.id, mapCheckToCheckDto(check))
                  }
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => handleCheckDelete(check.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <hr style={{ border: "1px solid black", margin: "20px 0" }} />

      <div className="d-flex justify-content-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCheckAdd();
          }}
          className="row g-3 align-items-center p-3"
        >
          <div className="col-auto">
            <h4 className="mb-0">Adicionar check:</h4>
          </div>

          <div className="col-auto">
            <label className="form-label">Descrição:</label>
            <input
              type="text"
              className="form-control"
              name="descricao"
              value={newCheckDescricao}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNewCheckDescricao(event.target.value);
              }}
            />
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditChecklistPage;
