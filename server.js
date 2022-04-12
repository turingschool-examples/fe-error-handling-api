const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const { users, sportTeams, animals } = require('./data.js');

app.locals = {
  title: 'Network Request Practice',
  users,
  sportTeams,
  animals
}

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/v1/users', (req, res) => {
  res.status(200).json(app.locals.users);
});

app.post('/api/v1/users', (req, res) => {
  const newUser = req.body;

  for (let requiredParameter of ['id', 'name', 'status', 'interests']) {
    if (!newUser[requiredParameter]) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }

  const { id, name, status, interests } = newUser;

  app.locals.users = [...app.locals.users, { id, name, status, interests }];

  return res.status(201).json({ id, name, status, interests });
});

app.delete('/api/v1/users/:id', (req, res) => {
  const { id } = req.params;
  const match = app.locals.users.find(user => user.id == id);

  if (!match) {
    return res.status(404).json({
      message: `No user found with an id of ${id}`
    });
  }

  const filteredUsers = app.locals.users.filter(user => user.id != id);

  app.locals.users = filteredUsers;

  return res.status(200).json(app.locals.users);
});

app.get('/api/v1/sport-teams', (req, res) => {
  res.status(200).json(app.locals.sportTeams);
});

app.post('/api/v1/sport-teams', (req, res) => {
  const newSportTeam = req.body;

  for (let requiredParameter of ['id', 'name', 'head_coach', 'sport']) {
    if (!newSportTeam[requiredParameter]) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }

  const { id, name, head_coach, sport } = newSportTeam;

  app.locals.sportTeams = [...app.locals.sportTeams, { id, name, head_coach, sport }];

  return res.status(201).json({ id, name, head_coach, sport });
});

app.delete('/api/v1/sport-teams/:id', (req, res) => {
  const { id } = req.params;
  const match = app.locals.sportTeams.find(sportTeam => sportTeam.id == id);

  if (!match) {
    return res.status(404).json({
      message: `No sport team found with an id of ${id}`
    });
  }

  const filteredSportTeams = app.locals.sportTeams.filter(user => user.id != id);

  app.locals.sportTeams = filteredSportTeams;

  return res.status(200).send(app.locals.sportTeams);
});

app.get('/api/v1/animals', (req, res) => {
  res.status(200).json(app.locals.animals);
});
// Get one animal.
app.get('/api/v1/animals/:id', (req, res) => {
  let id = req.params.id
  id = Number(id)
  let dd = app.locals.animals.filter(item => {
   return item.id === id
 })
   if(dd.length === 0){
     res.status(500).json({
       message: 'Internal server error'
     })
   }
   res.status(200).json(dd);
 });

app.post('/api/v1/animals', (req, res) => {
  const newAnimal = req.body;

  for (let requiredParameter of ['id', 'name', 'diet', 'fun_fact']) {
    if (!newAnimal[requiredParameter]) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }

  const { id, name, diet, fun_fact } = newAnimal;

  app.locals.animals = [...app.locals.animals, { id, name, diet, fun_fact }];

  return res.status(201).json({ id, name, diet, fun_fact });
});

app.delete('/api/v1/animals/:id', (req, res) => {
  const { id } = req.params;
  const match = app.locals.animals.find(sportTeam => sportTeam.id == id);

  if (!match) {
    return res.status(404).json({
      message: `No animal found with an id of ${id}`
    });
  }

  const filteredAnimals = app.locals.animals.filter(user => user.id != id);

  app.locals.animals = filteredAnimals;

  return res.status(200).json(app.locals.animals);
});

app.listen(port, () => {
  console.log(`${app.locals.title} is now running on http://localhost:${port} !`)
});
