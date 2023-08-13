export const calcTotal = (bill: number, tip: number, people: number): number => {
  const calcTip: number = bill * (tip / 100);
  return (bill + calcTip) / people;
};

export const calcTipAmount = (bill: number, tip: number, people: number) => {
  const calcTip = bill * (tip / 100);
  return calcTip / people;
};
