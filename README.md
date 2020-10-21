# Project Name
Individual Items module

> Project description
This module is responsible for serving individual game items within tiers, specific to the current bundle.

## Related Projects

  - https://github.com/rpt23-team-feedback/kimarie-bonuses
  - https://github.com/rpt23-team-feedback/max-descriptions
  - https://github.com/rpt23-team-feedback/Tier-Mark
  - https://github.com/rpt23-team-feedback/Kara-Charity

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions
Endpoints:
/games/single/:gameId <--- returns a single game item from the database, game item structure shown below-
/games/multiple? + [variableName]=[gameId]&[variableName]=[gameId]&... <--- returns an array of game items, see game item structure below-

 {
    "creators": Array,
    "gameplay": Array of Strings,
    "key_features": Array of Strings,
    "_id": String ID,
    "name": String,
    "photo_url": String URL,
    "video_url": String URL,
    "description": String,
    "gameId": Number,
    "__v": Number
  },

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- axios 0.20.0
- express 4.17.1
- express-router 0.0.1
- mongoose 5.10.7
- mongoose-auto-increment 5.0.1
- react 16.5.2
- react-dom 16.5.2
- react-hot-loader 4.3.11


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
