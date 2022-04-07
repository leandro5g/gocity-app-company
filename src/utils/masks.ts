export const maskBrazilianCellPhoneNumber = (number: string) => {
  number = number.replace(/\D/g, "");
  number = number.replace(/^(\d{2})(\d)/g, "($1) $2");
  number = number.replace(/(\d)(\d{4})$/, "$1-$2");

  return number;
};

export const maskCPF = (v: string) => {
  v = v.replace(/\D/g, "");

  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  return v;
};
