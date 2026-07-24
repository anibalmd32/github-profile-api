# GitHub Profile API

REST API built with [NestJS](https://nestjs.com/) that fetches and serves GitHub user profile information through a typed, documented endpoint.

## Features

- **`GET /user/:username`** — Returns a GitHub user's public profile (name, bio, avatar, repositories, followers, and more)
- **Swagger docs** available at `/docs`
- **Typed configuration** via `@nestjs/config`
- **GitHub API client** powered by [Octokit](https://github.com/octokit/rest.js)
- **Unit and e2e tests** with Jest

## Prerequisites

- Node.js 22+
- npm 10+

## Getting started

```bash
# Clone the repository
git clone <repo-url>
cd github-profile-api

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start in development mode
npm run start:dev
```

The server starts at `http://localhost:3000`. Swagger docs are served at `http://localhost:3000/docs`.

## Environment variables

| Variable | Required | Default | Description |
|---|---|---|---|
| `PORT` | No | `3000` | Server port |
| `NODE_ENV` | No | `development` | Runtime environment |

## API

### `GET /user/:username`

Returns a GitHub user's public profile.

**Example request**

```
GET /user/anibalmd32
```

**Example response**

```json
{
  "login": "anibalmd32",
  "name": "Anibal Mendoza",
  "bio": "Web developer",
  "avatar_url": "https://avatars.githubusercontent.com/u/104891242?v=4",
  "html_url": "https://github.com/anibalmd32",
  "location": "Apure, Venezuela",
  "company": null,
  "blog": "",
  "twitter_username": null,
  "public_repos": 12,
  "followers": 10,
  "following": 4,
  "created_at": "2022-05-04T07:42:26Z"
}
```

## Scripts

| Command | Description |
|---|---|
| `npm run start:dev` | Start with hot reload |
| `npm run build` | Compile TypeScript |
| `npm run start:prod` | Start from compiled output |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run lint` | Lint and auto-fix |
| `npm run format` | Format with Prettier |
| `npm run docker:build` | Build Docker image |
| `npm run docker:run` | Run container with `.env` |
| `npm run deploy` | Deploy to Vercel (production) |
| `npm run deploy:preview` | Deploy to Vercel (preview) |

## Docker

The Dockerfile uses a multi-stage build to produce a minimal production image based on `node:22-alpine`.

```bash
# Build the image
npm run docker:build

# Run the container
npm run docker:run
```

The container exposes port `3000` and reads environment variables from your `.env` file.

## Project structure

```
src/
├── config/
│   └── configuration.ts        # Typed env loader
├── modules/
│   ├── github/
│   │   ├── github.constants.ts
│   │   ├── github.module.ts    # Octokit provider factory
│   │   └── github.service.ts   # GitHub API client wrapper
│   └── user/
│       ├── dto/
│       │   └── user-profile-response.dto.ts
│       ├── user.controller.ts  # REST controller
│       ├── user.module.ts
│       └── user.service.ts     # Business logic
├── app.module.ts
└── main.ts                     # Bootstrap + Swagger setup
```

## License

UNLICENSED
