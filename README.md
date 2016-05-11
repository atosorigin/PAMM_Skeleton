
#PAMM Skeleton

##Contents
1. [About](#about)
2. [Technology Stack](#technology-stack)
3. [Installation Instructions](#installation-instructions)
   1. [Basic](#basic)
   2. [IntelliJ](#intellij)
   3. [MongoDB](#mongodb)
      * [Configuration](#configuration)

## About
The PAMM Skeleton project is a quick start, template project using the PAMM stack. It is designed to be barebones so that developers can download and start coding business requirements rapidly with no set-up required.
The project is based off the "hello-play-2.3-scala" template provided within Activator, however *significant* changes have been made.

##Technology Stack
- Scala
- Play 2.4.3
- SBT 0.13.8
- Angular 1.5.5
- Bootstrap 3.3.6
- MongoDB (sample integration provided via Casbah)

##Installation Instructions
###Basic
1. `git clone` <repo address>
2. Browse to the directory root
3. `sbt compile` to ensure the solution builds
3. `sbt run` to start the application
4. Browse to `http:localhost:9000` from your browser to see the application
5. *[optional]* Start MongoDB using Docker or your local installation

###IntelliJ
1. Complete the steps above to download the solution
2. Open IntelliJ
3. Select 'Open'
4. Select the root folder of the project
5. Select to import as an SBT project
6. Select 'auto import'
7. This should import the solution into IntelliJ
8. Go to "Run" on the menu
9. Select 'Edit Configurations'
10. Add a new configuration by processing the + button in the top left
11. Select 'SBT Task'
12. Set the 'Name' to be "Run"
13. Set the 'task' to be "run"
14. Remove 'Make' from the 'Before Launch' tasks
15. Click Apply and close the menu
16. You can now deploy/run/debug the application using the IntelliJ Run menu

###MongoDB
This project includes Casbah, a Scala toolkit for MongoDB. It's usage is optional, and it can be replaced with a suitable alternative if required. A controller has been provided with an example of simple database interactions, and should be adapted or removed as needed.

####Configuration
There are 3 options for configuring which MongoDB instance the application uses:
1. Leave it as the default, which assumes the database is running on localhost under the default port (27017)
2. Change the target MongoDB URI within the `application.conf` file. Altering the first instance of `mongodb.uri` will change the default instance of MongoDB used by the application.
3. Set the `$MONGODB_URI` environment variable to the appropriate URI, this will be taken over the defaults set within `application.conf`

More detail on MongoDB URIs can be found at:
https://docs.mongodb.com/manual/reference/connection-string/