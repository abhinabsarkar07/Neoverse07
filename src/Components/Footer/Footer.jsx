import React from 'react'

//importing css file for the footer
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="footer_main">
        <div className="footerHead">
          <h2>
            WELCOME TO NEOVERSE ! LETS CONNECT AND WORK TOGETHERE.
          </h2>

          <p>"Crafting code, capturing moments, and sharing stories – a digital artisan by blood"</p>
        </div>
        <div className="socialMediaIcons">
          <div className="SocialIcons1">
            <img src="https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579602-yumminkysocialmedia36_83067.png" alt="" srcset="" />
          </div>
          <div className="SocialIcons2">
            <img src="https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png" alt="" srcset="" />
          </div>
          <div className="SocialIcons3">
            <img src="https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png" alt="" srcset="" />
          </div>
          <div className="SocialIcons4">
            <img src="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png" alt="" srcset="" />
          </div>
          <div className="SocialIcons5">
            <img src="https://cdn.icon-icons.com/icons2/730/PNG/512/github_icon-icons.com_62793.png" alt="" srcset="" />
          </div>
          <div className="SocialIcons6">
            <img src="https://cdn.icon-icons.com/icons2/1558/PNG/512/353420-behance-logo_107508.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer