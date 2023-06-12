function checkEmail() {
    let email = document.getElementById("newsletter-input").value

    let emailparts = email.split("@")

    if(emailparts.length == 1) {
        alert("Unesite ispravan mejl!")
        return
    }

    let domain = emailparts[1].split('.')

    if(domain.length == 1) {
        alert("Unesite ispravan mejl!")
        return
    }

    if(emailparts[0] == '') {
        alert("Unesite ispravan mejl!")
        return
    }

    if(domain[1] == '') {
        alert("Unesite ispravan mejl!")
        return
    }

    if(domain.length == 2) {
        if(domain[0] == '') {
            alert("Unesite ispravan mejl!")
            return 
        }

        if(!['gmail', 'protonmail', 'hotmail', 'outlook'].includes(domain[0])) {
            alert("Podrzani domeni su gmail, protonmail, hotmail, outlook")
            return 
        }

        if(!['com', 'rs', 'org'].includes(domain[1])) {
            alert("Podrzani domeni su com, rs, org")
            return 
        }

        alert("USPESNO STESE PRIJAVILI NA NAS NEWSLETTER!")
    }

    if(domain.length > 2) {
        if(domain[2] == '' || domain[1] == '' || domain[0] == '') {
            alert("Unesite ispravan mejl!")
            return 
        }

        if(!['gmail', 'protonmail', 'hotmail', 'outlook'].includes(domain[0])) {
            alert("Podrzani domeni su gmail, protonmail, hotmail, outlook")
            return 
        }

        if(!['co', 'ac'].includes(domain[1])) {
            alert("Unesite ispravan mejl!")
            return 
        }

        if(!['com', 'rs', 'org'].includes(domain[2])) {
            alert("Podrzani domeni su com, rs, org")
            return 
        }

        if(domain[1] == 'ac') {
            alert("USPESNO STE SE PRIJAVILI NA NAS NEWSLETTER I DOBILI SPECIJALNI POPUST!")
        }else {
            alert("USPESNO STE SE PRIJAVILI NA NAS NEWSLETTER!")
        }
    }
}