import axios from "axios";
import { Check, Checklist, ChecklistDto, ResponseCheckDto } from "./interfaces";
import { useAuth } from "./Context/useAuth";
import { BulkAddChecks, getToken } from "./Helper";
import { CheckDto } from "./Classes";
import { DefaultChecks } from "./Globals";

export interface SearchResponse {
  data: Checklist[];
}

export const BASE_API = "http://localhost:5168/";

export const GetAllChecklists = async () => {
  try {
    const data = await axios.get<SearchResponse>(BASE_API + "api/checklist");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "UNEXPECTED ERROR!";
    }
  }
};

export const GetAllAssignedChecklistsExecutante = async (username: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      BASE_API + "api/checklist/" + username
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "UNEXPECTED ERROR!";
    }
  }
};

export const GetAllAssignedChecklistsVerificador = async (username: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      BASE_API + "api/checklist/verificador/" + username
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "UNEXPECTED ERROR!";
    }
  }
};

export const GetChecklistById = async (id: number) => {
  try {
    const data = await axios.get<Checklist>(BASE_API + "api/checklist/" + id);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "UNEXPECTED ERROR!";
    }
  }
};

export const RespondCheck = async (
  checkId: number,
  checkData: ResponseCheckDto
): Promise<void> => {
  try {
    const response = await fetch(`${BASE_API}api/check/respond/${checkId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "*/*",
        "Content-Type": "application/json-patch+json",
      },
      body: JSON.stringify(checkData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const DeleteChecklist = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${BASE_API}api/checklist/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "*/*",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.status !== 204) {
      const data = await response.json();
      return data;
    } else {
      console.log("No content to display (204 No Content).");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const PostChecklist = async (checklist: ChecklistDto): Promise<void> => {
  var createdChecklistId: number = 0;

  try {
    const response = await fetch(`${BASE_API}api/checklist`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "*/*",
        "Content-Type": "application/json-patch+json",
      },
      body: JSON.stringify(checklist),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    createdChecklistId = data.id;
    BulkAddChecks(createdChecklistId, DefaultChecks, 1);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const AddCheck = async (check: CheckDto, checklistId: number) => {
  try {
    const response = await fetch(`${BASE_API}api/check/${checklistId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "*/*",
        "Content-Type": "application/json-patch+json",
      },
      body: JSON.stringify(check),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const EditChecklist = async (id: number, checklist: ChecklistDto) => {
  try {
    const response = await fetch(`${BASE_API}api/checklist/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "*/*",
        "Content-Type": "application/json-patch+json",
      },
      body: JSON.stringify(checklist),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const EditCheck = async (id: number, check: CheckDto) => {
  try {
    const response = await fetch(`${BASE_API}api/check/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "*/*",
        "Content-Type": "application/json-patch+json",
      },
      body: JSON.stringify(check),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const GetCheckById = async (id: number) => {
  try {
    const data = await axios.get<Check>(BASE_API + "api/check/" + id);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "UNEXPECTED ERROR!";
    }
  }
};

export const DeleteCheck = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${BASE_API}api/check/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "*/*",
        "Content-Type": "application/json-patch+json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Check if response has content before trying to parse as JSON
    if (response.status !== 204) {
      const data = await response.json();
      return data;
    } else {
      console.log("No content to display (204 No Content).");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const GetAllUsers = async () => {
  try {
    const data = await axios.get<SearchResponse>(BASE_API + "api/account");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "UNEXPECTED ERROR!";
    }
  }
};

export const EnviarParaAprovacao = async (id: number) => {
  try {
    const data = await axios.put<Checklist>(
      BASE_API + "api/checklist/enviar/" + id
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "UNEXPECTED ERROR!";
    }
  }
};

export const RejeitarChecklist = async (id: number) => {
  try {
    const data = await axios.put<Checklist>(
      BASE_API + "api/checklist/rejeitar/" + id
    );
    console.log(data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "UNEXPECTED ERROR!";
    }
  }
};

export const GetAllAnterioresChecklist = async (id: number) => {
  try {
    const data = await axios.get<Checklist[]>(
      BASE_API + "api/checklist/anteriores/" + id
    );
    console.log(data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "UNEXPECTED ERROR!";
    }
  }
};
