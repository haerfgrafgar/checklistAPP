import React, { useEffect, useState } from "react";
import {
  AddCheck,
  DeleteCheck,
  DeleteChecklist,
  EditCheck,
  EditChecklist,
  GetChecklistById,
  PostChecklist,
} from "../api";
import { Check, Checklist, ChecklistDto } from "../interfaces";
import { useLocation } from "react-router-dom";
import { mapChecklistToChecklistDto } from "../mappers/Checklist";
import { BulkAddChecks, translateSituacao } from "../Helper";
import { CheckDto } from "../Classes";
import Swal from "sweetalert2";
import { mapCheckToCheckDto } from "../mappers/Check";
import { ClassAChecks, ClassBChecks } from "../Globals";

type Props = {};

const EditChecklistPage = (props: Props) => {
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
  };

  const handleCheckDelete = async (id: number) => {
    await DeleteCheck(id);
    fetchData();
  };

  const handleCheckAdd = () => {
    const checkInstance = new CheckDto(0, newCheckDescricao, 4, "");
    AddCheck(checkInstance, checklist!.id);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <div className="">
          <label>
            Num Desta LV:
            <input
              type="text"
              name="numDestaLV"
              value={formData.numDestaLV}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Num Contrato:
            <input
              type="text"
              name="numContrato"
              value={formData.numContrato}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Num Documento:
            <input
              type="text"
              name="numDocumento"
              value={formData.numDocumento}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Projeto:
            <input
              type="text"
              name="projeto"
              value={formData.projeto}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Titulo:
            <input
              type="text"
              name="titutlo"
              value={formData.titutlo}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Verificador:
            <input
              type="text"
              name="verificador"
              value={formData.verificador}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Due Date:
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="d-flex">
          <button type="submit">Submit</button>
          <a href="/checklists">
            <button type="button" onClick={() => handleDelete(checklist!.id)}>
              Delete
            </button>
          </a>
        </div>
      </form>

      <form
        onSubmit={() => {
          handleCheckAdd();
        }}
        className="d-flex"
      >
        <h4 className="w-25 ms-5">Adicionar check: </h4>
        <label>
          Descrição:
          <input
            type="text"
            name="descricao"
            value={newCheckDescricao}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNewCheckDescricao(event.target.value);
            }}
          />
        </label>
        <div className="w-50 justify-content-center">
          <button type="submit">Add</button>
        </div>
      </form>

      <div className="d-flex">
        <button
          onClick={async () => {
            await BulkAddChecks(checklist?.id, ClassAChecks, 34);
            window.location.reload();
          }}
        >
          ClasseA
        </button>
        <button
          onClick={async () => {
            await BulkAddChecks(checklist?.id, ClassBChecks, 34);
            window.location.reload();
          }}
        >
          ClasseB
        </button>
      </div>

      <ul className="mt-3">
        {checklist?.checks.map((check) => (
          <li className="d-flex" key={check.id}>
            <div className="ms-5">{check.item}</div>
            <div className="ms-5 w-50">{check.descricao}</div>
            <div className="ms-5 w-25">{translateSituacao(check.situacao)}</div>
            <div className="ms-5 w-25 d-flex">
              <div className="">
                <button
                  onClick={() => {
                    handleEdit(check.id, mapCheckToCheckDto(check));
                  }}
                >
                  Edit
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  onClick={() => {
                    handleCheckDelete(check.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EditChecklistPage;
