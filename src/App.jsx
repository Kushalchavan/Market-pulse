import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
};
export default App;
