# ERC20 contracts

The ERC-20 introduces a standard for **_Fungible_** Tokens.

## ERC20 Standard interface functions

```js
// Total Supply: The total number of tokens that will ever be issued
function totalSupply() public view returns (uint256);
// Balance Of: The account balance of a token owner's account
function balanceOf(address tokenOwner) public view returns (uint);
// Allowance: Returns a set number of tokens from a spender to the owner
function allowance(address tokenOwner, address spender) public view returns (uint);
// Transfer: Automatically executes transfers of a specified number of tokens to a specified address for transactions using the token
function transfer(address to, uint tokens) public returns (bool);
// Approve: Allows a spender to withdraw a set number of tokens from a specified account, up to a specific amount
function approve(address spender, uint tokens)  public returns (bool);
// Transfer From: Automatically executes transfers of a specified number of tokens from a specified address using the token
function transferFrom(address from, address to, uint tokens) public returns (bool);


```

## ERC20 Standard events

```js
// Approval: A log of an approved event (an event)
event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
// Transfer: An event triggered when a transfer is successful (an event)
event Transfer(address indexed from, address indexed to, uint tokens);

```

## Overriding ERC20 contract

change some behavior of parent contract function by using the “**_override_**” keyword and overriding the parent function in child contract.
Below, we override **_“decimals”_** function of ERC20 contract to have just 8 digits for our custom token

```js
function decimals() public view virtual override returns (uint8) {
        return 8;
    }

```

### super

The `super` keyword will let you call functions defined in a parent contract in their original form. They can be used in child contract using `super` keyword **_exactly as they are defined in parent contract even if they are overriden._**

for Example;
`super.revokeRole(role, account);`
