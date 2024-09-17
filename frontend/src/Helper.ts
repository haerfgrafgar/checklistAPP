import axios from "axios";
import { toast } from "react-toastify";
import { CheckDto, TokenPayload } from "./interfaces";
import { jwtDecode } from "jwt-decode";
import { AddCheck } from "./api";

export const translateSituacao = (x: number) => {
  switch (x) {
    case 0:
      return "NÃO RESPONDIDO";
    case 1:
      return "CONFORME";
    case 2:
      return "NÃO CONFORME";
    case 3:
      return "NÃO APLICAVEL";
    case 4:
      return "PENDENTE";
  }
};

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    var err = error.response;
    if (Array.isArray(err?.data.errors)) {
      for (let val of err?.data.errors) {
        toast.warning(val.description);
      }
    } else if (typeof err?.data.errors === "object") {
      for (let e in err.data.errors) {
        toast.warning(err.data.errors[e][0]);
      }
    } else if (err?.data) {
      toast.warning(err.data);
    } else if (err?.status == 401) {
      toast.warning("Not logged in");
      window.history.pushState({}, "LoginPage", "/login");
    } else if (err) {
      toast.warning(err.data);
    }
  }
};

export const getToken = (): TokenPayload | null => {
  const token = localStorage.getItem("token");

  if (token != null) {
    const decoded = jwtDecode<TokenPayload>(token);
    return decoded;
  }

  return null;
};

export const BulkAddChecks = async (
  checklistId: number,
  checks: string[],
  count: number = 1
) => {
  var count: number = count;
  checks.forEach(async (check) => {
    const thisCheck: CheckDto = {
      item: count,
      descricao: check,
      situacao: 0,
      motivo: "",
    };
    count = count + 1;

    await AddCheck(thisCheck, checklistId);
  });
};
