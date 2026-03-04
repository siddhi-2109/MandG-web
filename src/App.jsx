import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Body from "./components/Body";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Connections from "./components/Connections";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Feed />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/edit" element={<EditProfile />} />
            <Route path="connections" element={<Connections />} />
            <Route path="request" element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
