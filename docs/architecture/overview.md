# Protocol Architecture

Layers:
- Asset Origination: onboarding, legal structuring, and custodial linking.
- Tokenization & Registry: Fractional ERC-1155 per asset series; registry mapping to off-chain records.
- Governance & Compliance: Whitelist KYC, jurisdictional gating, transfer restrictions.
- Liquidity & AMM plugs: Optional liquidity adapters for primary sales and secondary swaps.
- Oracles: Pricing updates, NAV, compliance signals.
- Settlement & Treasury: Proceeds distribution, redemptions, fees.

Key Components:
- RWARegistry (on-chain index of assets, custodians, metadata hash)
- FractionalSeries (ERC-1155 fractional units with series-level governance params)
- DistributionModule (pro-rata ERC20 stablecoin payout)
- ComplianceModule (transfer hooks; KYC/allowlist)
- OracleFeed (NAV & valuation updates)