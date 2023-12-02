import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='Facebook.com'>
              <i className='fa fa-github'></i>
              </a>
              <a href="google.com">
              <i className='fa fa-google'></i>
              </a>
              <a href="instagram.com">
              <i className='fa fa-instagram'></i>
              </a>
              
            </div>
          </div>
          <div className='details-name'>
            <span className='primary-text'>
            {" "}
            Hi, i am <span className='highlighted-text'>Sanusi Lamido</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {""}
              <h1>
                {" "}
                <Typical
                loop={Infinity}
                steps={[
                  "Web Dev👨🏽‍🦱" ,
                  1000,
                  "Front-End 🖥️" ,
                  1000,
                  "HTML 📁" ,
                  1000,
                  "CSS 🎨" ,
                  1000,
                  "React ⚛" ,
                  1000,
                ]}
                />

              </h1>
              <span className='profile-role-tagline'>
                  A knack for web development!...
              </span>
              </span>
          </div>
                <div className='profile-options'>
                  <button className="btn primary-btn">
                    {""}
                    Hire me

                  </button>
                  <a href='RESUME.pdf' download={'Sanusi-Resume.pdf'}>
                  <button className="btn highlighted-btn">
                    {""}
                    Get Resume

                  </button>

                  </a>
                </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>

        </div>
      </div>
    </div>
  )
}
