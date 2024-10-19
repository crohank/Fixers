import express from 'express';
import bodyParser from 'body-parser';
import { fixMessagesFromText, parseFixMsg } from 'parse-fix'; // Import functions for parsing
import fs from 'fs/promises'; // Promises-based file system
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Mimic __dirname in ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware to parse form data (for POST requests)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS, images) from the 'public' folder
app.use(express.static('public'));

// Route to update fixLookup.mjs file
app.post('/update-fixlookup', async (req, res) => {
    const { fieldNumber, desc, enumValue, enumDesc } = req.body;

    const fixLookupPath = join(__dirname, 'node_modules/parse-fix/fixLookup.mjs');

    try {
        // Read the fixLookup.mjs file
        let fixLookupFile = await fs.readFile(fixLookupPath, 'utf-8');

        // Extract the object part from the mjs file
        const objectStartIndex = fixLookupFile.indexOf('{');
        const objectEndIndex = fixLookupFile.lastIndexOf('}');
        let fixLookupData = fixLookupFile.slice(objectStartIndex, objectEndIndex + 1);

        // Parse the extracted object part as a JavaScript object
        fixLookupData = eval(`(${fixLookupData})`);

        // Add or update the entry in the object
        fixLookupData[fieldNumber] = {
            desc,
            enum: enumValue && enumDesc ? { [enumValue]: enumDesc } : {}
        };

        // Convert the updated object back to a string
        const updatedFixLookup = `export const fixLookup = ${JSON.stringify(fixLookupData, null, 2)};`;

        // Write the updated content back to the fixLookup.mjs file
        await fs.writeFile(fixLookupPath, updatedFixLookup, 'utf-8');

        res.send('fixLookup.mjs file updated successfully');
    } catch (error) {
        console.error('Error parsing the fixLookup.mjs file:', error);
        res.status(500).send('Error parsing the fixLookup.mjs file.');
    }
});

// Route to handle FIX message parsing
app.post('/parse', (req, res) => {
    const fixMessage = req.body.fixMessage;

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
        // Parse the FIX messages
        const parsedMessages = messages.map(msg => parseFixMsg(msg));

        // Log the parsed messages
        console.log('Parsed Messages:', parsedMessages);

        // Send the parsed messages back to the client
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
