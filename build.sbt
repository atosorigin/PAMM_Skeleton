name := """PAMM Skeleton"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  "org.webjars" % "bootstrap" % "3.3.6",
  "org.webjars" % "angularjs" % "1.5.5"
)

libraryDependencies += "org.mongodb" %% "casbah" % "3.1.0"

routesGenerator := InjectedRoutesGenerator

fork in run := true
