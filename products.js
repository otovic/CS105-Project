products = [{
    id: 1,
    name: "Trenerka GD Green",
    price: "2000.00 RSD",
    description: `Predstavljamo vam naš novi pamučni gornji deo trenerke koji će vas osvojiti svojom udobnošću i modernim izgledom. Ova trenerka je savršena za opuštene trenutke kod kuće, šetnju gradom ili bilo koju drugu priliku kada želite izgledati casual, ali i stylish.

    Gornji deo trenerke je izrađen od visokokvalitetnog pamučnog materijala koji pruža mekoću i udobnost tokom nošenja. Ova mekana tkanina će vas zagrliti i omogućiti vam da se osećate prijatno i slobodno u svakom trenutku.`,
    image: 'images/products/product1.png',
    category: 1
},
{
    id: 2,
    name: "Haljina GD Green",
    price: "3400.00 RSD",
    description: `Predstavljamo vam našu prelepu haljinu koja će vas oduševiti svojim izuzetnim dizajnom i sofisticiranim stilom. Ova elegantna haljina je savršen izbor za posebne prilike poput gala večeri, venčanja, mature ili bilo kojeg drugog događaja na kojem želite zablistati.

    Haljina je izrađena od visokokvalitetnog materijala koji pruža udobnost tokom nošenja i istovremeno odiše luksuzom. Njen klasičan kroj naglašava žensku figuru na najbolji mogući način, ističući sve prave konture vašeg tela. Kombinacija modernih detalja sa tradicionalnim stilom čini ovu haljinu jedinstvenom i privlačnom.
    
    Dekolte haljine je delikatno oblikovan, pružajući sofisticirani izgled, dok lepršavi donji deo naglašava eleganciju i pokretljivost. Uz to, haljina ima elegantne, tanke kaiševe koji dodatno ističu struk, pružajući vam ženstvenu siluetu.`,
    image: 'images/products/product2.png',
    category: 1
},
{
    id: 3,
    name: "Trenerka DD Rose Gold",
    price: "2995.00 RSD",
    description: `Predstavljamo vam naš novi roze trenerku donjeg dela koja kombinuje udobnost i moderan izgled. Ova trenerka je savršena za opuštene trenutke kod kuće, vežbanje ili bilo koju drugu priliku kada želite izgledati casual, ali i šarmantno.

    Donji deo trenerke je izrađen od visokokvalitetnog materijala koji pruža mekoću i udobnost tokom nošenja. Ova lagana tkanina omogućava slobodno kretanje i osećaj prijatnosti, čineći je idealnom za sve aktivnosti.
    
    Dizajn donjeg dela trenerke je moderan i trendi, sa elastičnom trakom u struku koja pruža sigurno prijanjanje. Praktični džepovi omogućavaju vam da nosite svoje sitnice sa sobom, dok suženi kroj na člancima dodaje dodatnu dozu stila.
    
    `,
    image: 'images/products/product3.png',
    category: 2
},
{
    id: 4,
    name: "Slim Fit Majica",
    price: "2995.00 RSD",
    description: `Predstavljamo vam našu novu majicu koja spaja trendi dizajn i udobnost, čineći je savršenim izborom za svakodnevni stil. Ova majica je must-have komad u vašem garderoberu, pružajući vam širok spektar mogućnosti za kombinovanje i izražavanje sopstvenog stila.

    Izrađena od visokokvalitetnog materijala, ova majica pruža mekoću i prijatnost tokom nošenja. Lagana i prozračna tkanina omogućava vam da se osećate sveže i udobno tokom celog dana. Bilo da je nosite na poslu, šetnji ili opuštajućem izlasku, ova majica će vam pružiti savršenu kombinaciju udobnosti i stila.`,
    image: 'images/products/product4.png',
    category: 2
},
{
    id: 5,
    name: "Pantalone Desert",
    price: "2995.00 RSD",
    description: `Predstavljamo vam naše nove pantalone koje kombinuju stil i udobnost, čineći ih idealnim izborom za različite prilike. Ove pantalone su savršene za posao, šetnju gradom, večernji izlazak ili bilo koju drugu situaciju kada želite izgledati elegantno i osećati se udobno.

    Izrađene od visokokvalitetnih materijala, ove pantalone pružaju izuzetnu udobnost i istovremeno su izdržljive. Njihov kroj i materijal omogućavaju slobodu pokreta i prilagođavaju se obliku vašeg tela na najbolji mogući način.`,
    image: 'images/products/product5.png',
    category: 3
},
{
    id: 6,
    name: "Sorc Track",
    price: "2995.00 RSD",
    description: `Predstavljamo vam naš novi šorc koji će vam pružiti udobnost i slobodu kretanja tokom opuštenih trenutaka. Ovaj šorc je idealan za šetnju plažom, vežbanje ili bilo koju drugu priliku kada želite da se osećate lagano i komforno.

    Izrađen od visokokvalitetnih materijala, ovaj šorc pruža mekoću i prozračnost koja vam omogućava da se osećate sveže i udobno. Lagana tkanina doprinosi slobodi pokreta i omogućava vam da se opustite u svakom trenutku.`,
    image: 'images/products/product6.png',
    category: 3
}
]

function readProducts() {
    let content = document.getElementById("products")

    let category = localStorage.getItem('category')

    if (category == null || category == '') {
        category = 1
    }

    setTimeout(() => {
        content.innerHTML = ""

        for (let product of products) {
            if (product['category'] == +category || +category == 0) {
                content.innerHTML = content.innerHTML + `<a href="order.html?product=${product['id']}"><div class="product"><div class="product-image"><img src="${product['image']}"></div><div class="product-info"><p><b>${product['name']}</b></p><p>${product['price']}</p></div><div id="rot1" class="rot"><img src="images/plus.png"></div><div id="rot2" class="rot"><img src="images/plus.png"></div><div id="rot3" class="rot"><img src="images/plus.png"></div><div id="rot4" class="rot"><img src="images/plus.png"></div></div></a>`
            }
        }
    }, 1000)
}

function changeCategory(index) {
    localStorage.setItem('category', index)
}

let quantity = 0
let size = null

function loadProduct() {
    const queryString = window.location.search;
    const id = queryString.split("=")[1]
    let res = document.getElementById("product-image")
    let product = null 

    for(let p of products) {
        if(p['id'] == id) {
            product = p
            break
        }
    }

    res.innerHTML = `<img src='images/products/product${id}.png'>`

    res = document.getElementById("product-data")
    res.innerHTML = `
        <h1>${product['name']}</h1>
        <p>CENA: <b>${product['price']}</b></p>
        <p id="prod-desc">OPIS: ${product['description']}</p>
        <div id='sizes'>
            <div class='size' onclick='setSize("S")'>S</div>
            <div class='size' onclick='setSize("M")'>M</div>
            <div class='size' onclick='setSize("L")'>L</div>
            <div class='size' onclick='setSize("XL")'>XL</div>
            <div class='size' onclick='setSize("XXL")'>XXL</div>
            <div class='size' onclick='setSize("XXXL")'>XXXL</div>
        </div>
        <input id='quantity' type='number' min='0'>
        <button id='order' onclick='orderProduct(${id})'>NARUCI</button>
    `
}

function setSize(s) {
    size = s
}

function orderProduct(index) {
    let product = null

    for(let p of products) {
        if(p['id'] == index) {
            product = p
            break
        }
    }

    let quanti = document.getElementById("quantity").value

    if(quanti == '' || +quanti < 1) {
        alert("Izaberite kolicinu!")
        return
    }
    
    if(size == null) {
        alert("Izaberite velicinu!")
        return
    }

    alert(`USPESNO STE NARUCILI ${quanti} KOMADA ${product['name']} VELICINE ${size}`)
    window.location.href = "index.html";
}