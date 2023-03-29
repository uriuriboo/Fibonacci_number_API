const functions = require("firebase-functions");


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.fib = functions.https.onRequest((request, response) => {
  const n = request.query.n;
  if (n == null || n == undefined || n == "") {
    response.status(400).send({status: 400, message: "Bad request"});
  }
  const fib = Array(n+1);
  fib[0] = 0;

  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      fib[1] = 1;
    } else {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  }

  functions.logger.info("Hello logs!", {structuredData: true});
  if (!isNaN(n) && n >= 0) {
    response.status(200).send({result: fib[n]});
  } else {
    response.status(400).send({status: 400, message: "Bad request"});
  }
});
