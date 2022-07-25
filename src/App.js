import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import LeftPanel from "./components/LeftPanel/LeftPanel";
function App() {
  return (
    <Router>
      <LeftPanel>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/table" element={<Users />} />
          <Route path="/billing" element={<Messages />} />
          <Route path="/virtual" element={<Analytics />} />
          <Route path="/rtl" element={<FileManager />} />
          <Route path="/profile" element={<Order />} />
          <Route path="/signin" element={<Saved />} />
          <Route path="/signup" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </LeftPanel>
    </Router>
  );
}

export default App;
