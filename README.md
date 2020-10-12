# NBA React

Basketball League React Application

## Project Preview

![](https://user-images.githubusercontent.com/2933430/82761753-f994a380-9db9-11ea-98af-922c37266d46.png)
![](https://user-images.githubusercontent.com/2933430/82761748-f7cae000-9db9-11ea-9cce-8e6ab5dcc2c7.png)
![](https://user-images.githubusercontent.com/2933430/82761747-f699b300-9db9-11ea-9e59-a79c65fd6536.png)
![](https://user-images.githubusercontent.com/2933430/82761744-f39ec280-9db9-11ea-954d-33feb6bfc706.png)

## Application Tree

```bash
├── README.md
├── package.json
├── 📁 public
│   ├── _redirects
│   └── index.html
├── 📁 src
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

## URL Tree

```bash
├──  Home
├── /players #Players
├── /players/:playerId #Player
├── /team/ #Teams
├── /team/:teamId #Team
└── /* #404
```

## Roadmap

NBA API Suport
[nba.com/teams](https://www.nba.com/teams)  
[nba.com/player](https://www.nba.com/players)  
[nba.com/player/:name](https://www.nba.com/players/)

## Todos

- Dark / Light Theme
- Fix Route Params
- Favicon
- Upgrade to React 17
- Add Routing Animation
