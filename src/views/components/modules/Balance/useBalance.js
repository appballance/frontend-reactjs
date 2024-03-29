import { useState } from "react";

import { useApp } from "application/context";
import { removeMaskCpf } from "infrastructure/utils";
import {
  authNubank,
  sendCodeByEmailNubank,
} from "infrastructure/services/bank-service";

import bankList from "views/assets/icons/bank-white.png";

export const useBalance = () => {
  const [stateMain, setStateMain] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [stateCode, setStateCode] = useState(false);

  const { showToastMessage } = useApp();

  const initialValues = {
    cpf: "",
    password: "",
    code: "",
    bank: null,
  };

  const listMain = [
    {
      name: "Bancos conectado",
      onClick: (e) => {
        e.stopPropagation();
      },
      icon: bankList,
    },
  ];

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    if (stateCode) {
      const payload = {
        code_id: values?.code,
        code: values?.bank?.value,
      };
      const response = await authNubank(payload);

      if (response?.success) {
        showToastMessage("Banco conectado com sucesso");
        setStateModal(false);
        resetForm();
      } else {
        const errorMessage =
          response?.message || "Erro ao tentar conectar com Banco";
        showToastMessage(errorMessage, "msgError");
      }

      setSubmitting(false);
      return;
    }

    const payload = {
      cpf: removeMaskCpf(values?.cpf),
      password: values?.password,
      device_id: window.navigator.platform,
      code: values?.bank?.value,
    };

    const response = await sendCodeByEmailNubank(payload);

    if (response?.success) {
      setStateCode(true);
      showToastMessage("Código enviado com sucesso");
    } else {
      const errorMessage = response?.message || "Erro ao tentar enviar código";
      showToastMessage(errorMessage, "msgError");
    }

    setSubmitting(false);
  };

  return {
    listMain,
    stateMain,
    setStateMain,
    stateModal,
    setStateModal,
    onSubmit,
    stateCode,
    initialValues,
  };
};
