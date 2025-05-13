import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function CollabSphereLandingPage() {
  return (
    <div className="min-h-screen bg-white text-black px-4 py-8 md:px-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Kollaboration. Souverän. Modular. KI-bereit.
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Die datensouveräne Alternative zu Slack, Trello und Microsoft Teams.
        </p>
        <Button className="text-lg px-6 py-3 rounded-2xl">Jetzt testen</Button>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Problem</h2>
            <p>
              Big Tech kontrolliert die Daten deiner Zusammenarbeit. Datenschutz
              und Anpassbarkeit bleiben auf der Strecke.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Lösung</h2>
            <p>
              CollabSphere gibt dir die Kontrolle zurück: Modular, selbstgehostet
              und mit KI-Funktionen erweiterbar.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Aufgabenboards mit Status",
            "Notizen & Markdown-Dokumentation",
            "Dateiupload mit Zugriffskontrolle",
            "Echtzeit-Chat & Channels",
            "KI-Unterstützung für Tasks & Content",
            "Self-Hosting & API-first Architektur",
          ].map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-center font-medium">
                {feature}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Editionen</h2>
        <p className="mb-4">Finde die passende Version für dein Team</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {["Community (Free)", "Team (ab 10€/Monat)", "Enterprise (Custom)", "SaaS (bald)"]
            .map((edition, index) => (
              <Card key={index}>
                <CardContent className="p-4 font-medium text-center">
                  {edition}
                </CardContent>
              </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-semibold mb-2">Starte jetzt mit CollabSphere</h2>
        <p className="mb-4">Teste selbstgehostet oder buche eine Demo</p>
        <div className="flex justify-center gap-4">
          <Button className="px-6 py-2 rounded-2xl">Download starten</Button>
          <Button variant="outline" className="px-6 py-2 rounded-2xl">Demo buchen</Button>
        </div>
      </section>
    </div>
  );
}
