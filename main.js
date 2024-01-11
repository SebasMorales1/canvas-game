import { WIDTH_SIZE, HEIGHT_SIZE, BLOCK_SIZE, BACKGROUND } from "./config.js";

import { Game } from "./class/Game.js";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const game = new Game(ctx, canvas.width, canvas.height, BACKGROUND)

  canvas.width = WIDTH_SIZE * BLOCK_SIZE;
  canvas.height = HEIGHT_SIZE * BLOCK_SIZE;
  ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

  game.init()
});
