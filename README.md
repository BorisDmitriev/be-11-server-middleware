# Server Middleware
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


A small exercise to practice writing custom middleware within an Express.js server

## What you will be doing

You will be creating a server with two endpoints, both of which will be accepting **POST** requests.

Both of these endpoints will be expecting a JSON object with user data.

### Example

```json
{
    "firstName": "steve",
    "lastName": "stevenson",
    "age": "129",
    "fbw": "36",
    "profession": "Musician",
    "favoriteBands": [
        "Radiohead",
        "Motorhead",
        "Machinehead",
        "The talking heads"
    ],
    "email": "steve@metallica.com"
}
```

The endpoints will then read and process this data.

## Tasks

### Task 1 - Getting ready

1. Create the file `server.js`
2. Initialise npm into your project with `npm init -y`
3. Install the express.js npm package `npm i express`

### Task 2 - Setting up your server

Create your **express.js** server in the `server.js` file

### Task 3 - Creating the validateUser endpoint

Create an endpoint which;

1. Responds to the path `/validateUser`
2. Responds to **POST** request methods

### Task 4 - Creating middleware

1. Create a **middleware function** that checks the object contains **values** for the keys `firstName`, `lastName`, `age`, `fbw` and `email`
2. Create a **middleware function** that will check if the user is above **18** years old
3. If any of the middleware fails, you should send a response with an **error** message that says why the user is not valid

    #### Example failure response

    ```json
    {
        "message": "We can not validate your user. They are  below 18 years of age"
    }
    ```

### Task 5 - Applying the middleware

1. Apply all the middleware you created in **Task 4** to the **validateUser** endpoint

2. If the request passes successfully through the middleware, **validateUser** should send a response with a **success** message

    #### Example success response

    ```json
    {
        "message": "This user is valid!"
    }
    ```

### Task 6 - Creating the sanitizeUser endpoint

Create an endpoint which;

1. Responds to the path `/sanitizeUser`
2. Responds to **POST** request methods

### Task 7 - Creating middleware

1. Create a **middleware function** that makes the `firstName` and `lastName` start with a capital letter
2. Create a **middleware function** that sorts the `favoriteBands` array alphabetically
3. Create a **middleware function** that will convert `age` and `fbw` to numbers

### Task 8 - Applying the middleware

1. Apply all the middleware you created in **Task 7** to the **sanitizeUser** endpoint

2. If the request passes successfully through the middleware, **sanitizeUser** should send a response with the updated **POST** data

    #### Example response

    ```json
    {
        "firstName": "Steve",
        "lastName": "Stevenson",
        "age": 129,
        "fbw": 36,
        "profession": "Musician",
        "favoriteBands": [
            "Machinehead",
            "Motorhead",
            "Radiohead",
            "The Talking Heads"
        ],
        "email": "steve@steve.com"
    }
    ```

[//]: # "autograding info start"

# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results

> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.

[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=)

[//]: # "autograding info end"

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### /validateuser, POST Endpoint

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | POST to /validateuser |

### /sanitizeuser, POST endpoint

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | POST to /sanitizeuser |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=BE-Server-Middleware.git)


[//]: # (autograding info end)