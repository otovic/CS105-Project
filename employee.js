const employees = [
    {
        name: "Petar Petrovic",
        age: "27",
        years: "3",
    },
    {
        name: "Marko Ilic",
        age: "22",
        years: "6",
    },
    {
        name: "Majli Sajrus",
        age: "35",
        years: "10",
    },
    {
        name: "Selena Gomez",
        age: "41",
        years: "1",
    },
    {
        name: "Kim Dzong Un",
        age: "24",
        years: "4",
    },
    {
        name: "Stefan Vuksanovic",
        age: "22",
        years: "2   ",
    }
]

function displayEmployeeInfo(index) {
    let container = document.getElementById("popup-container")
    let res = document.getElementById("employee-info")

    let employee = employees[index]

    res.innerHTML = `<p class="ei"><b>IME:</b> ${employee['name']}</p><p class="ei"><b>GODINE:</b> ${employee['age']}</p><p class="ei"><b>GODINE RADA:</b> ${employee['years']}</p>`

    container.style.display = "flex"
}

function closeEmployeeInfo() {
    document.getElementById("popup-container").style.display = "none"
}