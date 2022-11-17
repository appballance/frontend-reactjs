import React, { useState } from "react";

import { authNubank, sendCodeByEmailNubank } from "../../services/bank-service";
import { Input, Main, ModalConectBank, Select } from "../../components";
import { useHomeAuthenticated } from "./useHomeAuthenticated";

import * as S from "./styles";

const HomeAuthenticated = () => {
  const [stateMain, setStateMain] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [stateCode, setStateCode] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    cpf: "",
    password: "",
    code: "",
  });

  const { user } = useHomeAuthenticated();

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
  ];

  const onSubmit = (values) => {
    if (stateCode) {
      authNubank(values?.code)
        .then((res) => {
          console.log("res", res);
          // setStateCode(true);
          // show notificatiom
        })
        .catch((error) => {
          console.log(error);
          setSubmitting(false);
          // show notificatiom
        });
      return;
    }
    sendCodeByEmailNubank({
      cpf: values?.cpf,
      password: values?.password,
    })
      .then(() => {
        setStateCode(true);
        // show notificatiom
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
        // show notificatiom
      });

    setSubmitting(false);
  };

  const setFormDataByKey = (key, value) =>
    setFormData({
      ...formData,
      [key]: value,
    });

  return (
    <S.HomeContainer>
      <Main listContent={listMain} state={stateMain} setState={setStateMain} />
      <S.Right state={stateMain}>
        <S.HomeTitle>{user?.surname}</S.HomeTitle>
      </S.Right>
      {stateModal && (
        <ModalConectBank
          state={stateModal}
          setState={setStateModal}
          formContent={
            <S.FormModal>
              {!stateCode && (
                <Select
                  label="Bancos disponíveis"
                  placeholder="Em breve"
                  isDisabled
                />
              )}
              {!stateCode && (
                <Input
                  name="cpf"
                  label="CPF"
                  value={formData.cpf}
                  onChange={(e) => {
                    setFormDataByKey("cpf", e.target.value);
                  }}
                />
              )}
              {!stateCode && (
                <Input
                  name="password"
                  label="Senha"
                  value={formData.password}
                  onChange={(e) => {
                    setFormDataByKey("password", e.target.value);
                  }}
                />
              )}
              {stateCode && (
                <Input
                  name="code"
                  label="Codigo"
                  value={formData.code}
                  onChange={(e) => {
                    setFormDataByKey("code", e.target.value);
                  }}
                />
              )}
              <S.Button
                disable={isSubmitting}
                onClick={(e) => {
                  e.stopPropagation();
                  onSubmit(formData);
                }}
              >
                Enviar
              </S.Button>
            </S.FormModal>
          }
        />
      )}
    </S.HomeContainer>
  );
};

export { HomeAuthenticated };
