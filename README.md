# questions and answers list

This example shows a list of questions and answers and Includes the ability to answer the questions, react to each answer, and add a new question.

It has 2 pages: `Question List` and `Answer detail`. Using `Axios`,` RTK query` for managing APIs, and 'JSON Server' for mocking an API, and using `Ant design` as a UI library.

## Technologies

* nextJs
* reactJs
* redux(RTKQuery)
* axios
* ant design

### run json server
https://github.com/typicode/json-server

```
cd QAList/api/data

json-server --watch db.json --port 3000
```
### start server
```
yarn start --port 3001
```