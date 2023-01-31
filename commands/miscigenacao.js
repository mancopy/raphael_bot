// https://www.youtube.com/shorts/DvKAPAmGPas

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('miscigenacao')
		.setDescription('A cara do brasileiro'),
	async execute(interaction) {
		interaction.reply({ files: ['./images/miscigenacao.png'] })
	},
};
