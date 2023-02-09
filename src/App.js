/** @format */

import { useEffect, useState } from "react";
import Header from "./component/header/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import Sidebar from "./component/sidebar/Sidebar";
import "./_app.scss";
import LoginScreen from "./screen/loginScreen/LoginScreen";
import 'react-loading-skeleton/dist/skeleton.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import WatchScreen from "./screen/watchScreen/WatchScreen";
import SearchScreen from "./screen/searchscreen/SearchScreen";

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
      <Route path="/search/:query" exact element={<Layout>
        <SearchScreen/>
      </Layout>} />
      <Route
        path="*"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
      <Route
       exact
        path="/watch/:id"
        element={
          <Layout>
            <WatchScreen />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
