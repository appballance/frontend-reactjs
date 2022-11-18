export const initialStateContext = {
  me: { loading: false },
  user: null,
  id: null,
  filters: {},
  current: null,
  list: {
    loading: true,
    result: [],
    pagination: {},
  },
  userData: {
    data: {},
  },
};

export const userContextModel = {
  state: initialStateContext,
  dispatch: () => {},
};

export const profileRename = {
  PERFIL_DEMANDANTE: "demandante",
  PERFIL_BASE_SUPRIMENTOS: "base suprimentos",
  PERFIL_COMPRADOR_ESTRUTURADA: "comprador",
  PERFIL_COMPRADOR_EXTERNA: "comprador externo",
  PERFIL_COMPRADOR_VEICULOS: "comprador veículos",
  PERFIL_EXECUCAO_PRODUCAO: "E. Produção",
};
