## What is the Legacy Explorer?

This section will walk you through deploying a subgraph to the Legacy Explorer, otherwise known as the [Hosted Service.](https://thegraph.com/legacy-explorer/) As a reminder, the Legacy Explorer will not be shut down soon. We will gradually sunset the Legacy Explorer once we reach feature parity with the decentralized network. Your subgraphs deployed on the Legacy Explorer are still available [here.](https://thegraph.com/legacy-explorer/) 

If you don't have an account on the Legacy Explorer, you can signup with your Github account. Once you authenticate, you can start creating subgraphs through the UI and deploying them from your terminal. Graph Node supports a number of Ethereum testnets (Rinkeby, Ropsten, Kovan) in addition to mainnet.

## Create a Subgraph 
First follow the instructions [here](https://thegraph.com/docs/developer/define-subgraph-hosted) to install the Graph CLI. Create a subgraph by passing in `graph init --product hosted service`. 

# From an Existing Contract
If you already have a smart contract deployed to Ethereum mainnet or one of the testnets, bootstrapping a new subgraph from this contract can be a good way to get started on the Legacy Explorer. 

You can use this command to create a subgraph that indexes all events from an existing contract. This will attempt to fetch the contract ABI from Etherscan and falls back to requesting a local file path. If any optional arguments are missing from the command, it takes you through an interactive form. 

```sh
graph init \
  --product hosted-service
  --from-contract <CONTRACT_ADDRESS> \
  [--network <ETHEREUM_NETWORK>] \
  [--abi <FILE>] \
  <GITHUB_USER>/<SUBGRAPH_NAME> [<DIRECTORY>]
```

The `<GITHUB_USER>` in this case is your github user or organization name, `<SUBGRAPH_NAME>` is the name for your subgraph, and `<DIRECTORY>` is the optional name of the directory where graph init will put the example subgraph manifest.

The `<CONTRACT_ADDRESS>` is the address of your existing contract. `<ETHEREUM_NETWORK>` is the name of the Ethereum network that the contract lives on. `<FILE>` is a local path to a contract ABI file. Both `--network` and `--abi` are optional.

# From an Example Subgraph
The second mode `graph init` supports is creating a new project from an example subgraph. The following command does this:

```
graph init --from-example --product hosted-service <GITHUB_USER>/<SUBGRAPH_NAME> [<DIRECTORY>]
```

The example subgraph is based on the Gravity contract by Dani Grant that manages user avatars and emits `NewGravatar` or `UpdateGravatar` events whenever avatars are created or updated. The subgraph handles these events by writing `Gravatar` entities to the Graph Node store and ensuring these are updated according to the events. Continue on to the [subgraph manifest](https://thegraph.com/docs/developer/create-subgraph-hosted#the-subgraph-manifest) to better understand which events from your smart contracts to pay attention to, mappings, and more. 


## Supported Networks on the Legacy Explorer
Please note that the following networks are supported on the Legacy Explorer. Networks outside of Ethereum mainnet ('mainnet') are not currently supproted on [The Graph Explorer.](https://thegraph.com/explorer)

- `mainnet`
- `kovan`
- `rinkeby`
- `ropsten`
- `goerli`
- `poa-core`
- `poa-sokol`
- `xdai`
- `matic`
- `mumbai`
- `fantom`
- `bsc`
- `chapel`
- `clover`
- `avalanche`
- `fuji`
- `celo`
- `celo-alfajores`
- `fuse`
- `mbase`
- `arbitrum-one`
- `arbitrum-rinkeby`
- `optimism`
- `optimism-kovan`



