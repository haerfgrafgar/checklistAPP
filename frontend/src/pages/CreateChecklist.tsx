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
          Executante:
          <input
            type="text"
            name="executante"
            value={formData.executante}
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateChecklist;
