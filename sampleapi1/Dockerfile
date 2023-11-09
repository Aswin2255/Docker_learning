FROM mhart/alpine-node AS base
WORKDIR /app
COPY package* ./
RUN npm install
FROM base AS development
COPY . .
CMD [ "npm","run","dev" ]
FROM base AS production
COPY . .
# it will remove development dependencies
RUN npm prune --production  
CMD [ "npm","run","start" ]

EXPOSE 3001
