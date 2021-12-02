import { Client, Options } from "tmi.js";

class TwitchBot {
  private bot: Client;

  constructor() {
    const options: Options = {
      connection: {
        reconnect: true,
        reconnectDecay: 1,
        reconnectInterval: 10000,
        secure: true,
        maxReconnectAttempts: 10,
      },
      identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_BOT_OAUTHKEY,
      },
      channels: ["cimbraien"],
    };

    this.bot = new Client(options);
    this.registerEvents();
    this.bot.connect();
  }

  registerEvents() {
    this.bot.on("message", async (channel, ctx, msg, isSelf) => {
      if (isSelf) return;
      if (msg == "ping") await this.bot.say(channel, "pong");
    });
  }
}

export default TwitchBot;
