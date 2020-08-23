import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
          Forked From 
          <a href="https://github.com/jcoelho93/personal-website" className="has-text-white">
            
           <strong>José Coelho</strong>
           {/* <i className="fas fa-moon"></i>  */}
          </a>
        </p>
        {/* <p>
          <img
            width="512"
            height="96"
            src="https://bulma.io/images/made-with-bulma--semiwhite.png"
            className="bulma-image"
            alt=""
          />
        </p> */}
      </div>
    </footer>
  );
}

export default Footer;
