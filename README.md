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

## Deploying

- Staging: on any commit to the `main` branch
- Production: on any `v*` tag:
  ```sh
  git tag v1
  git push --tags
  ```
