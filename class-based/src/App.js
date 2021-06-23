import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

function App() {
  return (
    <UsersContext.Provider value={{users: DUMMY_USERS}}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
