// https://media.discordapp.net/attachments/633697483649712138/934126487882317854/54D71D5A-CFCE-458E-A8E8-4CF351660D5F.gif

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('zzz')
		.setDescription('Zzz'),
	async execute(interaction) {
		interaction.reply('https://media.discordapp.net/attachments/633697483649712138/934126487882317854/54D71D5A-CFCE-458E-A8E8-4CF351660D5F.gif')
	},
};
