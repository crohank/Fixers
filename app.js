// // import express from 'express';
// // import bodyParser from 'body-parser';
// // import { fixMessagesFromText, parseFixMsg } from 'parse-fix'; // Correctly import functions

// // const app = express();

// // // Middleware to parse form data (for POST requests)
// // app.use(bodyParser.urlencoded({ extended: true }));

// // // Serve static files (HTML, CSS, JS, images) from the 'public' folder
// // app.use(express.static('public'));

// // // Route to handle FIX message parsing
// // app.post('/parse', (req, res) => {
// //   let fixMessage = req.body.fixMessage;

// //   // Ensure the fixMessage is a string
// //   if (typeof fixMessage !== 'string') {
// //     return res.status(400).send('Invalid FIX message format');
// //   }

// //   // Log the received FIX message
// //   console.log('Received FIX Message:', fixMessage);

// //   // Ensure the correct delimiter for FIX message (replace pipe '|' with SOH if necessary)
// //   fixMessage = fixMessage.replace(/\|/g, '\x01').replace(/\n/g, '\x01'); // Replace pipe and newline with SOH

// //   try {
// //     // Extract individual FIX messages from the input text
// //     const messages = fixMessagesFromText(fixMessage);

// //     // Log extracted messages for debugging
// //     console.log('Extracted Messages:', messages);

// //     // Check if any message was extracted
// //     if (messages.length === 0) {
// //       console.error('No messages extracted from the input text.');
// //       return res.status(400).send('No valid FIX messages extracted');
// //     }

// //     // Parse each FIX message using parseFixMsg
// //     const parsedMessages = messages.map(msg => parseFixMsg(msg));

// //     // Log the parsed messages
// //     console.log('Parsed Messages:', parsedMessages);

// //     // Check if any message was parsed
// //     if (parsedMessages.length === 0 || parsedMessages.every(msg => Object.keys(msg).length === 0)) {
// //       console.error('Parsed messages are empty or invalid.');
// //       return res.status(400).send('Parsed messages are empty or invalid');
// //     }

// //     // Send parsed data as JSON response
// //     res.json(parsedMessages);
// //   } catch (error) {
// //     // Log the error for debugging
// //     console.error('Error parsing FIX message:', error);
// //     res.status(400).send('Error parsing FIX message');
// //   }
// // });

// // // Start the server
// // app.listen(3000, () => {
// //   console.log('Server is running on http://localhost:3000');
// // });

// import express from 'express';
// import bodyParser from 'body-parser';
// import { parseFixText, fixMessagesFromText, parseFixMsg } from 'parse-fix'; // Correctly import functions

// const app = express();

// // Middleware to parse form data (for POST requests)
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files (HTML, CSS, JS, images) from the 'public' folder
// app.use(express.static('public'));

// // Route to handle FIX message parsing
// app.post('/parse', (req, res) => {
//   let fixMessage = req.body.fixMessage;

//   // Ensure the fixMessage is a string
//   if (typeof fixMessage !== 'string') {
//     return res.status(400).send('Invalid FIX message format');
//   }

//   // Log the received FIX message
//   console.log('Received FIX Message:', fixMessage);

//   // Prepare the FIX message for parsing by replacing unrecognized delimiters
//   // This should handle standard delimiters and format the message properly
//   // We will attempt to interpret the received message format
//   try {
//     // First, check if the message needs any preprocessing (e.g., adding delimiters)
//     if (!fixMessage.includes('\x01')) {
//       // Insert SOH character between fields if not present
//       fixMessage = fixMessage.replace(/(\d+=\S+)(?=\d+=)/g, '$1\x01');
//     }

//     // Log the modified message for debugging
//     console.log('Prepared FIX Message:', fixMessage);

//     // Extract individual FIX messages from the input text
//     const messages = fixMessagesFromText(fixMessage);
//     console.log('Extracted Messages:', messages);

//     // Check if any message was extracted
//     if (messages.length === 0) {
//       return res.status(400).send('No valid FIX messages extracted');
//     }

//     // Parse each FIX message using parseFixMsg
//     const parsedMessages = messages.map(msg => parseFixMsg(msg));
//     console.log('Parsed Messages:', parsedMessages);

//     // Check if any message was parsed
//     if (parsedMessages.length === 0 || parsedMessages.every(msg => Object.keys(msg).length === 0)) {
//       return res.status(400).send('Parsed messages are empty or invalid.');
//     }

//     // Send parsed data as JSON response
//     res.json(parsedMessages);
//   } catch (error) {
//     console.error('Error parsing FIX message:', error);
//     res.status(400).send('Error parsing FIX message: ' + error.message);
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

// import express from 'express';
// import bodyParser from 'body-parser';
// import { fixMessagesFromText, parseFixMsg } from 'parse-fix'; // Correctly import functions

// const app = express();

// // Middleware to parse form data (for POST requests)
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files (HTML, CSS, JS, images) from the 'public' folder
// app.use(express.static('public'));

// // Route to handle FIX message parsing
// app.post('/parse', (req, res) => {
//   let fixMessage = req.body.fixMessage;

//   // Ensure the fixMessage is a string
//   if (typeof fixMessage !== 'string') {
//     return res.status(400).send('Invalid FIX message format');
//   }

//   // Log the received FIX message
//   console.log('Received FIX Message:', fixMessage);

//   // Ensure the correct delimiter for FIX message (replace pipe '|' with SOH if necessary)
//   fixMessage = fixMessage.replace(/\|/g, '\x01').replace(/\n/g, '\x01'); // Replace pipe and newline with SOH

//   try {
//     // Extract individual FIX messages from the input text
//     const messages = fixMessagesFromText(fixMessage);

//     // Log extracted messages for debugging
//     console.log('Extracted Messages:', messages);

//     // Check if any message was extracted
//     if (messages.length === 0) {
//       console.error('No messages extracted from the input text.');
//       return res.status(400).send('No valid FIX messages extracted');
//     }

//     // Parse each FIX message using parseFixMsg
//     const parsedMessages = messages.map(msg => parseFixMsg(msg));

//     // Log the parsed messages
//     console.log('Parsed Messages:', parsedMessages);

//     // Check if any message was parsed
//     if (parsedMessages.length === 0 || parsedMessages.every(msg => Object.keys(msg).length === 0)) {
//       console.error('Parsed messages are empty or invalid.');
//       return res.status(400).send('Parsed messages are empty or invalid');
//     }

//     // Send parsed data as JSON response
//     res.json(parsedMessages);
//   } catch (error) {
//     // Log the error for debugging
//     console.error('Error parsing FIX message:', error);
//     res.status(400).send('Error parsing FIX message');
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

// import express from 'express';
// import bodyParser from 'body-parser';
// import { fixMessagesFromText, parseFixMsg } from 'parse-fix'; // Correctly import functions

// const app = express();

// // Middleware to parse form data (for POST requests)
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files (HTML, CSS, JS, images) from the 'public' folder
// app.use(express.static('public'));

// // Route to handle FIX message parsing
// app.post('/parse', (req, res) => {
//   let fixMessage = req.body.fixMessage;

//   // Ensure the fixMessage is a string
//   if (typeof fixMessage !== 'string') {
//     return res.status(400).send('Invalid FIX message format');
//   }

//   // Log the received FIX message
//   console.log('Received FIX Message:', fixMessage);

//   // Split the input text into messages based on the '8=' prefix
//   const messages = fixMessage.split(/(?=8=)/).map(msg => msg.trim()).filter(msg => msg);

//   // Log extracted messages for debugging
//   console.log('Extracted Messages:', messages);

//   // Check if any message was extracted
//   if (messages.length === 0) {
//     console.error('No messages extracted from the input text.');
//     return res.status(400).send('No valid FIX messages extracted');
//   }

//   try {
//     // Parse each FIX message using parseFixMsg
//     const parsedMessages = messages.map(msg => parseFixMsg(msg));

//     // Log the parsed messages
//     console.log('Parsed Messages:', parsedMessages);

//     // Check if any message was parsed
//     if (parsedMessages.length === 0 || parsedMessages.every(msg => Object.keys(msg).length === 0)) {
//       console.error('Parsed messages are empty or invalid.');
//       return res.status(400).send('Parsed messages are empty or invalid');
//     }

//     // Send parsed data as JSON response
//     res.json(parsedMessages);
//   } catch (error) {
//     // Log the error for debugging
//     console.error('Error parsing FIX message:', error);
//     res.status(400).send('Error parsing FIX message');
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

import express from 'express';
import bodyParser from 'body-parser';
import { fixMessagesFromText, parseFixMsg } from 'parse-fix'; // Correctly import functions

const app = express();

// Middleware to parse form data (for POST requests)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS, images) from the 'public' folder
app.use(express.static('public'));

// Route to handle FIX message parsing
app.post('/parse', (req, res) => {
  let fixMessage = req.body.fixMessage;

  // Ensure the fixMessage is a string
  if (typeof fixMessage !== 'string') {
    return res.status(400).send('Invalid FIX message format');
  }

  // Log the received FIX message
  console.log('Received FIX Message:', fixMessage);

  // Split the input text into messages based on the '8=F' prefix only
  const messages = fixMessage.split(/(?=8=F)/).map(msg => msg.trim()).filter(msg => msg);

  // Log extracted messages for debugging
  console.log('Extracted Messages:', messages);

  // Check if any message was extracted
  if (messages.length === 0) {
    console.error('No messages extracted from the input text.');
    return res.status(400).send('No valid FIX messages extracted');
  }

  try {
    // Parse the first message if only one is extracted
    const parsedMessages = messages.map(msg => parseFixMsg(msg));

    // Log the parsed messages
    console.log('Parsed Messages:', parsedMessages);

    // Only send back the first parsed message
    res.json(parsedMessages);

  } catch (error) {
    // Log the error for debugging
    console.error('Error parsing FIX message:', error);
    res.status(400).send('Error parsing FIX message');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


