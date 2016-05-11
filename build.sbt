name := """PAMM Skeleton"""

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  "org.webjars" % "bootstrap" % "3.3.6",
  "org.webjars" % "angularjs" % "1.5.5"
)

libraryDependencies += "org.mongodb" %% "casbah" % "2.5.0"

lazy val root = (project in file(".")).enablePlugins(PlayScala)


fork in run := true
