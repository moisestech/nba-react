# NBA React

Basketball League React Application

## Project Preview

(Coming Soon!)

![]()
![]()
![]()

# Application Tree

```bash
├── README.md
├── package.json
├── public
│   ├── _redirects
│   └── index.html
├── src
│   ├── components
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
│   ├── hooks
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
