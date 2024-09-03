//Gets access to the table
const tableRef: HTMLElement = document.getElementById("codeTable")!
var databaseLoaded: HTMLElement = document.getElementById("databaseLoaded")!

//Adding a term to the table
// let newQuery = document.createElement('tr');
// tableRef.append(newQuery)

databaseLoaded.addEventListener("click", loadDatabase);

function loadDatabase() {
    databaseLoaded.textContent = "Database Loaded";
}