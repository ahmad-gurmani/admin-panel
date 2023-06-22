import { useEffect } from "react";
import NavbarTemplate from "../sidebar-template/sidebar-template.component";
// import { ReactComponent as IconMenu } from '../../assets/MaskGroup.svg'

const Dashboard = () => {


    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <NavbarTemplate>
            <div className="w-screen bg-gray-200 h-screen shadow-sm round">
                {/* <h1>Dashboard-cntent</h1> */}
                {/* <IconMenu /> */}

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
