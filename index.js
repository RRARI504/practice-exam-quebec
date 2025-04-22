const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];

// #1 // 
const getNumberEntries = (object) => {
  let output = [];
 
//iterate through the object and return a new array of subarrays. Each subarray should include the key and the value
//from the object if the value is a a number datatype. 
//Do not use Object.keys, Object.values or other Object methodsin your implementation.
//getNumberEntries(purchases[0]); // [ ['quantity', 2 ], ['price', 12.99] ]
for(var key in object){
  if(typeof object[key] === 'number'){
    output.push([key, object[key]])
  }

}
return output;
  
};

// #2 // 
const addKeyValuePairs = (object, additions) => {

}
// #3 //
const filterByPrice = (array, price) => {
  //return a new array of only the items in the input array whose prices are greater than the input price.
  return array.filter(function(prices){
   return prices.price > price

  }, [])
  
 

};

// #4 //
const mapPurchases = (array) => {
 
  return array.map(function(string){
    let product = string.product.toUpperCase();
    let review = string.mostLikedReviews;
    let recent = review[review.length - 1].text;
    return `${product}` + ' - ' + 'Review:' + ' ' + `${recent}`

   
  }, [])

};

// #5 //
const accumulateString = (array) => {
  
  return array.reduce(function(acc, current){
    
    let value = current.quantity;
    let word = current.product.split(' ')[value - 1];
    return acc + word


  },'')
 
  
  
  
};

// #6 //
const findProduct = (array, product) => {
  

  
};

// #7 //
const filterByReviewLength = (array) => {
  
};


