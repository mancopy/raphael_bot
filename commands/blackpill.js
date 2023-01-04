// blob:https://web.whatsapp.com/0fa3b070-a24a-499a-bca9-cd90c2ae8ee3

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blackpill')
		.setDescription('Cabou se'),
	async execute(interaction) {
		interaction.reply({ files: ['./images/blackpill.png'] })
	},
};
