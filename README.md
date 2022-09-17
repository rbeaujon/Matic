The following project is an application created in React version 18.2.0 to show 3 logic functions (Fibonacci, Count Words, FizzBuzz) and one SPA to manages one CRUD API .
<p>
I used an API of https://polygon.io/ with an APIKey; the blocked send requests are handled to avoid errors given by the API such as 429.
<p>
Likewise, a simple but informative design is maintained with colors when the currency rises or falls or if there is a connection failure, it is reported via a status bar.

## Technical details

Front-End: Angular, Typescript and CSS

<img src="/documentation/diagram.png" width="80%">

## Views

#### Daily opening and closing request
<img src="/documentation/app.png" width="80%">

#### Fail request
<img src="/documentation/no_access.png" width="80%">


## Project Hosting

<https://aistica.com/brainbase/>

## Available Scripts

In the project directory, you can run:

### `ng serve`

To view in the browser
Local [http://localhost:4200]

Remote [https://aistica.com/brainbase]

## API Endpoints

#### POLYGON.io

* [https://api.polygon.io/v1/open-close/crypto/{crypto-symbol}/{currency}/{date}?adjusted=true&apiKey={APIkey}]

## Outscope
  
    * More elegant UI.
    * better selection of the date in the calendar.
    * Improve error detection.
    * Perform automated tests.
