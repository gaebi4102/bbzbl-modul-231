---
sidebar_position: 1
---

# 1. Daten AG
:::info

Fake Firma der Fall Studie

:::

## Beschreibung

Die Daten AG ist eine Aktiengesellschaft welche sich mit dem Zentrallen Speicher von Patienten Akten für Gesundheitseinrichtungen, dabei bieten sie Software- und Hardwarelösungen an. Das Unternehmen ist Nation und EU weite tätig.
Die Daten AG beschäftig am Hauptsitzt in Basel CH ca. 500 Mitarbeitende und in der Niederlassung in Hamburg DE nochmals ca. 200 Mitarbeitende.
Die Mitarbeiter Arbeiten grundsätzlich an Shared Desk in den Standorten, haben aber ebenfalls die Möglichkeit bis zu 40 % im Home-Office zu Arbeiten. Die Kader Mitarbeiter verfügen über eigen Büros.
Das Unternehmen verfügt über ein Data Center in Basel, sowie ein Data Center in Hamburg und hat Ressourcen bei Azure und AWS.

[![Organigramm](../img/Standorte_drawio.png)]("")


## Organigramm
Die Firma ist wie folgt strukturiert:

[![Organigramm](../img/Daten_AG_drawio.png)]("")



## EDV-Infrastruktur
Im Unternehme verfügt jeder Mitarbeiter über ein Notebook sowie ein Firmen Smart-Phone und der Vertriebe noch über ein Tablet. Die Geräte werden zentral vom Helpdesk gemanagte. Die Daten der Firma sind in Onedrive, sowie auf dem Zentrallen File Server gespeichert.

[![IT Geräte](../img/IT_Dev.png)]("")

## Produkte - Software
Das Unternehmen hat zwei Produkte, zum einen Vertreiben Sie eine Software, welche von den Gesundheitseinrichtungen kaufen und Individualisieren lassen können. Zum anderen bieten Sie eine Cloud Anwendung welche als SaaS Lösung von den Kunden bezogen werden kann.

*Datenbank*
- Mitarbeiter (Name, Adresse, Geb. Datum, Geschlecht, IBAN, AHV Nr.)
- Patienten (Name, Adresse, Geb. Datum, Geschlecht, AHV Nr., Krankenkassen Angaben, Blutguppe)
- Dossier von Patienten (Angaben zum Gesundheitszustand, Referenze zu Dateien auf File Server z.b. Röntgenbild)
- Kontakte (Name, Adresse, Tel, E-Mail, Webseite)
- Inventar
- Login Daten von Kunden und Mitarbeiter( User, Password)
- Rollen in Applikation z.B. Artzt oder Patient
- Gruppen 

*File Server*
- Röntgenbild
- Impfausweis
- Laborberichte
- Rechnungen
- Lohnausweise
- Lieferscheine

### OnPrem Infrastruktur
Die Daten der Software sind Lokal auf dem Datenbank Server und File Server der Kunden gespeichert. Sie werden auf dem Applikation Server beim Kunden Verarbeitet. Der Zugriff auf die Applikation ist Intern und/oder Extern via Web Server hinter der Firewall des Kunden möglich.
[![OnPrem](../img/architektur_onprem.png)]("")

### Cloud Infrastruktur - Shared
Die Infrastruktur der SaaS Lösung ist geteilt mit anderen Kunden. Die Datenbank, sowie Daten werden im Azure Tanent unser Firma gespeichert. Der Zugriff erfolgt jeweils via Webseite hinter der WAF von Azure.
[![Cloud](../img/architektur_cloud.png)]("")
