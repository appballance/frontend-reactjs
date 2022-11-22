import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useApp } from "../../application/context";
import { getUser, logoutUser } from "../../services/user-service";
import { authNubank, sendCodeByEmailNubank } from "../../services/bank-service";

export const useHomeAuthenticated = () => {
  const [user, setUser] = useState({});
  const [stateMain, setStateMain] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [stateCode, setStateCode] = useState(false);

  const { showToastMessage } = useApp();

  const history = useHistory();

  useEffect(() => {
    getUser()
      .then(setUser)
      .catch((error) => {
        console.log(error);
        history.push("/login");
      });
  }, []);

  const initialValues = {
    cpf: "",
    password: "",
    code: "",
    bank: null,
  };

  const listMain = [
    {
      name: "Bancos conectado",
      onClick: () => {},
    },
    {
      name: "Conectar novo banco",
      onClick: (e) => {
        e.stopPropagation();
        setStateModal(!stateModal);
      },
    },
    {
      name: "Desconectar-se",
      onClick: (e) => {
        e.stopPropagation();
        logoutUser();
        history.push("/login");
        showToastMessage("Desconectado com sucesso")
      },
    },
  ];

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);

    if (stateCode) {
      const payload = {
        code_id: values?.code,
        number: values?.bank,
      };
      const response = await authNubank(payload);

      if (response?.success) {
        showToastMessage("Banco conectado com sucesso");
        setStateModal(false);
      } else {
        showToastMessage("Erro ao tentar conectar com Banco", "msgError");
      }

      setSubmitting(false);
      return;
    }

    const payload = {
      cpf: values?.cpf,
      password: values?.password,
      device_id: window.navigator.platform,
      number: values?.bank?.value,
    };
    const response = await sendCodeByEmailNubank(payload);

    if (response?.success) {
      setStateCode(true);
      showToastMessage("Código enviado com sucesso");
    } else {
      showToastMessage("Erro ao tentar enviar código", "msgError");
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
