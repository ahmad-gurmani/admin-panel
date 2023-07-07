import { useEffect, useState } from "react";
import Sidebar from "../../routes/sidebar/sidebar.component";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

// eslint-disable-next-line react/prop-types
const SidebarTemplate = ({ children }) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(auth.currentUser);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate("/");

            } else { setCurrentUser(user); }
        });
    }, [navigate]);

    return (
        currentUser &&
        <>
            <Sidebar />
            {children}
        </>
    )
}

export default SidebarTemplate;
