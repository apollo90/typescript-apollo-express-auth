## Technologies

- Typescript
- Apollo
- Postgres
- Express
- Yarn
- Node JS

## TypeORM

TypeORM is an ORM that can run in NodeJS Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8). Its goal is to always support the latest JavaScript features and provide additional features that help you to develop any kind of application that uses databases

[Learn more here](https://typeorm.io/#/)

### Getting started with TypeORM

1. Navigate to project folder. Note that this has to empty.

2) Install with the command below

```
npm i -g typeorm
```

3. Run the command below to initialize typeORM project

```
typeorm init --name NAME_OF_SERVER_FOLDER --database DATABASE_TYPE
```

3. Replace existing `tsconfig.json` with a more suitable version using the following command

```
npx tsconfig.json
```

## Using Yarn

Yarn is a fast, reliable and secure dependancy manager for javascript.

### Getting started with Yarn

Download Yarn from the official website.

[Yarn Installation](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

**NOTE**: This link is for windows. Linux and Mac OS varies

1. Run yarn in project directory before anything

```
yarn
```

2. Upgrade all yarn packages

```
yarn upgrade-interactive --latest
```

3. Select the necessary packages to upgrade. Yay!



## Setting up TypeORM and Database

1. Configure the database with correct credentials

```
   {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "test",
    "password": "test",
    "database": "test",
   }
```
2. Ensure the database exists in Postgres and execute the following command

```
yarn start
```

3. This should run the application. Yay!


## Express, Apollo and GraphQL

### Express
Express is a fast, unopinionated, minimalist web framework for Node.js

[Learn more](https://expressjs.com/)

### Apollo

Apollo is the industry-standard GraphQL implementation, providing the data graph layer that connects modern apps to the cloud. Apollo express is the Express and Connect integration of GraphQL Server. Apollo Server is a community-maintained open-source GraphQL server that works with many Node.js HTTP server


[Learn more](https://www.apollographql.com/)
[Learn more](https://www.npmjs.com/package/apollo-server-express)

### GraphQL
GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.

[Learn more](https://graphql.org/)


Install all of the above using the following command

```
yarn add express apollo-server-express graphql
```

Install the type dev depenedencies for express and graphql

```
yarn add -D @types/express @types/graphql
```

Run the server after setup of apollo express middleware


### TypeGraphQL
TypeGraphQL is a library for creating GraphQL schema and resolvers with TypeScript, using classes and decorators. Example object type:

```
@ObjectType()
class Recipe {
  @Field()
  title: string;

  @Field(type => [Rate])
  ratings: Rate[];

  @Field({ nullable: true })
  averageRating?: number;
}
```
[Read more](https://typegraphql.com/)

Install this package with the following command

```
yarn add type-graphql
```


### GraphQl Code Gen


After Running `yarn gen` replace the following components and refactor biolerplate accordingly

```
import gql  from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
```

## Contributor

- Charles Mutale Jr
