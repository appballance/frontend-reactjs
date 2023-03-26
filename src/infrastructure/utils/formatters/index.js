export const maskCpf = (value) => {
  value = value.replace(/\D/g, "");

  if (value.length <= 11) {
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
  }
  return value;
};

export const maskReal = (value, withoutSymbol = false) => {
  const responseValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  if (withoutSymbol) {
    return responseValue?.replace("R$", "");
  }

  return responseValue;
};

export const removeMaskCpf = (value) => {
  const result = value
    ?.replace(".", "")
    ?.replace(".", "")
    ?.replace("-", "")
    ?.replace("/", "");

  return result;
};
