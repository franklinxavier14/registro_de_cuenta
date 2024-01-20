import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ facebook, github, linkedin }) => {
  const iconStyle = {
    marginRight: "15px",
    marginTop:  "15px",
  };

  return (
    <>
      {facebook && <FontAwesomeIcon icon={faFacebook} size="3x" style={iconStyle} />}
      {github && <FontAwesomeIcon icon={faGithub} size="3x" style={iconStyle} />}
      {linkedin && <FontAwesomeIcon icon={faLinkedin} size="3x" style={iconStyle} />}
    </>
  );
};

export default SocialButton;
