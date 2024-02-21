import './App.css';
import ApplicationForm from './Components/ApplicationForm';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobPage from './Components/JobPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import UserProfile from './Components/UserProfile';
import JobPost from './Components/JobPost';
import { AuthProvider } from './Components/AuthContext';
function App() {
  return (
    <Router>
       <AuthProvider>
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/ApplicationForm" element={<ApplicationForm />} />
        <Route path="/JobPage" element={<JobPage/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/JobPost" element={<JobPost />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
