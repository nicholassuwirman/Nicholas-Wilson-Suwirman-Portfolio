import './contact.css';

import ellipseLeft from '../../assets/ellipse left.png'
import ellipseRight from '../../assets/ellipse right.png'
import emailLogo from '../../assets/Email.png'
import igLogo from '../../assets/ri_instagram-fill.png'
import linkedinLogo from '../../assets/linkedin.png'
import githubLogo from '../../assets/github (2).png'

const LogoButton = ({image, link}) => {
  return (
    <a href={link} target='_blank' className='contact-logo-button'>
      <img className='contact-logo-image' src={image} />
    </a>
  )
}

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className='contact-card'>
        <div className='contact-card-main'>
          <p className='contact-title'>Let's Talk!</p>
          <p className='contact-description'>
            Although I'm not currently looking for any new opportunities
            as I'm still in my second semester of university,
            feel free to reach me via the buttons below to talk about anything!
          </p>
          <div className='contact-buttons'>
            <a href='https://mail.google.com/mail/u/0/#inbox' target='_blank' className='contact-email-button'>
              <img className='contact-email-logo' src={emailLogo}/>
              <p>wilsonsuwirmans@gmail.com</p>
            </a>
            <a href="https://www.instagram.com/n.wilsonnn/" target='_blank' className='contact-logo-button'>
              <img className='contact-logo-image' src={igLogo} />
            </a>
            <a href="https://www.linkedin.com/in/nicholas-wilson-suwirman-7593bb269/" target='_blank' className='contact-logo-button'>
              <img className='contact-logo-linkedin' src={linkedinLogo} />
            </a>
            <a href="https://github.com/nicholassuwirman" target='_blank' className='contact-logo-button'>
              <img className='contact-logo-github' src={githubLogo} />
            </a>
          </div>
          <img className='ellipse-left' src={ellipseLeft} />
          <img className='ellipse-right' src={ellipseRight} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
