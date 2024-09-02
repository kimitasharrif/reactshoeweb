import { useNavigate } from "react-router-dom";

const ReactLogout = () =>{
//    logout function 
const navigate = useNavigate()
const logout = () => {
    // clear the local storage 
    localStorage.clear()
    // redirect to login page 
    navigate("/")
    }
    // export the logout function 
    return{logout}


}
export default ReactLogout