# RideShare — Java 2

**Shkurtesat:** MVP (Minimum Viable Product – produkti minimal i përdorshëm); AI (Artificial Intelligence – inteligjencë artificiale).

## 1. Problemi
[ Çfarë vështirësie kanë studentët që udhëtojnë për në AAB?
Studentet që udhetojn për ne AAB përballen me kosto të larta të transportit individual, orare jo të rregullta të autobuseve dhe vështirësi në gjetjen e një transporti të besueshëm e të përbashkët me studentë të tjerë nga e njëjta zonë]

## 2. Përdoruesit
[Çfarë dëshiron shoferi? Çfarë dëshiron udhëtari?
Shoferi: Dëshiron të ndajë shpenzimet e karburantit, të gjejë udhëtarë përgjatë rrugës së tij dhe të menaxhojë lehtësisht kërkesat për vende të lira]

Udhëtari: Dëshiron të gjejë një udhëtim të sigurt, ekonomik dhe me orar të përshtatshëm direkt për në AAB, si dhe të rezervojë vendin me pak klikime.
## 3. Tri ekranet
1. Lista e udhëtimeve: [Shfaq të gjitha udhëtimet e disponueshme drejt AAB-së me detaje bazë (vendi i nisjes, ora, çmimi dhe vendet e lira)]
2. Detajet e udhëtimit: [Shfaq profilin e shoferit, rrugën e saktë, çmimin për person dhe butonin për të dërguar kërkesën për rezervim]
3. Kërkesa në pritje: [Shfaq statusin e rezervimit për udhëtarin (në pritje, konfirmuar, refuzuar) dhe i lejon shoferit të pranojë ose refuzojë kërkesat]

## 4. MVP — vetëm tri veçori
[Krijimi i një udhëtimi nga shoferi (caktimi i vendnisjes, orës dhe numrit të vendeve).

Kërkimi dhe filtrimi i udhëtimeve të lira nga udhëtari.

Dërgimi dhe pranim/refuzimi i kërkesës për rezervim të vendit] Cilat tri veprime duhet të funksionojnë në versionin e parë?

## 5. Çfarë e lëmë për më vonë?
[Pagesat online përmes kartelës apo aplikacionit (pagesa bëhet me para në dorë).

Integrimi i hartës live me GPS për gjurmimin e makinës në kohë reale.] Shëno dy gjëra që nuk na duhen ende.

## 6. Si e provoj?
[Kur kërkoj një vend, aplikacioni më dërgon te ekrani i "Detajeve të udhëtimit" dhe pas klikimit të butonit të rezervimit, kërkesa kalon te "Kërkesa në pritje" duke zvogëluar automatikisht numrin e vendeve të lira nëse shoferi e pranon.] Çfarë duhet të ndodhë kur kërkoj një vend?
[Nëse nuk ka vende të lira, butoni i rezervimit çaktivizohet (bëhet i klikueshëm vetëm opsioni për t'u futur në listën e pritjes) dhe udhëtimi shënohet si "I plotësuar".] Çfarë ndodh nëse nuk ka vende të lira?

## 7. Prova me kolegun
[Kolegu u hutua te ekrani i detajeve sepse nuk e kuptonte nëse kërkesa u dërgua apo jo. Si rrjedhojë, ndryshova skicën duke shtuar një mesazh konfirmimi vizual (pop-up) dhe një buton të qartë që të dërgon direkt te ekrani "Kërkesa në pritje".] Ku u hutua kolegu dhe çfarë ndryshova në skicë?

## 8. Ndihma nga AI
[Shtrova pyetje për strukturimin e MVP-së dhe formulimin e qartë të problemit të përdoruesve, ndërsa kontrollova vetë që veçoritë e zgjedhura të jenë plotësisht të realizueshme brenda kornizës së projektit.] Shëno çfarë ndihme more dhe çfarë kontrollove vetë, ose shkruaj: Nuk përdora AI.

Hiqi shenjat e plotësimit pasi t'i zëvendësosh me përgjigjet e tua.
