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

    res.innerHTML = `
        <table border="1">
            <tr>
                <th>IME</th>
                <th>PREZIME</th>
                <th>NASLOV</th>
                <th>SADRZAJ</th>
                <th>TELEFON</th>
                <th>TIP</th>
            </tr>
        </table>
    `
}

function checkValidString(string) {
    if(string.split(" ").length > 1) { return false }
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