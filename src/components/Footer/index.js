import { SocialIcon } from "react-social-icons";

function Footer() {
    return (
        <footer>
            <div className="socials">
                <div>
                    <SocialIcon
                        url="https://www.linkedin.com/in/payton-ray"
                        target="_blank"
                    />
                </div>
                <div>
                    <SocialIcon
                        url="https://github.com/PaytonRay"
                        target="_blank"
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;