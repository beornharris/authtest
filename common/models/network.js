var loopback = require('loopback');

function getUserId() {
  var ctx = loopback.getCurrentContext();
  console.log("CONTEXT: ", ctx);
  if (ctx && ctx.accessToken) {
    return ctx.accessToken.userId;
  }
  return null;
}

module.exports = function(Network) {

  Network.addContact = function(id, contact, callback) {

    var ctx = loopback.getCurrentContext();
    console.log("CONTEXT: ", ctx);
    return callback(null, {});
  }

  // Register it
  Network.remoteMethod(
    "addContact", {
      description: "Add a contact to the Addressbook",
      http: {
        path: "/:id/contacts",
        verb: "post"
      },
      accepts: [
        // {arg: 'req', type: 'object', http: {source: 'req'}},
        {
          arg: 'id', 
          type: 'string',
          required: true, 
          http: { source: 'query' }
        },
        {
          arg: 'contact', 
          type: 'object',
          required: true, 
          http: { source: 'body' }
        }
      ],
      returns: [ {arg: "body", type: "object", root: true}]
    }
  );


};
