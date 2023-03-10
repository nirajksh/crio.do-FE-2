const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    jobTitle: "Front-end Ninja"
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    jobTitle: "Illustrator"
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    jobTitle: "Backend Engineer"
  }
];

const getDataRow = (dataObj) => {
  const tableRow = document.createElement("tr");
  const tableData = `
  <td>${dataObj.id}</td>
  <td>${dataObj.fullName}</td>
  <td>${dataObj.jobTitle}</td>
  `;
  tableRow.innerHTML = tableData;
  return tableRow;
};

const addDataToTable = (data) => {
  const tableData = document.getElementById("table-data");
  data.forEach((item) => {
    const row = getDataRow(item);
    tableData.appendChild(row);
  });
};
//addDataToTable(team);
console.log(document.body);

//ADD YOUR CODE BELOW

//TODO: Create a promise to resolve `team`
const data = new Promise(function (resolve, reject) {
  try {
    resolve(team);
  } catch {
    reject("Could not resolve promise");
  }
});
//console.log(data);
data.then(addDataToTable(team));
//TODO: Consume the promise and use addDataToTable(data)
//Function to add the data value resolved to table.
