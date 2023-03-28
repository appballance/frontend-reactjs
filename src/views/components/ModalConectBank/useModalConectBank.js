import { useState } from "react";

import { useApp } from "application/context";
import { CODE_BANK } from "application/constant";
import { removeMaskCpf } from "infrastructure/utils";
import {
  sendCodeByEmailNubank,
  authNubank,
} from "infrastructure/services/bank-service";

export const useModalConectBank = ({ onClose }) => {
  const [stateCode, setStateCode] = useState(false);
  const { showToastMessage } = useApp();

  const stylesBanks = {
    [CODE_BANK.NUBANK]: {
      hide: false,
    },
    [CODE_BANK.BRAZIL_BANK]: {
      hide: true,
    },
    [CODE_BANK.PICPAY]: {
      hide: true,
    },
    [null]: {
      hide: true,
    },
  };

  const getCurrentBankStyle = (currentBankCode = null) =>
    stylesBanks[currentBankCode];

  const initialValues = {
    cpf: "",
    password: "",
    code: "",
    bank: null,
  };

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
        onClose();
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
    getCurrentBankStyle,
    initialValues,
    onSubmit,
    stateCode,
  };
};
