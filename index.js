const result = document.getElementById("result");

paypal.Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '11.0'
    
              }
            }]
          });
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
              console.log(details);

              result.innerHTML = `Status:${details.status} <br> Your Teasaction ID : ${details.id} <br> ` + JSON.stringify(details,4);
            
          });
     },
     onCancel: function (data) {
         
             result.innerHTML = `Status: "Failed" <br> ${JSON.stringify(data)}`
        }
      }).render('#paypal-button-container'); 