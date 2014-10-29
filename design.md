# firework-ng Design

Firework-ng is the AngularJS web interface for the 
Firework Micrologging Framework.

All backend services (authentication, data persistance) are provided 
through APIs, making Firework-ng a 'bring your own backend' system to 
allow private hosting (currently only Azure Mobile Services).


## Thoughts at 29/Oct/2014

* Would like to be able to run locally, behind the firewall, to ease development and private data storage
* Thinking that the service should be more personal than shared
  * E.g. could have personal local store AND a cloud or web based store AND a shared version
* Would like to be able to (fake or produce) test data layer for testing
* Would like to be able to choose local or cloud data providers
* Would like easy deploy of both front end and back end 
  * AWS is tricky to deploy the backend to due to separate git repo and/or manual config on dashboard
* Would like realtime logging, e.g. push of items to client
* Would like a temporary user option, ala firebase temporary user
* Potential API backends/Stacks
  * AngularJS
    * AMS 
    * Strongloop API server
    * Express - MongoDb
    * Breeze - asp.net web api 2, or Azure Mobile Services, or other BAAS provider
  * Meteor
* AMS Issues
  * AMS backend doesn't have a native angular interface 
    * There is an angular-azure-mobile-service shim available, and used in current version 
  * AMS doesn't have a simple username/password authentication setup, MUST currently use a social provider
  * AMS not accessible via numerous locations due to url
  * AMS not realtime like firebase or meteor
  * AMS not faked easily at present
  * AMS has own api calls and uses express for server side validation/auth etc
  * AMS does not run within the firewall, must be on-cloud


## User Stories

### Timeline

* Users can view a list of timeline items.
* Default sort is descending date order.
  * User can sort by date, actor, action.
* The total number of items is shown.


### Login

* Social users can login via their favourite provider.
  * Including Twitter, Facebook, Google.
* Regular users can login via username and password.
* Failed logins are indicated in an ambigous way.
* Register and Forgotten password options are presented.


### Logout

* User is logged out of the system and returned to the homepage.


### Register

* New user enters username, password, email. 
* On submission new user added to the system and user logged in and redirected to the homepage.
* Confirmation of email address sent.


### Forgotten Password

* User enters username or email address.
* If user exists then reset password email sent.
* When in receipt of the reset email user clicks on the link.
* Link opens reset page for entry of new password. 
* On update user logged in and redirected to the homepage.


### Add

* Users can add an item
  * via standard form
  * via a shortee message single form
* New items trigger an email notification to the user


### Edit

* Users can edit an item
  * via standard form
  * via a shortee message single form
* Updated items trigger an email notification to the user


### delete

* Users can delete an item
* Prior to deletion a confirmation is requested from the user 


### Search

* User can search for items
   * By Who(actor)
   * What (action)
   * For a time period

### Who (Actor)

* Users can view a list of who (actors) and select an actor to search by

### What (Action)

* Users can view a list of what (actions) and select an actor to search by

### When (By Date)

* Users can view a number of date periods to show items for
  * Most recent
  * Last Week
  * Last Month

### Export

* Users can download their entire item collection as a csv file

### Future Features

* Dashboard
* Public Profile
* Follow
* Subscribe
* Tag
* Push Notifications

