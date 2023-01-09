# rest_api
REST API with node.js express
Titel:<br> 
Christmas playlist<br>
<br>
Beskrivning:<br>
Min applikation är en spellista där resursen är jullåtar.<br> 
Några av låtarna har ett hårdkodat id i json-filen redan från början och de låtar som läggs till via POST både på servern och i client tilldelas ett unikt id med hjälp av tilläggspaketet uuidv4 som jag installerat till projektet.
Projektet består av både server och client.
Min client/frontend har två html-sidor; songs.html och add-song.html.
Sidan songs.html anropar GET endpoint som hämtar hela spellistan. Varje låt har sedan sina egna knappar Mer Info (anropar GET method med id), Delete (anropar DELETE method) och Uppdatera (anropar PATCH method) som beskrivs närmare nedan.
Via knappen Lägg till ny låt kommer man till en ny sida (add-song.html) där det är möjligt att addera nya låtar till sin spellista. Detta med hjälp av anrop till POST METHOD.
I servern har jag valt att ha en uppdelning med egen mapp för routes där alla mina endpoints för resursen jullåtar är programmerade i songs.route.js, dessa exporteras till server.js som är start-filen. Detta för att tidigt komma in i tänket att dela upp sin applikation i mindre delar och ha en bra mapp-struktur.

Uppfyllda krav:
Krav för godkänt:
1.	Projektet innehåller följande endpoints:
•	GET – ’/’ enbart ett test för att anropa första routen.
•	GET – ’/api/songs’ anropar att visa alla låtar i spellistan
•	GET med id – ’/api/songs/:id’ visar info om en specifik låt. 
•	POST – lägger till en ny låt i spellistan. Via ett tilläggspaket uuidv4 så får varje ny låt som läggs till här ett unikt id som jag nämnde ovan i beskrivningen.
•	PATCH – jag valde PATCH method för att kunna uppdatera information om en specifik låt. Här kan man välja om man vill uppdatera titel, artist eller genre - en, två eller alla tre parametrar kan uppdateras.
•	DELETE – raderar en låt från spellistan.

2.	Samtliga endpoints nås via en REST Client filen .rest
3.	Spellistan (all data) är sparad i en JSON-fil med namn songs.json
4.	Spellistan i JSON-filen uppdateras då något läggs till, uppdateras eller tas bort
5.	API:et svarar med 404 om datan saknas.
6.	Git & GitHub har använts
7.	Projektmappen innehåller en README.md fil
Krav för väl godkänt:
1.	Punkterna ovan är genomförda
2.	Frontend är byggt och anropar alla endpoints på följande sätt: (OBS! GET method mot first route ’/’ är enbart ett test på servern och inget som anropas via frontend i mitt projekt)
•	GET – hela spellistan nås via songs.html. Anrop till GET endpoint som visar alla låtar
•	GET med id – Denna endpoint nås i frontend med hjälp av ”Mer info” knappen. Det dyker då upp en extra rad med ytterligare info om låten som sedan kan döljas igen genom att klicka på Dölj.
•	POST – lägger till en ny låt i spellistan. I frontend ligger denna formulär på en egen sida som nås via knappen ”Lägg till ny låt”. Fyll i alla fält i formulären och klicka på ”Slutför” så kommer den nya låten att läggas till i spellistan.
•	PATCH – i varje låts egen box finns det fält där man direkt kan skriva en uppdatering om antingen titel, artist eller genre. Klickar man på ”Uppdatera” kommer det upp en alert som bekräftelse och när man klickat ok måste man även uppdatera sidan för att ändringarna ska synas i frontend. Detta ser jag som en möjlighet att lära mig mer om så att jag i nästa projekt får till uppdateringen per automatik när den är gjord.
•	DELETE – Nås i frontend via knappen ”Delete”. Här gäller samma som för PATCH, låten raderas och man får en bekräftelse via alert men man måste aktivt uppdatera sidan för att den ska försvinna från spellistan i frontend.
3.	Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt. Denna endpoint finns både i RESTclient och som jag ovan beskrivit i frontend med anrop via knappen ”Mer info”.


Hur projektet byggs och körs:
Klona ner repot
Öppna i VS-code
Öppna Terminalen i VS-code
Kör npm install i Terminalen
Kör nodemon server.js i Terminalen
