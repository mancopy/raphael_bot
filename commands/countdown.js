const { SlashCommandBuilder } = require('discord.js');

const awaitTimeout = delay =>
  new Promise(resolve => setTimeout(resolve, delay));

module.exports = {
	data: new SlashCommandBuilder()
		.setName('countdown')
		.setDescription('Does a countdown!'),
	async execute(interaction) {
        let n = 96109;
        while (n > 0) {
            await interaction.channel.send(n.toString());
            await awaitTimeout(5000);

            n = n-1;
          }
	},
};
