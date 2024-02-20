// Footer component for footer section
const Footer = () => {
  const currentYear=new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/in/amrit-mishra-1b8bb518a/" target="_blank">
          Amrit Mishra  
        </a>
        {currentYear}
      </div>
    );
  };
  
  export default Footer;