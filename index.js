function Qmarkup(tag){
	this.build = function(text, flags){
		let modifiers = {"#": [], ".": []}

		if (typeof text == "object") {
			text.toString()
		}

		if (typeof flags == "object"){
			for (var i = 0; i < flags.length; i++) {
				modifiers[flags[0]] += flags.slice(1) + " "
			}
		}
		else if (typeof flags == "string") {
			modifiers[flags[0]] += flags.slice(1)
		}
		return `<${tag} id="${modifiers["#"]}" class="${modifiers["."]}">${text}</${tag}>`
	}
}
module.exports = function(tag){ return new Qmarkup(tag)}
