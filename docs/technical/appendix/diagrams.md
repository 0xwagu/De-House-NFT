# Diagrams

- System Architecture Diagram:
  - Wallets ↔ Frontend ↔ Contracts (Registry, Series, Compliance) ↔ Oracles ↔ Custodian/off-chain records

- Cross-Chain Keycard Verification:
  - Holder signs a message per chain → backend verifies ownership via RPC/providers → canonical registry updates membership.

- Distribution Flow:
  - Treasury → DistributionModule → pro-rata split to series holders → on-chain event logs for transparency.