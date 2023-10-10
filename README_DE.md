# Server-Middleware

Eine kleine Übung, um das Schreiben von benutzerdefiniertem Middleware in einem Express.js-Server zu üben.

## Was du tun wirst

Du wirst einen Server mit zwei Endpunkten erstellen, die beide **POST**-Anfragen akzeptieren.

Beide Endpunkte erwarten ein JSON-Objekt mit Benutzerdaten.

### Beispiel

```json
{
    "firstName": "Steve",
    "lastName": "Stevenson",
    "age": "129",
    "fbw": "36",
    "profession": "Musiker",
    "favoriteBands": [
        "Radiohead",
        "Motorhead",
        "Machinehead",
        "The Talking Heads"
    ],
    "email": "steve@metallica.com"
}
```

Die Endpunkte werden diese Daten lesen und verarbeiten.

## Aufgaben

### Aufgabe 1 - Vorbereitung

1. Erstelle die Datei `server.js`
2. Initialisiere npm in deinem Projekt mit `npm init -y`
3. Installiere das express.js npm-Paket mit `npm i express`

### Aufgabe 2 - Einrichten deines Servers

Erstelle deinen **Express.js**-Server in der Datei `server.js`.

### Aufgabe 3 - Erstellen des "validateUser"-Endpunkts

Erstelle einen Endpunkt, der:

1. auf den Pfad `/validateUser` antwortet,
2. auf **POST**-Anfragemethoden reagiert.

### Aufgabe 4 - Erstellen des Middleware

1. Erstelle eine **Middleware-Funktion**, die überprüft, ob das Objekt Werte für die Schlüssel `firstName`, `lastName`, `age`, `fbw` und `email` enthält.
2. Erstelle eine **Middleware-Funktion**, die überprüft, ob der Benutzer über **18** Jahre alt ist.
3. Wenn eine der Middleware-Funktionen fehlschlägt, solltest du eine Antwort mit einer **Fehlermeldung** senden, die angibt, warum der Benutzer ungültig ist.

    #### Beispiel für eine Fehlerantwort

    ```json
    {
        "message": "Wir können den Benutzer nicht validieren. Er ist unter 18 Jahre alt."
    }
    ```

### Aufgabe 5 - Anwendung der Middleware

1. Wende alle Middleware-Funktionen, die du in **Aufgabe 4** erstellt hast, auf den **validateUser**-Endpunkt an.

2. Wenn die Anfrage erfolgreich durch die Middleware gelangt, sollte der **validateUser** eine Antwort mit einer **Erfolgsmeldung** senden.

    #### Beispiel für eine Erfolgsantwort

    ```json
    {
        "message": "Dieser Benutzer ist gültig!"
    }
    ```

### Aufgabe 6 - Erstellen des "sanitizeUser"-Endpunkts

Erstelle einen Endpunkt, der:

1. auf den Pfad `/sanitizeUser` antwortet,
2. auf **POST**-Anfragemethoden reagiert.

### Aufgabe 7 - Erstellen des Middleware

1. Erstelle eine **Middleware-Funktion**, die den `firstName` und `lastName` mit einem Großbuchstaben beginnen lässt.
2. Erstelle eine **Middleware-Funktion**, die das Array `favoriteBands` alphabetisch sortiert.
3. Erstelle eine **Middleware-Funktion**, die `age` und `

fbw` in Zahlen umwandelt.

### Aufgabe 8 - Anwendung der Middleware

1. Wende alle Middleware-Funktionen, die du in **Aufgabe 7** erstellt hast, auf den **sanitizeUser**-Endpunkt an.

2. Wenn die Anfrage erfolgreich durch die Middleware gelangt, sollte **sanitizeUser** eine Antwort mit den aktualisierten **POST**-Daten senden.

    #### Beispielantwort

    ```json
    {
        "firstName": "Steve",
        "lastName": "Stevenson",
        "age": 129,
        "fbw": 36,
        "profession": "Musiker",
        "favoriteBands": [
            "Machinehead",
            "Motorhead",
            "Radiohead",
            "The Talking Heads"
        ],
        "email": "steve@steve.com"
    }
    ```
