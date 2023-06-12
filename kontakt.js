let messages = []

function submitValues() {
    let res = document.getElementById("message-container")
    let name = document.getElementById("namefld")

    if(checkValidString(name.value)) { 
        if(!checkOnlyLetters(name.value)) {
            alert("Ime moze sadrzati samo slova i mora biti samo jedna rec!")
            return
        }
    }
    else {
        alert("Ime moze sadrzati samo slova i mora biti samo jedna rec!")
        return
    }

    if(name.value == "") {
        alert("Ime ne moze da bude prazno!")
        return
    }

    let surname = document.getElementById("surnamefld")

    if(checkValidString(surname.value)) { 
        if(!checkOnlyLetters(surname.value)) {
            alert("Prezime moze sadrzati samo slova i mora biti samo jedna rec!")
            return
        }
    }
    else {
        alert("Prezime moze sadrzati samo slova i mora biti samo jedna rec!")
        return
    }

    if(surname == "") {
        alert("Ime ne moze da bude prazno!")
        return
    }

    let msgtitle = document.getElementById("titlefld").value

    if(msgtitle == "") {
        alert("Naslov poruke ne moze biti prazan!")
        return 
    }

    let msgcontent = document.getElementById("txt-area").value

    if(msgcontent.length > 100 || msgcontent.length < 20) {
        alert("Sadrzaj poruke mora da ima minimalno 20 karaktera a najvise 100!")
        return 
    }

    let phonenumber = document.getElementById("phonefld").value
    
    if(!checkNumber(phonenumber)) {
        alert("Unesite ispravan broj telefona!")
        return 
    }

    let messagetype = document.getElementById("tip").value
    
    let newmsg = {
        name: name.value,
        surname: surname.value,
        title: msgtitle,
        content: msgcontent,
        number: phonenumber,
        type: messagetype
    }

    messages.push(newmsg)
    
    if(res.innerHTML.includes("<h1>")) {
        res.innerHTML = `
        <table border="1" id="tabelica">
            <tr>
                <th>IME</th>
                <th>PREZIME</th>
                <th>NASLOV</th>
                <th>SADRZAJ</th>
                <th>TELEFON</th>
                <th>TIP</th>
            </tr>
            <tbody>
            </tbody>
        </table>
    `
    }

    let tabelica = document.getElementById("tabelica")

    const newRow = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = newmsg['name'];

    const cell2 = document.createElement("td");
    cell2.textContent = newmsg['surname'];

    const cell3 = document.createElement("td");
    cell3.textContent = newmsg['title'];

    const cell4 = document.createElement("td");
    cell4.textContent = newmsg['content'];

    const cell5 = document.createElement("td");
    cell5.textContent = newmsg['number'];

    const cell6 = document.createElement("td");
    cell6.textContent = newmsg['type'];

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    newRow.appendChild(cell5);
    newRow.appendChild(cell6);

    tabelica.querySelector("tbody").appendChild(newRow);
}

function checkValidString(string) {
    if(string.split(" ").length > 1) { return false }
    return true
}

function checkNumber(number) {
    if(!checkOnlyNumbers(number)) {
        return false
    }

    if(number == "") {
        return false
    }

    let index = 0

    for(let c of number) {
        if(c == "+" && index != 0) {
            return false
        }
        index++
    }

    return true
}

function checkOnlyNumbers(number) {
    for(let c of number) {
        if(!['+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(c.toLowerCase())) {
            return false
        }
    }

    return true
}

function checkOnlyLetters(string) {
    for(let c of string) {
        if(!['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].includes(c.toLowerCase())) {
            return false
        }
    }

    return true
}