module.exports = function(app) {
  var Account = app.models.Account;
  var Network = app.models.Network;

  var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten" ];

    ["user"].forEach(function(acType, idx) {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function(num, idx) {
        Account.create({
          //username: acType + num, 
          email: acType + num + "@username.com", 
          password: acType + num
        }, function(err, account) {
          console.log("Created Account ", account);
          // Create some contacts

          return account;
        });
      });

  });
}
