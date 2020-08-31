import React from "react";
import { NavLink } from "react-router-dom";

const CommonDesign = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.description}
                    {/* <strong className="brand-name"> JKM</strong> */}
                  </h1>
                  <h2 className="my-3">{props.subtext}</h2>
                  <div className="mt-3">
                    <NavLink to={props.navpath} className="btn-get-started">
                      {props.linkText}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    style={{ borderRadius: "30px" }}
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonDesign;
