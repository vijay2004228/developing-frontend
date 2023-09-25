import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

const Footer = () => {

    const textstyle={
        textDecoration:'none'
    }
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>College Info</Heading>
			<FooterLink ><Link to='/aboutus'>About Us</Link></FooterLink>
			<FooterLink ><Link to='/contactus'>ContactUs</Link></FooterLink>
			
		</Column>
		
		<Column>
			<Heading>FAQ</Heading>
			
            <Link to="https://www.myklassroom.com/blog/" className={textstyle}><LiveHelpIcon/>Any Questions?</Link>
			
		</Column>
		<Column>
			<Heading>Resources</Heading>
			<FooterLink >skct@gmail.com</FooterLink>
			<FooterLink >Kovai Pudur</FooterLink>
			<FooterLink >Coimbatore</FooterLink>
			<FooterLink >638301</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink >
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
                <Link to="https://www.facebook.com/login.php" className={textstyle}><FacebookIcon/>Facebook</Link>
				
				</span>
			</i>
			</FooterLink>
			<FooterLink >
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px"  }}>
				<Link to="https://www.instagram.com/atman_ricky/?next=%2F" className={textstyle}><InstagramIcon/>Instagram</Link>
				</span>
			</i>
			</FooterLink>
			<FooterLink >
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
                <Link to="https://twitter.com/i/flow/login" className={textstyle}><TwitterIcon/>Twitter</Link>
				
				</span>
			</i>
			</FooterLink>
			<FooterLink >
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
                <Link to="https://www.youtube.com/?gl=IN" className={textstyle}><YouTubeIcon/>Youtube</Link>

				
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;