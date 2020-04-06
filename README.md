# Docler Connect

## Easily connect with your coworkers.

<br>

#### An SPA built with the intention of simplifying connection and messaging issues among docler holdings employees.

### What's this app made of?

#### Core

- React (UI)
- Redux (State Management)

* React-router-dom (Navigation)

- Socket IO (Websocket)
- Express (Node framework)
- SASS (Styling )
- Jest ( Unit testing)
- Webpack (Bundler)
- Babel (Transpilation)
- React-emoji library (Emoji Parser)

### Docler Connect Features

- Send and recieve Real-time messages.
- Connect To a specific room/department.
- Send emojis
- Dark theme

### How does it work?

A user goes to docler connect dashboard via browser. He/She will be promted with the landing page. A user enters his/her username and choose the room /department they want to join and join chat.
Any other person in that room can send and recieve messages from the user.

### Snapshots

![screenshot](https://i.imgur.com/ht5Ojtv.jpg)
![screenshot](https://i.imgur.com/DBu5wCH.jpg)
![screenshot](https://i.imgur.com/99vOZJm.jpg)
![screenshot](https://i.imgur.com/fKCsMBv.jpg)
![screenshot](https://i.imgur.com/e23jlLC.jpg)

#### Setting Up the project Locally

To set up this project on your local machine, you need to install node if you don't already do.

clone this repo to you local machine

```
git clone git@github.com:kraken-coder/Docler-connect.git

cd Docler-connect
```

install the project on you local machine by running

```javascript
yarn
or
npm install
```

The app uses webpack for bundling. To start the dev server run

```
yarn start
```

Run linting with eslint

```
yarn lint
```

format code with prettier

```
yarn format
```

##### Pre commit hook with husky

This app uses husky. Lint and format command will be runned everytime prior to every commit

##### Running Unit Testing

This app uses jest and enzyme for unit testing. To run tests

```
yarn test
```
