// https://www.youtube.com/shorts/DvKAPAmGPas

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aafolou')
		.setDescription('Cachorro do a a folou'),
	async execute(interaction) {
		interaction.reply('https://www.youtube.com/shorts/DvKAPAmGPas')
	},
};
