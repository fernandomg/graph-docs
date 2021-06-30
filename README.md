# Graph Docs

## Run locally

1. Clone the repo

```sh
git clone git@github.com:graphprotocol/graph-docs.git
```

2. Change into the repository and install the dependencies

```sh
cd graph-docs

yarn
```

3. Start the server

```sh
yarn start
```

### Run a production docker container:

```sh
yarn docker:build
yarn docker:up
```

This mounts `nginx.conf` file into the container for quick debugging.
Stop the container using `ctrl+c` and do `docker:up` again to reload `nginx.conf` changes.

App is available at http://localhost:5000

## Deploying

- Staging: on any commit to the `main` branch
- Production: on any `v*` tag:
  ```sh
  git tag v1
  git push --tags
  ```
