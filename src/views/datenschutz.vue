<template>
    <home-layout>
        <div :class="{ 'landing-page': true, 'show-mobile-menu': showMobileMenu }">

            <div class="page-wrapper">
                <div class="main-wrapper">
                    <headroom style="height:initial;">
                        <div class="navbar">
                            <div class="container-nav">
                                <div class="div-block-2">
                                    <img src="/assets/img/improveasin-logo.svg" loading="lazy" width="300" alt=""
                                        class="image" style="width:180px; height: 100px;">
                                    <div class="navbar-wrapper">

                                        <AmazonLogin />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </headroom>
                </div>

                <div class="content-container" id="home">
                    <div class="hero-section">
                        <div class="container-standard">
                            <div style="padding-top: 180px;">
                                <p class="paragraph-3">Soweit nachstehend keine anderen Angaben gemacht werden, ist die
                                    Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder vertraglich
                                    vorgeschrieben, noch für einen Vertragsabschluss erforderlich. Sie sind zur
                                    Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine
                                    Folgen. Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorgängen keine
                                    anderweitige Angabe gemacht wird."Personenbezogene Daten" sind alle Informationen,
                                    die sich auf eine identifizierte oder identifizierbare natürliche Person
                                    beziehen.<br><br>&zwj;<strong>Server-Logfiles<br>&zwj;</strong>Sie können unsere
                                    Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Es werden bei jedem
                                    Zugriff auf unsere Website Nutzungsdaten durch Ihren Internetbrowser übermittelt und
                                    in Protokolldaten (Server-Logfiles) gespeichert. Zu diesen gespeicherten Daten
                                    gehören z.B. Name der aufgerufenen Seite, Datum und Uhrzeit des Abrufs, übertragene
                                    Datenmenge und der anfragende Provider. Diese Daten dienen ausschließlich der
                                    Gewährleistung eines störungsfreien Betriebs unserer Website und zur Verbesserung
                                    unseres Angebotes. Eine Zuordnung dieser Daten zu einer bestimmten Person ist nicht
                                    möglich.<br><br>&zwj;<strong>Erhebung und Verarbeitung bei Nutzung des
                                        Kontaktformulars&nbsp;<br>&zwj;</strong>Bei der Nutzung des Kontaktformulars
                                    erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur
                                    in dem von Ihnen zur Verfügung gestellten Umfang. Die Datenverarbeitung dient dem
                                    Zweck der Kontaktaufnahme. Mit Absenden Ihrer Nachricht willigen Sie in die
                                    Verarbeitung der übermittelten Daten ein. Die Verarbeitung erfolgt auf Grundlage des
                                    Art. 6 (1) lit. a DSGVO mit Ihrer Einwilligung.Sie können Ihre Einwilligung
                                    jederzeit durch Mitteilung an uns widerrufen, ohne dass die Rechtmäßigkeit der
                                    aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird. Ihre
                                    E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden
                                    anschließend gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht
                                    zugestimmt haben.<br><br>&zwj;<strong>Verwendung von Google
                                        reCAPTCHA&nbsp;<br>&zwj;</strong>Wir verwenden auf unserer Website den Dienst
                                    reCAPTCHA der Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA;
                                    „Google“). Die Abfrage dient dem Zweck der Unterscheidung, ob die Eingabe durch
                                    einen Menschen oder durch automatisierte, maschinelle Verarbeitung erfolgt. Die
                                    Abfrage schließt den Versand der IP-Adresse und ggf. weiterer von Google für den
                                    Dienst reCAPTCHA benötigter Daten an Google ein. Zu diesem Zweck wird Ihre Eingabe
                                    an Google übermittelt und dort weiter verwendet. Ihre IP-Adresse wird von Google
                                    jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
                                    Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.
                                    Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den
                                    USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird
                                    Google diese Informationen benutzen, um Ihre Nutzung dieses Dienstes auszuwerten.
                                    Die im Rahmen von reCaptcha von Ihrem Browser übermittelte IP-Adresse wird nicht mit
                                    anderen Daten von Google zusammengeführt. Ihre Daten werden dabei gegebenenfalls
                                    auch in die USA übermittelt. Für Datenübermittlungen in die USA ist ein
                                    Angemessenheitsbeschluss der Europäischen Kommission, das "Privacy Shield",
                                    vorhanden. Google nimmt am "Privacy Shield" teil und hat sich den Vorgaben
                                    unterworfen. Mit Betätigen der Abfrage willigen Sie in die Verarbeitung Ihrer Daten
                                    ein. Die Verarbeitung erfolgt auf Grundlage des Art. 6 (1) lit. a DSGVO mit Ihrer
                                    Einwilligung. Sie können Ihre Einwilligung jederzeit widerrufen, ohne dass die
                                    Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung
                                    berührt wird.Nähere Informationen zu Google reCAPTCHA sowie die dazugehörige
                                    Datenschutzerklärung finden Sie unter:&nbsp;<a
                                        href="https://policies.google.com/privacy"
                                        target="_blank">https://policies.google.com/privacy</a>&nbsp;<br><br>&zwj;<strong>Kundenkonto<br>&zwj;</strong>Bei
                                    der Eröffnung eines Kundenkontos erheben wir Ihre personenbezogenen Daten in dem
                                    dort angegeben Umfang. Die Datenverarbeitung dient dem Zweck, Ihr Einkaufserlebnis
                                    zu verbessern und die Bestellabwicklung zu vereinfachen. Die Verarbeitung erfolgt
                                    auf Grundlage des Art. 6 (1) lit. a DSGVO mit Ihrer Einwilligung. Sie können Ihre
                                    Einwilligung jederzeit durch Mitteilung an uns widerrufen, ohne dass die
                                    Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung
                                    berührt wird. Ihr Kundenkonto wird anschließend
                                    gelöscht.<br><br>&zwj;<strong>Erhebung, Verarbeitung und Nutzung personenbezogener
                                        Daten bei Bestellungen&nbsp;<br>&zwj;</strong>Bei der Bestellung erheben und
                                    verwenden wir Ihre personenbezogenen Daten nur, soweit dies zur Erfüllung und
                                    Abwicklung Ihrer Bestellung sowie zur Bearbeitung Ihrer Anfragen erforderlich ist.
                                    Die Bereitstellung der Daten ist für den Vertragsschluss erforderlich. Eine
                                    Nichtbereitstellung hat zur Folge, dass kein Vertrag geschlossen werden kann. Die
                                    Verarbeitung erfolgt auf Grundlage des Art. 6 (1) lit. b DSGVO und ist für die
                                    Erfüllung eines Vertrags mit Ihnen erforderlich. Eine Weitergabe Ihrer Daten an
                                    Dritte ohne Ihre ausdrückliche Einwilligung erfolgt nicht. Ausgenommen hiervon sind
                                    lediglich unsere Dienstleistungspartner, die wir zur Abwicklung des
                                    Vertragsverhältnisses benötigen oder Dienstleister derer wir uns im Rahmen einer
                                    Auftragsverarbeitung bedienen. Neben den in den jeweiligen Klauseln dieser
                                    Datenschutzerklärung benannten Empfängern sind dies beispielsweise Empfänger
                                    folgender Kategorien: Versanddienstleister, Zahlungsdienstleister,
                                    Warenwirtschaftsdienstleister, Diensteanbieter für die Bestellabwicklung, Webhoster,
                                    IT-Dienstleister und Dropshipping Händler. In allen Fällen beachten wir strikt die
                                    gesetzlichen Vorgaben. Der Umfang der Datenübermittlung beschränkt sich auf ein
                                    Mindestmaß.&nbsp;<br><br>&zwj;<strong>Nutzung eines externen
                                        Warenwirtschaftsystem<br>&zwj;</strong>Wir verwenden zur Vertragsabwicklung ein
                                    Warenwirtschaftssystem im Rahmen einer Auftragsverarbeitung. Dazu werden Ihre im
                                    Rahmen der Bestellung erhobenen personenbezogenen Daten anJTL-Software-GmbH,
                                    Rheinstr. 7, 41836 Hückelhoven,
                                    Deutschlandübermittelt.<br><br>&zwj;<strong>Verwendung von
                                        PayPal<br>&zwj;</strong>Alle PayPal-Transaktionen unterliegen der
                                    PayPal-Datenschutzerklärung. Diese finden Sie unter<a
                                        href="https://www.paypal.com/de/webapps/mpp/ua/privacy-prev?locale.x=de_DE"
                                        target="_blank">https://www.paypal.com/de/webapps/mpp/ua/privacy-prev?locale.x=de_DE<br><br>&zwj;</a><strong>Cookies&nbsp;<br>&zwj;</strong>Unsere
                                    Website verwendet Cookies. Cookies sind kleine Textdateien, die im Internetbrowser
                                    bzw. vom Internetbrowser auf dem Computersystem eines Nutzers gespeichert werden.
                                    Ruft ein Nutzer eine Website auf, so kann ein Cookie auf dem Betriebssystem des
                                    Nutzers gespeichert werden. Dieser Cookie enthält eine charakteristische
                                    Zeichenfolge, die eine eindeutige Identifizierung des Browsers beim erneuten
                                    Aufrufen der Website ermöglicht. Wir setzen Cookies zu dem Zweck ein, unser Angebot
                                    nutzerfreundlicher, effektiver und sicherer zu machen. Des Weiteren ermöglichen
                                    Cookies unseren Systemen, Ihren Browser auch nach einem Seitenwechsel zu erkennen
                                    und Ihnen Services anzubieten. Einige Funktionen unserer Internetseite können ohne
                                    den Einsatz von Cookies nicht angeboten werden. Für diese ist es erforderlich, dass
                                    der Browser auch nach einem Seitenwechsel wiedererkannt wird.Wir verwenden auf
                                    unserer Website darüber hinaus Cookies zu dem Zweck, eine Analyse des Surfverhaltens
                                    unserer Seitenbesucher zu ermöglichen.Des Weiteren verwenden wir Cookies zu dem
                                    Zweck, Seitenbesucher anschließend auf anderen Webseiten mit gezielter,
                                    interessenbezogener Werbung anzusprechen.Die Verarbeitung erfolgt auf Grundlage des
                                    § 15 (3) TMG sowie Art. 6 (1) lit. f DSGVO aus dem berechtigten Interesse an den
                                    oben genannten Zwecken.Die auf diese Weise von Ihnen erhobenen Daten werden durch
                                    technische Vorkehrungen pseudonymisiert. Eine Zuordnung der Daten zu Ihrer Person
                                    ist daher nicht mehr möglich. Die Daten werden nicht gemeinsam mit sonstigen
                                    personenbezogenen Daten von Ihnen gespeichert.<strong><em>Sie haben das Recht aus
                                            Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit dieser
                                            auf Art. 6 (1) f DSGVO beruhenden Verarbeitung Sie betreffender
                                            personenbezogener Daten zu widersprechen.</em></strong>Cookies werden auf
                                    Ihrem Rechner gespeichert. Daher haben Sie die volle Kontrolle über die Verwendung
                                    von Cookies. Durch die Auswahl entsprechender technischer Einstellungen in Ihrem
                                    Internetbrowser können Sie die Speicherung der Cookies und Übermittlung der
                                    enthaltenen Daten verhindern. Bereits gespeicherte Cookies können jederzeit gelöscht
                                    werden. Wir weisen Sie jedoch darauf hin, dass Sie dann gegebenenfalls nicht
                                    sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.Unter den
                                    nachstehenden Links können Sie sich informieren, wie Sie die Cookies bei den
                                    wichtigsten Browsern verwalten (u.a. auch deaktivieren) können:Chrome Browser:<a
                                        href="https://support.google.com/accounts/answer/61416?hl=de"
                                        target="_blank">https://support.google.com/accounts/answer/61416?hl=de</a>Internet
                                    Explorer:<a
                                        href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies"
                                        target="_blank">https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies</a>Mozilla
                                    Firefox:<a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen"
                                        target="_blank">https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen</a>Safari:<a
                                        href="https://support.apple.com/de-de/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                                        target="_blank">https://support.apple.com/de-de/guide/safari/manage-cookies-and-website-data-sfri11471/mac<br><br>&zwj;</a><strong>Nutzung
                                        von Google Analytics&nbsp;<br>&zwj;</strong>Wir verwenden auf unserer Website
                                    den Webanalysedienst Google Analytics der Google Inc. (1600 Amphitheatre Parkway,
                                    Mountain View, CA 94043, USA; „Google“). Die Datenverarbeitung dient dem Zweck der
                                    Analyse dieser Website und ihrer Besucher. Dazu wird Google im Auftrag des
                                    Betreibers dieser Website die gewonnenen Informationen benutzen, um Ihre Nutzung der
                                    Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um
                                    weitere, mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen
                                    gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von
                                    Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google
                                    zusammengeführt.Google Analytics verwendet Cookies, die eine Analyse der Benutzung
                                    der Website durch Sie ermöglichen. Die durch die Cookies erzeugten Informationen
                                    über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in
                                    den USA übertragen und dort gespeichert. Auf dieser Website ist die
                                    IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von
                                    Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
                                    über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die
                                    volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
                                    Ihre Daten werden gegebenenfalls in die USA übermittelt. Für Datenübermittlungen in
                                    die USA ist ein Angemessenheitsbeschluss der Europäischen Kommission vorhanden. Die
                                    Verarbeitung erfolgt auf Grundlage des Art. 6 (1) lit. f DSGVO aus dem berechtigten
                                    Interesse an der bedarfsgerechten und zielgerichteten Gestaltung der
                                    Website.<strong><em>Sie haben das Recht aus Gründen, die sich aus Ihrer besonderen
                                            Situation ergeben, jederzeit dieser auf Art. 6 (1) f DSGVO beruhenden
                                            Verarbeitung Sie betreffender personenbezogener Daten zu
                                            widersprechen.</em></strong>Sie können dazu die Speicherung der Cookies
                                    durch die Auswahl entsprechender technischer Einstellungen Ihrer Browser-Software
                                    verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls
                                    nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie
                                    können des Weiteren die Erfassung der durch das Cookie erzeugten und auf Ihre
                                    Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
                                    Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden
                                    Link verfügbare Browser-Plug-in herunterladen und installieren [<a
                                        href="https://tools.google.com/dlpage/gaoptout?hl=de"
                                        target="_blank">https://tools.google.com/dlpage/gaoptout?hl=de</a>].Um die
                                    Erfassung durch Google Analytics geräteübergreifend zu verhindern können Sie einen
                                    Opt-Out-Cookie setzen. Opt-Out-Cookies verhindern die zukünftige Erfassung Ihrer
                                    Daten beim Besuch dieser Website. Sie müssen das Opt-Out auf allen genutzten
                                    Systemen und Geräten durchführen, damit dies umfassend wirkt. Wenn Sie hier klicken,
                                    wird das Opt-Out-Cookie gesetzt:<a href="http://javascript:gaOptout()">Google
                                        Analytics deaktivieren</a>.Nähere Informationen zu Nutzungsbedingungen und
                                    Datenschutz finden Sie unter<a href="https://www.google.com/analytics/terms/de.html"
                                        target="_blank">https://www.google.com/analytics/terms/de.html</a>bzw. unter<a
                                        href="https://www.google.de/intl/de/policies/"
                                        target="_blank">https://www.google.de/intl/de/policies/</a>.<br><br>&zwj;<strong>Nutzung
                                        von LiveZilla&nbsp;<br>&zwj;</strong>Wir verwenden auf unserer Website das
                                    Analysetool der LiveZilla GmbH (Byk-Gulden-Straße 18, 78224 Singen).Die
                                    Datenverarbeitung dient dem Zweck der Analyse dieser Website und ihrer Besucher.
                                    Dazu werden Daten zu Marketing- und Optimierungszwecken gesammelt und gespeichert.
                                    Aus diesen Daten können unter einem Pseudonym Nutzungsprofile erstellt werden.
                                    Hierzu können Cookies eingesetzt werden. Die Cookies ermöglichen die Wiedererkennung
                                    des Internet-Browsers. Die mit den LiveZilla-Technologien erhobenen Daten werden
                                    ohne die gesondert erteilte Zustimmung des Betroffenen nicht dazu benutzt, den
                                    Besucher dieser Website persönlich zu identifizieren und nicht mit personenbezogenen
                                    Daten über den Träger des Pseudonyms zusammengeführt.Die Verarbeitung erfolgt auf
                                    Grundlage des Art. 6 (1) f) DSGVO aus dem berechtigten Interesse an direkter
                                    Kundenkommunikation und an der bedarfsgerechten Gestaltung der
                                    Website.<strong><em>Sie haben das Recht aus Gründen, die sich aus ihrer besonderen
                                            Situation ergeben, jederzeit dieser auf Art. 6 (1) f DSGVO beruhenden
                                            Verarbeitung Sie betreffender personenbezogener Daten zu
                                            widersprechen.</em></strong>Sie können den Widerspruch ausüben, indem Sie
                                    die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
                                    Browser-Software verhindern. Wir weisen Sie jedoch darauf hin, dass Sie in diesem
                                    Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden
                                    nutzen können.<br><br>&zwj;<strong>Verwendung der Remarketing- oder "Ähnliche
                                        Zielgruppen"-Funktion der Google Inc.<br>&zwj;</strong>Wir verwenden auf unserer
                                    Website die Remarketing- oder "Ähnliche Zielgruppen"- Funktion der Google Inc. (1600
                                    Amphitheatre Parkway, Mountain View, CA 94043, USA; „Google“). Diese Funktion dient
                                    dem Zweck der Analyse des Besucherverhaltens und der Besucherinteressen.Zur
                                    Durchführung der Analyse der Websiten-Nutzung, welche die Grundlage für die
                                    Erstellung der interessenbezogenen Werbeanzeigen bildet, setzt Google Cookies ein.
                                    Über die Cookies werden die Besuche der Website sowie anonymisierte Daten über die
                                    Nutzung der Website erfasst. Es erfolgt keine Speicherung von personenbezogenen
                                    Daten der Besucher der Website. Besuchen Sie nachfolgend eine andere Website im
                                    Google Display-Netzwerk werden Ihnen Werbeeinblendungen angezeigt, die mit hoher
                                    Wahrscheinlichkeit zuvor aufgerufene Produkt- und Informationsbereiche
                                    berücksichtigen.Ihre Daten werden dabei gegebenenfalls auch in die USA übermittelt.
                                    Für Datenübermittlungen in die USA ist ein Angemessenheitsbeschluss der Europäischen
                                    Kommission vorhanden.Die Verarbeitung erfolgt auf Grundlage des Art. 6 (1) lit. f
                                    DSGVO aus dem berechtigten Interesse, die Besucher der Website zielgerichtet mit
                                    Werbung anzusprechen, indem für Besucher der Website des Anbieters personalisierte,
                                    interessenbezogene Werbung-Anzeigen geschaltet werden, wenn sie andere Websiten im
                                    Google Display-Netzwerk besuchen.<strong><em>Sie haben das Recht aus Gründen, die
                                            sich aus Ihrer besonderen Situation ergeben, jederzeit dieser auf Art. 6 (1)
                                            f DSGVO beruhenden Verarbeitung Sie betreffender personenbezogener Daten zu
                                            widersprechen.</em></strong>Sie können dazu die Verwendung von Cookies durch
                                    Google dauerhaft deaktivieren, indem Sie dem nachfolgenden Link folgen und das dort
                                    bereitgestellte Plug-In herunterladen und installieren:<a
                                        href="https://support.google.com/ads/answer/7395996?hl=de"
                                        target="_blank">https://support.google.com/ads/answer/7395996?hl=de</a>Alternativ
                                    können Sie die Verwendung von Cookies durch Drittanbieter deaktivieren, indem sie
                                    die Deaktivierungsseite der Netzwerkwerbeinitiative (Network Advertising Initiative)
                                    unter<a href="https://www.networkadvertising.org/choices/"
                                        target="_blank">https://www.networkadvertising.org/choices/</a>aufrufen und die
                                    dort genannten weiterführenden Information zum Opt-Out umsetzen.Nähere Informationen
                                    zu Google Remarketing sowie die dazugehörige Datenschutzerklärung finden Sie
                                    unter:<a href="https://www.google.com/privacy/ads/"
                                        target="_blank">https://www.google.com/privacy/ads/<br><br>&zwj;</a><strong>Verwendung
                                        von Google Adwords Conversion-Tracking&nbsp;<br>&zwj;</strong>Wir verwenden auf
                                    unserer Website das Online-Werbeprogramm „Google AdWords“ und in diesem Rahmen
                                    Conversion-Tracking (Besuchsaktionsauswertung). Das Google Conversion Tracking ist
                                    ein Analysedienst der Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA
                                    94043, USA; „Google“). Wenn Sie auf eine von Google geschaltete Anzeige klicken,
                                    wird ein Cookie für das Conversion-Tracking auf Ihrem Rechner abgelegt. Diese
                                    Cookies haben eine begrenzte Gültigkeit, enthalten keine personenbezogenen Daten und
                                    dienen somit nicht der persönlichen Identifizierung. Wenn Sie bestimmte Seiten
                                    unserer Website besuchen und das Cookie noch nicht abgelaufen ist, können Google und
                                    wir erkennen, dass Sie auf die Anzeige geklickt haben und zu dieser Seite
                                    weitergeleitet wurden. Jeder Google AdWords-Kunde erhält ein anderes Cookie. Somit
                                    besteht keine Möglichkeit, dass Cookies über die Websites von AdWords-Kunden
                                    nachverfolgt werden können.Die Informationen, die mit Hilfe des Conversion-Cookie
                                    eingeholt werden, dienen dem Zweck Conversion-Statistiken zu erstellen. Hierbei
                                    erfahren wir die Gesamtanzahl der Nutzer, die auf eine unserer Anzeigen geklickt
                                    haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet
                                    wurden. Wir erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich
                                    identifizieren lassen. Die Verarbeitung erfolgt auf Grundlage des Art. 6 (1) lit. f
                                    DSGVO aus dem berechtigten Interesse an zielgerichteter Werbung und der Analyse der
                                    Wirkung und Effizienz dieser Werbung.<strong><em>Sie haben das Recht aus Gründen,
                                            die sich aus Ihrer besonderen Situation ergeben, jederzeit dieser auf Art. 6
                                            (1) f DSGVO beruhenden Verarbeitung Sie betreffender personenbezogener Daten
                                            zu widersprechen.</em></strong>Dazu können Sie die Speicherung der Cookies
                                    durch die Auswahl entsprechender technischer Einstellungen Ihrer Browser-Software
                                    verhindern. Wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls
                                    nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie
                                    werden sodann nicht in die Conversion-Tracking Statistiken aufgenommen.Des Weiteren
                                    können Sie in den Einstellungen für Werbung bei Google für Sie personalisierte
                                    Werbung deaktivieren. Eine Anleitung dazu finden Sie unter<a
                                        href="https://support.google.com/ads/answer/2662922?hl=de"
                                        target="_blank">https://support.google.com/ads/answer/2662922?hl=de</a>Darüber
                                    hinaus können Sie die Verwendung von Cookies durch Drittanbieter deaktivieren, indem
                                    sie die Deaktivierungsseite der Netzwerkwerbeinitiative (Network Advertising
                                    Initiative) unter<a href="https://www.networkadvertising.org/choices/"
                                        target="_blank">https://www.networkadvertising.org/choices/</a>aufrufen und die
                                    dort genannten weiterführenden Information zum Opt-Out umsetzen.Weiterführende
                                    Informationen sowie die Datenschutzerklärung von Google finden Sie unter:<a
                                        href="https://www.google.de/policies/privacy/"
                                        target="_blank">https://www.google.de/policies/privacy/<br><br>&zwj;</a><strong>Verwendung
                                        des Live-Chat-Systems LiveZilla<br>&zwj;</strong>Wir verwenden auf unserer
                                    Website das Chat System der LiveZilla GmbH (Byk-Gulden-Straße 18, 78224 Singen).Das
                                    System dient dem Zweck der Kommunikation zwischen Ihnen und uns als Anbieter. Dabei
                                    werden auch Daten zu Marketing- und Optimierungszwecken gesammelt und gespeichert.
                                    Aus diesen Daten können unter einem Pseudonym Nutzungsprofile erstellt werden.Hierzu
                                    können Cookies eingesetzt werden. Die Cookies ermöglichen die Wiedererkennung des
                                    Internet-Browsers. Die mit den LiveZilla-Technologien erhobenen Daten werden ohne
                                    die gesondert erteilte Zustimmung des Betroffenen nicht dazu benutzt, den Besucher
                                    dieser Website persönlich zu identifizieren und nicht mit personenbezogenen Daten
                                    über den Träger des Pseudonyms zusammengeführt.Die Verarbeitung erfolgt auf
                                    Grundlage des Art. 6 (1) f) DSGVO aus dem berechtigten Interesse an direkter
                                    Kundenkommunikation und an der bedarfsgerechten Gestaltung der
                                    Website.<strong><em>Sie haben das Recht aus Gründen, die sich aus Ihrer besonderen
                                            Situation ergeben, jederzeit dieser auf Art. 6 (1) f DSGVO beruhenden
                                            Verarbeitung Sie betreffender personenbezogener Daten zu
                                            widersprechen.</em></strong>Sie können den Widerspruch ausüben, indem Sie
                                    die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
                                    Browser-Software verhindern. Wir weisen Sie jedoch darauf hin, dass Sie in diesem
                                    Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden
                                    nutzen können.<br><br>&zwj;<strong>Verwendung von YouTube<br>&zwj;</strong>Wir
                                    verwenden auf unserer Website die Funktion zur Einbettung von YouTube-Videos der
                                    YouTube LLC. (901 Cherry Ave., San Bruno, CA 94066, USA; „YouTube“).YouTube ist ein
                                    mit der Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA;
                                    “Google”) verbundenes Unternehmen.Die Funktion zeigt bei YouTube hinterlegte Videos
                                    in einem iFrame auf der Website an. Dabei ist die Option „Erweiterter
                                    Datenschutzmodus“ aktiviert. Dadurch werden von YouTube keine Informationen über die
                                    Besucher der Website gespeichert. Erst wenn Sie sich ein Video ansehen, werden
                                    Informationen darüber an YouTube übermittelt und dort gespeichert.Nähere
                                    Informationen zur Erhebung und Nutzung der Daten durch YouTube und Google, über Ihre
                                    diesbezüglichen Rechte und Möglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in
                                    den Datenschutzhinweisen von YouTube (<a href="https://www.youtube.com/t/privacy"
                                        target="_blank">https://www.youtube.com/t/privacy</a>).&nbsp;<br><br>&zwj;<strong>Dauer
                                        der Speicherung<br>&zwj;</strong>Nach vollständiger Vertragsabwicklung werden
                                    die Daten zunächst für die Dauer der Gewährleistungsfrist, danach unter
                                    Berücksichtigung gesetzlicher, insbesondere steuer- und handelsrechtlicher
                                    Aufbewahrungsfristen gespeichert und dann nach Fristablauf gelöscht, sofern Sie der
                                    weitergehenden Verarbeitung und Nutzung nicht zugestimmt
                                    haben.<br><br>&zwj;<strong>Rechte der betroffenen Person<br>&zwj;</strong>Ihnen
                                    stehen bei Vorliegen der gesetzlichen Voraussetzungen folgende Rechte nach Art. 15
                                    bis 20 DSGVO zu: Recht auf Auskunft, auf Berichtigung, auf Löschung, auf
                                    Einschränkung der Verarbeitung, auf Datenübertragbarkeit.Außerdem steht Ihnen nach
                                    Art. 21 (1) DSGVO ein Widerspruchsrecht gegen die Verarbeitungen zu, die auf Art. 6
                                    (1) f DSGVO beruhen, sowie gegen die Verarbeitung zum Zwecke von
                                    Direktwerbung.Kontaktieren Sie uns auf Wunsch. Die Kontaktdaten finden Sie in
                                    unserem Impressum.<br><br>&zwj;<strong>Beschwerderecht bei der
                                        Aufsichtsbehörde<br>&zwj;</strong>Sie haben gemäß Art. 77 DSGVO das Recht, sich
                                    bei der Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die
                                    Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt.<br><br>letzte
                                    Aktualisierung: 25.04.2018</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <div class="container-standard">
                        <div class="footer-wrapper">
                            <a href="/impressum" class="footer-link">Impressum</a>
                            <div class="padding-horizontal"></div>
                            <a href="/datenschutz" class="footer-link">Datenschutz</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </home-layout>
</template>

<script>
import { headroom } from "vue-headroom";
import HomeLayout from "../layouts/HomeLayout.vue";
import AmazonLogin from "../components/Amazon/Login.vue";

export default {
    name: "Home",
    components: {
        HomeLayout,
        headroom,
        AmazonLogin,
    },
    data() {
        return {
            showMobileMenu: false,
        };
    },
    methods: {
        toggleMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    },
};
</script>
