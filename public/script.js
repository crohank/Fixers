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

const form = document.getElementById('fixForm');
form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const fixMessage = document.getElementById('fixMessage').value;

  // Send the FIX message to the server via AJAX
  try {
    // Ensure the fetch is pointing to the correct server URL
    const response = await fetch('http://localhost:3000/parse', { // Full URL added
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        fixMessage: fixMessage,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to parse FIX message');
    }

    const parsedData = await response.json();

    // Build the table rows from the parsed data
    const tableBody = document.querySelector('#parsedTable tbody');
    tableBody.innerHTML = ''; // Clear any existing rows

    // Loop over parsed data (which is an array of arrays)
    parsedData.forEach(messageArray => {
      messageArray.forEach(row => {
        const tr = document.createElement('tr');

        // Append each field (fieldNo, fieldName, value, lookup if available)
        tr.innerHTML = `
          <td>${row.fieldNo || ''}</td>
          <td>${row.fieldName || ''}</td>
          <td>${row.value || ''}</td>
          <td>${row.lookup || ''}</td>
        `;

        tableBody.appendChild(tr);
      });
    });
  } catch (error) {
    console.error('Error:', error);
    alert('Error parsing FIX message. Please try again.');
  }
});
