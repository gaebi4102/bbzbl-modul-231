---
marp: true
theme: bbzbl
paginate: true
header: Modul 404 - Woche 2
footer: BBZBL / Lukas Hodel / Objektbasiert programmieren nach Vorgabe
---

<!-- _class: big center -->

# Woche 2
## Modul 404

---

# Agenda

::: columns

## :brain: Input

- [Repetition Fachklassen](https://codingluke.github.io/bbzbl-modul-404/docs/konzepte/fachklassen)
- [Konzept Static](https://codingluke.github.io/bbzbl-modul-404/docs/konzepte/static)
- [Einstieg in Swing](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-swing/einstieg-in-swing)

::: split

## :keyboard: Aufgaben Grundlagen 

- [Starterklasse](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-grundlagen/starterklasse)
- [Temperaturkonvertierer](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-grundlagen/einheiten-umrechnen)

## :keyboard: Aufgaben Swing

- [Frame](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-swing/fenster)
- [Komponenten](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-swing/komponenten)

<hr>

- [:superhero: Optional Repetition Arrays](https://codingluke.github.io/bbzbl-modul-404/docs/repetition/arrays) ([PDF](https://drive.google.com/file/d/1Bt4NgySXrhMeorOTuSBs_6thNwXPRbNN/view))

:::

---

# :brain: Repetition Fachklassen [:link:](https://codingluke.github.io/bbzbl-modul-404/docs/konzepte/fachklassen)

- **Fachklassen** beinhalten die **generalisierte Logik** für ein Fachproblem
  - _In unserem Fall wäre das Fachproblem die Kontoverwaltung_

- Mit **Fachklassen** lassen sich **Programme entkoppeln**
  - **einfacherer Wartbarkeit**
  - **besserer Testbarkeit**
  - **besserer Qualität**

- Nennen wir es :sushi: **Sushi-Code**, das Gegenteil von :spaghetti: _Spaghetti-Code_

---


# :brain: Konzept `static`: :rock: <- in Stein gemeisselt

- Kann ohne `new` aufgerufen werden
- Kann wiederum andere `static` Methoden aufrufen
- Kann `static` Variablen verwenden
- Kann mit `new` eine `Instanz` einer beliebigen Klasse erstellen.

::: columns

### Für was sind `static` Methoden gut?

- Die Java `main` Methode (entrypoint)
- Helfermethoden **(ohne Datenstand)**
  _Z.B. `Math.sqrt(64);`_

::: split

### :scream: Limitationen

**Können nicht** auf **eigene** `Instanz-Methoden/Varaiblen` zugreifen!

:::

---

# :brain: Konzept `Instanz`<sup>\*</sup>: :hatching_chick: <- Es lebt!

- Beinhalten `Instanz-Methoden`:
  - `Instanz-Methoden` können auf `Instanz-Variablen` zugreifen
  - `Instanz-Methoden` können andere `Instanz-Methoden` ausführen
- Es können von einer **Klasse mehrere Instanzen** erstellt werden
- Ein `Instanz` wird durch `Klasse variableName = new Klasse()` erstellt

### :information_source: Instanzen sind gekapselt und **besitzen einen individuellen Datenstand**

```java
Account accountObject1 = new Account();
Account accountObject2 = new Account();
```

:::footnotes

\* **Instanzen** und **Objekte** sind **Synonym** verwendbar!

:::

---

# :brain: Static vs Instanz-Methoden

Eine `static` Methode einer `Klasse` kann direkt aufgerufen werden, ohne dass ein `Object`/`Instanz` der Klasse erstellt werden muss:

```Java
public class MixedExample {
  private static final double PI = 3.14; // Konstante, kann nicht geändert werden!
  private String greeting = "Hello";     // Instanz-Variablen, kann geändert werden

  public static double staticCircle(double radiant) { 
    return radiant * radiant * PI; // Kann auf `PI` zugreifen nicht aber auf `greeting`
  }

  public String instanceGreeting(String name) {
    return greeting + " " + name;  // Kann auf `greeting` zugreifen
                                   // Könnte theoretisch auch auf `PI` zugreifen
  }

  public void setGreeting(String greeting) { this.greeting = greeting; }
}
```

---

# :brain: Verwenden von `MixedExample`

```java
public class Starter {
  // Startpunkt des Programms, ist immer static!
  public static void main(String[] args) { 
    // Statische Methoden können ohne new ausgeführt werden!
    double circle = MixedExample.staticCircle(1.5d); 

    // Um instanceMethoden aufzurufen, muss zuerst eine Instanz erstellt werden
    MixedExample mixedExampleInstance = new MixedExample(); 
    String greeting = mixedExampleInstance.instanceGreeting("Lukas");
    // Wert ist "Hallo Lukas";

    mixedExampleInstance.setGreeting("Ciao") // Objekt ändern
    greeting = mixedExampleInstance.instanceGreeting("Lukas");
    // Wert ist "Ciao Lukas";
  }
}
```

---

# :keyboard: Grundlagen Aufgaben [:link:](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-grundlagen)

- [Aufgabe Starterklasse](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-grundlagen/starterklasse)
- [Aufgabe Temperaturkonvertierer](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-grundlagen/einheiten-umrechnen)
## <!--fit--> :superhero: Versucht es immer zuerst ohne Musterlösung!

---

# :brain: Einstieg `Swing` 

`Swing` ist eine **Bibliothek für grafische Oberflächen** :framed_picture:. Dadurch ist es möglich die bis jetzt textuelle Benutzerinteraktion mit grafischen Elemente umzusetzen. 

- **`GUI`** - `Graphical User Interface` genannt

##  :rotating_light: Achtung!

- Das Verständnis davon ist essenziell um im **LB1** eine gute Note zu erhalten!
- Auf dieser Grundlage wird auch das Projekt (**LB2**) umgesetzt!

## :point_up:  Nehmt euch also die **Zeit** dies zu verstehen!

---

# :rocket: Hilfe im Web!

Es ist immer gut sich im Internet weiterzubilden (:thinking: zumindest für IT-Themen)

www.java-tutorial.org ist eine Webseite die Java, sowie `Swing` im Detail erklärt:

- [Deutsches `Swing`-Tutorial als Zusatzinfo für Interessierte](https://www.java-tutorial.org/swing.html)

  - **Relevante Themen**: [JFrame](https://www.java-tutorial.org/jframe.html), [JLabel](https://www.java-tutorial.org/bedienelemente.html), [JButton](https://www.java-tutorial.org/jbutton.html), [JTextField](https://www.java-tutorial.org/jtextfield.html), [JPanel](https://www.java-tutorial.org/jpanel.html)
  - Auch wichtig, wird nächste Woche behandelt [Event-Handling](https://www.java-tutorial.org/event-handling.html)
  
## <!--fit--> :superhero: Ich würde alle in den Aufgaben verwendeten Klassen hier nachschlagen

---

# :brain: Swing: `JFrame` 

Möchte man eine Klasse als `Fenster` erstellen, muss man der Klasse die Java Klasse `JFrame` **vererben**. Dies geht mit dem Ausdruck **`extends JFrame`**

```java
public class PureWindow extends JFrame {
  public void start() {                        // oder auch showDialog, oder was gefällt
    setLayout(null);                         // Standard Layout deaktivieren
    setDefaultCloseOperation(EXIT_ON_CLOSE); // Beim schliessen des Fensters, das ganze Programm beenden
    setSize(300, 300);                       // Grösse vom Fenster festlegen
    setTitle("Ich bin der Fenster Titel");   // Titel des Fensters festlegen
    setVisible(true);                        // Fenster sichtbar machen
  }
}
```

::: footnotes

[:link: JFrame auf Java Tutorial](https://www.java-tutorial.org/jframe.html)
_:information_source: Was genau Vererbung ist, und wie man es selbst verwendet ist Teil eines späteren Moduls. Hier wenden wir es einfach Mal an._

:::

--- 

# :bulb: `JFrame` Cheat Sheet

```java
setLayout(null); // Standard Layout deaktivieren
setDefaultCloseOperation(EXIT_ON_CLOSE); // Beim schliessen des Fensters, das ganze Programm beenden
setSize(300, 300); // Grösse vom Fenster festlegen
setTitle("Ich bin der Fenster Titel"); // Titel des Fensters festlegen
setVisible(true); // Fenster sichtbar machen

JLabel label = new JLabel("Beschriftung"); // Ein Label
label.setBounds(x, y, width, height) // Bestimmen wo sich das Label befindet
add(label) // Label hinzufügen

JTextField textfield = new JTextField(); // Ein Textfeld
textfield.setBounds(x, y, width, height) // Bestimmen wo sich das Textfeld befindet
add(textfield) // Textfeld hinzufügen

JButton button = new JButton("press me"); // Ein Button
button.setBounds(x, y, width, height) // Bestimmen wo sich der Button befindet
add(button) // Textfeld hinzufügen
```

---

# :keyboard: `Swing` Aufgaben

- [Einstieg in Swing](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-swing/einstieg-in-swing)

- [JFrame](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-swing/fenster)
- [Komponenten](https://codingluke.github.io/bbzbl-modul-404/docs/aufgaben-swing/komponenten)

## <!--fit--> :superhero: Versucht es immer zuerst ohne Musterlösung!

---

<!-- _class: big center -->

# Abschluss / Lernjournal

---

# :keyboard: Repetition Arrays (20min) [:link:](https://codingluke.github.io/bbzbl-modul-404/docs/repetition/arrays)

Im folgenden PDF ist beschrieben wie man in Java mit Arrays, also Listen von Datentypen, arbeitet.

- [Repetition Arrays](https://codingluke.github.io/bbzbl-modul-404/docs/repetition/arrays) ([:book: PDF](https://drive.google.com/file/d/1Bt4NgySXrhMeorOTuSBs_6thNwXPRbNN/view)) bitte genau studieren
- Diese **Aufgaben sind Optional** und müssen im **Selbststudium** gemacht werden.
- Am Ende der Sildes wird auf eine weitere Art von Arrays (Listen) eingeganen. 
    - Diese ist **nicht Pflicht** jedoch häufig einfacher.

### :superhero: Dies ist eine Grundlage, welche Ihr im allgemeinen begreifen müsst um die beiden LBs mit einer `6` zu bestehen

---

## :superhero: Die Klasse `List` oder auch `ArrayList`

Primitive Java Arrays sind umständlich und können häufig durch die Klasse `List<Datetyp>` oder `ArrayList<Datentype>` abgelöst werden.

Hier ein Beispiel für eine `List<String>`, also eine Liste von Wörtern:

```java
list<string> list = arrays.aslist("element 1", "element 2");
list.add("element 3"); // es können Elemente dynamisch hinzugefügt werden

// über die gesamte Liste iterieren ist viel einfacher als bei "primitiven" Arrays
for (String element : list) {
  System.out.println(element);
}

// Auf ein Element zugreifen mit `.get` (es startet bei 0, nicht bei 1)
System.out.println(list.get(0));
```
