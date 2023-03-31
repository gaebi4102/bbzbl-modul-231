# LB 2 - Projekt

| **Dauer**                     | **Gewichtung**        |
| :---------------------------- | :-------------------- |
| **Restliche Zeit** des Moduls | **50%** der Modulnote |

:::danger Plagiat

- Sollten Plagiate (auch Teilplagiate) abgegeben werden, so erhalten alle Beteiligten für das Projekt die **Note 1**
- Es wird darauf verzichtet, Nachforschungen anzustellen, wer Quelle und wer Empfänger war

:::

:::tip Privates Git Repository

- Wenn Ihr euren Code mit **git** versioniert ist das super!
- Aber bitte verwendet ein **privates Repository** auf Github und co., damit nicht zukünftige Kameraden von Ihnen klauen könnt!

:::

## Einleitung

Im Modul 403 wurden nur konsolenbasierte Programme realisiert. Mittlerweile haben Sie die Fähigkeit,
Programme mit einer grafischen Oberfläche zu schreiben.

## Ziele

- Die Anforderungen an eine Fachklasse erforschen und formulieren.
- Eine grafische Benutzeroberfläche programmieren.
- Die eigene Arbeit mit Klassendiagrammen [dokumentieren][Dokumentation].
- Sauberen Quellcode schreiben.

## Aufgabenstellung

Es geht darum, ein Würfelspiel für 2 Mitspieler zu programmieren. Das Ziel des Spieles ist es, in einer gegebenen Anzahl Runden möglichst viele Punkte zu erzielen.

Pro Runde darf ein Spieler maximal 5 mal würfeln. Die gewürfelten Augenzahlen ergeben die Rundenpunkte. Sie werden zu der Gesamtpunktzahl des Spielers addiert.

**Aber Achtung**: es werden nur die geraden Zahlen aufaddiert. Sobald der Spieler eine ungerade Zahl würfelt, verliert er die Rundenpunkte und der andere Spieler ist an der Reihe. Der Spieler muss die Möglichkeit haben, die Runde abzubrechen und weniger als fünfmal in seiner Runde zu würfeln.

Hier sehen Sie einen möglichen Spielverlauf mit einer Visualisierung:

![](../img/spielverlauf.jpg)

Wer am Ende der festgelegten Rundenzahl am meisten Punkte hat, gewinnt das Spiel.

Ihr Programm muss am Ende nicht genau so aussehen wie oben gezeigt. So eine Visualisierung des Spielverlaufs mit Würfelaugen und mehreren Runden ist aufwändig, ergibt dafür zusätzliche Punkte.

Es sind auch Spielvarianten denkbar. So könnte zum Beispiel zu Beginn festgelegt werden, dass die ungeraden Zahlen aufaddiert werden und die geraden Zahlen die Spielverderber sind.

Oder man könnte eine Augenzahl als Spielverderber festlegen und alle anderen Augenzahlen addieren.

## Produkt

Sie erstellen selbständig ein Programm gemäss der obigen Spielbeschreibung. Das Programm muss eine grafische Oberfläche besitzen.

Ausserdem besteht Ihr Produkt aus (mindestens) drei Klassen:

- grafische Darstellung des Spiels
- Starterklasse
- Fachklasse(n), die den Spielstand verwalten und logische Funktionen anbieten

Der Quellcode ist sauber formatiert. Alle Klassen, Methoden und Attribute haben aussagekräftige Namen.

Die von Ihnen erstellten Klassen dokumentieren Sie mit einem UML-Klassendiagramm, das alle Klassen enthält. Auch die Beziehungen zwischen den Klassen müssen dargestellt sein. In einer [Dokumentation] beschreiben Sie Ihr Programm. Notieren Sie, was Sie wie herausgefunden haben. Wenn zur Zeit der Abgabe noch nicht alles funktioniert, dann beschreiben Sie was nicht funktioniert und was das Problem ist.

Das Klassendiagramm gehört in die [Dokumentation].

## Bewertung

| Punkte | Kriterium                                                                                                                                    |
| :----: | :------------------------------------------------------------------------------------------------------------------------------------------- |
|   1    | Die Starterklasse funktioniert                                                                                                               |
|   5    | Die Fachklassen beinhalten die Logik / verwalten den Spielstand (ohne UI-Elemente)                                                           |
|   3    | Der Punktestand wird pro Spieler angezeigt - der Spieler kann eine Runde beenden                                                             |
|   3    | Der Punkteverlauf wird pro Spieler angezeigt                                                                                                 |
|   4    | Die grafische Oberfläche zeigt die gewürfelten Punkte pro Runde als Text an                                                                  |
|   2    | oder die gewürfelten Punkte pro Runde werden bildlich dargestellt                                                                            |
|   3    | Der Würfelverlauf wird über mehrere Runden angezeigt (nicht nur die aktuelle)                                                                |
|   3    | Das Programm läuft und lässt das beschriebene Spiel zu                                                                                       |
|   3    | Der Quellcode ist korrekt formatiert (Einrückungen)                                                                                          |
|   3    | Die Namen der Klassen, Methoden und Attribute sind aussagekräftig und einheitlich                                                            |
|   3    | _Dokumentation:_ die Beschreibung des Programms ist vollständig                                                                              |
|   3    | _Dokumentation:_ das Klassendiagramm ist korrekt nach UML-Standard                                                                           |
| **36** | **TOTAL**                                                                                                                                    |
|        | **Bonus**                                                                                                                                    |
|  _2_   | _Das Programm übersteigt die oben beschriebenen Minimalanforderungen an das Spiel **wesentlich** und **ist auch vollumfänglich lauffähig**._ |

## Termin

Das Produkt (mit der [Dokumentation]) muss bis am **Freitag, 21.04.2023, 16:15** über den **Abgabeordner auf der Modulseite** abgegeben werden.

## Strukturidee

![](../img/projektstruktur.jpg)

[Dokumentation]: https://docs.google.com/document/d/1mD7wykSI7ge63gUXXk2SVPEKErBKok09cdiTBuET7VQ/edit
