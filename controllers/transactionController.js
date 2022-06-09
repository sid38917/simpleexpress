const Transaction = require("../models/transaction")
const midtransClient = require('midtrans-client');

let snap = new midtransClient.Snap({
        isProduction : false,
        serverKey : 'SB-Mid-server-SBcwc0khGJnagYzyNh0FEk7X'
    });

const addTransaction = async (req, res) => {
   
    console.log('user from transaction', req.user)
    const {delivery, shipping, itemsTotal, total, items} = req.body
    // const {product, measurements, fabric, customizes, address} = req.body

    // const payload = {

    // }
    try {
        const result = await Transaction.create({
            customer: req.customer._id,
            delivery, shipping, itemsTotal, items, total,
            status: 'pending'
        })

    
       res.status(201).json({
           status: 'success',
           message: 'success transaction',
           data: result
       })


    } catch(errr) {
        console.log(errr,'error')
        res.status(400).send(errr)
        console.log(errr)
    }

    
}

const getPayment = async(req, res, next) => {
    try{

        const {id} = req.params;
        const {email} = req.customer
        const result = await Transaction.findOne({
            _id: id
        })

        //console.log('result ====>', result)

        const delivery = result.delivery

        const {firstName, lastName, phone} = delivery

        if(result.payment.token) {
            const paymentData = result.payment
            res.status(200).json({
                status: 'succes',
                data: paymentData
            })
        } else {

            let parameter = {
                transaction_details: {
                    order_id: result._id,
                    gross_amount: result.total,

                }, 
                credit_card: {
                    secure: true
                },
                customer_details: {
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    phone: phone
                }

            }

            snap.createTransaction(parameter).then((transaction) => {
          // transaction token
          let transactionToken = transaction.token;
          console.log('transactionToken:', transactionToken);
          Transaction.updateOne(
            {
              _id: id,
            },
            {
              payment: transaction,
            }
          ).then((resultUpdate) => {
            res.status(200).json({
              status: 'success',
              data: transaction,
            });
          });
        }) .catch((err) => {
          console.log('error', err);
        });
    }
    
    } catch (err) {
    console.log(err, 'error')
    res.status(400).send(err)
}
    }

    const checkTransaction = async(req, res, next) => {
        console.log('data transaction check ===>', req.body)
        const {order_id, transaction_status} = req.body
      
        try {
          const resultUpdate = await Transaction.updateOne({
            _id: order_id
          }, {
            status: transaction_status,
            paymentResult: req.body
          })
      
          console.log('update transaction', resultUpdate)
          res.status(200).json("ok")
        } catch (err) {
          console.log(err, 'error');
          res.status(400).send(err);
        }
    }

const getTransaction = async (req, res, next) => {
    const customer = req.customer._id
    try {
        const result = await Transaction.find({
            customer
        })

        res.status(200).json({
            status: '',
            data: result
        })
    } catch (err) {
        console.log('error', err)
        res.status(400).send(err)

    }
}

module.exports = { addTransaction, getTransaction, getPayment, checkTransaction}

// const delivery = async (req, res, next) => {
//     const {firstName, lastName, country, state, mobileNumber, postCode, address } = req.body
//     twry {
//         const result = await Transaction.create({
//             firstName, lastName, country, state, mobileNumber, postCode, address
//         })
//         let payload = {
//             firstName: result.firstName,
//             lastName: result.lastName,
//             country: result.country,
//             state: result.state,
//             mobileNumber: result.mobileNumber,
//             postCode: result.postCode,
//             address: result.address
//         }

//         res.status(200).json({
//             message: 'finished page',
//             data: {...payload},
            
            
//         })
//     } catch (err) {
//         console.log(err, 'error finished this page')
//     }
// }





