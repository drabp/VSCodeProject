function testGS() {
    var url = "https://script.google.com/macros/s/AKfycbxr8U3JDTDQOQkWyRrQlH-nanBHbfi1Q2cVm-3AyqmGpyZRUaezgfzOpRj96q87UF34rA/exec";
    fetch(url)
        .then(d => d.json())
        .then(d => {
            console.log(d);
            document.getElementById("app").textContent = d.status;
        });
}
// document.getElementById("btn").addEventListener("click",testGS);
testGS();
