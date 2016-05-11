
#PAMM Skeleton

##About
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
14. Click Apply and close the menu
15. You can now deploy/run/debug the application using the IntelliJ Run menu
