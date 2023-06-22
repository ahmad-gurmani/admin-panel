import Sidebar from "../../routes/sidebar/sidebar.component";

// eslint-disable-next-line react/prop-types
const SidebarTemplate = ({ children }) => {
    return (
        <>
            <Sidebar />
            {children}
        </>
    )
}

export default SidebarTemplate;
