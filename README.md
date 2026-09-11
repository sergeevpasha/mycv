## My CV

Just my tiny CV built on NextJS.

## Setup

### Prerequisites

- Docker & Docker Compose
- Make

### Installation

```bash
# Optional: set DOCKER_NODEJS_PORT if port 3000 is taken
cp .env.example .env

# Build the image and start the dev server on http://localhost:3000
make up
```

Dependencies are installed into the image and copied to `node_modules` on first start. After changing `package.json`, run `npm install` inside the container.

## Commands

```bash
# Docker
make up          # Start the container
make down        # Stop the container
make build       # Rebuild the image
make bash        # Enter the container
make start       # Start and enter the container

# NPM scripts (inside the container)
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Serve the production build
npm run lint     # Run ESLint (check only)
npm run fix      # Run ESLint (fix issues)
```
