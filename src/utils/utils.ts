export function kilobytesToMegabytes(kilobytes: number) {
  const megabytes = kilobytes / 1024;
  const roundedMegabytes = Math.round(megabytes);
  return `${roundedMegabytes}MB`;
}

export function capitalizeFirstLetter(str: string) {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function convertToCurrency(currency: string, amount: number) {
  let symbol;

  switch (currency) {
    case "GBP":
      symbol = "£";
      break;
    case "EUR":
      symbol = "€";
      break;
    case "USD":
    default:
      symbol = "$";
      break;
  }

  return symbol + amount.toFixed(2);
}
