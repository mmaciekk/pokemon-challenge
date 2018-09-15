# Pokemon Challenge
This is a site that displays cards with Pokemons.
It is created with the use of pokemon.api and React.
## Getting Started
 When in project root directory open terminal and type
```npm install``` and then type ```npm start``` or if using yarn, type
```yarn``` and then type ```yarn start```.

Open the second terminal window and type ```json-server -p 3001 ./src/Api/db.json``` from the root directory of project.
This will start the server on your localhost and allow you to fetch data from the json-server.

If there is only a Pokemon logo on the site, it means that the json-server isn't running properly.

# transformEmail function
The function is located in task2.js file in the src directory.
It uses a regular expression to determine if provided emails are valid or not and returns an array of valid emails.
It is added to the String prototype, so you can use it directly on String object like below.

```console.log('test@email.com, test@mail, test+1@mail.net'.transformEmails()) ```

Result:

```['test@email.com']```

## Built With

* [React](https://reactjs.org/) - JavaScript web framework used
* [reactstrap](https://reactstrap.github.io/) - easy to use with React Bootstrap 4 components
* [json-server](https://github.com/typicode/json-server) - allows you to get a full fake REST API with zero coding in less than 30 seconds (seriously)


## Authors

* **Maciej Szewczyk** - *Junior Front-end dev candidate at* - Zaven



