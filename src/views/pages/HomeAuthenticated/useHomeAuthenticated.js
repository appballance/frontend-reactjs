import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useApp } from "application/context";
import { getUser, logoutUser } from "infrastructure/services/user-service";
import {
  authNubank,
  sendCodeByEmailNubank,
} from "infrastructure/services/bank-service";

import bankConectIcon from "views/assets/icons/connect-white.png";
import bankList from "views/assets/icons/bank-white.png";
import leftPlataform from "views/assets/icons/left-white.png";

export const useHomeAuthenticated = () => {
  const [user, setUser] = useState({});
  const [stateMain, setStateMain] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [stateCode, setStateCode] = useState(false);
  const [userUpdated, setUserUpdate] = useState(false);

  const { showToastMessage } = useApp();

  const history = useHistory();

  useEffect(() => {
    if (!userUpdated) {
      getUser()
        .then(setUser)
        .catch((error) => {
          console.log(error);
          history.push("/login");
          showToastMessage("Erro na autenticação", "msgError");
        });
      setUserUpdate(true);
    }
  }, [userUpdated]);

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
    {
      name: "Conectar novo banco",
      onClick: (e) => {
        e.stopPropagation();
        setStateModal(!stateModal);
      },
      icon: bankConectIcon,
    },
    {
      name: "Desconectar-se",
      onClick: (e) => {
        e.stopPropagation();
        logoutUser();
        history.push("/login");
        showToastMessage("Desconectado com sucesso");
      },
      icon: leftPlataform,
    },
  ];

  const onSubmit = async (values, { setSubmitting }) => {
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
      } else {
        const errorMessage =
          response?.message || "Erro ao tentar conectar com Banco";
        showToastMessage(errorMessage, "msgError");
      }

      setSubmitting(false);
      return;
    }

    const payload = {
      cpf: values?.cpf,
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
    user,
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
