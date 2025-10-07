# Implementation Guidelines: Deployment

Environments:
- Testnet: staging, oracle mocks, faucet tokens
- Mainnet: production custodians, real oracles, stablecoin payouts

Steps:
1) Deploy Registry
2) Deploy Series implementation and initialize governance parameters
3) Wire Compliance module (KYC list) and Oracle feed
4) Configure primary sale logic (crowdsale or direct mint)
5) Set up distribution treasury for payouts

Operational Best Practices:
- Maintain off-chain records and custodian attestations
- Monitor oracle feeds and series parameters
- Periodically reconcile on-chain ownership vs. registries