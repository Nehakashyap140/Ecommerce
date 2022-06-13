import React from "react";
// import second from "./img/second.png";
import "./Eheader.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Nav from 'react-bootstrap/Nav';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import second from "./img/second.png";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export default function Eheader() {
	return (
		<>
			<div className="container">
					<div className=" col-lg-6 col-xl md-12 sm-12 xs-12  center header1">
						<img src= {second} width= "150px"/>
						

					</div>
					
					


					

				</div>
			
		</>
	);
}
