import Users from "../models/Users";

export type functionalComponent = () => JSX.Element | JSX.Element[];
export type editUserFunction = (user: Users) => void;