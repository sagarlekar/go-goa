Goa = require("./lib/goa")

goa = new Goa()
goa.readYaml()
goaYaml = goa.goaYaml
//goaJson = JSON.parse(JSON.stringify(goaYaml))

exports.thingsToDo = JSON.parse(JSON.stringify(goaYaml))

exports.beaches = function() {

}

exports.food = function() {

}

exports.fleeMarkets = function() {

}

exports.historicSites = function() {

}

exports.artGalleries = function() {

}