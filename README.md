https://developer.spotify.com/console/
https://app.quicktype.io/
https://editor.swagger.io/


features (Ty - 2019-12-13 8:50am - listening to Cheap Thrills by Himalayas):
    centralize client data request around the spotify server gateway instance. This is where the access-token will be established. 
     - possibility of multiple gateway instances for entertainers. Will be running instances in docker..
    limit the number of payloads sent from the client. Five suggested songs?
    if searched song has already been suggested then allow user to place a positive vote. This will push the song up the request queue.
     - also user interface tab for current suggested songs (request queue). Allow votes from here as well. Possibly this will be managed as a playlist.
     - spotify playlist can be created and managed programmatically from the API.
    entertainers can manage "available_markets" (this can be apart of a config that is used to plug into user search queries)