class Datasource{
    constructor(){
        // empty constructor
    }
    async getPrices(){
        /**
         * @return: returns an array in the form of a promise
         * 
         * each element in the array represents 1 transaction
         * each element is a dictionary
         * each dictionary has 3 keys, pair, mid and quote
         * 
         * pair: returns the currency pair
         * mid: returns an anonymous function to get the value between the buy and sell price
         * quote: returns the quote currency of the trade
         * 
         */

        // data is the prices data fetched from the https
        // it is a promise
        let data = await (await fetch("https://static.ngnrs.io/test/prices")).json();
        // gets the value stored in prices, which is an array of different dictionaries, 1 for each transaction
        data = data["data"]["prices"];
        // returns a new array containing dictionaries that have pair, mid and quote as keys
        return data.map(dict => {
            return {"pair": dict["pair"], 
                    "mid": () => (dict["buy"] + dict["sell"])/2, 
                    "quote": () => dict["pair"].substring(3)
                    }
            });
        
    }
}

let ds = new Datasource();
ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.err(error);
    });