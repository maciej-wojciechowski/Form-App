import { createContext } from "react";

type StateType = {
  facility: string;
  name: string;
  email: string;
  message: string;
};

type ClockStateType = {
  hour: string;
  date: string;
};

export const MyContext = createContext({
  state: { facility: "", name: "", email: "", message: "" },
  setState: (state: StateType) => {},
  clockState: { hour: "", date: "" },
  setClockState: (clockState: ClockStateType) => {},
});
