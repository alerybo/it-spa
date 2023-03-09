const key = "it_spa_cart";

/* 
  {
    'Pokój binarny': { price: 170, quantity: 2 }
  }
*/

export const cartManager = {
  addItem(item) {
    const cart = localStorage.getItem(key);
    let content;

    if (cart === null) {
      content = {
        [item.name]: { price: item.price, quantity: 1 },
      };
    } else {
      content = JSON.parse(cart);

      if (item.name in content) {
        content[item.name].quantity += 1;
      } else {
        const newItem = {
          [item.name]: { price: item.price, quantity: 1 },
        };

        Object.assign(content, newItem);
      }
    }

    localStorage.setItem(key, JSON.stringify(content));
  },

  removeItem(item) {
    const cart = localStorage.getItem(key);

    if (cart !== null) {
      const content = JSON.parse(cart);

      if (item.name in content) {
        if (content[item.name].quantity > 1) {
          content[item.name].quantity -= 1;
        } else {
          delete content[item.name];
        }
      }

      localStorage.setItem(key, JSON.stringify(content));
    }
  },

  getAllItems() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return [];
    } else {
      const content = JSON.parse(cart);

      // [['Pokój unarny', { price: 170, quantity: 1 }], ['Pokój binarny, { price: 140, quantity: 3 }], itd.]
      return Object.entries(content).map((entry) => {
        const [name, value] = entry;
        const { price, quantity } = value;

        return {
          name, // rownowazne z --> name: name,
          price,
          quantity,
        };
      });
    }
  },

  getTotalPrice() {
    const cart = localStorage.getItem(key);

    if (cart === null) {
      return "0.00";
    } else {
      const content = JSON.parse(cart);

      // [{ price: 170, quantity: 1 }, { price: 140, quantity: 3 }, itd.]
      return Object.values(content)
        .reduce(
          (totalPrice, item) => totalPrice + item.price * item.quantity,
          0
        )
        .toFixed(2);
    }
  },
};
