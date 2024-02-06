quotes = {
    0: "tere",
    1:"nii, wat now?",
    2: "da fuck ma ütlen",
    3: ":suur_süda:",
    4: "nägemist",
    5:"Nelijärvel näeme!",
    6: "debugida oled proovinud?",
    7:"kustutan su repo ära",
    8: "ma kustutan su konto ära",
    9: "See nagu natukene sääd?",
    10: "mis chat gpt pakub?",
    11: "mul pole ühtegi mängu :frowning:",
    12: "said öösel? :stuck_out_tongue:",
    13: "Screenshoti?",
    14: "tsensuur? :stuck_out_tongue:",
    15: "Vana hea",
    16:  "Beer pong?",
    17: "mingi harry potter vibe",
    18: "Kes essa? Saab kleepsu!",
    19: "Pidu veel käib?",
    20: "või nii, läks liiga ropuks?",
    21: "Pic or didnt happen",
    22: "plätu + sokk pigem mitte",
    23: "Kes täna sauna? :person_in_steamy_room:",
    24: "Veits hard",
    25: "No pressure eks",
    26: "nüüd timm",
    27: "uwu :slight_smile:",
    28: "gängsteri stiilis",
    29: "me tegelikult tahaks, et te natukene mõtleks.",
    30: "kes kellega magab? :smirk:",
    31: "prorotüüp peab nii timm olema, et esitleb ennast ise",
    32: "nope, aint feim",
    33: "Internet on seksuualvähemustele",
    34: "Majandus tegeleb oma maailmaga, mis nad on ise väljamõelnud ja kus nad kirjeldavad oma müstilisi majandusasju hihihi.",
    35: "Kunagi eksisteeris selline firma freaky nimega “Lucky-Goldstart”, aga siis mõeldi, et see nimi on liiga haige ja seda nimetati ümber LG-ks.",
    36: "…siis tekkiks kaks nulli, mulle tundub see veidi freaky",
    37: "See on siuke ülyfancy stuff, mis käib siin.",
    38: "Liida numbrid nullist kümneni... väga huvitav kuidas see välja näeb. WAT? ",
    39: "Tarkvara on nagu HotWheels",
    40: "Nasty",
    41: "Oh crap. Ma täiesti unustasin ära. Perse!",
    42: "sorri idikas olen",
    43: "pile of shit",
    44: "pigem ei ole mingit raha"
};

function get_random_number(quotes){
    const len_of_quotes = Object.keys(quotes).length;
    return Math.floor(Math.random() * len_of_quotes - 1);
}

function parse_random_quote(quotes){
    const n = get_random_number(quotes);
    return quotes[n];
}

// var myValue = "Hello from JavaScript!";
// document.getElementById("displayValue").textContent = myValue;
document.getElementById("quote").innerHTML = parse_random_quote(quotes);