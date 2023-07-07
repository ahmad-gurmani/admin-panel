// import { useEffect } from "react";
// import { auth } from "../../utils/firebase/firebase.utils";
import NavbarTemplate from "../sidebar-template/sidebar-template.component";
// import { ReactComponent as IconMenu } from '../../assets/MaskGroup.svg'
// import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    return (
        <NavbarTemplate>
            <div className="w-screen bg-gray-200 h-screen shadow-sm round">
                {/* <div className="m-auto">
                    <svg className="m-auto w-100 h-auto" viewBox="0 0 1048 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_0_342" maskUnits="userSpaceOnUse" x="4" y="0" width="1040" height="240">
                            <rect x="4" width="1040" height="240" rx="16" fill="yellow" />
                        </mask>
                        <g mask="url(#mask0_0_342)">
                            <rect x="4" width="1040" height="240" rx="16" fill="#F8B602" />
                            <path opacity="1" d="M872 -28.5C872 50.2006 808.201 114 729.5 114C650.799 114 587 50.2006 587 -28.5C587 -107.201 650.799 -171 729.5 -171C808.201 -171 872 -107.201 872 -28.5ZM635.8 -28.5C635.8 23.2488 677.751 65.1995 729.5 65.1995C781.249 65.1995 823.2 23.2488 823.2 -28.5C823.2 -80.2488 781.249 -122.2 729.5 -122.2C677.751 -122.2 635.8 -80.2488 635.8 -28.5Z" fill="white" />
                            <path opacity="1" d="M1154 238.5C1154 317.201 1090.2 381 1011.5 381C932.799 381 869 317.201 869 238.5C869 159.799 932.799 96 1011.5 96C1090.2 96 1154 159.799 1154 238.5ZM917.8 238.5C917.8 290.249 959.751 332.2 1011.5 332.2C1063.25 332.2 1105.2 290.249 1105.2 238.5C1105.2 186.751 1063.25 144.8 1011.5 144.8C959.751 144.8 917.8 186.751 917.8 238.5Z" fill="white" />
                            <path opacity="1" d="M179 280.5C179 359.201 115.201 423 36.5 423C-42.2006 423 -106 359.201 -106 280.5C-106 201.799 -42.2006 138 36.5 138C115.201 138 179 201.799 179 280.5ZM-57.1995 280.5C-57.1995 332.249 -15.2488 374.2 36.5 374.2C88.2488 374.2 130.2 332.249 130.2 280.5C130.2 228.751 88.2488 186.8 36.5 186.8C-15.2488 186.8 -57.1995 228.751 -57.1995 280.5Z" fill="white" />
                        </g>
                    </svg>
                </div> */}

                <div className="carousel w-full max-h-96">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="w-full h-auto" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" className="w-full h-auto" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" className="w-full h-auto" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" className="w-full h-auto" />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img src="https://images.unsplash.com/photo-1598515213692-5f252f75d785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc3QlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-full h-auto" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    <a href="#item5" className="btn btn-xs">5</a>
                </div>

            </div>
        </NavbarTemplate>
    )
}

export default Dashboard;






// import React, { useState } from "react";
// import { render } from "react-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import About from "./components/About";
// import Home from "./components/Home";
// import Topics from "./components/Topics";

// const BasicExample = () => {
//     const [links, setLinks] = useState([
//         { text: "Home", to: "/", active: false },
//         { text: "About", to: "/about", active: false },
//         { text: "Topics", to: "/topics", active: false }
//     ]);

//     const handleClick = (clickedLink) => {
//         setLinks(links.map((link) => ({ ...link, active: clickedLink === link })));
//     };

//     return (
//         <Router>
//             <style>
//                 {"\
//         .nav-active{\
//           color:red;\
//         }\
//       "}
//             </style>
//             <div>
//                 <ul>
//                     {links.map((link, index) => (
//                         <li key={index}>
//                             <Link
//                                 onClick={() => handleClick(link)}
//                                 className={link.active ? "nav-active" : ""}
//                                 to={link.to}
//                             >
//                                 {link.text}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>

//                 <hr />

//                 <Route exact path="/" component={Home} />
//                 <Route path="/about" component={About} />
//                 <Route path="/topics" component={Topics} />
//             </div>
//         </Router>
//     );
// };

// render(<BasicExample />, document.getElementById("root"));
