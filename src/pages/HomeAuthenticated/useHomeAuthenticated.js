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
  const [isSubmitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    cpf: "",
    password: "",
    code: "",
  });

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
      },
    },
  ];

  const onSubmit = async (values) => {
    setSubmitting(true);

    if (stateCode) {
      const response = await authNubank(values?.code);

      if (response?.success) {
        showToastMessage("Banco conectado com sucesso");
        setStateModal(false);
      } else {
        showToastMessage("Erro ao tentar conectar com Banco", "msgError");
      }

      setSubmitting(false);
      return;
    }

    const response = await sendCodeByEmailNubank({
      cpf: values?.cpf,
      password: values?.password,
    });

    if (response?.success) {
      setStateCode(true);
      showToastMessage("Código enviado com sucesso");
    } else {
      showToastMessage("Erro ao tentar enviar código", "msgError");
    }

    setSubmitting(false);
  };

  const setFormDataByKey = (key, value) =>
    setFormData({
      ...formData,
      [key]: value,
    });

  return {
    user,
    listMain,
    stateMain,
    setStateMain,
    stateModal,
    setStateModal,
    setFormDataByKey,
    onSubmit,
    isSubmitting,
    stateCode,
    formData,
  };
};
