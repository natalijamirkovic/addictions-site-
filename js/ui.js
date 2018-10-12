const container = document.querySelector(".root");

export const renderHomePage = () => {

    container.innerHTML = "";
    const home = document.createElement("div");
    home.innerHTML =
        `

        <section class="home-title">
        <div class="hometitle-content-area">
        <h2>Dobrodosli na nas sajt</h2>
        <p>Ovdje mozete pronaci sve informacije o bolestima zavisnosti, kao i institucije koje vam mogu pruziti pomoc.</p>
        </div>
        <img src="assets/images/bolja.jpg" class="img-top">
        </section>
        `
        container.appendChild(home);
    }
    
    // <div class="background-image" style="background-image: url(assets/images/bolja.jpg);"></div>

export const renderDrugsPage = () => {
    container.innerHTML = "";
    const drugs = document.createElement("div");
    drugs.innerHTML = `
    <h2>Narkomanija</h2>
    <p>
    Narkomanija predstavlja stanje periodičnog ili dugotrajnog korišćenja psihoaktivnih supstanci. Ovo stanje prelazi u trovanje koje je prouzrokovano ponavljanim uzimanjem droga i koje je štetno za pojedinca, ali i za društvo. Svetska zdravstvena organizacija 1957. godine definisala je narkomaniju kao ''stanje periodične ili hronične intoksinacije izazvano ponovljenim unošenjem droge ''. Narkomanija se ispoljava kroz psihičku i fizičku zavisnost i veliku želju da se nastavi sa uzimanjem droge.
    </p>
    <h4>Šta je droga?</h4>
<p>U širem smislu pod terminom  "droga" podrazumevaju se materije biljnog, hemijskog ili životinjskog porekla koje služe za izradu lekova. U užem smislu, koji se češće koristi, pod terminom droga podrazumeva se psihoaktivna supstanca, koja, kada je uneta u organizam može da promeni stanje svesti i utiče na psihičke i fizičke funkcije. Dejstvo droge je različito u zavisnosti od toga ko drogu konzumira i na različiti način se manifestuje.</p>

<h4>Najčešći oblici antisocijalnog ponašanja narkomana:</h4>
<ol>
 <li>zapostavljanje lične higijene;</li>
 <li>laganje i obmanjivanje</li>
 <li>zapostavljanje ranijih interesovanja/školovanja;</li>
 <li>otuđenje stvari;</li>
 <li>krađa;</li>
<li> prosjačenje;</li>
 <li>obijanje apoteka/prodavnica/trafika;</li>
 <li>prostituisanje;</li>
 <li>distribucija droge (dilovanje);</li>
<li> neovlašćena proizvodnja, prerada i prodaja droga;</li>
<li>krijumčarenje;</li>
 <li>falsifikovanje recepata.</li>
 </ol>
 <h4>Najčešći mentalni poremećaji kod narkomana:</h4>
<ul>
 <li>psihopatološke pojave (vizije, iluzije, halucinacije, strah, dezorijentisanost, panika,...);</li>
 <li>depresija</li>
 <li>pokušaji samoubistva</li>
 <li>psihoze</li>
 <li>karakterne promene.</li>
</ul>
    `
    container.appendChild(drugs);
}

export const renderAlcoholismPage = () => {
    container.innerHTML = "";
    const alcoholism = document.createElement("div");
    alcoholism.innerHTML = `
    <h2>Alkoholizam</h2>
    <p>Alkoholizam je jedna od najrasprostranjenijih bolesti zavisnosti, odnosno toksikomanija. Po pravilu alkoholizam je psihogenog porekla ali uz znatan uticaj situacionih faktora zbog čega je ranije smatran porokom a ne bolešću. Ispoljava se kao gubitak sposobnosti uzdržavanja od prekomerne upotrebe alkohola, što dovodi do zavisnosti, narušavanja psihičkog i fizičkog zdravlja i socijalnih odnosa. Po rasprostranjenosti i štetnim posledicama po zdravlje, alkoholizam je odmah posle bolesti kardiovaskularnog sistema i malignih oboljenja. Zbog navedenih razloga u većini zemalja je obuhvaćen zdravstvenim osiguranjem kao bolest zavisnosti.</p>
   <h4> Kako alkohol deluje? </h4>
<p>Reakcije na alkohol su individualne, tako da se mogu veoma razlikovati od osobe do osobe. Takođe reakcije zavise od organizma svake osobe, njenih godina, pola, zdravstvenog stanja, psihološkog stanja i naručito od unesene količine alkohola.<p>
<br>

<p>Kada se popije, piće ulazi u stomak, gde se apsorbuje i ulazi u krvotok. Krvotok distribuira alkohol po čitavom telu, ali se efekat najviše primećuje u mozgu. Prisustvo ili odsustvo hrane u stomaku je najvažniji činilac kod apsorpcije alkohola.</p>
<br>
<h6>Koncentracija alkohola u krvi može biti i tri puta veća kod osoba sa praznim stomakom, nego ista ta količina alkohola popijena na pun stomak.</h6>
<br>

<p>Dok pije, osoba oseća zadovoljstvo i opušta se. Alkohol potpomaže lučenje dopamina (neurotransmiter koji je odgovoran za osećaj sreće i zadovoljstva), ali samo dok se koncentracija alkohola u krvi penje. To obično traje neko kraće vreme, osoba postaje pričljiva i društvena. Kad telo kreće da eliminiše alkohol iz tela, ovo osećanje biva zamenjeno sedacijom, te osoba postaje tiha i povlači se. Da bi izbegli ovaj efekat, većina ljudi nastavlja da pije, da bi održavala prvobitno stanje zadovoljstva. Na taj način ne iščezava koncentracija alkohola u krvi koja dalje izaziva neželjene efekte, već se taloži i raste.</p>

<h4>5 mentalnih sposobnosti je sklono oštećenjima od upotrebe alkohola </h4>
<h4>Memorija</h4>

<p>U pitanju je mogućnost formiranja novih sećanja, dok sećanje na prethodno se odvija neometeno.</p>

<h4>Abstraktno razmišljanje</h4>

<p>Podrazumeva interpretaciju značenja, geometriju, algebru, razmišljanje o bilo čemu van konkretnih objekata i stvari koje vidimo oko nas.</p>

<h4>Pažnja i koncentracija</h4>

<p>Ne mora biti očigledna, ali se obično pokazuje pri zadacima koji zahtevaju ove funkcije.</p>

<h4>Rešavanje problema</h4>

<p>Rešavanje problema podrazumeva promenu u strategiji pristupa problemima, mentalnu fleksibilnost. Hronično pijenje ubija sposobnost promene direkcije u mišljenju koja je neophodna ze efikasno rešavanje problema.</p>

<h4>Percepcija emocija</h4>

<p>Deo mozga koji je odgovoran za tačno čitanje tuđih emocija se pokazao kao vulnerabilan na alkohol, tako da se pri hroničnom alkoholizmu gubi ova sposobnost.</p>

<h4>Da li sam alkoholičar?</h4>
<br>
<br>
<p>Postoji upotreba alkohola, zloupotreba alkohola i zavisnost od alkohola.</p>
<br>
<p>Zloupotreba alkohola podrazumeva upotrebu alkohola koja predstavlja rizik po zdravlje osobe i dovodi do određenih problema u ponašanju i sa drugim ljudima.</p>
<br>
<p>Zavisnost uključuje i potrebu za alkoholom nad kojom osoba gubi kontrolu, kao i fizičke simptome i pojavu krize kada alkohola nema. Nakon sat vremena bez pića već se javljaju simptomi kao što su tremor (trešenje), anksioznost, poremećaj spavanja, a u težim slučajevima halucinacije i epileptički napadi.
</p>
<p>
Ljudi obično smatraju da je neko alkoholičar ako puno pije. Ali to nije zapravo istina. Alkoholizam je karakterističan po gubitku kontrole, a ne količini pića. Vrlo često, alkoholičari piju, ali se ni ne napiju.
</p>
<br>
<p>Svako može postati alkoholičar.</p>
<br>
<p>Produžena upotreba alkohola utiče na mozak, menja ga i pravi zavisnost. Iako možemo teoretisati o tome koje osobe su podložnije alkoholizmu i sl., svaka osoba može uneti dovoljno alkohola u svoj sistem u produženom vremenskom trajanju i time da razvije alkoholnu zavisnost.</p>

<p>Svako ko pije više od 3 pića dnevno je na granici alkoholizma.</p>

<p>Posebno su u riziku osobe koje piju da bi se smirile, zaboravile na probleme i regulisale svoja emotivna stanja.</p>
    `
    container.appendChild(alcoholism);
}

export const renderGamblingPage = () => {
    container.innerHTML = "";
    const gamble = document.createElement("div");
    gamble.innerHTML = `
    <h2>Kockanje</h2>
    <p>Kao što se zavisnost od heroina smatra najtežom zavisnošću kada su droge u pitanju, tako se i kockanje smatra najtežom bihevioralnom zavisnošću. </p>
    <br>
    Patološko kockanje se smatra najtežim oblikom nehemijske zavisnosti.
    <br>
    <p>U najvećem broju slučajeva ova zavisnost počinje u periodu adolescencije i mlađem odraslom dobu. Patološko kockanje je više zastupljeno kod muškaraca nego kod žena. Kod muških kockara primetno je da se češće socijalno izoluju, nego što to čine ženski kockari. Isto tako, muški kockari češće pribegavaju tretmanu kako bi rešili problem nego ženski.</p>
    <br>
    <p>Kao i zavisnost od psihoaktivnih supstanci, i zavisnost od kockanja ima hronični, recidivirajući tok, sa mogućnošću spontanog oporavka bez formalnog lečenja.</p>
    <br>
    <h4>Neki od pokazatelja patološkog kockanja:</h4>
    <ul><li>
    <li>Preokupiranost kockanjem</li>
    
    <li>Potreba da se kocka sa sve većim iznosima kako bi se postigli isti efekti</li>
    
    <li>Neuspešni pokušaji da se prekine sa kockanjem, gubitak kontrole</li>
    
    <li>Neuspeh da se smanji kockanje</li>
    
    <li>Nervoza i nemir u koliko se pokušava smanjiti kockanje</li>
    
    <li>Kockanje se koristi kao beg od problema i lošeg raspoloženje</li>
    
    <li>Kockanju se vraća kako bi se „povratili dugovi“</li>
    
    <li>Laganje, obmanjivanje prijatelja i porodice
    
    <li>Pribegavanje kriminalnim delima</li>
    
    <li>Uništavanje veza zbog kockanja</li>
    
    <li>Oslanjanje na druge radi izlaska iz očajne finansijske situacije.</li>
    </ul>
    <br>
    <h4>Posledice zavisnosti od kockanja</h4>
    <br>
<p>Kockanje, kao i sve ostale zavisnosti, ometa život pojedinca, a svakako utiče i na celu porodicu.</p>
<br>
<p>Ove aktivnosti oduzimaju veoma puno energije i vremena, a zavisnik je sve manje u kontaktu sa drugim ljudima. Kao i kod uzimanja psihoaktivnih supstanci i ova vrsta zavisnosti je kobna po pojedinca – i kod njih se javljaju finansijski i bračni problemi, smanjena bliskost i poverenje u porodici, zapostavljanje profesionalnih i drugih obaveza, bavljenje ilegalnim aktivnostima.</p>
<br>
<p>Veliki procenat kockara ima ozbiljne probleme sa alkoholom i drogama (do 60%), a često su oboleli i od depresije (čak 75%). Kockanje je povezano i sa većim zdravstvenim problemima kao što su srčani problemi i oboljenja jetre. Zavisnosti poput kockanja mogu biti povezani i sa rizikom po život pojedinca. Po jednom istraživanju 48% kockara je u nekom trenutku imalo suicidalnu nameru. Broj pokušaja i izvršenja samoubistva kod kockara takođe nije zanemarljiv.</p>
<br>
<p>Ozbiljni psihički i fizički problemi koje imaju zavisnici od kocke utiču na još osam do deset drugih lica koji su u neposrednom okruženju kockara.</p>

<h4>  Da li sam zavisan od kockanja?</h4>
<p>Kockanje kao zavisnost loše utiče na život kockara. Kao i drugi zavisnici kockari najveći deo svog vremena troše na razmišljanje o kockanju, na njegovo planiranje, upražnjavanje i oporavak od posledica. Kockar nije u stanju da prestane da razmišlja o kockanju, i ova preokupiranost je opsesivnog karaktera.</p>
<br>
<h4>U Srbiji najčešće vrste kockanja koje se upražnjavaju su:</h4>
<ul>
<li>Igranje na sreću</li>
<li>Sportsko klađenje</li>
<li>Karte</li>
<li>Poker aparati</li>
<li>Rulet</li>
<li>Internet klađenje</li>
</ul>
    `
    container.appendChild(gamble);
}


// export const bla = () => {
// var newA = document.createElement("a").
// newA.setAttribute("href","#").
// newA.textContent("pa koji tekst hoces");
// var oldA = document.querySelector(a).
// oldA.appendChild(newA);
// }


export const renderRehabPage = () => {
    container.innerHTML = "";
    
    const h2 = document.createElement("h2");
    h2.textContent="Klinika za odvikavanje";
    container.appendChild(h2);

    const newA = document.createElement("a");
    newA.setAttribute("href", "#");
    newA.textContent="blabla";
    const oldA = document.querySelector("a")
    container.appendChild(newA);
    
    const rehab = document.createElement("div");
    rehab.innerHTML = `
    <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    </ul>
    `
    container.appendChild(rehab);
}



export const renderHelpPage = () => {
    container.innerHTML = "";
    const help = document.createElement("div");
    help.innerHTML = `
    <h2>Pomoc</h2>
<h4>Ukoliko imate neka pitanja obratite nam se putem mejla. Nas savjetnik je tu da vas uputi kako da rijesite probleme.</h4>
<form method="POST" action="https://formspree.io/natalijamirkovic811@gmail.com">
<span>Ime i prezime:</span> <input type="text"> 
<br>
<span>Email adresa</span>
<input type="email" name="email"  required><br>
<span>Vasa poruka:</span>
<br>
<textarea name="message"  required></textarea><br>
  <button type="submit">Send</button>
</form>
    `
    container.appendChild(help);
}