# Cross-Chain Registry Specification

Purpose:
- Maintain a canonical record of membership across multiple chains.
- Link keycard artifacts (NFTs, inscriptions) to a unified identity.

Core API (conceptual):
- registerKeycard(chain, txRef, owner, tier) → keycardId
- verifyOwnership(chain, owner, tokenRef) → bool
- listKeycards(owner) → [keycardId]
- getBenefits(keycardId) → [benefit]

Data Retention:
- Store opaque chain-specific references and periodic verification timestamps.
- Provide public read endpoints for transparency and gating.