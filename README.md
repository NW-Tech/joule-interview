# Joule interview

This repository aims to emulate a blog post application. It is imperfect on purpose, we'd like your comments on it !<br/>
Please see the exercise as if you joined a team that created this repository, which is now used like this in production. What would you do with it ?<br/>
<br/>
We would advise spending between 60 and 120 minutes on this exercise, and try answering the following questions:<br/>
-What good practices do you see that you would reuse on other NestJS projects ?<br/>
-What would you refactor in the code to improve its **quality** ?<br/>
-What would you bring to improve the **CI/CD** (in order to reduce the number of bugs in prod) ?<br/>
-What would you do to improve the **DevX** ?<br/>
-What would you do to improve the **security** of the application ?<br/>

# Installation & setup

```shell
npm install
```

## Prisma & DB

### databse

To start the database, you can use docker

```shell
docker compose up
```

### migrations

```shell
npx prisma migrate dev
```

### seed

You can then populate the database with the seeds we created !

```shell
ts-node prisma/seed.ts
```

# Running the app

Once you have setup the database and applied the migrations

```shell
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

# Login

To login on the app in the dev environment you can call the login endpoint with the credentials found in the `prisma/seed.ts` file,
and then use the `accessToken` provided as a Bearer Token. With swagger you can use this token to login.

# Test

```shell
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

# Prisma

### Generate new migrations

When changing the data model you should run the following command to generate and apply the associated migration

```shell
npx prisma migrate dev --name "<NAME>"
```

# GitFlow

The `main` branch is protected. A Merge request has to be approved before it is merged into main. It is then automatically deployed with our CI/CD.
We build the image of the application on a registry. From there, a Portainer service receives a notification and deploys the new version of the image.
