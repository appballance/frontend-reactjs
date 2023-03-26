import { CODE_BANK } from "application/constant";

export const banksMock = [
  { value: CODE_BANK.NUBANK, label: "NU PAGAMENTOS S.A" },
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
