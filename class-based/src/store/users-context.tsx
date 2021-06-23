import { createContext } from "react";

const UsersContext = createContext<{users: {id: string, name: string}[]}>({
  users: []
})

export default UsersContext;