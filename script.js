document.getElementById("textForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const userRequest = document.getElementById("userRequest").value.split('.').filter(Boolean);
    const responseA = document.getElementById("responseA").value.split('.').filter(Boolean);
    const responseB = document.getElementById("responseB").value.split('.').filter(Boolean);

    let maxLength = Math.max(userRequest.length, responseA.length, responseB.length);
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>User Request</th>
                    <th>Response A</th>
                    <th>Response B</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 0; i < maxLength; i++) {
        tableHTML += `
            <tr>
                <td>${userRequest[i] || ''}</td>
                <td>${responseA[i] || ''}</td>
                <td>${responseB[i] || ''}</td>
            </tr>
        `;
    }

    tableHTML += `
            </tbody>
        </table>
    `;

    document.getElementById("result").innerHTML = tableHTML;
});
