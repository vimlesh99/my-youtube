/** @format */

import { useEffect, useState } from "react";
import Header from "./component/header/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import Sidebar from "./component/sidebar/Sidebar";
import "./_app.scss";
import LoginScreen from "./screen/homeScreen/loginScreen/LoginScreen";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [sidebar, setToggelSidebar] = useState(false);

  const handelToggelSidebar = () => {
    setToggelSidebar((value) => !value);
  };

  return (
    <>
      <Header toggelSidebar={handelToggelSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} toggelSidebar={handelToggelSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken && !loading) {
      navigate("/auth");
    }
  }, [accessToken, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      ></Route>
      <Route path="/auth" exact element={<LoginScreen />} />
      <Route path="/search" exact element={<Layout>Search result</Layout>} />
      <Route
        path="*"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
