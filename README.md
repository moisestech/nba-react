[![Netlify Status](https://api.netlify.com/api/v1/badges/47004bd3-e920-4e18-a795-e4f79f4e0fd0/deploy-status)](https://app.netlify.com/sites/nba-react/deploys)

# NBA React

<img src="https://raw.githubusercontent.com/moisestech/nba-react/master/public/assets/nba-react-logo.png" width="150px" />

Basketball League React Application, displaying Teams, Players, and Game Articles with unique URL Routing Ids.

## 👁️‍🗨️ Project Preview

[Home](https://raw.githubusercontent.com/moisestech/nba-react/master/public/assets/nba_react_router_1.png)
![](https://user-images.githubusercontent.com/2933430/82761753-f994a380-9db9-11ea-98af-922c37266d46.png)

[Players](https://raw.githubusercontent.com/moisestech/nba-react/master/public/assets/nba_react_router_2.png)
![](https://user-images.githubusercontent.com/2933430/82761748-f7cae000-9db9-11ea-9cce-8e6ab5dcc2c7.png)

[Teams](https://raw.githubusercontent.com/moisestech/nba-react/master/public/assets/nba_react_router_3.png)
![](https://user-images.githubusercontent.com/2933430/82761747-f699b300-9db9-11ea-9e59-a79c65fd6536.png)

[Articles](https://raw.githubusercontent.com/moisestech/nba-react/master/public/assets/nba_react_router_4.png)
![](https://user-images.githubusercontent.com/2933430/82761744-f39ec280-9db9-11ea-954d-33feb6bfc706.png)

## 🗺 URL Tree

```bash
├── /                   #Home
├── /players            #Players
├── /players/:playerId  #Player:ID
├── /teams/             #Teams
├── /team/:teamId       #Team:ID
├── /articles/          #Articles
├── /articles/          #Article:ID
└── /*                  #404
```

## 🌿 Application Tree

```bash
├── README.md
├── package.json
├── 📁 public
│   ├── _redirects
│   └── index.html
├── src
│   ├── 📁 components
│   │   ├── App
│   │   │   └── index.js
│   │   ├── Articles
│   │   │   └── index.js
│   │   ├── Home
│   │   │   └── index.js
│   │   ├── Loading
│   │   │   └── index.js
│   │   ├── NavBar
│   │   │   └── index.js
│   │   ├── Players
│   │   │   ├── components
│   │   │   │   └── Player
│   │   │   │       └── index.js
│   │   │   └── index.js
│   │   ├── Sidebar
│   │   │   └── index.js
│   │   ├── TeamLogo
│   │   │   └── index.js
│   │   ├── TeamPage
│   │   │   ├── components
│   │   │   │   ├── ArticleList
│   │   │   │   │   └── index.js
│   │   │   │   ├── Championships
│   │   │   │   │   └── index.js
│   │   │   │   └── Stats
│   │   │   │       └── index.js
│   │   │   └── index.js
│   │   └── Teams
│   │       ├── components
│   │       │   └── Team
│   │       │       └── index.js
│   │       └── index.js
│   ├── 📁 hooks
│   │   ├── useArticle.js
│   │   ├── useFetch.js
│   │   ├── usePlayers.js
│   │   ├── useTeam.js
│   │   ├── useTeamNames.js
│   │   └── useTeamsArticles.js
│   ├── index.css
│   └── index.js
└── webpack.config.js
```

## ⛰️ Roadmap

NBA API Suport
[nba.com/teams](https://www.nba.com/teams)  
[nba.com/player](https://www.nba.com/players)  
[nba.com/player/:name](https://www.nba.com/players/)

## 📝 Todos

- Dark / Light Theme
- Fix Route Params
- Favicon
- Upgrade to React 17
- Add Routing Animation
