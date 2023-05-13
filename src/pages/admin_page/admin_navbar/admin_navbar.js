import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function AdminNavbar({ changeTheme, currentTheme }) {
    const [navState, setNavState] = useState(false);
    const html = document.querySelector("html");
    html.addEventListener("click", () => setNavState(false));
    return (
        <nav>
            <div className="container py-3 mx-0">
                <div className="brand">
                    <span>Ero Prints!</span>
                    <span className="dot">.</span>
                </div>
                <div className="links-container" onClick={(e) => e.stopPropagation()}>
                    <div className="toggle">
                        {navState ? (
                            <MdClose onClick={() => setNavState(false)} />
                        ) : (
                            <GiHamburgerMenu
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setNavState(true);
                                }}
                            />
                        )}
                        <div onClick={changeTheme}>
                            {currentTheme === "dark" ? (
                                <ImSun className="sun" />
                            ) : (
                                <BsFillMoonFill className="moon" />
                            )}
                        </div>
                    </div>
                    <div className={`links ${navState ? "responsive-toggle" : ""}`}>
                        <ul>
                            <li>
                                <Link to="/addproducts">Add products</Link>
                            </li>
                            <li>
                                <Link to="/viewproducts">View Products</Link>
                            </li>
                            <li>
                                <Link to="/orderdetails ">Order details</Link>
                            </li>
                            <li>
                                <Link to="/mycart">List users</Link>
                            </li>
                            <li>
                                <Link to="/adminlogin">Sign Out</Link>
                            </li>
                            {/* <li>
                <Link to="/">Help</Link>
              </li> */}
                            <li onClick={changeTheme} className="color-mode">
                                {currentTheme === "dark" ? (
                                    <ImSun className="sun" />
                                ) : (
                                    <BsFillMoonFill className="moon" />
                                )}
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;
