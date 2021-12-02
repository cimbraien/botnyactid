import * as dotenv from "dotenv";
import TwitchBot from "./bot/twitchBot";

const bootstrap = () => {
  dotenv.config();
  new TwitchBot();
};

bootstrap();
