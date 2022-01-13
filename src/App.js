import Home from "./components/Home";
import GetRepositry from "./components/GetRepositries";
import GetIssues from "./components/Issues";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "9px 15px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Welcome To Github Issue Crreation App</h2>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/:userID" element={<GetRepositry />} />
          <Route path="user/:userID/:repo" element={<GetIssues />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
