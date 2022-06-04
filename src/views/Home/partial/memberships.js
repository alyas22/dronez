import React from 'react';
import Drone from '../../../Assets/images/home/real-drone.png';
export default function Memberships() {
  return (
    <>
      <div className="memberships">
        <div className="d-flex justify-content-center container h-50 ">
          <div className="row d-flex justify-content-center">
            <div className="drone d-flex justify-content-center ">
              <img src={Drone} alt="" />
            </div>
            <div className="position-relative memberships-container d-flex justify-content-center">
              <div className="row mt-10 d-flex justify-content-center">
                <h1 className="title d-flex justify-content-center">العضويات</h1>
                <p className=" description text-center mt-4">الاشتراك بعضوية الاتحاد للحصول على مزايا عديدة منها، خصومات على مشتريات الدرونز</p>
                <button type="button" className="btn btn-primary mt-4 mx-0  p-2 px-3 ">
                  اشترك الان
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
