// import React from 'react';
const React = require('react');

function Ijemma(props) {
  return (
    <div>
        <div class="header-container">
          <nav>
            <ul>
              <li><a href="#home">Home</a> / </li>
              <li><a href="#about">About</a> / </li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </nav>
        </div>
        <div class="main-container" id="home">
          <div class="intro-container">
            <div>
              <h1>Ijemma</h1><br />
              <h1>Onwuzulike</h1>
              <div class="contact-container">
                <img class="contact-icon" src="./assets/github.svg" />
                <span>
                  <a target="_blank" href="https://github.com/ijemmao">@ijemmao</a>
                </span>
                <img class="contact-icon" src="./assets/tumblr.svg" />
                <span>
                  <a target="_blank" href="https://thesubject0835.tumblr.com">@thesubject0835</a>
                </span>
              </div>
            </div>
            <div class="identify-container">
              <ul>
                <li>Developer / </li>
                <li>Artist / </li>
                <li>Gamer</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="main-container" id="about">
          <div class="info-container" id="about-info">
            <div>
              <h1>About Me</h1>
            </div>
            <div class="personal-container">
              <div class="profile-image-container">
                <img class="profile-image" src="./assets/ebay_smug.png" />
              </div>
              <div class="personal-text-container">
                <p>Hey! I'm Ijemma Onwuzulike, a junior at <br />Dartmouth College.</p>
                <p>Currently, I'm studying Computer Science and Japanese because I find these fields to be challenging but super fascinating.</p>
                <p>I love working in teams and discovering new tools and technologies. Once I learn something new, I always want to test my limits.</p>
                <p>For my free time, I'm either watching some anime<br />or listening to some quality albums.<br />If I don't feel like doing that, you'll find <br />me grabbing meals with friends.</p>
                <p>Feel free to look around the site, and even contact me!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="main-container" id="projects">
          <div class="info-container">
            <div>
              <h1>Projects</h1>
            </div>
            <div class="projects-container">
              <div class="project">
                <div class="project-image" style="background-image: url('./assets/ebay.png'); background-size: contain; background-repeat: no-repeat; background-position: center"></div>
                <h3>Front-End Developer</h3>
                <p class="project-description">At <a href="https://ebay.com/">eBay</a>, I had the opportunity to flex my front-end development skills by making a user-friendly widget that makes it easier for sellers to find promotions on the site.</p>
              </div>
              <div class="project">
                <div class="project-image" style="background-image: url('./assets/pulse.png'); background-size: contain; background-repeat: no-repeat; background-position: center;"></div>
                <h3>Full Stack Developer</h3>
                <p class="project-description"><a href="https://dartmouthpulse.com/">Pulse</a> is all about taking surveys on college campuses. On this team, I've worked on many tasks concerning both the front and backend.</p>
              </div>
              <div class="project">
                <img class="project-image" src="./assets/orange.jpg" />
                <h3>Game Developer</h3>
                <p class="project-description">Over the break, a couple of my friends and I decided to make a game using Unity. Being my first time making a <a href="#">desktop game</a>, I had the opportunity to learn about game design, mechanics, and more through C#.</p>
              </div>
              <div class="project">
                <img class="project-image" src="./assets/blue.jpg" />
                <h3>iOS Developer</h3>
                <p class="project-description">I was a mentor at my campus job, <a href="https://dali.dartmouth.edu/">DALI Lab</a>, and I wanted to make a <a href="https://github.com/ijemmao/FocoUnlocked">small application</a> to help guide my mentees through the mobile development process.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}
