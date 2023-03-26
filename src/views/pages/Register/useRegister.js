import { useState } from "react";
import { useHistory } from "react-router-dom";

import { useApp } from "application/context";
import { registerUser } from "infrastructure/services/user-service";
import { registerSchema } from "./registerSchema";

export const useRegister = () => {
  const { showToastMessage } = useApp();
  const [isSubmitting, setSubmitting] = useState();
  const [data, setData] = useState({
    [registerSchema.surname.name]: "",
    [registerSchema.fullname.name]: "",
    [registerSchema.email.name]: "",
    [registerSchema.password1.name]: "",
    [registerSchema.password2.name]: "",
  });

  const { push } = useHistory();

  const onSubmit = async () => {
    setSubmitting(true);
    const response = await registerUser(data);
    setSubmitting(false);

    if (!response?.success) {
      showToastMessage("Erro ao tentar realizar cadastro", "msgError");
      return;
    }

    showToastMessage("Cadastro realizado com sucesso, realize o login");
    push("/");
    return;
  };

  const getFieldDefaultProps = (key) => ({
    name: registerSchema[key]?.name,
    label: registerSchema[key]?.label,
    placeholder: registerSchema[key]?.placeHolder,
    value: data[key],
    onChange: (event) => {
      setData({
        ...data,
        [key]: event?.target?.value,
      });
    },
  });

  return {
    onSubmit,
    registerSchema,
    getFieldDefaultProps,
    isSubmitting,
  };
};
