import React from 'react';
import Dronez from '../../../Assets/images/home/drone.png';
import Calendar from '../../../Assets/icons/calendar.svg';
import Star from '../../../Assets/icons/star.svg';
import Card from '../../../Assets/icons/card.svg';
import droneIcon from '../../../Assets/icons/droneIcon.svg';
import suitcase from '../../../Assets/icons/suitcase.svg';
import wallet from '../../../Assets/icons/wallet.svg';
export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="d-flex container h-50 ">
          <div className="position-relative hero-container">
            <div className="row">
              <div className="col-12 col-xl-5 col-lg-6 m-0 text-right ">
                <h1>مرحبا بكم في بوابة الدرونز</h1>
                <p className="description mt-5">تقدم البوابة العديد من الخدمات الفريدة لكل المهتمين بطائرات الدرونز</p>
                <div className="row">
                  <div className="col-6">
                    <span className="d-flex my-4 ">
                      <img src={Calendar} alt="" />
                      <p className="service mx-3 my-0">الفعاليات</p>
                    </span>
                    <span className="d-flex my-4">
                      <img src={droneIcon} alt="" />
                      <p className="service mx-3 my-0">اندية الدرونز</p>
                    </span>
                    <span className="d-flex my-4 ">
                      <img src={Card} alt="" />
                      <p className="service mx-3 my-0">العضويات</p>
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="d-flex my-4">
                      <img src={suitcase} alt="" />
                      <p className="service mx-3 my-0">التدريب</p>
                    </span>
                    <span className="d-flex my-4">
                      <img src={wallet} alt="" />
                      <p className="service mx-3 my-0">المتاجر</p>
                    </span>
                    <span className="d-flex my-4">
                      <img src={Star} alt="" />
                      <p className="service mx-3 my-0">الشهادات الاحترافية</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-7 col-lg-6  mt-5 d-none d-lg-block">
                <img src={Dronez} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
