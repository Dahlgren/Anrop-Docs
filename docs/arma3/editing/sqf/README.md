# SQF

En kort introduktion till SQF, Armas programmeringsspråk

## Variabler

### Typer

En variabel har alltid en typ.
I Arma finns ett antal olika typer av variabler

* `Boolean`, ett s.k. boolskt uttryck, sant (true) eller falskt (false)
* `Number`, både heltal (42) och decimaltal (3.14)
* `String`,  vanliga textsträngar såsom "hej" eller "Riflemen"
* `Structured Text`, textsträngar med formattering, t.ex. `<t color='#ff0000'>Röd text</t>`
* `Array`, används för att hålla i flera (sorterade) värden samtidigt, t.ex. alla enheter i en grupp
* `Code`, ett stycke kod som kan anropas med hjälp av `call`

### Globala

Variabler utan understreck (`variabel`) är tillgänglig globalt i ditt mission och kan läsas och skrivas överallt, både andra filer, triggers osv.
Du bör använda globala variabler om du ska använda villkor eller enheter mellan flera triggers eller script.

När du namnger en enhet är det samma sak som att ge den en global variabel!

```
globalVariabel = "jag finns överallt!";
hint globalVariabel;
```

### Lokala

Variabler med som börjar med ett understreck (`_variabel`) är lokal och går bara att nå i det "scope", oftast fil eller trigger, som du är i just nu.
Om du skapar en variabel i en trigger eller en fil med ett understreck först i namnet kommer du inte kunna komma åt den i andra filer eller triggers.

När koden börjar bli mer komplex med funktioner som anropar varandra kan man råka ut för ett problem där lokala variabler skriver över varandras värden.
För att undvika detta problem är det rekommenderat att **alltid** skriva private innan första gången man skapar sin lokala variabel.

```
private _hello = "hej!";
hint _hello;
```

## Loopar

Om du vill göra samma många gånger kan det vara både jobbigt och onödigt att skriva samma sak flera gånger.
Istället kan man använda sig av loopar för att göra samma sak flera gånger.

### for

En `for` loop är lämplig när du vill göra samma sak ett visst antal gånger.
Nedanstående kommer skriva ut 1 till 10 i ingame chatten.

```
for "_i" from 1 to 10 do {
  systemChat _i;
};
```

### forEach

En `forEach` loop är lämplig när du har en `array` med värden du vill göra samma sak med.
Exempel kan vara att ändra loadout på alla soldater i en grupp.
När du använder `forEach` skapas automatiskt variabeln `_x`.
Om du har flera `forEach` loopar i varandra behöver du själv döpa om variabeln.
Nedanstående kommer skriva ut 1 till 10 i ingame chatten.

```
private _array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
{
  systemChat _x;
} forEach _array;
```

## Locality

Ett vanligt problem som uppdragsskapare stöter på när de gör uppdrag för multiplayer är "Locality".
Kort kan man säga att det är en optimering för att förbättra prestanda.
Tanken är att all kod inte behöver köras på alla maskiner och framförallt inte synkroniseras mellan alla datorer.

Om du vill kolla hur många skott du har kvar i ditt magasin behöver du oftast inte informera alla andra spelares datorer om hur många skott som är kvar utan det kan räknas ut bara på din dator.
Det omvända kan såklart också bli ett problem.
Om du tar bort ett magasin ur din ryggsäck kan det bli konstigt om en annan spelare senare börjar gräva i din ryggsäck och hittar magasinet som är borttagen på din dator.
Att du tog bort magasinet skulle då alltså behövts synkroniseras till alla övriga spelare.

Det vanligaste problemet som uppstår är att koden uppdragsskaparen skrivit kod som är tänkt att köras en gång men istället körs lika många gånger som det är spelare på servern.
En bra tankegång att följa är att alla kritiska beslut för uppdragets flöde alltid ska avgöras av server.
Till exempel om bomben desarmerats, om bombens timer nått noll eller om samtliga mål har slagits ut.
Information om ändringar i spelet kan då enklast skickas ut från servern till alla klienter när det är lämpligt.
Detta är ett bra sätt att komma runt problemet med användare som joinar senare under uppdraget, så kallad Join in Progress eller JIP.
Ett bra sätt att skicka variabler mellan datorer är [publicVariable](https://community.bistudio.com/wiki/publicVariable).
För att köra kod på andra datorer används lämpligen [remoteExec](https://community.bistudio.com/wiki/remoteExec).
