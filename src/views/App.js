import logo from './logo.svg';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import MainComponent from './Ex/MainComponent';
import ToDoComponent from './Todo/ToDoComponent';
import Nav from './Nav/nav'
import Home from './Ex/Home';
import ListUsers from './Ex/User';
import UserDetail from './Ex/UserDetail';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ToDoComponent /> */}
          <Routes>
            <Route path="/" exact element={<Nav />}>
              <Route index element={<Home />} />
              <Route path="todo" element={<ToDoComponent />} />
              <Route path="contact" element={<MainComponent />} />
              <Route path="user" element={<ListUsers />} />
              <Route path="user/:id" element={<UserDetail />} />
            </Route>
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>

    </BrowserRouter>


  );
}

export default App;
