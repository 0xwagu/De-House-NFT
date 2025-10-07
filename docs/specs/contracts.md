# Technical Specifications: Smart Contracts

Interfaces (Solidity snippets):

```solidity
// IRegistry: maps assetId => series, metadata, custodian
interface IRegistry {
    function registerAsset(bytes32 assetId, address series, string calldata metaURI) external;
    function getSeries(bytes32 assetId) external view returns (address);
    function metaURI(bytes32 assetId) external view returns (string memory);
}

// IFractionalSeries: ERC-1155 fractional units
interface IFractionalSeries {
    event Minted(bytes32 indexed assetId, address indexed to, uint256 amount);
    event Distribution(address indexed token, uint256 total);
    function mint(bytes32 assetId, address to, uint256 amount) external;
    function distribute(address erc20, uint256 total) external;
}

// IComplianceModule: transfer gating
interface IComplianceModule {
    function canTransfer(address from, address to, bytes32 assetId, uint256 amount) external view returns (bool);
}
```

Design Notes:
- Series token is ERC-1155 with id = assetId-derived token id
- Distribution pulls from treasury and splits pro-rata
- Compliance hooks called pre-transfer; revert if disallowed