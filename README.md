# subquery-test

## Start subquery

```
cd query
```

```
yarn install
```

#### Code generation

In order to index your SubQuery project, it is mandatory to build your project first.
Run this command under the project directory.

```
yarn codegen
```

#### Build the project

In order to deploy your SubQuery project to our hosted service, it is mandatory to pack your configuration before upload.
Run pack command from root directory of your project will automatically generate a `your-project-name.tgz` file.

```
yarn build
```

#### Run required systems in docker

```
yarn start
```

Open your browser and head to http://localhost:3000

## Start react

```
cd site
yarn install
yarn start
```
