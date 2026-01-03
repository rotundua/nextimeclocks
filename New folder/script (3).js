function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
// Variabile globale pentru coș
let numarProduse = 0;
let pretTotal = 0;

/**
 * Funcția care adaugă un produs în coș
 * @param {string} numeProdus - Numele ceasului selectat
 * @param {number} pret - Prețul ceasului
 */
function adaugaInCos(numeProdus, pret) {
    // Incrementăm numărul de produse și prețul total
    numarProduse++;
    pretTotal += pret;

    // Afișăm o alertă roz (stilizată de browser)
    alert("✨ " + numeProdus + " a fost adăugat în coș!\n" + 
          "Total produse: " + numarProduse + "\n" +
          "Total de plată: " + pretTotal + " RON");

    // Actualizăm elementele de pe pagină dacă acestea există
    actualizeazaInterfata();
}

/**
 * Funcția pentru butonul de finalizare comandă
 */
function finalizeazaComanda() {
    if (numarProduse === 0) {
        alert("Coșul tău este gol! Te rugăm să alegi un ceas NexTime.");
    } else {
        alert("Comandă confirmată! ✅\n" + 
              "Suma totală: " + pretTotal + " RON\n" + 
              "Vă mulțumim că ați ales NexTime!");
        
        // Resetăm coșul după comandă
        numarProduse = 0;
        pretTotal = 0;
        actualizeazaInterfata();
    }
}

/**
 * Funcție opțională pentru a actualiza textul din pagină (dacă ai ID-uri create)
 */
function actualizeazaInterfata() {
    const totalElement = document.getElementById('total-plata');
    const numarElement = document.getElementById('numar-produse');

    if (totalElement) totalElement.innerText = pretTotal + " RON";
    if (numarElement) numarElement.innerText = numarProduse;
}

// Mesaj de bun venit în consolă (pentru developeri)
console.log("Magazinul NexTime a fost încărcat cu succes! 🕒💗");