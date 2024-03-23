export const formateDate = (date: string | undefined) => {
  if (date) {
    const created = new Date(date);

    const day = created.getUTCDate(); // get day
    const month = created.getUTCMonth(); // get month
    const year = created.getUTCFullYear(); //year

    return `${day < 10 ? '0' + day : day}.${
      month < 10 ? '0' + (month + 1) : month
    }.${year}`;
  }
};
