import React from 'react';

const SecretPage = ({}) => {
  return (
    <>
      {/* <!-- Heading --> */}
      <div id="heading">
        <h1>Secret Page</h1>
      </div>

      {/* <!-- Main --> */}
      <section id="main" className="wrapper">
        <div className="inner">
          <header>
            <h2>Jong's Space</h2>
          </header>
          <hr />
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-6">
              <a href="#" className="btn btn-sm animated-button victoria-one">
                Sign up
              </a>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6">
              <a href="#" className="btn btn-sm animated-button victoria-two">
                Login
              </a>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6">
              <a href="#" className="btn btn-sm animated-button victoria-three">
                Register
              </a>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6">
              <a href="#" className="btn btn-sm animated-button victoria-four">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecretPage;
