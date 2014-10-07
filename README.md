firework-ng
===========

[firework-ng](https://github.com/JeremyNevill/firework-ng) is a micrologging web app with Microsoft Azure back end and part of the [Firework](https://github.com/JeremyNevill/firework) Open Source micrologging framework.  Micrologging is what we're calling..  
'concise log items that mean something, can be can be read by humans, and parsed by computers.'

[firework-ng](https://github.com/JeremyNevill/firework-ng) enables you to record the things you have done, like a to-done list, from any device that can handle a modern AngularJs web interface.

Log items that you have added include such attributes as actor(who), action(what), amount, units, date and time.  Once you start adding items you can browse your timeline by attribute and answer questions such as 'how many miles have I ran this year?' or 'when did I last have a burrito?'


## Getting Started - Development
 
### Development Environment Setup

Fork and clone the repo to your development machine/vm: 

```git clone git@github.com:YourGithubAccount/firework-ng.git```

Install the npm modules you require: 

```npm install```

Install bower: 

```npm install -g bower```

Note the ```-g``` which installs bower globaly to enable use from the commandline and on other projects

Update bower components: 

```bower install```

Install grunt cli: 

```npm install -g grunt-cli```


### Single Run of Unit Tests (using Jasmine and Phantomjs)

```grunt test```


### Run the Webserver 

```grunt serve```

Browse to [http://localhost:3000](http://localhost:3000) on a local dev machine


### Watch For Changed Files and Test

```grunt watch```

 
## Project Build Status

[![Build Status](https://semaphoreapp.com/api/v1/projects/25e0104c-6e8f-461f-8310-ce1c6f26b641/249056/badge.png)](https://semaphoreapp.com/jeremynevill/firework-ng)


## Aims

Once [firework-ng](https://github.com/JeremyNevill/firework-ng) is progressing well we will move onto providing a first native mobile app, using the same Azure Mobile Services interface to allow native access to the [Firework](https://github.com/JeremyNevill/firework) framework.

## Deployment 

To setup firework-ng on a fresh Azure Website:

1) Create an Azure Website

2) Add remote git repo on your azure website (in this instance we are setting up an dev environment azure-dev)

```git remote add azure-dev https://yourusername@yoursite.scm.azurewebsites.net:443/yoursite.git```

3) Push your local repo to the remote website repo (e.g. azure-dev)

```git push azure-dev master```

4) Setup your azure mobile services backend - [to document]

## Get in Contact

Please get in contact via twitter [JeremyNevill](https://twitter.com/JeremyNevill) or email [jeremy@nevill.net](mailto:jeremy@nevill.net) 
