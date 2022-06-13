import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from '@mui/icons-material/Telegram';
import "./Footer.css";

export default function Footer() {
	return (
		<>
			<div className="no">
				<div className="container-fluid yes pt-3 ">
					<div className="row pa">
						<div className="col-lg-3 col-xl-3 col-6-md col-sm-12 col-xs-12 footer ">
							<h2>Company</h2>
							<ul>
								<li>
									<a href="#">About us</a>
								</li>
								<li>
									<a href="#">Our Services</a>
								</li>
								<li>
									<a href="#">Privancy Policy</a>
								</li>
								<li>
									<a href="#">Affiliate program</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 col-xl-3 col-6-md col-sm-12 col-xs-12 footer ">
							<h2>Get help</h2>
							<ul>
								<li>
									<a href="#">FAQ</a>
								</li>
								<li>
									<a href="#">Shipping</a>
								</li>
								<li>
									<a href="#">returns</a>
								</li>
								<li>
									<a href="#">Order Status</a>
								</li>
								<li>
									<a href="#">Payment Options</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 col-xl-3 col-6-md col-sm-12 col-xs-12 footer ">
							<h2>Online shopping</h2>
                            <ul>
							<li>
								<a href="#">Watch</a>
							</li>
							<li>
								<a href="#">bag </a>
							</li>
							<li>
								<a href="#">Shoes</a>
							</li>
							<li>
								<a href="#">Dress</a>
							</li>
                            </ul>
						</div>
						<div className="col-lg-4 col-xl-3 col-6-md col-sm-12 col-xs-12 footer ">
							<h2>Follow Us</h2>
                            <div className="icon">
							<FacebookIcon className="yee" />
							<TwitterIcon className="yee" />
							<InstagramIcon className="yee" />
							<LinkedInIcon className="yee" />
                            <TelegramIcon className="yee"/>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
