# Event Booking System
Appointment app to order pickup service.

Enter address to direct drivers/staff to your location.

Client side.


**Register for a staff account to access all features above.**

## Getting started
### Prerequisites
Download Node.js and npm here: https://nodejs.org/en/
### Installation
1. `npm install`
2. Create a .env file in root project folder
```
SESSION_SECRET=XXXXXX
DB_URI=XXXXXX
```  
- SESSION_SECRET can be a random string to secure the session.
- DB_URI is the connection string to MongoDB server (check out [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)). Here is an example connection string `mongodb+srv://<username>:<password>@cluster123-tnkmj.gcp.mongodb.net/test`, where `username` and `password` should be substituted with your own user credentials, `test` is the name of the database selected.
3. `npm start` 
4. Go to http://localhost:3000 to see your app.

### Build
`npm run build` and `npm run serve` to run the production version after build.

### Testing
The tests are implemented in `src/test` using [Mocha](https://github.com/mochajs/mocha). `npm run test` to run the test files.

## License
Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
