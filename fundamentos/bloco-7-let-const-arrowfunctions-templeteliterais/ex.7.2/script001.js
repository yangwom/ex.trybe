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
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };


  const orderModifier = (order) => {
    order.name = 'luiz silva'
    order.payment.total =' 50,00'
    //const pizza = Object.keys(order.order.pizza)
    const coke  = Object.values(order.order.drinks.coke.type)
    console.log(coke)
 
  return(`ola ${order.name} o total do seu de ${pizza[0]} , ${pizza[1]} ${order.order.drinks.coke.type} é ${order.payment.total} `)
  }
   
   console.log(orderModifier(order));
   

  //  Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
//   Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

  
  // const customerInfo = (order) => {
  //     const deliveryPerson = order.order.delivery.deliveryPerson;
  //     const nameCustomizado = order['name'];
  //     const telefone = order['phoneNumber'];
  //     const streetKkk = order['address'].street;
  //     const numeroDaCasa = order['address'].number;
  //     const numeroDoApartamento = order['address'].apartment;
    
  // console.log(`Ola ${deliveryPerson} entrega para ${nameCustomizado} , ta aqui o telefone ${telefone} ${streetKkk} o numero do local ${numeroDaCasa} e do ap é ${numeroDoApartamento}` )
  // }
  
 //customerInfo(order);
  
