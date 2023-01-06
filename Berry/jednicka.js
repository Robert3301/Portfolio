function vypisdatum(){ 
    const datum = new Date();
    const den = datum.getDate(); // vrátí nám to den (5.)
    const mesic = datum.getMonth() + 1 ; // vrátí nám to měsíc, ale o jeden méně, takže přídáme + 1
    const rok = datum.getFullYear(); // vrátí nám aktuální rok 
    const ukazdatum = `${den}.${mesic}.${rok}`; //

    const casovyElement = document.getElementById("cas");
    casovyElement.innerHTML = ukazdatum;
}
vypisdatum();

