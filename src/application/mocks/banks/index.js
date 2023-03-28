import { CODE_BANK } from "application/constant";

import logoNubank from "views/assets/icons/logo-nubank.png";

export const banksMock = [
  {
    value: CODE_BANK.NUBANK,
    label: "Nubank",
    logoImage: logoNubank,
    color: "rgba(157, 2, 217, 0.3)",
  },
  {
    value: CODE_BANK.BRAZIL_BANK,
    label: "BANCO DO BRASIL S.A",
    isDisabled: true,
  },
  { value: CODE_BANK.PICPAY, label: "PicPay Servicos S.A", isDisabled: true },
];

export const bankMock = {
  entity_id: 1,
  balance: 0,
  code: "",
  transactions: [
    {
      amount: 0,
      address: "",
      type_payment: "",
      type_transaction: "",
    },
    {
      amount: 0,
      address: "",
      type_payment: "",
      type_transaction: "",
    },
    {
      amount: 0,
      address: "",
      type_payment: "",
      type_transaction: "",
    },
    {
      amount: 0,
      address: "",
      type_payment: "",
      type_transaction: "",
    },
    {
      amount: 0,
      address: "",
      type_payment: "",
      type_transaction: "",
    },
    {
      amount: 0,
      address: "",
      type_payment: "",
      type_transaction: "",
    },
    {
      amount: 0,
      address: "",
      type_payment: "",
      type_transaction: "",
    },
    {
      amount: 0,
      address: "",
      type_payment: "",
      type_transaction: "",
    },
    {
      amount: 0,
      address: "",
      type_payment: "",
      type_transaction: "",
    },
    {
      amount: 0,
      address: "",
      type_payment: "",
      type_transaction: "",
    },
  ],
};
