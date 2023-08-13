// interface IResetProps {
//   setBill: React.Dispatch<React.SetStateAction<number>>;
//   setTip: React.Dispatch<React.SetStateAction<number>>;
//   setPeople: React.Dispatch<React.SetStateAction<number>>;
// }

export const resetAll = (
  setBill: React.Dispatch<React.SetStateAction<number>>,
  setTip: React.Dispatch<React.SetStateAction<number>>,
  setPeople: React.Dispatch<React.SetStateAction<number>>
) => {
  setBill(0);
  setPeople(1);
  setTip(0);
};
