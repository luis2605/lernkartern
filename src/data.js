import bild65 from "./images/img1.jpeg";
import bild65a from "./images/img1a.jpeg";
import bild53a from "./images/img2a.jpg";
import bild55 from "./images/img3.jpeg";
import bild55a from "./images/img3a.jpeg";
import bild66a from "./images/img4a.jpeg";
import bild71a from "./images/img5.png";
import bild72a from "./images/img6.jpeg";
import bild78a from "./images/img7.jpeg";
import bild83 from "./images/img8.jpeg";
import bild83a from "./images/img8a.jpeg";
const QA = [
  {
    id: 47,
    question:
      "Worin besteht in der Virtualisierung von Hostsystemen der Unterschied zwischen dem Hypervisor Typ 1 und Typ 2 ?",
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Hypervisor Typ 1, auch native oder Baremetal Hypervisor gennant, setz direkt auf der Hardware des Hostsystems auf.Daher ist keine vorheriger Betriebsystem-Installation notwendig.
    Hypervisor Typ 2, auch hosted Hypervisor gennant, benötigt ein lauffähiges vollwertiges B/S, um auf diesem Hostsystem auf die Gerätetreiber des B/S bzw. auf die Hardware des Hostsystems zuzugreiffen.
    Bei beiden gilt die Voraussetzung, dass die Hardware bzw. das BIOS/UEFI des Hostsystems die Virtualisierung unterstütz. `,
    img: "",
    imga: "",
  },
  {
    id: 48,
    question: "Welche Funktionen bietet eine Dockingstation für Notebooks?",
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Eine Dockingstation wird verwendet, wenn mobile Geräte, wie zum Beispiel Notebooks oder PDAs, mit einem festen Netz verbunden werden sollen.
    Dockingstationen für Notebooks werden auch als Portreplikatoren eingesetzt. `,
    img: "",
    imga: "",
  },
  {
    id: 49,
    question:
      "Welche Video-Schnittstellen sind für 4K und 8K Auflösung geeignet",
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Nicht geegnet: HDMI 1.4 max. Auflösung:Full-HD -*-
             Geeignet: HDMI 2.0 , HDMI 2.1 , DisplayPort 1.3 , DisplayPort 1.4 `,
    img: "",
    imga: "",
  },
  {
    id: 50,
    question: "Welche technischen Merkmale hat ein Notebook?",
    level: 1,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: ` Ein Notebook hat :
    - eigenes Display
    -externe Schnittsctellen wie USB,HDMI,DisplaPort, VGA, etc.
    -integrierte Lautsprecher und Mikrofone
    -teilweise Videokamera
    -Akku
    -externes Netzteil
    -interne Netzwerkkarte `,
    img: "",
    imga: "",
  },
  {
    id: 51,
    question:
      "Welchen Vorteil bringt der Einsatz von Dual-Channel-Technik bei Speichermodule ?",
    level: 1,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Mithilfe der Dual-Channel-Technik kann der Speichercontroller des Prozessors die Daten auf zwei Arbeitspeichermodule gleichzeitig aufteilen und somit parallel schreiben und lessen.Dadurch verdoppelt sich die Datenraten.
    Voraussetzung ist , dass die eingebauten Speichermodule baugleich sind, eine identische Modulkapazität besitzen sowie paarweise verteilt werden. `,
    img: "",
    imga: "",
  },
  {
    id: 52,
    question: "Was verbirgt sich hinter Bezeichnung UHD 4K?",
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `UHD (Ultra High Definition) 4K bezeichnet ein digitales Videoformat der International Telecommunication Union(ITU) für Ultra High Definition Television (UHDTV)
    UHD 4K wird heute auch als UHD-1 bezeichnet und lehnt sich am Cinema 4K(4096 x 2160 pixels) an. `,
    img: "",
    imga: "",
  },
  {
    id: 53,
    question:
      "Unternehmen, die ein Rechenzentrum betreiben, setzen vermehrt auf die Vorteile der Virtualisierung. In diesem Zusammenhang wird oftmals der Begriff des Thin-clients benutz.Was versteht man unter einem Thin-Client?",
    level: 1,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Allgemeint kann man einen Thin-Client als einen Computer bezeichnen, welcher über ein Netzwerk Ressourcen nutzt, die ihm ein Server bereitstellt.Thin-Clients ,oder manchmal auch als Zero-Clients bezeichnet, sind lüfterlose Geräte welche über USB,einen Netzwerkanschluss, audio- und Displayanschlüsse verfügen.Thin-Clients sind umwelt- und ressourcenschonend und haben eine geringe Leistungsaufnahme. `,
    img: "",
    imga: bild53a,
  },
  {
    id: 54,
    question:
      "Welche IT-Komponenten sind Ein- oder Ausgabegaräte? a)Drucker b)Scanner c) Maus d) Display e)Touchpad ",
    level: 1,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Eingabe : Scanner, Maus , Touchpad  Ausgabe : Drucker, Display `,
    img: "",
    imga: "",
  },
  {
    id: 55,
    question: "Welche Schnittstellen sind auf dem Bild zu sehen ?",
    level: 1,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: ` `,
    img: bild55,
    imga: bild55a,
  },
  {
    id: 56,
    question:
      "Nenne die verschiedenen CLoud-Formen, die durch Cloud Computing angeboten werden.",
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Public Cloud : Stellt Zugang zu abstrahierten IT-Infrastrukturen für die breite Öffentlichkeit über das Internet bereit.
    Private Cloud : Stellt ausschließlich für eine Organisation oder Unternehmen den Zugan in eine Cloud-Umgebung bereit.
    Hybrid Cloud : Ist eine Kombination aus Public und Private Cloud.
    Community Cloud : Stellt Zugang wie bei der Public Cloud bereit, jedoch nnur für bestimmte Nutzergruppen (Behörden, Universitäten, Forschungsgemeinschaften, usw.) 
     `,
    img: "",
    imga: "",
  },
  {
    id: 57,
    question: "Was versteht man unter dem Begriff Green-IT ?",
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Unter Green-IT versteht man alle Bestrebungen, die Nutzung von Informations- und Kommunikationstechnik(IuK) über deren gesamten Lebenszyklus hinweg umwelt- und ressourcenschonend zu gestalten.
     `,
    img: "",
    imga: "",
  },

  {
    id: 58,
    question:
      "Erkläre den Begriff des Servicemodells Infrastructure as a Service (IaaS)",
    level: 1,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Infrastructure as a service , auch Foundation gennant, ist im Wesentlichen ein Ersatz für traditionelle Rechenzentren.Der Benutzer greift hier tyischerweise auf bestehende
    Dienste innerhalb seiner Cloud zu, verwaltet aber seine eigenen Recheninstanzen selbst`,
    img: "",
    imga: "",
  },
  {
    id: 59,
    question:
      "Nenne die Vorteile des Servicemodells PaaS(Platfrom as a Service)",
    level: 1,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Folgene Vorteile ergeben sich bei der Nutzung des Servicemodells PaaS: 
    - Reduzierte Programmieraufwand, da mit den PaaS-Entwiclungstools sich der Zeitaufwand für das Schreiben von Code für neue Apps reduziert. 
    -Zusätzliche Entwicklungsmöglichkeiten, ohne dass neue Mitarbeitenden eingestellt werden müssen.Entwicklungsteams können neue Funktionen mit Hilfe der PaaS-Komponenten nutzen, 
    ohne diese selbst entwicklen zu müssen. 
    -Einfachere Entwicklung für mehrere Plattformen, teilweise werden Entwicklungsoptionen für mehrere Plattformen wie Computer. Mobilgeräte und Browser von Provider angeboten. 
    -Kostengünstige Nutzung der Tools. -Effiziente Verwaltung des Anwendungslebenszyklus `,
    img: "",
    imga: "",
  },

  {
    id: 60,
    question:
      "Erkläre den Cloud Computing Begriff Software as a Service (SaaS)",
    level: 1,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Software as a Service beschreibt ein Cloud-Konzept, bei dem Software nicht länger als Lizenz an einen Benutzer verkauft wird, 
    sondern ihm gleich als Service in der Cloud zur Verfügung gestellt wird.Der Zugriff auf die Sodtware wird bei einigen Cloudanbietern vie Webbrowser gewährleistet`,
    img: "",
    imga: "",
  },
  {
    id: 61,
    question: `Moderne Storage-Systeme sind mit Hilfe von Glasfaser und dem Fibre-Chanel Protokoll an einen Dateiserver oder 
    virtualisierte Server angebunden.Bei diesen Anbindungen ist die Rede vom Host-Bus-Adapter. Was ist ein Host-Bus-Adapter?`,
    level: 1,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Als Host-Bus-Adapter (HBA) bezeichnet man eine Netzwerkhardware,welche in eninem Server installiert ist, um damit ein oder mehrere Datenspeichergeräte(Storage) zu erreichen`,
    img: "",
    imga: "",
  },
  {
    id: 62,
    question: `Eine unterbrechungsfreie Stromversorgung (USV)
     wird nach der USV-Klassifizierung nach IEC 62040-3 in 3 Klassen unterteilt.
      Nenne die 3 Klassen und erkläre deren Wirkungweise stichtpunktartig`,
    level: 3,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Klasse 1 : VFI (Voltage and Frequency Independent / Schutz von alles ohne Verzögerung).
    Klasse 2 : VI (Voltage Independent / Schutz von Stromausfalls, Unter-Überspannung).
     Klasse 3 : VFD (Voltage and Frequency Dependent / Schutz von Strommausfalls ,jedoch mit Verzögerung)`,
    img: "",
    imga: "",
  },
  {
    id: 63,
    question: `IT-Infrastrukturen werden heute 24/7 betrieben.Welche Aufgabe übernimmt in diesem Zusammenhang eine USV?`,
    level: 1,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Eine unterbrechungsfreie Stromversorgung soll die elektrische Versorgung der systemrelevanten It-Komponenten 24/7 sicherstellen sowie Störungen im Stromnetz zeitlich überbrücken.
    `,
    img: "",
    imga: "",
  },
  {
    id: 64,
    question: `Welche Aufgabe übernimmt ein Datenbankmanagementsystem, kurz DBMS ?`,
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `-Speicherung,Veränderung und Löschung von Daten.
    -Verwaltung der Matadaten.
    -Gewahrleistung der Datensicherheit und Datenschutzes.
    -trifft Vorkehrungen zur Datenintegrität.
    -stellt den Mehrbenutzerbetrieb durch das Transktionskonzept sicher.
    -unterstütz die Optimierung von Abfragen.
    -ermöglicht Triggern und Stored Procesures.
    -Bereitstellung von Informationen über Rechnik und Betrieb. `,
    img: "",
    imga: "",
  },

  {
    id: 65,
    question: `Welche Eigenschaften haben die folgenden RAID-Level ? Vervollständige die Tabelle`,
    level: 1,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: ``,
    img: bild65,
    imga: bild65a,
  },
  {
    id: 66,
    question: `Was ist eine DMZ ?`,
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Eine DMZ(Demilitarisierte Zone) trennt durch ein Subnetz mit Hilfe von Firewall-Routern das interne Netwerk von externen Netzwerke ab.
    `,
    img: "",
    imga: bild66a,
  },
  {
    id: 67,
    question: `Welche Aufgabe hat ein Netzwerk-Router?`,
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Ein Router oder auch Netzwerkrouter ist ein Netzwerkgerät, welche sich im OSI-Modell auf der Schicht 3 (Vermittlungsschicht/Network Layer) befindet und die Netzwerkpakete zwischen mehreren Netzwerke weiterleitet.
    `,
    img: "",
    imga: "",
  },
  {
    id: 68,
    question: `Nenne die 4 transportorientierten Schichten des OSI-Modells und erläutere deren Aufgaben`,
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Schicht 1 - Bitübertragungsschicht (Physical Layer) : Diese unterste Schicht stellt die physischen Verbingdungen zu den aktiven Netzwerkkomponenten her.
            Schicht 2 - Sicherungsschicht (Data Link Layer) : Sie gewährleistet eine zuverlässige sowie fehlerfreie Übertragung und den Zugriff auf das Übertragungsmedium.
            Schicht 3 - Vermittlungsschicht (Network Layer) : Zu den Aufgaben dieser Schicht gehört das Bereitstellen von netzwerk-übergreifenden Adressen (IPv4/IPv6), das Routing, sowohl Aufbau als auch die Aktualisierung von Routingtabellen sowie die Fragmentierung von Datenpakete.
            Schicht 4 - Transportsschicht (Transport Layer) : Diese ist für die Sicherstellung einer fehlerfrei Übertragung zuständig sowie für die Datensegmentierung und für die Datenkapselung durch Protokollenelemente verantwortlich. 
    `,
    img: "",
    imga: "",
  },
  {
    id: 69,
    question: `Was ist eine Broadcast-Domäne ?`,
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Der Begriff Broadcast-Domäne wird für ein Netzwerk aus Netzwerkgeräten, die sich in der OSI-Modell-Schicht 2 befinden, benutz.Innerhalb einer Broadcast-Domäne gibt es eine  oder mehrere Kollisionsdomänen.Eine Broadcast-Domäne ist über Hubs, Switches oder Bridges miteinander verbunden und erreicht mit Hilfe eine Ethernet-Broadcast-Adresse ff:ff:ff:ff:ff:ff alle andere Domäneteilnehmer.
    `,
    img: "",
    imga: "",
  },
  {
    id: 70,
    question: `Was ist ein Network Attached Storage, kurz NAS ?`,
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Die Bezeichnung NAS wird für einen einfach zu verwaltenden Dateiserver benutz, der über ein eigenes Dateisystem (Ext4/Btrfs) und eine Managementoberfläche verfügt. Eine NAS wird eingesetz , um unabhängige Speicherkapazität in einem lokale Rechnernetz bereitzustellen. 
    `,
    img: "",
    imga: "",
  },
  {
    id: 71,
    question: `Was ist ein Storage Area Network, kurz SAN ?`,
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Storage Area Network (SAN) bzw. Speichernetzwerk ist die Bezeichnung für ein Netzwer mit Anbindung an eine Festplattensubsystem, der sogenannten Disk-Arrays oder Tape-Libraries an einem Server.
    `,
    img: "",
    imga: bild71a,
  },
  {
    id: 72,
    question: `Das Unternehmensnetzwerk (192.168.30.0) soll zukünftig in 8 Subnetze unterteilt werden. Wie lautet die korrekte Subnetzmaske und wie viele Host IP-Adressen kann ich zusammen in allen 8 Subnetzen nutzen ?`,
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Total Host IP-Adressen 240.
           
    `,
    img: "",
    imga: bild72a,
  },
  {
    id: 73,
    question: `Was bedeutet in der Netzwerktechnologie der Begriff PoE ?`,
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Power over Ethernet(PoE) bezeichnet ein Verfahren, welches durch die IEEE-Standards definiert ist und mit dem Netzwerkgeräte über das Ethernet-Kabel des lokalen Netzwerks mit Strom versorgt werden können.
    Typische Verbraucher : 
    -IP Telefonie
    -Wireless Acces Points (WAP)
    -Ip-Kameras
    -Zeiterfassungsterminals
           
    `,
    img: "",
    imga: "",
  },
  {
    id: 74,
    question: `Wie lautet die Notation einer iSCSI-Verbindung ?`,
    level: 3,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Eine iSCSI-Verbindung, die zwischen einem Target und einem Initiator hergestellt werden soll, benötig jeweils einen iSCI Qualified Name(IQN).Die IQN stellt somit, vergleichbar einer IP-Adresse für das Ethernet Protokoll,die Adressierung dar.
    Das IQN-Format hat die folgende Form :
    iqn.yyyy-mm.naming-authority:unique
    (iqn.2005-01.com.microsoft.iscsi:name1) 
           
    `,
    img: "",
    imga: "",
  },
  {
    id: 75,
    question: `Wie wird eine Fibre Channel Verbindung adressiert?`,
    level: 3,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: ` Beim Fibre Channel hat jedes Gerät einen weltweit eindeutigen WWNN(World Wide Node Name), manchmal auch nur WWN(World Wide Name) gennant, sowie jeder Port pro Gerät einen WWPN(World Wide Port Name).Dabei handelt sich es um einen 64-bit Wert (hex), der jedes Fibre.Channel-Gerät eindeutig identifiziert.Der WWNN/WWN ist das Äquivalent zur MAC-Adresse bei Ethenert Netzwerkkarten/Netzwerkgeräten.
    z.B: 20:00:05:45:E4:67:A3:88
           
    `,
    img: "",
    imga: "",
  },
  {
    id: 76,
    question: `Welche Aufgabe hat bei IPv4 eine Broadcast-Adresse ?`,
    level: 3,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Mit Hilfe einer Broadcast-Adresse werden alle Netzwerkgeräte eines lokalen Netzwerkes erreicht, ohne es dediziert anzugeben.
    Broadcast sind immer auf das eigene lokale Netzwerk beschrankt und werden nicht über Router weitergeleitet.Eine Broadcast-IP-Adresse wird in jedem Netzwerk nur einmal vergeben.Sie ist immer die letzte IP-Adresse des Subnetzes.
           
    `,
    img: "",
    imga: "",
  },
  {
    id: 77,
    question: `Was versteht man bei IPv6 unter einer Stateless Address Autoconfiguration ?`,
    level: 3,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `SLAAC - Stateless Address Autoconfiguration (IPv6) ist das Äquivalent zum APIPA bei IPv4.Stateless, also zustandlos, bekommt jedes IPv6-Stack per Autokonfiguration eine link-lokale IPv6 zugewiessen.Die link-lokale Adresse beggint immer mit FE80:. 
    `,
    img: "",
    imga: "",
  },
  {
    id: 78,
    question: `Worin unterscheiden sich die Lichtwellenleiter der Single- und Multimodefasern ?`,
    level: 3,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Die Unterscheidung zwischen Singlemode und Multimode Glasfaser besteht darin, dass Singlemode Glassfaserkabel einen erheblich geringeren Faserkerndurchmesser als Multimode Glasfaserkabel haben.
           
    `,
    img: "",
    imga: bild78a,
  },
  {
    id: 79,
    question: `Nenne Vor- und Nachteile von Singlemode-Glasfasern`,
    level: 3,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `VORTEILE:
    -geringe Dämpfung des Signals
    -kaum Laufzeitverschiebungen
    -hohe Brandbreiten
    NACHTEILE:
    -teurere Laser zur Einspeisung des Lichts notwendig
    -größerer Aufwand bei der Herstellung der Glasfasern aufgrund der sehr klein Faserkerne
    -hohe Präzision beim Verbinden der Glasfasern durch Stecker oder beim Spleißen notwendig 
    `,
    img: "",
    imga: "",
  },
  {
    id: 80,
    question: `Nenne Vor- und Nachteile von Multimode-Glasfasern`,
    level: 3,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `VORTEILE:
    -geringe Aufwand in der Herstellung des Glasfasern
    -einfachere Verbindungstechnik aufgrund des größeren Kerndurchmessers
    -Fasern mit Stufenindex- und Gradientenindexprofil verfügbar.
    NACHTEILE:
    -größere Signaldämpfung und Laufzeitverschiebung
    -geringere maximale Brandbreiten
    -nur kürzere Distanzen überbruckbar
    -Verstärker oder Signalaufbreiter bei größeren Distanzen notwendig
    `,
    img: "",
    imga: "",
  },
  {
    id: 81,
    question: `Welche Aufgabe hat das Simple Network Management Protocol, kurz SNMP ?`,
    level: 3,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `Das Simple Network Management Protocol ist ein Netzwerkprotokoll, welche von der IETF(Internet Engineering Task Force)entwicklelt wurde mit dem Ziel, Netzwerkelemente wie Router, Server, Switches, Drucker, Computer, Temperaturensensoren und andere SNMP- taugliche Geräte mit Hilfe einer zentrale Management Konsole aus überwachen und steuern zu können.
    `,
    img: "",
    imga: "",
  },
  {
    id: 82,
    question: `Welche Aufgabe hat ein DHCP-Server innerhalb der IT-Infrastruktur ?`,
    level: 2,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `
    Das Dynamic Host Configuration Protocol (DHCP) ist ein Kommunikationsprotokoll, welches Netzwerkgeräten ermöglicht ohen manuelle Konfiguration eine automatische Netzwerkkonfiguration für das lokalen Netz zu erhalten
    `,
    img: "",
    imga: "",
  },
  {
    id: 83,
    question: `Bitte vergleiche die Protokolle UDP und TCP miteinander und fülle die folgende Tabelle aus`,
    level: 3,
    modul: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    answer: `
    `,
    img: bild83,
    imga: bild83a,
  },
];
export default QA;
