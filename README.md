# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer). 

Run the following commands to get the server up and running

```
cd /vagrant
git clone https://github.com/lighthouse-labs/snek-multiplayer.git
cd snek-multiplayer
npm install
npm run play
```


## Final Product

!["snake screenshot 1"](./assets/snake_screenshot_1.png)

!["snake screenshot 2"](./assets/snake_screenshot_2.png)


## Getting Started
- Follow steps inside the snek server repo to run the server side (the steps are also outlined above)
- Run the development snake client using the `node play.js` command on the terminal
- use `w` to `move up`, `s` to `move down`, `a` to move `left` and `d` to `move right`
- use the `f` `g` or `h` keys to make the snake say something
- Enjoy!! 
