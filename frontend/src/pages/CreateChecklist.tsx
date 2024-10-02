import React, { useState } from "react";
import { ChecklistDto } from "../interfaces";
import { PostChecklist } from "../api";
import { useNavigate } from "react-router";

const CreateChecklist: React.FC = () => {
  const navigate = useNavigate();
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
    versao: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "revisao" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    var result = await PostChecklist(formData);

    if (result !== undefined) navigate("/checklists");
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-3">
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
          { label: "Caminho", name: "caminho" },
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
      <button type="submit" className="btn btn-primary btn-lg w-100">
        Submit
      </button>
    </form>
  );
};

export default CreateChecklist;
