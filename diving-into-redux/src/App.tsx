import { Fragment } from "react";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { RootState } from "./store";

function App() {
  const isAuthenticated = useSelector<RootState, boolean>(
    (state) => state.auth.isAuthenticated
  );
  return (
    <Fragment>
      <Header />
      {isAuthenticated ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
