/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var messageRouter = express.Router();

  messageRouter.get('/', function(req, res) {
    res.send({
      'message': [
        {
          avatar: "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_s_56.png",
          senderName: "Sathish",
          subject: "FW: Jobs to Apply for",
          content: "The only thing I can think to do is trigger an event when the window resizes and dynamically set a new fixed width on text-div, but this just feels inelegant, especially considering padding and other neighboring artifacts I'd have to subtract out to get a proper width."
        },
        {
          avatar: "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_i_56.png",
          senderName: "Igor",
          subject: "FW: Jobs to Apply for",
          content: "The only thing I can think to do is trigger an event when the window resizes and dynamically set a new fixed width on text-div, but this just feels inelegant, especially considering padding and other neighboring artifacts I'd have to subtract out to get a proper width."
        },
        {
          avatar: "https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_m_56.png",
          senderName: "Max",
          subject: "FW: Jobs to Apply for",
          content: "The only thing I can think to do is trigger an event when the window resizes and dynamically set a new fixed width on text-div, but this just feels inelegant, especially considering padding and other neighboring artifacts I'd have to subtract out to get a proper width."
        }
      ]
    });
  });

  messageRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  messageRouter.get('/:id', function(req, res) {
    res.send({
      'message': {
        id: req.params.id
      }
    });
  });

  messageRouter.put('/:id', function(req, res) {
    res.send({
      'message': {
        id: req.params.id
      }
    });
  });

  messageRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/message', require('body-parser'));
  app.use('/api/message', messageRouter);
};
