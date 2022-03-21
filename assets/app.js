document.addEventListener('alpine:init', ()=>{ 


	Alpine.data('donneespays', ()=>({
        search: '',
 
		listepays: [
		{nom:'CANADA', drapeau:'canada.jpg', appli:'VaxiCode Verif', commentaire:'Scanner la preuve fédérale avec «VaxiCode Verif». Trois cas: «*VERT avec nom =>série vaccinale complète, *ROUGE avec nom =>série vaccinale incomplète, *PREUVE NON VALIDE». Si aucune preuve fédérale suivre le lien ou envoyer en investigation.', lien:'https://www.canada.ca/fr/immigration-refugies-citoyennete/services/preuve-canadienne-vaccination-covid-19/obtenir-preuve.html'},
		{nom:'NEW YORK', drapeau:'usa.jpeg', appli: 'epass.ny.gov/identity', commentaire:'Le programme Excelsior Pass de l\'État de New York (« NYS ») vous permettra d\'obtenir un Excelsior Pass pour vous permettre de présenter la validation d\'un résultat de test COVID-19 négatif actuel ou d\'un statut vaccinal.', lien:'https://epass.ny.gov/identity'},
		{nom:'NEW JERSEY', drapeau:'usa.jpeg', appli: 'Docket', commentaire:'Docket est une nouvelle application du ministère de la Santé du NJ qui vous permet, à vous et à votre famille, d\'accéder en toute sécurité à votre dossier de vaccination COVID-19.Les personnes ayant un e-mail ou un numéro de téléphone enregistré auprès du système d\'information sur la vaccination du New Jersey peuvent accéder et télécharger leur dossier de vaccination COVID-19', lien:'https://covid19.nj.gov/pages/vaxrecords'},
		{nom:'UTAH', drapeau:'usa.jpeg', appli: 'Docket', commentaire:'Les dossiers de vaccination personnels ou familiaux peuvent être consultés numériquement via l\'application pour téléphone mobile Docket. Grâce à l\'application Docket, vous pouvez consulter les rapports de vaccination antérieurs, suivre les vaccins à venir et partager les rapports de vaccination officiels.', lien:'https://apps.apple.com/us/app/docket-organize-communicate/id1117444284'},
		{nom: 'CONNECTICUT', drapeau:'usa.jpeg', appli:'portal.ct.gov/DPH/Immunizations', commentaire: 'Le portail CT WiZ permet aux personnes vaccinées dans le Connecticut d\'accéder à leurs dossiers de vaccination. Obtenez une copie PDF de votre dossier de vaccination COVID-19 qui contient votre carte de santé SMART, copie numérique de votre dossier de vaccination COVID-19 qui peut être stocké sur votre téléphone en tant que QR Code', lien:'https://ctwiz.dph.ct.gov/ctwiz_public/Application/PublicPortal'},
		{nom:'CALIFORNIE', drapeau:'usa.jpeg', appli: 'myvaccinerecord.cdph.ca.gov/', commentaire:'Le portail Digital COVID-19 de l\'État de Californie permet d\'obtenir la version électronique. Suivre le lien ci-dessous et entrer les détails pour obtenir un lien vers un code QR et une copie numérique du carnet de vaccination COVID-19.', lien:'https://myvaccinerecord.cdph.ca.gov/'},
		{nom:'ETATS-UNIS', drapeau:'usa.jpeg', appli: 'Se referer à l\'État', commentaire:'Reprendre la recherche en saisissant le nom de l\'État dans la zone de recherche; si aucun résulat trouvé alors envoyer le dossier en investigation avec les informations de Zip Code.', lien:'#'},
		{nom:'BRESIL', drapeau:'bresil.jpg', appli:'Conecte SUS App Store', commentaire:'Le certificat peut être authentifié gratuitement, à l\'aide du lecteur de QRCode de l\'application Conecte SUS ou en tapant le code du document sur: https://validacertidao.saude.gov.br/', lien:'https://validacertidao.saude.gov.br/'},
		{nom:'ALLEMAGNE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.', lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'AUTRICHE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.', lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'BELGIQUE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'BULGARIE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'CHYPRE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'CROATIE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'DANEMARK', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'ESPAGNE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'ESTONIE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'FINLANDE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'FRANCE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'GRECE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'HONGRIE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'IRLANDE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'ITALIE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'LETTONIE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'LITUANIE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'LUXEMBOURG', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'MALTE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'PAYS-BAS', drapeau:'unioneuropeenne.jpg',appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'POLOGNE', drapeau:'unioneuropeenne.jpg',appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'PORTUGAL', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'REPUBLIQUE TCHEQUE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'ROUMANIE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'SLOVAQUIE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'SLOVENIE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'SUEDE', drapeau:'unioneuropeenne.jpg', appli:'TousAnticovid Verif', commentaire:'Application de vérification de Pass Sanitaire Français et Européen (EU-DCC : Digital Covid Certificate). Installer l\'application pour scanner le code QR.',lien:'https://play.google.com/store/apps/details?id=com.ingroupe.verify.anticovid&hl=en_CA&gl=US'},
		{nom:'INDE', drapeau:'inde.jpg', appli:'verify.cowin.gov.in', commentaire:'Scanner le code QR avec la caméra de votre appareil, ou ouvrir le lien ci-dessous sur votre téléphone pour avoir accès au scanner intégré au site web.', lien:'https://verify.cowin.gov.in'},
		{nom:'PERU', drapeau:'peru.jpg', appli:'Caméra appareil',commentaire:'Scanner le code QR avec la caméra de votre appareil, ou ouvrir le lien sur votre téléphone pour avoir accès au scanner intégré au site web.', lien:'carnetvacunacion.minsa.gob.pe/index.html'},
		{nom:'TUNISIE', drapeau:'tunisie.jpg', appli:'qrcheck-tntrust', commentaire:'L\'application QR-Check vérifie également la validité de la signature électronique de l\'émetteur du document pour s\'assurer de l\'intégrité des données incluses dans le Cachet Electronique Visible.', lien:'https://play.google.com/store/apps/details?id=com.gnirt69.qrcodesannerexample&hl=fr&gl=US'},
		{nom:'MEXIQUE', drapeau:'mexique.jpg', appli:'cvcovid.salud.gob.mx', commentaire:'Pour valider l\'authenticité du certificat, veuillez scanner le QRcode avec la caméra de votre appareil, qui devrait ouvrir cvcovid.salud.gob.mx pour vérification des informations du client , ou clicker ci-dessous.', lien:'https://cvcovid.salud.gob.mx'},
		{nom:'CHILI', drapeau:'chili.jpg', appli:'scanmevacuno.gob.cl', commentaire:'Pour valider l\'authenticité du certificat, veuillez scanner le QRcode avec la caméra de votre appareil, qui devrait ouvrir cvcovid.salud.gob.mx pour vérification des informations du client , ou clicker ci-dessous.', lien:'https://scanmevacuno.gob.cl/'},
		{nom:'IRAN', drapeau:'iran.jpg', appli:'Caméra appareil ',commentaire:'Scanner le code QR avec la caméra de votre appareil. Si le certificat est authentique vous êtes redirigé vers le site web qui affichera le certificat avec les infos du client.', lien:'https://vaccinecard.health.gov.ir/'},
		{nom:'MADAGASCAR', drapeau:'madagascar.jpg', appli:'Scanner avec l\'appareil photo' ,commentaire:'Scanner le code QR avec la caméra de votre appareil. Si le certificat est authentique vous êtes redirigé vers le site web qui affichera le certificat avec les infos du client.', lien:''},
		{nom:'RUSSIE', drapeau:'russie.jpg', appli:'Scanner avec l\'appareil photo', commentaire:'Scanner le code QR avec la caméra de votre appareil', lien:'https://gosuslugi.ru'},
		{nom:'GUATEMALA', drapeau:'guatemala.jpg', appli:'Scanner avec l\'appareil photo', commentaire:'Scanner le code QR avec la caméra de votre appareil, vous êtes redirigé vers le site du gouvernement. Télécharger la preuve et vérifier si conforme aux informations du client', lien:'https://registrovacunacovid.mspas.gob.gt'},
		{nom:'TURQUIE', drapeau:'turquie.jpg', appli:'HESAÇ app', commentaire:'Cette application permet de vérifier l\'authenticité des preuves vaccinales COVID-19.', lien:'https://play.google.com/store/apps/details?id=app.hesac'},
		{nom:'MAROC', drapeau:'maroc.jpg', appli:'Checkvax.ma', commentaire:'Checkvax.ma,application officielle de lecture du code QR du Pass Sanitaire Marocain. Elle permet de vérifier l\'authenticité et la validité du Pass Sanitaire Marocain. Elle est également disponible sur le site www.liqahcorona.ma', lien:'https://play.google.com/store/apps/details?id=maroccovid.checkvax&hl=en_CA&gl=US'},
		{nom:'ALGERIE', drapeau:'algerie.jpg', appli:'Scanner avec l\'appareil photo', commentaire:'Scanner le code QR avec la caméra de votre appareil. Si le certificat est authentique vous êtes redirigé vers le site web qui affichera le certificat avec les infos du client.'},
		{nom:'LIBAN', drapeau:'liban.jpg', appli:'Scanner avec l\'appareil photo', commentaire:'Scanner le code QR avec la caméra de votre appareil. Si le certificat est authentique vous êtes redirigé vers le site web qui affichera le certificat avec les infos du client.'},
		{nom:'TOGO', drapeau:'togo.jpg', appli:'PassCovidTG', commentaire:'Dans l\'appli assCovidTG Le bouton  « Vérifier un Pass » en bas à droite permet de vérifier la validité du Pass COVID d’une tierce personne. Vous pouvez aussi suivre le lien ci-dessous pour essayer de télécharger la preuve  ', lien:'https://vaccin.covid19.gouv.tg'},
		{nom:'COTE D\'IVOIRE', drapeau:'cotedivoire.jpg', appli:'vaccination.ci/idverification.php', commentaire:'Suivre le lien ci-dessous avec le code à 10 chiffres sur le certificat, ou scanner le code Qr sur le certificat avec la caméra de l\'appareil pour être automatiquement redirigé vers le site pour vérification', lien:'https://vaccination.ci/idverification.php'},
		{nom:'NIGERIA', drapeau:'nigeria.jpg', appli:'verification.vaccination.gov.ng/', commentaire:'Suivre le lien ci-dessous avec le code à 15 caractères sur le certificat, ou scanner le code Qr sur le certificat avec la caméra de l\'appareil pour être automatiquement redirigé vers le site pour vérification', lien:'https://verification.vaccination.gov.ng/'},
		{nom:'KENYA', drapeau:'kenya.jpg', appli:'Scanner avec l\'appareil photo', lien:'#'},
		{nom:'BANGLADESH', drapeau:'bangladesh.png', appli:'surokkha.gov.bd/', commentaire:'Suivre le lien ci-dessous avec le code à 10 chiffres sur le certificat, ou scanner le code Qr sur le certificat avec la caméra de l\'appareil pour afficher automatiquement le certificat s\'il est authentique', lien:'https://surokkha.gov.bd/'},
		{nom:'PAKISTAN', drapeau:'pakistan.jpg', appli:'nims.nadra.gov.pk/nims/verifyCertificateFN', commentaire:'Suivre le lien ci-dessous avec le code sur le certificat, ou scanner le code Qr sur le certificat avec la caméra de l\'appareil pour être redirigé automatiquement sur le site pour vérification.', lien:'https://nims.nadra.gov.pk/nims/verifyCertificateFN'},
		{nom:'CONGO REP. DEM.', drapeau:'rdc.jpg', appli:'cartevaccinationcovid', commentaire:'Suivre le lien ci-dessous avec le code sur le certificat, ou scanner le code Qr sur le certificat avec la caméra de l\'appareil pour être redirigé automatiquement sur le site pour vérification.', lien:'https://cartevaccinationcovid.tracker.snisrdc.com/'},
		{nom:'COLOMBIE', drapeau:'colombie.jpg', appli:'Scanner avec l\'appareil photo', commentaire:'Scanner le code QR avec la caméra de votre appareil. Si le certificat est authentique vous êtes redirigé vers le site web qui affichera le certificat avec les infos du client.', lien:'https://mivacuna.sispro.gov.co/'},
		{nom:'ANGLETERRE', drapeau:'angleterre.jpeg', appli:'NHS COVID Pass' , commentaire:'Il y a 2 façons d\'obtenir un NHS COVID Pass numérique. Téléchargez et utilisez l\'application NHS pour obtenir votre NHS COVID Pass, utiliser le service en ligne NHS COVID Pass', lien:'https://www.nhs.uk/conditions/coronavirus-covid-19/get-digital-covid-pass/'},
		{nom:'MOLDAVIE', drapeau:'moldavie.jpg', appli:'certificate-covid.gov.md/download.php', commentaire:'Accéder au lien ci-dessous, remplir le formulaire et essayer de générer le certificat electronique sur le site du gouvernement', lien:'https://certificate-covid.gov.md/download.php'},
		{nom:'SINGAPORE', drapeau:'singapor.jpg', appli:'notarise.gov.sg', commentaire:'Si client a l\'application Singpass, vérifier les informations; sinon accéder au lien ci-dessous, remplir le formulaire et essayer de générer le certificat electronique sur le site du gouvernement', lien:'https://www.notarise.gov.sg/vac/alt-login'},
		{nom:'HONG KONG', drapeau:'hongkong.jpg', appli:'LeaveHomeSafe', commentaire:'Scanner le QR avec le lecteur de l\'application LeaveHomeSafe, vérifier les informations; Si le certificat est authentique les informations du client doivent apparaître ', lien:'https://www.leavehomesafe.gov.hk/en/'},
		],
 

		get filteredPays() {
			
			if(this.search != ''){
		

				this.search = this.search.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
			
				result = this.listepays.filter(
								k => k.nom.startsWith(this.search.toUpperCase())
								)
				console.log(result)
								
					if(result.length > 0){
						return result

					}else{ nompays = this.search;
							return [{nom:nompays, drapeau:'covidvaccines.jpg', appli:'Aucune appli trouvée', commentaire:'Veuillez vérifier l\'orthographe du nom..! Si aucun résultat alors envoyer en investigation', lien:'#'}]}
					

			}else{ 		return []}
			
			
		}


	}))
	
	
	




})