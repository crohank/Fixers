// // const form = document.getElementById('fixForm');
// // form.addEventListener('submit', async function (event) {
// //   event.preventDefault();

// //   const fixMessage = document.getElementById('fixMessage').value;

// //   // Send the FIX message to the server via AJAX
// //   try {
// //     // Ensure the fetch is pointing to the correct server URL
// //     const response = await fetch('http://localhost:3000/parse', { // Full URL added
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/x-www-form-urlencoded',
// //       },
// //       body: new URLSearchParams({
// //         fixMessage: fixMessage,
// //       }),
// //     });

// //     if (!response.ok) {
// //       throw new Error('Failed to parse FIX message');
// //     }

// //     const parsedData = await response.json();

// //     // Build the table rows from the parsed data
// //     const tableBody = document.querySelector('#parsedTable tbody');
// //     tableBody.innerHTML = ''; // Clear any existing rows

// //     // Loop over parsed data (which is an array of arrays)
// //     parsedData.forEach(messageArray => {
// //       messageArray.forEach(row => {
// //         const tr = document.createElement('tr');

// //         // Append each field (fieldNo, fieldName, value, lookup if available)
// //         tr.innerHTML = `
// //           <td>${row.fieldNo || ''}</td>
// //           <td>${row.fieldName || ''}</td>
// //           <td>${row.value || ''}</td>
// //           <td>${row.lookup || ''}</td>
// //         `;

// //         tableBody.appendChild(tr);
// //       });
// //     });
// //   } catch (error) {
// //     console.error('Error:', error);
// //     alert('Error parsing FIX message. Please try again.');
// //   }
// // });

// const form = document.getElementById('fixForm');
// form.addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const fixMessage = document.getElementById('fixMessage').value;

//   // Send the FIX message to the server via AJAX
//   try {
//     // Ensure the fetch is pointing to the correct server URL
//     const response = await fetch('http://localhost:3000/parse', { // Full URL added
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({
//         fixMessage: fixMessage,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to parse FIX message');
//     }

//     const parsedData = await response.json();

//     // Build the table rows from the parsed data
//     const tableBody = document.querySelector('#parsedTable tbody');
//     tableBody.innerHTML = ''; // Clear any existing rows

//     // Loop over parsed data (which is an array of arrays)
//     parsedData.forEach(messageArray => {
//       messageArray.forEach(row => {
//         const tr = document.createElement('tr');

//         // Append each field (fieldNo, fieldName, value, lookup if available)
//         tr.innerHTML = `
//           <td>${row.fieldNo || ''}</td>
//           <td>${row.fieldName || ''}</td>
//           <td>${row.value || ''}</td>
//           <td>${row.lookup || ''}</td>
//         `;

//         tableBody.appendChild(tr);
//       });
//     });
//   } catch (error) {
//     console.error('Error:', error);
//     alert('Error parsing FIX message. Please try again.');
//   }
// });
// const form = document.getElementById('fixForm');
// const messageListTableBody = document.querySelector('#messageList tbody');
// const parsedTableBody = document.querySelector('#parsedTable tbody');

// form.addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const fixMessage = document.getElementById('fixMessage').value;

//   // Send the FIX message to the server via AJAX
//   try {
//     const response = await fetch('http://localhost:3000/parse', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({
//         fixMessage: fixMessage,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to parse FIX message');
//     }

//     const parsedData = await response.json();
//     messageListTableBody.innerHTML = ''; // Clear existing message list

//     // Clear existing parsed data table
//     parsedTableBody.innerHTML = '';

//     // Loop over parsed data (which is an array of arrays)
//     parsedData.forEach((messageArray, index) => {
//       // Create a summary for the message
//       const summary = messageArray.map(row => `${row.fieldNo}=${row.value}`).join(', ');

//       // Add message to the message list table
//       const messageRow = document.createElement('tr');
//       messageRow.innerHTML = `
//         <td>${index + 1}</td>
//         <td>${summary}</td>
//       `;
//       messageRow.addEventListener('click', () => populateParsedTable(messageArray));
//       messageListTableBody.appendChild(messageRow);
//     });
//   } catch (error) {
//     console.error('Error:', error);
//     alert('Error parsing FIX message. Please try again.');
//   }
// });

// // Function to populate the existing parsed table
// function populateParsedTable(messageArray) {
//   parsedTableBody.innerHTML = ''; // Clear any existing rows
//   messageArray.forEach(row => {
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//       <td>${row.fieldNo || ''}</td>
//       <td>${row.fieldName || ''}</td>
//       <td>${row.value || ''}</td>
//       <td>${row.lookup || ''}</td>
//     `;
//     parsedTableBody.appendChild(tr);
//   });
// }
// const form = document.getElementById('fixForm');
// form.addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const fixMessage = document.getElementById('fixMessage').value;

//   // Send the FIX message to the server via AJAX
//   const response = await fetch('/parse', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: new URLSearchParams({
//       fixMessage: fixMessage,
//     }),
//   });

//   // Check if response is OK
//   if (!response.ok) {
//     console.error('Error parsing FIX message:', await response.text());
//     return;
//   }

//   const parsedMessages = await response.json();

//   // Build the table rows from the parsed data
//   const messageList = document.querySelector('#parsedMessages tbody');
//   messageList.innerHTML = ''; // Clear any existing rows

//   // Clear the detailed parsed table
//   const tableBody = document.querySelector('#parsedTable tbody');
//   tableBody.innerHTML = ''; // Clear any existing rows

//   // Populate the message list table with field names
//   parsedMessages.forEach((msg, index) => {
//     const tr = document.createElement('tr');
//     const fieldName = msg[0]?.fieldName || 'Unknown'; // Get the field name of the first field

//     tr.innerHTML = `<td>${fieldName}</td>`;
//     tr.addEventListener('click', () => {
//       populateDetails(msg); // Populate the detailed table on click
//     });

//     messageList.appendChild(tr);
//   });
// });

// // Function to populate detailed parsed table with message data
// function populateDetails(parsedMessage) {
//   const tableBody = document.querySelector('#parsedTable tbody');
//   tableBody.innerHTML = ''; // Clear existing rows

//   parsedMessage.forEach(row => {
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//       <td>${row.fieldNo}</td>
//       <td>${row.fieldName}</td>
//       <td>${row.value}</td>
//       <td>${row.lookup || ''}</td>
//     `;
//     tableBody.appendChild(tr);
//   });
// }
// const form = document.getElementById('fixForm');
// form.addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const fixMessage = document.getElementById('fixMessage').value;

//   // Send the FIX message to the server via AJAX
//   const response = await fetch('/parse', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: new URLSearchParams({
//       fixMessage: fixMessage,
//     }),
//   });

//   const parsedData = await response.json();

//   // Build the table rows from the parsed data
//   const tableBody = document.querySelector('#parsedTable tbody');
//   tableBody.innerHTML = ''; // Clear any existing rows
//   parsedData.forEach(row => {
//     const tr = document.createElement('tr');

//     // Append the fieldName of FieldNumber: 35
//     tr.innerHTML = `
//       <td>${row.fieldName}</td>
//     `;

//     tableBody.appendChild(tr);
//   });
// });


//263
const form = document.getElementById('fixForm');
form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const fixMessage = document.getElementById('fixMessage').value;

  // Send the FIX message to the server via AJAX
  const response = await fetch('/parse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      fixMessage: fixMessage,
    }),
  });

  // Check if response is OK
  if (!response.ok) {
    console.error('Error parsing FIX message:', await response.text());
    return;
  }

  const parsedMessages = await response.json();

  // Build the table rows from the parsed data
  const messageList = document.querySelector('#parsedMessages tbody');
  messageList.innerHTML = ''; // Clear any existing rows

  // Clear the detailed parsed table
  const tableBody = document.querySelector('#parsedTable tbody');
  tableBody.innerHTML = ''; // Clear any existing rows

  // Populate the message list table with field names
  parsedMessages.forEach((msg, index) => {
    const tr = document.createElement('tr');
    const fieldName = msg[0]?.fieldName || 'Unknown'; // Get the field name of the first field

    tr.innerHTML = `<td>${fieldName}</td>`;
    tr.addEventListener('click', () => {
      populateDetails(msg); // Populate the detailed table on click
    });

    messageList.appendChild(tr);
  });
});

// Function to populate detailed parsed table with message data
function populateDetails(parsedMessage) {
  const tableBody = document.querySelector('#parsedTable tbody');
  tableBody.innerHTML = ''; // Clear existing rows

  parsedMessage.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.fieldNo}</td>
      <td>${row.fieldName}</td>
      <td>${row.value}</td>
      <td>${row.lookup || ''}</td>
    `;
    tableBody.appendChild(tr);
  });
}




