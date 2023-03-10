import React from "react"
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileCopyIcon from '@mui/icons-material/FileCopy';

export default function Project() {
  return (
    <div className="project">
      <div className="card m-3 border-0">
        <div className="card-header border-0 card3"><h1>My Projects</h1></div>

        <div className="row row-cols-1 row-cols-md-3 g-4 m-3">

          <div className="col">
            <div className="card h-100">
              <img src="https://media.licdn.com/dms/image/C4E12AQEUHzAA8FUlww/article-cover_image-shrink_720_1280/0/1559559507056?e=2147483647&v=beta&t=Fim8_VTGNloDHKa40f6xK9nVwf8-S3gdaJdH9G89Pis"
              className="card-img-top" alt="Tic-Tac-Toe"></img>
              <div className="card-body">
                <h5 className="card-title head">Tic-Tac-Toe</h5>
                <p className="card-text cont">Technologies used: HTML CSS Javascript ReactJS </p>
                <p className="card-text cont">Tic-Tac-Toe is a game in which two players take turns in drawing either an ` O' or an ` X' in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row. ...a game of Tic-Tac-Toe.</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="https://radiant-sopapillas-ca371d.netlify.app" target="_blank"
                    className="text-muted"><IconButton>
                      <FileCopyIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://github.com/Bhanuprakashvasa/Tic-Tac-Toe.git" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/ba/52/b5/ba52b565-c3dc-98f8-7b24-1d9dadb40bba/AppIcon-1x_U007emarketing-0-6-0-85-220.png/1200x600wa.png"
                className="card-img-top" alt="shopping -app"></img>
              <div className="card-body">
                <h5 className="card-title head">Calculator</h5>
                <p className="card-text cont">Technologies used: HTML CSS Javascript</p>
                <p className="card-text cont">A Calculator is a device that performs arithmetic operations on numbers like  addition, subtraction, multiplication and division .</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="https://keen-pavlova-c43898.netlify.app/" target="_blank"
                    className="text-muted"><IconButton>
                      <FileCopyIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://github.com/Bhanuprakashvasa/Calculator.git" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://cdn.dribbble.com/users/14997/screenshots/15481555/media/1eae209581a2b725d04dc8146a73c935.png?compress=1&resize=400x300"
                className="card-img-top" alt="chat-app"></img>
              <div className="card-body">
                <h5 className="card-title head">Note App</h5>
                <p className="card-text cont">Technologies used: HTML CSS ReactJS</p>
                <p className="card-text cont">
                Use the Notes app to quickly capture your thoughts. Notes apps allow  to save all the notes and essentials digital information.</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="https://fluffy-blini-5a2fab.netlify.app/" target="_blank"
                    className="text-muted"><IconButton>
                      <FileCopyIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://github.com/Bhanuprakashvasa/Note-app.git" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col">
            <div className="card h-100">
              <img src="https://cdn.neow.in/news/images/uploaded/2018/09/1537418720_keep_notes.jpg"
                className="card-img-top" alt="keep-note"></img>
              <div className="card-body">
                <h5 className="card-title head">Keep-Note</h5>
                <p className="card-text cont">Technologies used: HTML CSS React js</p>
                <p className="card-text cont">In keep-note app you can note down the content and also you can delete it.</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="https://monumental-griffin-858257.netlify.app/" target="_blank"
                    className="text-muted"><IconButton>
                      <FileCopyIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://github.com/shushnikz/keep-note" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://www.androidauthority.com/wp-content/uploads/2020/04/Glassdoor-screenshot-2020.jpg"
                className="card-img-top" alt="movie-app"></img>
              <div className="card-body">
                <h5 className="card-title head">Find-job-App</h5>
                <p className="card-text cont">Technologies used: CSS React js node js express MongoDB</p>
                <p className="card-text cont">In the Job App you can create your profile,
                  edit the profile, being a user you can create a job,
                  you can post job and in the posted jobs we can see applied jobs and so many application available</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/shushnikz/job-app-backend" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://beautiful-clafoutis-5cab2f.netlify.app/" target="_blank"
                    className="text-muted"><IconButton>
                      <FileCopyIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://github.com/shushnikz/job-app-frontend" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png"
                className="card-img-top" alt="cat-app"></img>
              <div className="card-body">
                <h5 className="card-title head">Todo App</h5>
                <p className="card-text cont">Technologies used: HTML CSS React js, node js, express MongoDB</p>
                <p className="card-text cont">In this app we can make the list of task we want to do</p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <a href="https://github.com/shushnikz/backend-todo" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://hilarious-bunny-7486ee.netlify.app/" target="_blank"
                    className="text-muted"><IconButton>
                      <FileCopyIcon style={{ color: "grey" }} />
                    </IconButton></a>
                  <a href="https://github.com/shushnikz/job-app-frontend" target="_blank"
                    className="text-muted"><IconButton>
                      <GitHubIcon style={{ color: "grey" }} />
                    </IconButton></a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}