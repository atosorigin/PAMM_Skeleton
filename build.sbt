name := """PAMM Skeleton"""

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  "org.webjars" %% "webjars-play" % "2.3-M1",
  "org.webjars" % "bootstrap" % "3.3.6",
  "org.webjars" % "angularjs" % "1.5.5"
)

libraryDependencies += "org.mongodb" %% "casbah" % "2.5.0"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

includeFilter in (Assets, LessKeys.less) := "*.less"

excludeFilter in (Assets, LessKeys.less) := "_*.less"

fork in run := true