function Qmarkup(tag){
	this.build = function(text, flags){
		let ids = ""
		let cls = ""

		if (typeof text == "object") {
			text.toString()
		}

		if (typeof flags == "object"){
			for (var i = 0; i < flags.length; i++) {
				if (flags[i][0] == ".") {
					cls += flags[i].slice(1) + " "
				}
				else if (flags[i][0] == "#") {
					ids += flags[i].slice(1) + " "
				}
			}
			// ids = ids.slice(ids.length - 2)
			// cls = cls.slice(cls.length - 2)
		}
		else if (typeof flags == "string") {
			if (flags[0] == ".") {
				cls += flags.slice(1)
			}
			else if (flags[0] == "#") {
				ids += flags.slice(1)
			}
		}
		return `<${tag} id="${ids}" class="${cls}">${text}</${tag}>`
	}
}
module.exports = function(tag){ return new Qmarkup(tag)}