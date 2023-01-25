const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blackpill')
		.setDescription('Cabou se'),
	async execute(interaction) {
		interaction.reply({ files: ['./images/blackpill.png'] })
	},
};
