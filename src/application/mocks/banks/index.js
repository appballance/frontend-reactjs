export const CODE_BANK = {
  NUBANK: "260",
  BRAZIL_BANK: "001",
  PICPAY: "380",
}

export const banksMock = [
  { value: CODE_BANK.NUBANK, label: "NU PAGAMENTOS S.A" },
  { value: CODE_BANK.BRAZIL_BANK, label: "BANCO DO BRASIL S.A", isDisabled: true },
  { value: CODE_BANK.PICPAY, label: "PicPay Servicos S.A", isDisabled: true  },
];