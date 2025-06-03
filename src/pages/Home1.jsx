import React from "react";
import "../sass/_home1.scss";

/* ===== Header component ===== */

import Header from "../components/Header";
import Footer from "../components/Footer";

const Home1 = () => {
    return (
        <div>
            {/* ===== Banner ===== */}
            <div className="custom-banner d-flex justify-content-evenly align-items-center py-2">
                <h4 className="banner__message">
                    FREE delivery & 40% Discount for next 3 orders! Place your
                    1st order in.
                </h4>
                <h4 className="banner__timing">
                    Until the end of the sale: <span>47</span>days
                    <span>06</span>hours<span>55</span>minutes<span>51</span>
                    sec.
                </h4>
            </div>

            {/* ===== Topbar ===== */}

            <div className="custom-topbar d-flex justify-content-between align-items-center py-2">
                <div className="topbar__left d-flex justify-content-between align-items-center">
                    <a href="#">about us</a>
                    <a href="#">my account</a>
                    <a href="#">wishlist</a>
                    <p className="my-2">We deliver to you every day from <span>7:00 to 23:00</span></p>
                </div>
                <div className="topbar__right d-flex justify-content-between align-items-center">
                    <div className="dropdown">
                        <span>english</span>
                        <a href="#"><i className="fas fa-chevron-down"></i></a>
                    </div>
                    <div className="dropdown">
                        <span>USD</span>
                        <a href="#"><i className="fas fa-chevron-down"></i></a>
                    </div>
                    <a href="#">order tracking</a>
                </div>
            </div>
        </div>
    );
};

export default Home1;
