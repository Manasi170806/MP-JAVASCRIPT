const apiUrl = 'https://api.rootnet.in/covid19-in/stats/latest';

document.addEventListener("DOMContentLoaded", () => {

    const table = document.querySelector("table");

    fetch("https://api.rootnet.in/covid19-in/stats/latest")
        .then((response) => response.json())
        .then((data) => {
            const states = data.data.regional;

            states.forEach((stateData, index) => 
            {
                const row = table.insertRow(-1);
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${stateData.loc}</td>
                    <td>${stateData.confirmedCasesIndian}</td>
                    <td>${stateData.confirmedCasesForeign}</td>
                    <td>${stateData.discharged}</td>
                    <td>${stateData.deaths}</td>
                    <td>${stateData.totalConfirmed}</td>
                `;
            });
        })
});