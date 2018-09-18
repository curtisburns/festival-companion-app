# General Assembly WDI Project 3: Festinate (Group Project)

<p align="center">
  <img height=736 alt="Welcome/Login" src="./screenshots/login.png">
</p>

[Visit the Easel app on Heroku](https://festinate.herokuapp.com/)

[View the Easel app on GitHub](https://github.com/curtisburns/festival-companion-app)


## Brief
Your instructors will partner you with other classmates to design and collaboratively build a MEAN stack app of your own design.

Your app must:
* Use Mongo, Node & Express to build a server-side API
* Your API must have at least 2 related models, one of which should be a user
* Your API should include all RESTFUL actions for at least one of those models
* Include authentication to restrict access to appropriate users
* Include at least one referenced or embedded sub-document, however don't go crazy! You need to manage your time effectively...
* Include automated tests for at least one resource
* Use Angular to build a front-end that consumes your API
* Use SCSS instead of CSS
* Use Webpack & Yarn to manage your dependencies and compile your source code


## App Description
Festinate is a festival companion app, designed for mobile first. The purpose of the app is for festival organisers to be able to add the event to the feed so that users can confirm their attendance and arrange car shares, while also being informed of the weather for upcoming events. This is achieved through the use of a passenger and attendee system and external APIs such as MapQuest and Dark Sky.


## Technologies Used
* HTML5
* SCSS
* JavaScript(ECMAScript 6)
* Node.js
* angular: v1.7.3
* @uirouter/angularjs: v1.0.20
* bulma: v0.7.1
* moment: v2.22.2
* satellizer: v0.15.5
* MongoDB
* bcrypt: v3.0.0
* bluebird: v3.5.1
* body-parser: v1.18.3
* express: v4.16.3
* jsonwebtoken: v8.3.0
* mongoose: v5.2.8
* morgan: v1.9.0
* request-promise: v4.2.2
* chai: v4.1.2
* mocha: v5.2.0
* nyc: v12.0.2
* supertest: v3.1.0
* Git
* GitHub
* Heroku
* Trello
* Sketch
* Marvel
* Google Fonts
* Fontawesome

## APIs Used
* Dark Sky
* Filestack
* Mapquest
* Nominatim


## Approach Taken

### Wireframes
We began wireframing on Sketch, using a Sketch template as a guide. We then moved to [Marvel](https://marvelapp.com/428e1e4/screen/46835471) to link the pages up.

#### Login
<p align="center">
  <img height=736 alt="Login" src="./wireframes/login.png">
</p>



#### Festivals Index
<p align="center">
  <img height=736 alt="Festivals Index Wireframe" src="./wireframes/festivals-index.png">
</p>

#### Festivals Show
<p align="center">
  <img height=636 alt="Festivals Show Wireframe" src="./wireframes/festival-show.png">
</p>

##### Car Shares Index
<p align="center">
  <img height=736 alt="Car Shares Index Wireframe" src="./wireframes/car-shares-index.png">
</p>

##### Profile Page
<p align="center">
  <img height=736 alt="Profile Page Wireframe" src="./wireframes/profile-page.png">
</p>


### Functionality
We started out by building and testing the back end, before building the front end and styling. Everyone in the group worked on a part of each section.

We started out by getting the basic RESTful routes working (users, festivals, and car shares) before moving onto extras such as friend and passenger requests, which took longer.

APIs came a little later, which, apart from Filestack, were handled by me. We did have a list of other APIs we wanted to include, which are potential future features.


### Styling
We chose a neutral black and dark purple for our colour scheme. We used three Google fonts: Oxygen for all the text apart from the app name on the login page, for which we used Orbitron and Shrikhand.

Since most people would use this app on mobile, perhaps even whilst at a festival, we designed for mobile first. So we used Bulma to take advantage of its cross-device capabilities. At the time of delivery, Festinate was optimised for iPhone 8 (and other phones of similar screen sizes,) and was not styled so well for larger or smaller screens. However, this is something to change in the future.


### Finished Product



#### Welcome/Login
<p align="center">
  <img height=636 alt="Welcome/Login" src="./screenshots/login.png">
</p>

#### Festival Index
<p align="center">
  <img height=636 alt="Festivals Index" src="./screenshots/festivals-index.png">
</p>

#### Festival Show
<p align="center">
  <img height=636 alt="Festival Show" src="./screenshots/festivals-show.png">
</p>

<p align="center">
  <img height=636 alt="Festival Show" src="./screenshots/festivals-show2.png">
</p>

#### Car Share Index
<p align="center">
  <img height=636 alt="Car Shares Index" src="./screenshots/car-shares-index.png">
</p>

#### User Index
<p align="center">
  <img height=636 alt="User Index" src="./screenshots/find-friends.png">
</p>


#### Profile Page
<p align="center">
  <img height=636 alt="Profile Page" src="./screenshots/profile-page.png">
</p>

## Wins and Blockers
As a team, I would say the styling was a huge win. We were really pleased with the design, both of small components, and the bigger picture. Our biggest blocker was probably getting friend requests, passenger requests, and attendees working on both the front end and the back end. I think it would have been good to start these more difficult elements earlier than we did.

In terms of the elements I built, the biggest win was working with the APIs, in particular MapQuest, which I had never used prior to starting this project. It was harder to get to grips with than Leaflet, which I had used before. But we loved MapQuest's tiles and markers so I persisted. I looked at getting a road map on the car share show page with MapQuest's direction endpoint, instead of the straight line. I could see how I could do it in a rough way, but it didn't come together, so this is something I would like to add as a future feature.

My biggest blocker was probably testing. The main difficulty was when tests broke, it was hard to know whether that was because the code was wrong, or because the tests weren't written properly.


## Future Features
Among the APIs we would like to add in the future are Twilio to send SMS messages about car shares, and TfL and Transport API to incorporate public transport timetables and service updates. The latter especially is something I would like to focus on next.

We would also like to allow the festival organisers to place points on the site map to show where the stage, toilets, entrances and exits etc were. Then the user could mark the location of their tent, and navigate around the festival site easier.
