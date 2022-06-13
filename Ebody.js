import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ebody.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import second from "./img/second.png";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HomeIcon from "@mui/icons-material/Home";
import GirlIcon from "@mui/icons-material/Girl";
import ToysIcon from "@mui/icons-material/Toys";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import StarIcon from "@mui/icons-material/Star";
export default function Ebody() {
	return (
				<>
			<div className="brand">
				<div className="product">
					<h1>
						New <span>Arrivals</span>
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Nam, earum!
					</p>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-xl-3 col-6-md col-sm-12 col-xs-12 body">
							<img src="https://rukminim1.flixcart.com/image/312/312/l0jwbrk0/mobile/a/p/r/-original-imagcb64gwkhzdk5.jpeg?q=70"className="img-fluid"/>
							<p>Realme 9 5G</p>
							<span className="icon1">
								<StarIcon/>
								<StarIcon/>
								<StarIcon/>
								<StarIcon/>
								<StarIcon/>
							</span>
							<div className="button">
							<button>Add to card</button>
							</div>
						</div>
						<div className="col-lg-3 col-xl-3 col-6-md col-sm-12 col-xs-12 body">
							<img src="https://rukminim1.flixcart.com/image/495/594/l3929ow0/backpack/c/o/f/4-laptop-backpack-spacy-unisex-backpack-fits-upto-16-inches-original-imagefy9kpqztyrz.jpeg?q=50"  className="img-fluid"/>
							<p>Laptop Bag</p>
							<span className="icon1">
								<StarIcon/>
								<StarIcon/>
								<StarIcon/>
								<StarIcon/>
								<StarIcon/>
							</span>
							<div className="button">
							<button>Add to card</button>
							</div>
						</div>
						<div className="col-lg-3 col-xl-3 col-6-md col-sm-12 col-xs-12 body">
							<img src="https://rukminim1.flixcart.com/image/495/594/l046he80/watch/a/z/w/1-men-s-steel-chain-rb02-silver-black-daniel-jubile-men-original-imagbyyhszy5rhh7.jpeg?q=50" className="img-fluid"/>
							<p>Analog Watch</p>
							<span className="icon1">
								<StarIcon/>
								<StarIcon/>
								<StarIcon/>
								<StarIcon/>
								<StarIcon/>
							</span>
							<div className="button">
							<button>Add to card</button>
							</div>
						</div>
						<div className="col-lg-3 col-xl-3 col-6-md col-sm-12 col-xs-12 body">
							<img src="https://rukminim1.flixcart.com/image/495/594/kmmcrrk0/shoe/i/d/0/8-bck7040-black-8-bucik-black-original-imagfhe5yw4hpzzm.jpeg?q=50  "   className="img-fluid" />
								<p>Running Sports Shoes</p>
								<span className="icon1">
								<StarIcon/>
								<StarIcon/>
								<StarIcon/>
								<StarIcon/>
								<StarIcon/>
							</span>
							<div className="button">
							<button>Add to card</button>
							</div>
						</div>

					</div>
					
					</div>
				</div>
			</>
	)


}
