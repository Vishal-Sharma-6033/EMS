import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Auth/Login";
import AdminDeshboard from "./Components/Deshboard/AdminDeshboard";
import EmployeeDeshboard from "./Components/Deshboard/EmployeeDeshboard";
import { AuthContext } from "./Context/AuthProvider";
// import { setLocalstorage } from './Utils/localStorage'

function App() {
  // useEffect(() => {
  //    setLocalstorage()
  // },);

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState();

  const Authdata = useContext(AuthContext);

  // useEffect(() => {
  //   if(Authdata){
  //   const loggedInuser=localStorage.getItem("loggedInuser")
  //   if(loggedInuser){
  //     setUser(loggedInuser.role)
  //   }
  //   }
  // }, [Authdata]);

  const handlelogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin" );
      localStorage.setItem("loggedInuser", JSON.stringify({ role: "admin" }));
    } else if (Authdata) {
      const employee = Authdata.employee.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee" )
        setLoggedInUserData(employee)
        localStorage.setItem(
          "loggedInuser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("Bhag Mc");
    }
  };

  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : ""}
      {/* {user == "admin" ? <AdminDeshboard /> :( user == employee ?<EmployeeDeshboard  data={setLoggedInUserData} /> : null) } */}
      {user == 'admin' ? <AdminDeshboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDeshboard changeUser={setUser} data={loggedInUserData} /> : null) }

      <Login />
    </>
  );
}

export default App;
