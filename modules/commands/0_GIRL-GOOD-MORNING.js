const fs = require("fs");
module.exports.config = {
	name: "good morning",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("morning") ||
     react.includes("Morning") || react.includes("शुभ प्रभात") || react.includes("MORNING") ||
react.includes("good morning") ||
react.includes("GOOD MORNING")) {
		var msg = {
				body: `𝐕𝐄𝐑𝐘 𝐆𝐎𝐎𝐃 𝐌𝐎𝐑𝐍𝐈𝐍𝐆 𝐉𝐀𝐀𝐍😻`,attachment: fs.createReadStream(__dirname + `/GOOD-GIRL/GOOD-MORNING.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💫", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }