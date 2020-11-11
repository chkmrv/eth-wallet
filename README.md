
## Information

To run locally as developer please start webpack.

 - `npm install && npm run start`
 - this will start React App
 - go to `http://localhost:3000/`
 
 Test of modal component 
  - `npm run test`

list of some ethereum addresses:
    - 0x0d324b999aba2e3c18833a82f8c51861e081dbfc
    - 0x480ea104ff7063ed0af41c98d8ef2457afe2a41c
    - 0x0d54e99aca61481151f6a12771c655962abf14c6
    - 0xc296d2cac9a3661094902b3833bf1a0bb37990e2
    - 0x1250D3EC432670dc7a61E1aAB3993a21106c0d87
    - 0xfFfa5813ED9a5DB4880D7303DB7d0cBe41bC771F

## Task description
The task for this challenge is to create a React application where you can check the balance and transactions for a specific Ethereum address.
In order to do that, you can use the API provided by Etherscan (​https://etherscan.io/apis)​ 

endpoints:

    - getAccountBalance:
On Rinkeby:
https://api-rinkeby.etherscan.io/api?module=account&action=balance&address=​<ADDRESS>

On Mainnet: https://api.etherscan.io/api?module=account&action=balance&address=<​ADDRESS>
    
    - getAccountTransactions:
On Rinkeby:
http://api-rinkeby.etherscan.io/api?module=account&action=txlist&sort=desc&address=<​ADDRESS>

On Mainnet: http://api.etherscan.io/api?module=account&action=txlist&sort=desc&address=<​ADDRESS>

You can use this Ethereum address as an example: 0xfFfa5813ED9a5DB4880D7303DB7d0cBe41bC771F

## The React app should have a form with these elements:
- A text field where the user can write an Ethereum address, it should be
checked that it is valid
- A dropdown where the user can choose the network used (“Rinkeby” or
“Mainnet”)
- A “Search” button
- A simple menu that includes the last 5 addresses used. When selecting an
address from the menu it should be inserted into the text field.

Once the search button is clicked, the Ethereum address and balance should be displayed together with a list of the 10 most recent transactions of the specified account sorted decreasingly by time. Use the mentioned endpoints to do this.
         
         
 When clicking on the Ethereum address, a modal window should be opened showing a QR-code with the address data (that could be scanned by any mobile app) and a “Close” button.
General requirements:
- A single page application using React.js
- Use of React hooks
- Use of Typescript
Nice to have
- Responsive design
