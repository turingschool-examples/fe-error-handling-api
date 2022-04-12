# Error HandlingPractice

## Backend Installation / Set up

1. `git clone` the repo
2. cd into the cloned repo
4. run `npm install`
5. run `npm start`. The server should be running locally on port 3001 - This is a local server
6. Navigate to the endpoint you're trying to request in the browser (ie if you want to GET users, navigate to http://localhost:3001/api/v1/users in the browser)
~7. The server is also deployed here https://fe2-fetch-practice.herokuapp.com/v1/users.~


## Frontend Setup

In the `client` directory, there are some files we can use as a makeshift client.

1. run `open client/index.html` from your command line
2. Modify the code in `client/index.js` to practice error handling!

## Your challenge

1. Handle the 422 error that comes back when the form is submitted with an empty field(s), and display an informative message to the user.
2. How can you prevent the user from submitting the form with an empty field to begin with. Update the form to accomplish that.
3. Handle the use case where something is wrong with the server. Display an informative message to the user. (You can easily test this by shutting down the api server)

Finish early? Do the same thing for one of the other resources. ie. users or sports teams.

## Endpoints

The following endpoints are documented below:

- GET all users
- POST a new user (you can verify this worked with another GET request)
- GET all animals
- POST a new animal
- GET all sports teams
- POST a new sports team

### User Endpoints

| url       | verb | options | sample response |
| ----------|------|---------|---------------- |
| `http://localhost:3001/api/v1/users`  | GET | not needed | Array of all existing users: `[{ id: 1, name: 'Travis Rollins', status: 'online', interests: 'Music, Software, & Gaming' }]` |
| `https://fe2-fetch-practice.herokuapp.com/api/v1/users`| GET | not needed | Array of all existing users: `[{ id: 1, name: 'Travis Rollins', status: 'online', interests: 'Music, Software, & Gaming' }]` |
| `http://localhost:3001/api/v1/users`| POST | `{ id: <Number>, name: <String>, status: <String>, interests: <String> }` | New user: `{ id: 1, name: 'Leta', status: 'online', interests: 'Science, Music, & Classic Films' }` |
| `https://fe2-fetch-practice.herokuapp.com/api/v1/users`| POST | `{ id: <Number>, name: <String>, status: <String>, interests: <String> }` | New user: `{ id: 1, name: 'Leta', status: 'online', interests: 'Science, Music, & Classic Films' }` |


### Animal Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/animals`| GET | not needed | Array of all existing animals: `[{ id: 3, name: 'orcas', diet: 'birds, squid, octopuses, sea turtles, sharks, rays & fish', fun_fact: 'Orcas, also known as killer whales, are known to prey on other marine mammals, including dolphins and seals.' }]` |
| `https://fe2-fetch-practice.herokuapp.com/api/v1/animals`| GET | not needed | Array of all existing animals: `[{ id: 3, name: 'orcas', diet: 'birds, squid, octopuses, sea turtles, sharks, rays & fish', fun_fact: 'Orcas, also known as killer whales, are known to prey on other marine mammals, including dolphins and seals.' }]` |
| `http://localhost:3001/api/v1/animals`| POST | `{ id: <Number>, name: <String>, diet: <String>, fun_fact: <String> }` | New animal: `{ id: 4, name: 'tigers', diet: 'chital, sambar, gaur & wild board', fun_fact: 'The main food of tigers are buffalos, antelopes, and rodents.' }` |
| `https://fe2-fetch-practice.herokuapp.com/api/v1/animals`| POST | `{ id: <Number>, name: <String>, diet: <String>, fun_fact: <String> }` | New animal: `{ id: 4, name: 'tigers', diet: 'chital, sambar, gaur & wild board', fun_fact: 'The main food of tigers are buffalos, antelopes, and rodents.' }` |

#### Sport Team Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/sport-teams` | GET | not needed | Array of all existing sport teams: `[{ id: 1, name: 'Dallas Cowboys', head_coach: 'Jason Garrett', sport: 'football' }]` |
| `https://fe2-fetch-practice.herokuapp.com/api/v1/sport-teams`| GET | not needed | Array of all existing sport teams: `[{ id: 1, name: 'Dallas Cowboys', head_coach: 'Jason Garrett', sport: 'football' }]` |
| `http://localhost:3001/api/v1/sport-teams` | POST | `{ id: <Number>, name: <String>, head_coach: <String>, sport: <String> }` | New sport team: `{ id: 2, name: 'New York Yankees', head_coach: 'Aaron Boone', sport: 'baseball' },` |
| `https://fe2-fetch-practice.herokuapp.com/api/v1/sport-teams`| POST | `{ id: <Number>, name: <String>, head_coach: <String>, sport: <String> }` | New sport team: `{ id: 2, name: 'New York Yankees', head_coach: 'Aaron Boone', sport: 'baseball' },` |
