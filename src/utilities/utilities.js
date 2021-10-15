export function calculatePrice(price, currency) {
    switch (currency) {
      case 'EUR':
        return price * 0.86;
      case 'CAD':
        return price * 1.33;
      case 'GHC':
        return price * 5.99;
      default:
        return price;
    }
  }
  
  export function calculateTotal(cart, currency) {
    let totalUSD = 0;
    Object.keys(cart).forEach((itemName) => {
      totalUSD += cart[itemName].price * cart[itemName].quantity;
    });
    return calculatePrice(totalUSD, currency).toFixed(2);
  }
  
  export function getCurrencySymbol(currencyFilter) {
    switch (currencyFilter) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'CAD':
        return '$';
      case 'GHC':
        return '₵'
      default:
        return '';
    }
  }
  