import React from "react";
import '../index.css';
import image from "../pictures/1.png";
/*import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GithubIcon from '@mui/icons-material/GitHub';*/


function Main(){
    return(
        <div className="main--card">
            <img className="image" src={image} alt="kwame_pic"/>
            <h2 className="name">Kwame Trancoso</h2>
            <h4 className="occupation">Aspiring Full Stack Developer</h4>
            <a className="link" href="https://robochef.site">robochef.site</a>
            <br></br>
            <div className="btn--container">
                <button className="btn1"><i class="fa-regular fa-envelope"> Email</i></button>
                <button className="btn2"><i class="fa-brands fa-linkedin"> LinkedIn</i></button>
            </div>
            <div className="abt--container">
            <h2 className="about">About</h2>
            <p className="p1"> I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn</p>
            <h2 className="interests">Inerests</h2>
            <p className="p2">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
                <footer className="card--foot">
                    <div className="social--icons">
                        <a href="https://twitter.com/"><i class="fa-brands fa-twitter-square fa-xl"></i></a>
                        <a href="https://instagram.com/one800kwame"><i class="fa-brands fa-instagram-square fa-xl"></i></a>                        
                        <a href="https://facebook.com/one800kwame"><i class="fa-brands fa-facebook-square fa-xl"></i></a>
                        <a href="https://github.com/kwamet"><i class="fa-brands fa-github-square fa-xl"></i></a>
                    </div> 
                </footer>
        </div>
    );
}

export default Main;