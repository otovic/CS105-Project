function setInitialValues() {
    let category = localStorage.getItem('category')
    if(!category) localStorage.setItem('category', '0')
}