import React from "react"
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import profile from "./profile.img"

export default function Intro() {
    return (
        <div className="home">
            <div className="card bg-light text-light m-3 border-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={profile}
                            className="img-fluid rounded-circle image " alt="Profile"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body bg-light text-light content">
                            <h1 className="card-title">I am Bhanuprakash Vasa</h1>
                            <p className="card-text">Full Stack Developer</p>
                            <p className="card-text">I am looking forward for an environment where my knowledge can be shared and enriched for the achievement of organizational roles . Looking for a
                            challenging oppertunity where I can utilize my skills for the organizational development</p>

                            
                            <div className="icon">
                                <a className="link" href="linkedin.com/in/bhanu-prakash-73a2651a1"
                                    target="_blank" rel="noreferrer">
                                    <IconButton>
                                        <LinkedInIcon color="primary" />
                                    </IconButton></a>
                                <a className="link" href="https://github.com/Bhanuprakashvasa"
                                    target="_blank" rel="noreferrer">
                                    <IconButton>
                                        <GitHubIcon style={{ color: "grey" }} />
                                    </IconButton></a>
                                <a className="link" href="mailto: bhanuprakashvasa@gmail.com"
                                    target="_blank" rel="noreferrer">
                                    <IconButton>
                                        <EmailIcon color="error" />
                                    </IconButton></a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
