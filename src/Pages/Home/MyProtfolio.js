import React from "react";
import { Link } from "react-router-dom";

const MyProtfolio = () => {
  return (
    <div className='bg-base-100 pb-10'>
      <div className='lg:container  ml-5 mx-auto h-full '>
        <div className='w-6/12 mx-auto border-2 p-5 shadow-lg rounded-lg'>
          <h1 className='text-5xl text-primary text-center  '>My ProtFolio</h1>
          <div className='divider'></div>
          <div className='mb-3'>
            <p className='font-semibold'>Full Name </p>
            <p>Md. Abdur Razzak</p>
          </div>
          <div className='mb-3'>
            <p className='font-semibold'>Email : </p>
            <a href='mailto:hhera1413@gmail.com'>hhera1413@gmail.com</a>
          </div>
          <div className='mb-3'>
            <p className='font-semibold'>Education level/Degree : </p>
            <p className='uppercase'>B.B.A. 'Masters' IN ACCOUNTING (Runnig)</p>
          </div>
          <div className='mb-3'>
            <p className='font-semibold'>Institution Name :</p>
            <p className='upprecase'>GOVT. SAADAT COLLEGE</p>{" "}
          </div>
          <div className='mb-3 '>
            <p className='font-semibold'>list Of Tecnology</p>
            <div className='flex mb-3  w-10/12 justify-around py-5'>
              <div>
                <p>Core Tecnology</p>
                <div className=' divider'></div>
                <ul className='mt-[-15px]'>
                  <li>01. html</li>
                  <li>02. css</li>
                  <li>03. Basic JavaScript</li>
                </ul>
              </div>
              <div className='mb-3'>
                <p>FrameWork/liabary</p>
                <div className=' divider'></div>
                <ul className='mt-[-15px]'>
                  <li>01. Bootstrap (css framwork)</li>
                  <li>02. Tailwind (Css liabary)</li>
                  <li>03. Daisy Ui (Tailwind componetn liabary)</li>
                  <li>04. Basic React (Javascritp liabary)</li>
                  <li>05. FireBase (Google authtincation)</li>
                  <li>06. React firebase hooks (authtincation)</li>
                  <li>07. React Router</li>
                  <li>08. Basic Expess Js (node js liabary)</li>
                  <li>09. Basic MondoDb ( intergate nodejs)</li>
                  <li>10. Json Web token ( for backend )</li>
                  <li>11. Stripe (payment method)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mb-3'>
            <h2 className='text-xl mb-2 text-center font-semibold text-primary'>
              My Three Project
            </h2>
            <div class='overflow-x-auto'>
              <table class='table w-full'>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>WereHouse demo :</td>
                    <td>
                      <a
                        href='https://werehouse-11.web.app/'
                        target='_blank'
                        rel='noreferrer'
                        className='text-primary text-lg font-semibold '
                      >
                        #Live-Site
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Service Porvider</td>
                    <td>
                      <a
                        href='https://independent-service-prov-34e04.web.app/'
                        target='_blank'
                        rel='noreferrer'
                        className='text-primary text-lg font-semibold '
                      >
                        #Live-Site
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Product Analysis</td>
                    <td>
                      <a
                        href='https://playstation-5-abdurrazzak.netlify.app/'
                        target='_blank'
                        rel='noreferrer'
                        className='text-primary text-lg font-semibold '
                      >
                        #Live-Site
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProtfolio;
