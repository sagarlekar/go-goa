yaml = require('js-yaml');
fs   = require('fs');

class Goa {

	constructor() {
		const goaYaml = this.readYaml("./data/goa.yml")
		this.goaJson = JSON.parse(JSON.stringify(goaYaml))
	}

	readYaml(path) {
		try {
			return yaml.safeLoad(fs.readFileSync(path, 'utf8'));
		} catch(e){
			console.log(e);
		}
	}

	json() {
		return this.goaJson
	}

	thingsToDo() {
		return this.goaJson["things-to-do"]
	}

	beaches() {
		return this.goaJson["beaches"]
	}

	food() {
		return this.goaJson["food"]
	}

	fleeMarkets() {
		return this.goaJson["flee-markets"]
	}


	historicSites() {
		return this.goaJson["historic-sites"]
	}

	artGalleries() {
		return this.goaJson["art-galleries"]
	}
}

module.exports = Goa

// goa = new Goa()
// goa.readYaml()
// goaYaml = goa.goaYaml
// goaJson = JSON.parse(JSON.stringify(goaYaml))
// console.log(goaJson["things-to-do"])
//console.log(goaJson.things-to-do)