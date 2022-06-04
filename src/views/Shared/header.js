import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logo from '../../Assets/images/master/logo.svg';

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header container text-center mx-md-5 d-flex align-items-md-center mt-5 justify-content-end">
        <button type="button" className=" btn mobile-menu header__buttons me-0  h-2" onClick={handleClick} />
        <div className="col-10 col-md-3 col-lg-4 col-md-1 col-sm-8 text-center pr-0">
          <img className="logo__image" src={logo} alt="" />
        </div>
        <div className="col-2 col-md-9 col-lg-8 col-sm-2 order-md-0 order-first p-0">
          <div className="menu-container row align-items-center mx-auto">
            <div className={`${click ? 'active' : ''} header__nav nav-options`}>
              <a className="nav-link" data-href="section-hero" href="/">
                عن الدرونز
              </a>

              <a className="nav-link" href="/">
                الفعاليات
              </a>

              <a className="nav-link" href="/">
                المتاجر
              </a>

              <a className="nav-link" href="/">
                أندية الدرونز
              </a>
              <a className="nav-link" href="/">
                اتصل بنا
              </a>

              <Link to="" className="btn btn-primary mt-0 mx-0   me-md-auto p-2 px-3">
                تسجيل مستخدم
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
