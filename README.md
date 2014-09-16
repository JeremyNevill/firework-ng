firework-ng
===========

[firework-ng](https://github.com/JeremyNevill/firework-ng) is a micrologging web app with Microsoft Azure back end and part of the [Firework](https://github.com/JeremyNevill/firework) Open Source micrologging framework.

[firework-ng](https://github.com/JeremyNevill/firework-ng) enables you to record the things you have done, like a to-done list, from any device that can handle a modern AngularJs web interface.

Log items that you have added include such attributes as actor(who), action(what), amount, units, date and time.  Once you start adding items you can browse your timeline by attribute and answer questions such as 'how many miles have I ran this year?' or 'when did I last have a burrito?'


## What is Micrologging?

Micrologging is what we're calling..

'small log items that mean something, can be can be read by humans, and parsed by computers.'

We are integrating our micrologging syntax [shortee](https://github.com/JeremyNevill/shortee/blob/master/Shortee_specification.md) into firework.

The target is to allow adding of log items via json or shortee formats from any client.


## Getting Started
 
### Development Environment Setup

* Fork and clone the repo to your development machine/vm: ```git clone git@github.com:YourGithubAccount/firework-ng.git```
* Install the npm modules you require: ```npm install```
  * This may take a few minutes depending on the speed of your machine and internet connection
* Install bower: ```npm install -g bower```
  * Note the ```-g``` which installs bower globaly to enable use from the commandline and on other projects
* Update bower components: ```bower install```
* Install grunt cli: ```npm install -g grunt-cli```


### Run the Webserver 

```grunt serve``

Browse to [http://localhost:3000](http://localhost:3000) on a local dev machine


### Single Run of Unit Tests (using Jasmine and Phantomjs)

```grunt test```


### Watch For Changed Files and Test

```grunt watch```

 
## Build Status

[![Build Status](https://travis-ci.org/JeremyNevill/firework-ng.svg?branch=master)](https://travis-ci.org/JeremyNevill/firework-ng)


## Aims

Once [firework-ng](https://github.com/JeremyNevill/firework-ng) is progressing well we will move onto providing a first native mobile app, using the same Azure Mobile Services interface to allow native access to the [Firework](https://github.com/JeremyNevill/firework) framework.

## Deployment 

To setup firework-ng on a fresh Azure Website:

1) Create an Azure Website

2) Add remote git repo on your azure website (in this instance we are setting up an dev environment azure-dev)
```git remote add azure-dev https://yourusername@yoursite.scm.azurewebsites.net:443/yoursite.git```

3) Push your local repo to the remote website repo (e.g. azure-dev)
```git push azure-dev master```


## Get in Contact

Please get in contact via twitter [JeremyNevill](https://twitter.com/JeremyNevill) or email [jeremy@nevill.net](mailto:jeremy@nevill.net) 
