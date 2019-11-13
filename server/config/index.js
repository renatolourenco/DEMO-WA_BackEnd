require('dotenv').config();

var config = {};

config.conversation = {};

// Config Conversation
config.conversation.workspace = process.env.WA_WORKSPACE;
config.conversation.username = process.env.WA_USERNAME;
config.conversation.password = process.env.WA_PASSWORD;
config.conversation.versiond = process.env.WA_VERSION;

module.exports = config;