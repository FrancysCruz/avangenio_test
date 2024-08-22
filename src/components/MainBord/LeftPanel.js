import React from "react";
import "../../App.css"

import { Link } from "react-router-dom";

const LeftPanel= () => {

    return (
        <div className="left-panel panel">
            <div className="card1__container ">
                <p className="card-text">start <span className="streaming">streaming</span> games differently</p>
                <div class="background-drawings">
                    <div className="circle"></div>
                    <div className="square"></div>
                </div>
            </div>
            <p className="small-phrase">gamor now has <span className="party underline">stream party</span> platform</p>
            <div class="cta-buttons">
                {/* <button class="create-account">Create account</button> */}
                {/* <button class="singin__btn">Sign in</button> */}

                <Link class="create-account" to="/login">Create account</Link>
                <Link to="/singin" class="nav-sign">Sign in</Link>

            </div>
        </div>
       

    );
}

export default LeftPanel;