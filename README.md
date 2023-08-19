https://developer.spotify.com/console/
https://app.quicktype.io/
https://editor.swagger.io/

Docker deps:
    Environment:
    node 16.20 (https://nodejs.org/download/release/v16.20.2/node-v16.20.2-x86.msi)
    npm install -g ts-node
    npm install -g typescript
    npm install -g @types/node

	hasura/graphql-engine:v1.0.0-beta.6  0.0.0.0:8081->8080/tcp
	postgres  0.0.0.0:5433->5432/tcp
	https://stackoverflow.com/questions/30171063/how-to-generate-a-postgresql-dump-from-a-docker-container

    Issue with postgres role fix:
	docker exec spotify_postgres pg_dump -U postgres -F t postgres > postgres-backup.sql
    OR
    create (spotify_gateway) db with PgAdmin
    restore with file postgres-backup.sql

    Docker:
    open spotify-gateway/source folder in CMD
    docker-compose up -d
    now postgres and hasura should be running in docker

    Hasura:
    add remote schema to Hasuara instance - for some reason the environment variable is not setting it
    goto http://localhost:8081/console/remote-schemas/manage/schemas
    SPOTIFY_GATEWAY_ENDPOINT: http://host.docker.internal:4200/v1/graphql 
	
    Spotify-Gateway (dev):
    npm run install
    npm start

    Spotify-UI (dev):
    npm install
    npm run dev

features (Ty - 2019-12-13 8:50am - listening to Cheap Thrills by Himalayas):
    centralize client data request around the spotify server gateway instance. This is where the access-token will be established. 
     - possibility of multiple gateway instances for entertainers. Will be running instances in docker..
    limit the number of payloads sent from the client. Five suggested songs?
    if searched song has already been suggested then allow user to place a positive vote. This will push the song up the request queue.
     - also user interface tab for current suggested songs (request queue). Allow votes from here as well. Possibly this will be managed as a playlist.
     - spotify playlist can be created and managed programmatically from the API.
    entertainers can manage "available_markets" (this can be apart of a config that is used to plug into user search queries)