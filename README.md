# How to run this app...
## Preparing for run:
- Create database in postgres
- Set-up database credentials in file ```test-task-lampa/database/config/config.json```
- Run command ```npm i``` in folders ```test-task-lampa``` and ```test-task-lampa/client/build```
- Run command ```npx sequelize-cli db:migrate``` in folder ```test-task-lampa``` (for create database migrations)
- Run command ```npx sequelize-cli db:seed:all``` in folder ```test-task-lampa``` (for create database seeds)
## Run application in development mode 
-Run command ```npm start``` in folders ```test-task-lampa``` and ```test-task-lampa/client``` (in different consoles)

## Run application in production mode 
-Run command ```npm build``` in folders ```test-task-lampa```

**Attention: for production mode better use environment variables**
