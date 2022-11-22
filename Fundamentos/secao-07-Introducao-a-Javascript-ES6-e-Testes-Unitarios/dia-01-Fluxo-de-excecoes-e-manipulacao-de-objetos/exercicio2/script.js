const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          name: 'Marguerita',
          amount: 1,
          price: 25,
        },
        pepperoni: {
          name: 'Pepperoni',
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    order = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, ${order.address.number}, ${order.address.apartment} `
    console.log(order);
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    order.payment = '50,00'
    order = `Olá ${order.name}, o total do seu pedido de ${order.order.pizza.marguerita.name}, ${order.order.pizza.pepperoni.name}, e ${order.order.drinks.coke.type}, ${order.address.street}, é R$ ${order.payment} `
    console.log(order);
  
  };
  
  orderModifier(order);
  