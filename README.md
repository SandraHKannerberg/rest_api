# Inlämning rest_api<br>
REST API with node.js express<br>
Repo https://github.com/SandraHKannerberg/rest_api.git<br> 
<br>
Titel:<br> 
Christmas playlist<br>
<br>
Beskrivning:<br>
Min applikation är en spellista där resursen är jullåtar.<br> 
Några av låtarna har ett hårdkodat id i json-filen redan från början och de låtar som läggs till via POST<br> 
både på servern och i client tilldelas ett unikt id med hjälp av tilläggspaketet uuidv4 som jag installerat till projektet.<br>
Projektet består av både server och client.<br>
<br>
Min client/frontend har två html-sidor; songs.html och add-song.html.<br>
Sidan songs.html anropar GET endpoint som hämtar hela spellistan. Varje låt har sedan sina egna knappar Mer Info (anropar GET method med id), Delete<br>
(anropar DELETE method) och Uppdatera (anropar PATCH method) som beskrivs närmare nedan.<br>
Via knappen Lägg till ny låt kommer man till en ny sida (add-song.html) där det är möjligt att addera nya låtar till sin spellista. Detta med hjälp av anrop till<br> POST METHOD.<br>
<br>
I servern har jag valt att ha en uppdelning med egen mapp för routes där alla mina endpoints för resursen jullåtar är programmerade i songs.route.js,<br> 
dessa exporteras till server.js som är start-filen. Detta för att tidigt komma in i tänket att dela upp sin applikation i mindre delar och ha en bra mapp-struktur.<br>
<br>
Uppfyllda krav:<br>
<br>
Krav för godkänt:<br>
1.	Projektet innehåller följande endpoints:<br>
•	GET – ’/’ enbart ett test för att anropa första routen.<br>
•	GET – ’/api/songs’ anropar att visa alla låtar i spellistan.<br>
•	GET med id – ’/api/songs/:id’ visar info om en specifik låt.<br>
•	POST – lägger till en ny låt i spellistan. Via ett tilläggspaket uuidv4 så får varje ny låt som läggs till här ett unikt id som jag nämnde ovan i beskrivningen.<br>
•	PATCH – jag valde PATCH method för att kunna uppdatera information om en specifik låt. Här kan man välja om man vill uppdatera titel, artist eller genre -<br> 
en, två eller alla tre parametrar kan uppdateras.<br>
•	DELETE – raderar en låt från spellistan.<br>
<br>
2.	Samtliga endpoints nås via en REST Client filen .rest<br>
3.	Spellistan (all data) är sparad i en JSON-fil med namn songs.json<br>
4.	Spellistan i JSON-filen uppdateras då något läggs till, uppdateras eller tas bort<br>
5.	API:et svarar med 404 om datan saknas.<br>
6.	Git & GitHub har använts<br>
7.	Projektmappen innehåller en README.md fil<br>
<br>
Krav för väl godkänt:<br>
1.	Punkterna ovan är genomförda<br>
2.	Frontend är byggt och anropar alla endpoints på följande sätt: (OBS! GET method mot first route ’/’ är enbart ett test på servern och inget som anropas via frontend i mitt projekt)<br>
•	GET – hela spellistan nås via songs.html. Anrop till GET endpoint som visar alla låtar<br>
•	GET med id – Denna endpoint nås i frontend med hjälp av ”Mer info” knappen. Det dyker då upp en extra rad med ytterligare info om låten som sedan kan döljas<br> 
igen genom att klicka på Dölj.<br>
•	POST – lägger till en ny låt i spellistan. I frontend ligger denna formulär på en egen sida som nås via knappen ”Lägg till ny låt”.<br> 
Fyll i alla fält i formulären och klicka på ”Slutför” så kommer den nya låten att läggas till i spellistan.<br>
•	PATCH – i varje låts egen box finns det fält där man direkt kan skriva en uppdatering om antingen titel, artist eller genre.<br>
Klickar man på ”Uppdatera” kommer det upp en alert som bekräftelse och när man klickat ok måste man även uppdatera sidan för att ändringarna ska synas i frontend.<br> Detta ser jag som en möjlighet att lära mig mer om så att jag i nästa projekt får till uppdateringen per automatik när den är gjord.<br>
•	DELETE – Nås i frontend via knappen ”Delete”. Här gäller samma som för PATCH, låten raderas och man får en bekräftelse via alert men man måste aktivt<br> 
uppdatera sidan för att den ska försvinna från spellistan i frontend.<br>
3.	Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt. Denna endpoint finns både i RESTclient och som jag ovan beskrivit<br> 
i frontend med anrop via knappen ”Mer info”.<br>
<br>
Hur projektet byggs och körs:<br>
Klona ner repot https://github.com/SandraHKannerberg/rest_api.git<br>
Projektet består av huvudmappen rest_api innehållandes två mappar, Server och Client<br>
Öppna projekt-mappen Server i VS-code<br>
Öppna Terminalen i VS-code<br>
Kör npm install i Terminalen<br>
Kör nodemon server.js i Terminalen<br>
Servern är igång och kan testas<br>
Frontend nås via projekt-mappen Client<br>
