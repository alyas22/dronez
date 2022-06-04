import React from 'react';
import './style.scss';
import logoCenter from '../../Assets/images/master/logo-center.svg';
import instagram from '../../Assets/icons/social/instagram.svg';
import facebook from '../../Assets/icons/social/facebook.svg';
import youtube from '../../Assets/icons/social/youtube.svg';
import twitter from '../../Assets/icons/social/twitter.svg';
export default function Footer() {
  return (
    <>
      <footer className=" ">
        <div className="footer   p-5">
          <div className=" container">
            <div className="row">
              <div className="d-flex justify-content-center">
                <img src={logoCenter} alt="" />
              </div>
              <div className="row ">
                <div className="d-flex justify-content-center  mx-auto mt-4 gate">
                  <div className="gate-name px-5">بوابة الدرونز</div>
                </div>
                <div className="d-flex justify-content-center menu">
                  <a className="menu-link" href="/">
                    عن الدرونز
                  </a>
                  <a className="menu-link" href="/">
                    الفعاليات
                  </a>
                  <a className="menu-link" href="/">
                    المتاجر
                  </a>
                  <a className="menu-link" href="/">
                    أندية الدرونز
                  </a>
                  <a className="menu-link" href="/">
                    اتصل بنا
                  </a>
                </div>
              </div>

              <div className="row ">
                <div className="d-flex justify-content-center ">
                  <img src={instagram} alt="" className="mx-2" />
                  <img src={facebook} alt="" className="mx-2" />
                  <img src={youtube} alt="" className="mx-2" />
                  <img src={twitter} alt="" className="mx-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright py-4">
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-center copyright-menu ">
                <a className="copyright-menu-link" href="/">
                  شروط الاستخدام
                </a>
                <a className="copyright-menu-link" href="/">
                  سياسة الخصوصية
                </a>
              </div>
              <div className="d-flex justify-content-center copyright-text mt-4">
                جميع الحقوق محفوظة - الاتحاد السعودي للأمن السيبراني والبرمجة والدرونز © 2020
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
