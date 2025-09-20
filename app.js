//2.0 Launch 9/20/25

const localFonts = [
"ABeeZee-Regular.ttf",
"Abel-Regular.ttf",
"AbhayaLibre-Regular.ttf",
"Aboreto-Regular.ttf",
"AbrilFatface-Regular.ttf",
"AbyssinicaSIL-Regular.ttf",
"Acme-Regular.ttf",
"Actor-Regular.ttf",
"Adamina-Regular.ttf",
"ADLaMDisplay-Regular.ttf",
"Agbalumo-Regular.ttf",
"Agdasima-Regular.ttf",
"AguafinaScript-Regular.ttf",
"Akatab-Regular.ttf",
"AkayaKanadaka-Regular.ttf",
"Akronim-Regular.ttf",
"Aladin-Regular.ttf",
"Alata-Regular.ttf",
"Alatsi-Regular.ttf",
"Aldrich-Regular.ttf",
"Alef-Regular.ttf",
"AlegreyaSans-Regular.ttf",
"AlegreyaSansSC-Regular.ttf",
"AlegreyaSC-Regular.ttf",
"AlexBrush-Regular.ttf",
"AlfaSlabOne-Regular.ttf",
"Alice-Regular.ttf",
"Alike-Regular.ttf",
"AlikeAngular-Regular.ttf",
"Alkalami-Regular.ttf",
"Allan-Regular.ttf",
"Allerta-Regular.ttf",
"AllertaStencil-Regular.ttf",
"Allison-Regular.ttf",
"Allura-Regular.ttf",
"Almarai-Regular.ttf",
"Almendra-Regular.ttf",
"AlmendraDisplay-Regular.ttf",
"AlmendraSC-Regular.ttf",
"AlumniSansCollegiateOne-Regular.ttf",
"AlumniSansCollegiateOneSC-Regular.ttf",
"AlumniSansInlineOne-Regular.ttf",
"AlumniSansPinstripe-Regular.ttf",
"Amarante-Regular.ttf",
"Amaranth-Regular.ttf",
"AmaticSC-Regular.ttf",
"Amethysta-Regular.ttf",
"Amiko-Regular.ttf",
"Amiri-Regular.ttf",
"Amita-Regular.ttf",
"Andika-Regular.ttf",
"Angkor-Regular.ttf",
"AnnapurnaSIL-Regular.ttf",
"AnnieUseYourTelescope-Regular.ttf",
"AnonymousPro-Regular.ttf",
"Anta-Regular.ttf",
"Antic-Regular.ttf",
"AnticDidone-Regular.ttf",
"AnticSlab-Regular.ttf",
"Anton-Regular.ttf",
"AntonSC-Regular.ttf",
"AoboshiOne-Regular.ttf",
"Arapey-Regular.ttf",
"Arbutus-Regular.ttf",
"ArbutusSlab-Regular.ttf",
"ArchitectsDaughter-Regular.ttf",
"ArchivoBlack-Regular.ttf",
"ArefRuqaa-Regular.ttf",
"ArefRuqaaInk-Regular.ttf",
"AreYouSerious-Regular.ttf",
"Arizonia-Regular.ttf",
"Armata-Regular.ttf",
"Arsenal-Regular.ttf",
"ArsenalSC-Regular.ttf",
"Artifika-Regular.ttf",
"Arvo-Regular.ttf",
"Arya-Regular.ttf",
"AsapCondensed-Regular.ttf",
"Asar-Regular.ttf",
"Asset-Regular.ttf",
"Astloch-Regular.ttf",
"Asul-Regular.ttf",
"Athiti-Regular.ttf",
"AtkinsonHyperlegible-Regular.ttf",
"Atma-Regular.ttf",
"AtomicAge-Regular.ttf",
"Aubrey-Regular.ttf",
"Audiowide-Regular.ttf",
"AutourOne-Regular.ttf",
"Average-Regular.ttf",
"AverageSans-Regular.ttf",
"AveriaGruesaLibre-Regular.ttf",
"AveriaLibre-Regular.ttf",
"AveriaSansLibre-Regular.ttf",
"AveriaSerifLibre-Regular.ttf",
"B612-Regular.ttf",
"Babylonica-Regular.ttf",
"BacasimeAntique-Regular.ttf",
"BadeenDisplay-Regular.ttf",
"BadScript-Regular.ttf",
"BagelFatOne-Regular.ttf",
"Bahiana-Regular.ttf",
"Bahianita-Regular.ttf",
"BaiJamjuree-Regular.ttf",
"BakbakOne-Regular.ttf",
"BalsamiqSans-Regular.ttf",
"Balthazar-Regular.ttf",
"Bangers-Regular.ttf",
"Barlow-Regular.ttf",
"BarlowCondensed-Regular.ttf",
"BarlowSemiCondensed-Regular.ttf",
"Barriecito-Regular.ttf",
"Barrio-Regular.ttf",
"Basic-Regular.ttf",
"Batang-Regular.ttf",
"BatangChe-Regular.ttf",
"Battambang-Regular.ttf",
"Baumans-Regular.ttf",
"Bayon-Regular.ttf",
"BeauRivage-Regular.ttf",
"BebasNeue-Regular.ttf",
"Belanosima-Regular.ttf",
"Belgrano-Regular.ttf",
"Bellefair-Regular.ttf",
"Belleza-Regular.ttf",
"Bellota-Regular.ttf",
"BellotaText-Regular.ttf",
"BenchNine-Regular.ttf",
"Benne-Regular.ttf",
"Bentham-Regular.ttf",
"BerkshireSwash-Regular.ttf",
"BethEllen-Regular.ttf",
"Bevan-Regular.ttf",
"BeVietnamPro-Regular.ttf",
"Bhavuka-Regular.ttf",
"BhuTukaExpandedOne-Regular.ttf",
"BigelowRules-Regular.ttf",
"BigshotOne-Regular.ttf",
"Bilbo-Regular.ttf",
"BilboSwashCaps-Regular.ttf",
"BioRhymeExpanded-Regular.ttf",
"Birthstone-Regular.ttf",
"BirthstoneBounce-Regular.ttf",
"Biryani-Regular.ttf",
"BIZUDGothic-Regular.ttf",
"BIZUDMincho-Regular.ttf",
"BIZUDPGothic-Regular.ttf",
"BIZUDPMincho-Regular.ttf",
"BlackAndWhitePicture-Regular.ttf",
"BlackHanSans-Regular.ttf",
"BlackOpsOne-Regular.ttf",
"Blaka-Regular.ttf",
"BlakaHollow-Regular.ttf",
"Blinker-Regular.ttf",
"Bokor-Regular.ttf",
"Boldonse-Regular.ttf",
"BonaNova-Regular.ttf",
"BonaNovaSC-Regular.ttf",
"Bonbon-Regular.ttf",
"BonheurRoyale-Regular.ttf",
"Boogaloo-Regular.ttf",
"Borel-Regular.ttf",
"BowlbyOne-Regular.ttf",
"BowlbyOneSC-Regular.ttf",
"BraahOne-Regular.ttf",
"Brawler-Regular.ttf",
"BreeSerif-Regular.ttf",
"BrunoAce-Regular.ttf",
"BrunoAceSC-Regular.ttf",
"BubblegumSans-Regular.ttf",
"BubblerOne-Regular.ttf",
"Bungee-Regular.ttf",
"BungeeHairline-Regular.ttf",
"BungeeInline-Regular.ttf",
"BungeeOutline-Regular.ttf",
"BungeeShade-Regular.ttf",
"Butcherman-Regular.ttf",
"ButterflyKids-Regular.ttf",
"Bytesized-Regular.ttf",
"CabinCondensed-Regular.ttf",
"CabinSketch-Regular.ttf",
"CactusClassicalSerif-Regular.ttf",
"CaesarDressing-Regular.ttf",
"Cagliostro-Regular.ttf",
"Caladea-Regular.ttf",
"Calistoga-Regular.ttf",
"CalSans-Regular.ttf",
"Cambay-Regular.ttf",
"Cambo-Regular.ttf",
"Cantarell-Regular.ttf",
"CantataOne-Regular.ttf",
"CantoraOne-Regular.ttf",
"Caprasimo-Regular.ttf",
"Capriola-Regular.ttf",
"Caramel-Regular.ttf",
"Carattere-Regular.ttf",
"Cardo-Regular.ttf",
"Carlito-Regular.ttf",
"Carme-Regular.ttf",
"CarroisGothic-Regular.ttf",
"CarroisGothicSC-Regular.ttf",
"Castoro-Regular.ttf",
"CastoroTitling-Regular.ttf",
"Caudex-Regular.ttf",
"CaveatBrush-Regular.ttf",
"CevicheOne-Regular.ttf",
"ChakraPetch-Regular.ttf",
"ChangaOne-Regular.ttf",
"Chango-Regular.ttf",
"CharisSIL-Regular.ttf",
"Charm-Regular.ttf",
"Charmonman-Regular.ttf",
"Chathura-Regular.ttf",
"ChauPhilomeneOne-Regular.ttf",
"ChelaOne-Regular.ttf",
"ChelseaMarket-Regular.ttf",
"Cherish-Regular.ttf",
"CherryBombOne-Regular.ttf",
"CherrySwash-Regular.ttf",
"Chicle-Regular.ttf",
"Chilanka-Regular.ttf",
"ChocolateClassicalSans-Regular.ttf",
"Chokokutai-Regular.ttf",
"Chonburi-Regular.ttf",
"CinzelDecorative-Regular.ttf",
"ClickerScript-Regular.ttf",
"Coda-Regular.ttf",
"Codystar-Regular.ttf",
"Coiny-Regular.ttf",
"Combo-Regular.ttf",
"Comforter-Regular.ttf",
"ComicNeue-Regular.ttf",
"ComicRelief-Regular.ttf",
"ConcertOne-Regular.ttf",
"Condiment-Regular.ttf",
"Content-Regular.ttf",
"ContrailOne-Regular.ttf",
"Convergence-Regular.ttf",
"Cookie-Regular.ttf",
"Copse-Regular.ttf",
"CoralPixels-Regular.ttf",
"Corben-Regular.ttf",
"Corinthia-Regular.ttf",
"CormorantSC-Regular.ttf",
"CormorantUnicase-Regular.ttf",
"CormorantUpright-Regular.ttf",
"Courgette-Regular.ttf",
"CourierPrime-Regular.ttf",
"Coustard-Regular.ttf",
"Creepster-Regular.ttf",
"CreteRound-Regular.ttf",
"CrimsonText-Regular.ttf",
"CroissantOne-Regular.ttf",
"CuteFont-Regular.ttf",
"Cutive-Regular.ttf",
"CutiveMono-Regular.ttf",
"DaiBannaSIL-Regular.ttf",
"Damion-Regular.ttf",
"Dangrek-Regular.ttf",
"DarumadropOne-Regular.ttf",
"DavidLibre-Regular.ttf",
"DaysOne-Regular.ttf",
"Dekko-Regular.ttf",
"DelaGothicOne-Regular.ttf",
"DeliciousHandrawn-Regular.ttf",
"Delius-Regular.ttf",
"DeliusSwashCaps-Regular.ttf",
"DeliusUnicase-Regular.ttf",
"DellaRespira-Regular.ttf",
"DenkOne-Regular.ttf",
"Devonshire-Regular.ttf",
"Dhurjati-Regular.ttf",
"Dhyana-Regular.ttf",
"DidactGothic-Regular.ttf",
"DigitalNumbers-Regular.ttf",
"Diphylleia-Regular.ttf",
"Diplomata-Regular.ttf",
"DiplomataSC-Regular.ttf",
"DMMono-Regular.ttf",
"DMSerifDisplay-Regular.ttf",
"DMSerifText-Regular.ttf",
"DoHyeon-Regular.ttf",
"Dokdo-Regular.ttf",
"DonegalOne-Regular.ttf",
"Dongle-Regular.ttf",
"DoppioOne-Regular.ttf",
"Dorsa-Regular.ttf",
"DotGothic16-Regular.ttf",
"Dotum-Regular.ttf",
"DotumChe-Regular.ttf",
"DrSugiyama-Regular.ttf",
"DuruSans-Regular.ttf",
"Dynalight-Regular.ttf",
"EagleLake-Regular.ttf",
"EastSeaDokdo-Regular.ttf",
"Eater-Regular.ttf",
"Economica-Regular.ttf",
"EkMukta-Regular.ttf",
"Electrolize-Regular.ttf",
"Elsie-Regular.ttf",
"ElsieSwashCaps-Regular.ttf",
"EmblemaOne-Regular.ttf",
"EmilysCandy-Regular.ttf",
"EncodeSansCondensed-Regular.ttf",
"EncodeSansExpanded-Regular.ttf",
"EncodeSansSemiCondensed-Regular.ttf",
"EncodeSansSemiExpanded-Regular.ttf",
"Engagement-Regular.ttf",
"Englebert-Regular.ttf",
"Enriqueta-Regular.ttf",
"Ephesis-Regular.ttf",
"EricaOne-Regular.ttf",
"Esteban-Regular.ttf",
"Estonia-Regular.ttf",
"EuphoriaScript-Regular.ttf",
"Ewert-Regular.ttf",
"Exile-Regular.ttf",
"Explora-Regular.ttf",
"FacultyGlyphic-Regular.ttf",
"Fahkwang-Regular.ttf",
"FanwoodText-Regular.ttf",
"Farro-Regular.ttf",
"Farsan-Regular.ttf",
"Fascinate-Regular.ttf",
"FascinateInline-Regular.ttf",
"FasterOne-Regular.ttf",
"Fasthand-Regular.ttf",
"FaunaOne-Regular.ttf",
"Federant-Regular.ttf",
"Federo-Regular.ttf",
"Felipa-Regular.ttf",
"Fenix-Regular.ttf",
"Festive-Regular.ttf",
"FingerPaint-Regular.ttf",
"FiraMono-Regular.ttf",
"FiraSans-Regular.ttf",
"FiraSansCondensed-Regular.ttf",
"FiraSansExtraCondensed-Regular.ttf",
"FjallaOne-Regular.ttf",
"FjordOne-Regular.ttf",
"Flamenco-Regular.ttf",
"Flavors-Regular.ttf",
"FleurDeLeah-Regular.ttf",
"Fondamento-Regular.ttf",
"Forum-Regular.ttf",
"FragmentMono-Regular.ttf",
"FragmentMonoSC-Regular.ttf",
"FrancoisOne-Regular.ttf",
"FreckleFace-Regular.ttf",
"FrederickatheGreat-Regular.ttf",
"Freehand-Regular.ttf",
"Freeman-Regular.ttf",
"Fresca-Regular.ttf",
"Frijole-Regular.ttf",
"Fruktur-Regular.ttf",
"FugazOne-Regular.ttf",
"Fuggles-Regular.ttf",
"FuzzyBubbles-Regular.ttf",
"Gabriela-Regular.ttf",
"Gaegu-Regular.ttf",
"Gafata-Regular.ttf",
"GajrajOne-Regular.ttf",
"Galada-Regular.ttf",
"Galdeano-Regular.ttf",
"Galindo-Regular.ttf",
"GaMaamli-Regular.ttf",
"GamjaFlower-Regular.ttf",
"GasoekOne-Regular.ttf",
"Gayathri-Regular.ttf",
"GentiumBookPlus-Regular.ttf",
"GentiumPlus-Regular.ttf",
"Geo-Regular.ttf",
"Geostar-Regular.ttf",
"GeostarFill-Regular.ttf",
"GermaniaOne-Regular.ttf",
"GFSDidot-Regular.ttf",
"GideonRoman-Regular.ttf",
"Gidole-Regular.ttf",
"Gidugu-Regular.ttf",
"GildaDisplay-Regular.ttf",
"Girassol-Regular.ttf",
"GlassAntiqua-Regular.ttf",
"Gloock-Regular.ttf",
"GochiHand-Regular.ttf",
"Goldman-Regular.ttf",
"Gorditas-Regular.ttf",
"GothicA1-Regular.ttf",
"Gotu-Regular.ttf",
"GowunBatang-Regular.ttf",
"GowunDodum-Regular.ttf",
"Graduate-Regular.ttf",
"GrandHotel-Regular.ttf",
"GrandifloraOne-Regular.ttf",
"GrapeNuts-Regular.ttf",
"GreatVibes-Regular.ttf",
"GrechenFuemen-Regular.ttf",
"Grenze-Regular.ttf",
"GreyQo-Regular.ttf",
"Griffy-Regular.ttf",
"Gruppo-Regular.ttf",
"Gudea-Regular.ttf",
"Gugi-Regular.ttf",
"Gulim-Regular.ttf",
"GulimChe-Regular.ttf",
"Gulzar-Regular.ttf",
"Gungsuh-Regular.ttf",
"GungsuhChe-Regular.ttf",
"Gupter-Regular.ttf",
"Gurajada-Regular.ttf",
"Gwendolyn-Regular.ttf",
"Habibi-Regular.ttf",
"HachiMaruPop-Regular.ttf",
"Halant-Regular.ttf",
"HammersmithOne-Regular.ttf",
"Hanalei-Regular.ttf",
"HanaleiFill-Regular.ttf",
"Handlee-Regular.ttf",
"Hannari-Regular.ttf",
"HappyMonkey-Regular.ttf",
"Harmattan-Regular.ttf",
"HeadlandOne-Regular.ttf",
"HedvigLettersSans-Regular.ttf",
"HennyPenny-Regular.ttf",
"HermeneusOne-Regular.ttf",
"HerrVonMuellerhoff-Regular.ttf",
"HiMelody-Regular.ttf",
"HinaMincho-Regular.ttf",
"Hind-Regular.ttf",
"HindColombo-Regular.ttf",
"HindGuntur-Regular.ttf",
"HindJalandhar-Regular.ttf",
"HindKochi-Regular.ttf",
"HindMadurai-Regular.ttf",
"HindMysuru-Regular.ttf",
"HindSiliguri-Regular.ttf",
"HindVadodara-Regular.ttf",
"HoltwoodOneSC-Regular.ttf",
"Homenaje-Regular.ttf",
"Hubballi-Regular.ttf",
"Huninn-Regular.ttf",
"Hurricane-Regular.ttf",
"Iansui-Regular.ttf",
"IBMPlexMono-Regular.ttf",
"IBMPlexSansArabic-Regular.ttf",
"IBMPlexSansCondensed-Regular.ttf",
"IBMPlexSansDevanagari-Regular.ttf",
"IBMPlexSansHebrew-Regular.ttf",
"IBMPlexSansJP-Regular.ttf",
"IBMPlexSansKR-Regular.ttf",
"IBMPlexSansThai-Regular.ttf",
"IBMPlexSansThaiLooped-Regular.ttf",
"IBMPlexSerif-Regular.ttf",
"Iceberg-Regular.ttf",
"Iceland-Regular.ttf",
"IMFELLDoublePica-Regular.ttf",
"ImperialScript-Regular.ttf",
"Imprima-Regular.ttf",
"Inconsolata-Regular.ttf",
"Inder-Regular.ttf",
"IndieFlower-Regular.ttf",
"IngridDarling-Regular.ttf",
"Inika-Regular.ttf",
"InknutAntiqua-Regular.ttf",
"InriaSans-Regular.ttf",
"InriaSerif-Regular.ttf",
"Inspiration-Regular.ttf",
"InstrumentSerif-Regular.ttf",
"IslandMoments-Regular.ttf",
"IstokWeb-Regular.ttf",
"Italiana-Regular.ttf",
"Italianno-Regular.ttf",
"Itim-Regular.ttf",
"Jacquard12-Regular.ttf",
"Jacquard24-Regular.ttf",
"JacquardaBastarda9-Regular.ttf",
"JacquesFrancois-Regular.ttf",
"JacquesFrancoisShadow-Regular.ttf",
"Jaini-Regular.ttf",
"JainiPurva-Regular.ttf",
"Jaldi-Regular.ttf",
"JejuGothic-Regular.ttf",
"JejuHallasan-Regular.ttf",
"JejuMyeongjo-Regular.ttf",
"Jersey10-Regular.ttf",
"Jersey15-Regular.ttf",
"Jersey20-Regular.ttf",
"Jersey25-Regular.ttf",
"JimNightshade-Regular.ttf",
"Joan-Regular.ttf",
"JockeyOne-Regular.ttf",
"JollyLodger-Regular.ttf",
"Jomhuria-Regular.ttf",
"Jomolhari-Regular.ttf",
"JotiOne-Regular.ttf",
"Jua-Regular.ttf",
"Judson-Regular.ttf",
"Julee-Regular.ttf",
"JuliusSansOne-Regular.ttf",
"Junge-Regular.ttf",
"K2D-Regular.ttf",
"Kadwa-Regular.ttf",
"KaiseiDecol-Regular.ttf",
"KaiseiHarunoUmi-Regular.ttf",
"KaiseiOpti-Regular.ttf",
"KaiseiTokumin-Regular.ttf",
"Kalam-Regular.ttf",
"Kanchenjunga-Regular.ttf",
"Kanit-Regular.ttf",
"Karantina-Regular.ttf",
"Karma-Regular.ttf",
"Katibeh-Regular.ttf",
"KaushanScript-Regular.ttf",
"Kavivanar-Regular.ttf",
"Kavoon-Regular.ttf",
"KayPhoDu-Regular.ttf",
"KdamThmorPro-Regular.ttf",
"KeaniaOne-Regular.ttf",
"KellySlab-Regular.ttf",
"Kenia-Regular.ttf",
"Khand-Regular.ttf",
"Khula-Regular.ttf",
"Khyay-Regular.ttf",
"Kings-Regular.ttf",
"KirangHaerang-Regular.ttf",
"KiteOne-Regular.ttf",
"KiwiMaru-Regular.ttf",
"KleeOne-Regular.ttf",
"Knewave-Regular.ttf",
"Kodchasan-Regular.ttf",
"KoHo-Regular.ttf",
"KohSantepheap-Regular.ttf",
"Kokoro-Regular.ttf",
"KolkerBrush-Regular.ttf",
"KonkhmerSleokchher-Regular.ttf",
"KoPubBatang-Regular.ttf",
"KottaOne-Regular.ttf",
"Koulen-Regular.ttf",
"Kristi-Regular.ttf",
"KronaOne-Regular.ttf",
"Krub-Regular.ttf",
"KulimPark-Regular.ttf",
"KumarOne-Regular.ttf",
"Kurale-Regular.ttf",
"Lacquer-Regular.ttf",
"Laila-Regular.ttf",
"LakkiReddy-Regular.ttf",
"Lalezar-Regular.ttf",
"Lancelot-Regular.ttf",
"Langar-Regular.ttf",
"Lateef-Regular.ttf",
"Lato-Regular.ttf",
"LavishlyYours-Regular.ttf",
"LeagueScript-Regular.ttf",
"LeckerliOne-Regular.ttf",
"Ledger-Regular.ttf",
"Lekton-Regular.ttf",
"Lemon-Regular.ttf",
"LibertinusMath-Regular.ttf",
"LibreBarcode128-Regular.ttf",
"LibreBarcode128Text-Regular.ttf",
"LibreBarcode39-Regular.ttf",
"LibreBarcode39Extended-Regular.ttf",
"LibreBarcode39ExtendedText-Regular.ttf",
"LibreBarcode39Text-Regular.ttf",
"LibreBaskerville-Regular.ttf",
"LibreCaslonDisplay-Regular.ttf",
"Licorice-Regular.ttf",
"LifeSavers-Regular.ttf",
"Ligconsolata-Regular.ttf",
"LilitaOne-Regular.ttf",
"LilyScriptOne-Regular.ttf",
"Limelight-Regular.ttf",
"LindenHill-Regular.ttf",
"LisuBosa-Regular.ttf",
"Liter-Regular.ttf",
"LiuJianMaoCao-Regular.ttf",
"Livvic-Regular.ttf",
"Lobster-Regular.ttf",
"LobsterTwo-Regular.ttf",
"LondrinaOutline-Regular.ttf",
"LondrinaShadow-Regular.ttf",
"LondrinaSketch-Regular.ttf",
"LondrinaSolid-Regular.ttf",
"LongCang-Regular.ttf",
"LoveLight-Regular.ttf",
"LoversQuarrel-Regular.ttf",
"Lugrasimo-Regular.ttf",
"Lumanosimo-Regular.ttf",
"Lunasima-Regular.ttf",
"Lusitana-Regular.ttf",
"Lustria-Regular.ttf",
"LuxuriousRoman-Regular.ttf",
"LuxuriousScript-Regular.ttf",
"LXGWMarkerGothic-Regular.ttf",
"LXGWWenKaiMonoTC-Regular.ttf",
"LXGWWenKaiTC-Regular.ttf",
"Macondo-Regular.ttf",
"MacondoSwashCaps-Regular.ttf",
"MadimiOne-Regular.ttf",
"Magra-Regular.ttf",
"Maitree-Regular.ttf",
"MajorMonoDisplay-Regular.ttf",
"Mako-Regular.ttf",
"Mali-Regular.ttf",
"Mallanna-Regular.ttf",
"Maname-Regular.ttf",
"Mandali-Regular.ttf",
"Manjari-Regular.ttf",
"Mansalva-Regular.ttf",
"ManufacturingConsent-Regular.ttf",
"Marcellus-Regular.ttf",
"MarcellusSC-Regular.ttf",
"MarckScript-Regular.ttf",
"Margarine-Regular.ttf",
"MarkoOne-Regular.ttf",
"Marmelad-Regular.ttf",
"Martel-Regular.ttf",
"MartelSans-Regular.ttf",
"Marvel-Regular.ttf",
"MaShanZheng-Regular.ttf",
"Mate-Regular.ttf",
"Matemasie-Regular.ttf",
"MateSC-Regular.ttf",
"McLaren-Regular.ttf",
"MeaCulpa-Regular.ttf",
"MedulaOne-Regular.ttf",
"MeeraInimai-Regular.ttf",
"MeieScript-Regular.ttf",
"MeowScript-Regular.ttf",
"MergeOne-Regular.ttf",
"MervaleScript-Regular.ttf",
"Metal-Regular.ttf",
"MetalMania-Regular.ttf",
"Metamorphous-Regular.ttf",
"Metrophobic-Regular.ttf",
"Miama-Regular.ttf",
"Michroma-Regular.ttf",
"Micro5-Regular.ttf",
"Micro5Charted-Regular.ttf",
"Milonga-Regular.ttf",
"Miltonian-Regular.ttf",
"MiltonianTattoo-Regular.ttf",
"Mina-Regular.ttf",
"Mingzat-Regular.ttf",
"Miniver-Regular.ttf",
"Mirza-Regular.ttf",
"MissFajardose-Regular.ttf",
"Mitr-Regular.ttf",
"MochiyPopOne-Regular.ttf",
"MochiyPopPOne-Regular.ttf",
"Modak-Regular.ttf",
"ModernAntiqua-Regular.ttf",
"Mogra-Regular.ttf",
"MoiraiOne-Regular.ttf",
"Molengo-Regular.ttf",
"Molle-Regular.ttf",
"Monofett-Regular.ttf",
"Monomakh-Regular.ttf",
"MonomaniacOne-Regular.ttf",
"Monoton-Regular.ttf",
"MonsieurLaDoulaise-Regular.ttf",
"Montaga-Regular.ttf",
"MonteCarlo-Regular.ttf",
"MontserratAlternates-Regular.ttf",
"MontserratSubrayada-Regular.ttf",
"MooLahLah-Regular.ttf",
"Mooli-Regular.ttf",
"MoonDance-Regular.ttf",
"Moul-Regular.ttf",
"Moulpali-Regular.ttf",
"MouseMemoirs-Regular.ttf",
"MPLUS1p-Regular.ttf",
"MPLUSRounded1c-Regular.ttf",
"MrBedfort-Regular.ttf",
"MrDafoe-Regular.ttf",
"MrDeHaviland-Regular.ttf",
"MrsSaintDelafield-Regular.ttf",
"MrsSheppards-Regular.ttf",
"MsMadi-Regular.ttf",
"Mukta-Regular.ttf",
"MuktaMahee-Regular.ttf",
"MuktaMalar-Regular.ttf",
"MuktaVaani-Regular.ttf",
"MyanmarSansPro-Regular.ttf",
"Mynerve-Regular.ttf",
"MySoul-Regular.ttf",
"MysteryQuest-Regular.ttf",
"Namdhinggo-Regular.ttf",
"NanumBrushScript-Regular.ttf",
"NanumGothic-Regular.ttf",
"NanumGothicCoding-Regular.ttf",
"NanumMyeongjo-Regular.ttf",
"NanumPenScript-Regular.ttf",
"Narnoor-Regular.ttf",
"Neonderthaw-Regular.ttf",
"NerkoOne-Regular.ttf",
"Neuton-Regular.ttf",
"NewAmsterdam-Regular.ttf",
"NewRocker-Regular.ttf",
"NewsCycle-Regular.ttf",
"NewTegomin-Regular.ttf",
"NicoMoji-Regular.ttf",
"Niconne-Regular.ttf",
"Nikukyu-Regular.ttf",
"Niramit-Regular.ttf",
"NixieOne-Regular.ttf",
"Nobile-Regular.ttf",
"Norican-Regular.ttf",
"Nosifer-Regular.ttf",
"NosiferCaps-Regular.ttf",
"Notable-Regular.ttf",
"NoticiaText-Regular.ttf",
"NotoColorEmoji-Regular.ttf",
"NotoMusic-Regular.ttf",
"NotoSerifOldUyghur-Regular.ttf",
"NotoSerifTangut-Regular.ttf",
"NotoSerifTodhri-Regular.ttf",
"NotoZnamennyMusicalNotation-Regular.ttf",
"NovaScript-Regular.ttf",
"NTR-Regular.ttf",
"Numans-Regular.ttf",
"NuosuSIL-Regular.ttf",
"OdibeeSans-Regular.ttf",
"OdorMeanChey-Regular.ttf",
"Offside-Regular.ttf",
"Oi-Regular.ttf",
"Oldenburg-Regular.ttf",
"OldStandard-Regular.ttf",
"Ole-Regular.ttf",
"OleoScript-Regular.ttf",
"OleoScriptSwashCaps-Regular.ttf",
"OoohBaby-Regular.ttf",
"Oranienbaum-Regular.ttf",
"Orbit-Regular.ttf",
"Oregano-Regular.ttf",
"OrelegaOne-Regular.ttf",
"Orienta-Regular.ttf",
"OriginalSurfer-Regular.ttf",
"OtomanopeeOne-Regular.ttf",
"Overlock-Regular.ttf",
"OverlockSC-Regular.ttf",
"Ovo-Regular.ttf",
"Oxygen-Regular.ttf",
"OxygenMono-Regular.ttf",
"Pacifico-Regular.ttf",
"Padauk-Regular.ttf",
"PadyakkeExpandedOne-Regular.ttf",
"Palanquin-Regular.ttf",
"PalanquinDark-Regular.ttf",
"PaletteMosaic-Regular.ttf",
"Pangolin-Regular.ttf",
"Paprika-Regular.ttf",
"Parisienne-Regular.ttf",
"PasseroOne-Regular.ttf",
"PassionOne-Regular.ttf",
"PassionsConflict-Regular.ttf",
"PathwayGothicOne-Regular.ttf",
"PatrickHand-Regular.ttf",
"PatrickHandSC-Regular.ttf",
"Pattaya-Regular.ttf",
"PatuaOne-Regular.ttf",
"Pavanam-Regular.ttf",
"PaytoneOne-Regular.ttf",
"Peddana-Regular.ttf",
"Peralta-Regular.ttf",
"Petemoss-Regular.ttf",
"PetitFormalScript-Regular.ttf",
"Phetsarath-Regular.ttf",
"Philosopher-Regular.ttf",
"Piedra-Regular.ttf",
"PinyonScript-Regular.ttf",
"PirataOne-Regular.ttf",
"Plaster-Regular.ttf",
"Play-Regular.ttf",
"Playball-Regular.ttf",
"PlayfairDisplaySC-Regular.ttf",
"Pochaevsk-Regular.ttf",
"PoetsenOne-Regular.ttf",
"PoiretOne-Regular.ttf",
"Poly-Regular.ttf",
"Pompiere-Regular.ttf",
"Ponnala-Regular.ttf",
"Ponomar-Regular.ttf",
"PoorStory-Regular.ttf",
"Poppins-Regular.ttf",
"PorterSansBlock-Regular.ttf",
"PortLligatSans-Regular.ttf",
"PortLligatSlab-Regular.ttf",
"PottaOne-Regular.ttf",
"PragatiNarrow-Regular.ttf",
"Praise-Regular.ttf",
"Prata-Regular.ttf",
"Preahvihear-Regular.ttf",
"PressStart2P-Regular.ttf",
"Pridi-Regular.ttf",
"PrincessSofia-Regular.ttf",
"Prociono-Regular.ttf",
"Prompt-Regular.ttf",
"ProstoOne-Regular.ttf",
"ProtestGuerrilla-Regular.ttf",
"ProtestRevolution-Regular.ttf",
"ProtestRiot-Regular.ttf",
"ProtestStrike-Regular.ttf",
"ProzaLibre-Regular.ttf",
"PT_Sans-Caption-Web-Regular.ttf",
"PT_Sans-Narrow-Web-Regular.ttf",
"PT_Sans-Web-Regular.ttf",
"PT_Serif-Caption-Web-Regular.ttf",
"PT_Serif-Web-Regular.ttf",
"PuppiesPlay-Regular.ttf",
"Puritan-Regular.ttf",
"PurplePurse-Regular.ttf",
"Pushster-Regular.ttf",
"Qahiri-Regular.ttf",
"Quando-Regular.ttf",
"Quantico-Regular.ttf",
"Quattrocento-Regular.ttf",
"QuattrocentoSans-Regular.ttf",
"Questrial-Regular.ttf",
"Quintessential-Regular.ttf",
"Qwigley-Regular.ttf",
"QwitcherGrypen-Regular.ttf",
"RacingSansOne-Regular.ttf",
"Radley-Regular.ttf",
"Rajdhani-Regular.ttf",
"Rakkas-Regular.ttf",
"RalewayDots-Regular.ttf",
"Ramabhadra-Regular.ttf",
"Ramaraja-Regular.ttf",
"Rambla-Regular.ttf",
"RammettoOne-Regular.ttf",
"RampartOne-Regular.ttf",
"Ranchers-Regular.ttf",
"Ranga-Regular.ttf",
"Rationale-Regular.ttf",
"RaviPrakash-Regular.ttf",
"Redacted-Regular.ttf",
"RedactedScript-Regular.ttf",
"ReemKufiInk-Regular.ttf",
"ReggaeOne-Regular.ttf",
"Revalia-Regular.ttf",
"RhodiumLibre-Regular.ttf",
"Ribeye-Regular.ttf",
"RibeyeMarrow-Regular.ttf",
"Righteous-Regular.ttf",
"Risque-Regular.ttf",
"RoadRage-Regular.ttf",
"Rock3D-Regular.ttf",
"RocknRollOne-Regular.ttf",
"Romanesco-Regular.ttf",
"RopaSans-Regular.ttf",
"Rosarivo-Regular.ttf",
"RougeScript-Regular.ttf",
"RoundedMplus1c-Regular.ttf",
"Rowdies-Regular.ttf",
"RozhaOne-Regular.ttf",
"Rufina-Regular.ttf",
"RugeBoogie-Regular.ttf",
"Ruluko-Regular.ttf",
"RumRaisin-Regular.ttf",
"RuslanDisplay-Regular.ttf",
"RussoOne-Regular.ttf",
"Ruthie-Regular.ttf",
"Ruwudu-Regular.ttf",
"Rye-Regular.ttf",
"Sacramento-Regular.ttf",
"Sahitya-Regular.ttf",
"Sail-Regular.ttf",
"SairaCondensed-Regular.ttf",
"SairaExtraCondensed-Regular.ttf",
"SairaSemiCondensed-Regular.ttf",
"SairaStencilOne-Regular.ttf",
"Salsa-Regular.ttf",
"Sanchez-Regular.ttf",
"Sancreek-Regular.ttf",
"SankofaDisplay-Regular.ttf",
"Sansation-Regular.ttf",
"Sansita-Regular.ttf",
"SansitaOne-Regular.ttf",
"Sarabun-Regular.ttf",
"Sarala-Regular.ttf",
"Sarina-Regular.ttf",
"Sarpanch-Regular.ttf",
"SassyFrass-Regular.ttf",
"SawarabiGothic-Regular.ttf",
"SawarabiMincho-Regular.ttf",
"Scada-Regular.ttf",
"ScheherazadeNew-Regular.ttf",
"ScopeOne-Regular.ttf",
"SeaweedScript-Regular.ttf",
"SecularOne-Regular.ttf",
"Sedan-Regular.ttf",
"SedanSC-Regular.ttf",
"SedgwickAve-Regular.ttf",
"SedgwickAveDisplay-Regular.ttf",
"SendFlowers-Regular.ttf",
"Sevillana-Regular.ttf",
"SeymourOne-Regular.ttf",
"ShadowsIntoLightTwo-Regular.ttf",
"Shafarik-Regular.ttf",
"Shalimar-Regular.ttf",
"Shanti-Regular.ttf",
"Share-Regular.ttf",
"ShareTech-Regular.ttf",
"ShareTechMono-Regular.ttf",
"ShipporiAntique-Regular.ttf",
"Shizuru-Regular.ttf",
"Shojumaru-Regular.ttf",
"ShortStack-Regular.ttf",
"Shrikhand-Regular.ttf",
"Sigmar-Regular.ttf",
"SigmarOne-Regular.ttf",
"SignikaNegativeSC-Regular.ttf",
"Silkscreen-Regular.ttf",
"Simonetta-Regular.ttf",
"SingleDay-Regular.ttf",
"Sintony-Regular.ttf",
"SirinStencil-Regular.ttf",
"Sitara-Regular.ttf",
"Skranji-Regular.ttf",
"Slabo13px-Regular.ttf",
"Slabo27px-Regular.ttf",
"SlacksideOne-Regular.ttf",
"Smooch-Regular.ttf",
"Smythe-Regular.ttf",
"Sniglet-Regular.ttf",
"SnowburstOne-Regular.ttf",
"SofadiOne-Regular.ttf",
"Sofia-Regular.ttf",
"Solitreo-Regular.ttf",
"Solway-Regular.ttf",
"SongMyung-Regular.ttf",
"SonsieOne-Regular.ttf",
"SortsMillGoudy-Regular.ttf",
"Souliyo-Regular.ttf",
"SpaceMono-Regular.ttf",
"SpecialGothic-Regular.ttf",
"SpecialGothicCondensedOne-Regular.ttf",
"SpecialGothicExpandedOne-Regular.ttf",
"Spectral-Regular.ttf",
"SpectralSC-Regular.ttf",
"SpicyRice-Regular.ttf",
"Spinnaker-Regular.ttf",
"Spirax-Regular.ttf",
"Splash-Regular.ttf",
"SquadaOne-Regular.ttf",
"SquarePeg-Regular.ttf",
"SreeKrushnadevaraya-Regular.ttf",
"Sriracha-Regular.ttf",
"Srisakdi-Regular.ttf",
"Staatliches-Regular.ttf",
"Stalemate-Regular.ttf",
"StalinistOne-Regular.ttf",
"StardosStencil-Regular.ttf",
"Stick-Regular.ttf",
"StintUltraCondensed-Regular.ttf",
"StintUltraExpanded-Regular.ttf",
"STIXTwoMath-Regular.ttf",
"Stoke-Regular.ttf",
"Strait-Regular.ttf",
"Strong-Regular.ttf",
"StyleScript-Regular.ttf",
"Stylish-Regular.ttf",
"SueEllenFrancisco-Regular.ttf",
"SuezOne-Regular.ttf",
"SulphurPoint-Regular.ttf",
"Sumana-Regular.ttf",
"SupermercadoOne-Regular.ttf",
"Sura-Regular.ttf",
"Suranna-Regular.ttf",
"Suravaram-Regular.ttf",
"Suwannaphum-Regular.ttf",
"SyneMono-Regular.ttf",
"SyneTactile-Regular.ttf",
"TacOne-Regular.ttf",
"Tagesschrift-Regular.ttf",
"TaiHeritagePro-Regular.ttf",
"Tajawal-Regular.ttf",
"Tangerine-Regular.ttf",
"Tapestry-Regular.ttf",
"Taprom-Regular.ttf",
"Tauri-Regular.ttf",
"Taviraj-Regular.ttf",
"Telex-Regular.ttf",
"TenaliRamakrishna-Regular.ttf",
"TenorSans-Regular.ttf",
"TextMeOne-Regular.ttf",
"Tharlon-Regular.ttf",
"Thasadith-Regular.ttf",
"TheNautigal-Regular.ttf",
"Tienne-Regular.ttf",
"Tillana-Regular.ttf",
"Timmana-Regular.ttf",
"Tiny5-Regular.ttf",
"TiroBangla-Regular.ttf",
"TitanOne-Regular.ttf",
"TitilliumWeb-Regular.ttf",
"Tomorrow-Regular.ttf",
"TradeWinds-Regular.ttf",
"TrainOne-Regular.ttf",
"Triodion-Regular.ttf",
"Trirong-Regular.ttf",
"Trocchi-Regular.ttf",
"Trochut-Regular.ttf",
"Trykker-Regular.ttf",
"TsukimiRounded-Regular.ttf",
"Tuffy-Regular.ttf",
"TulpenOne-Regular.ttf",
"TurretRoad-Regular.ttf",
"TwinkleStar-Regular.ttf",
"Uchen-Regular.ttf",
"UncialAntiqua-Regular.ttf",
"Underdog-Regular.ttf",
"UnicaOne-Regular.ttf",
"Unlock-Regular.ttf",
"Unna-Regular.ttf",
"Updock-Regular.ttf",
"VampiroOne-Regular.ttf",
"Varela-Regular.ttf",
"VarelaRound-Regular.ttf",
"VastShadow-Regular.ttf",
"VesperLibre-Regular.ttf",
"ViaodaLibre-Regular.ttf",
"Vibes-Regular.ttf",
"Vibur-Regular.ttf",
"Vidaloka-Regular.ttf",
"Viga-Regular.ttf",
"VinaSans-Regular.ttf",
"Voces-Regular.ttf",
"Volkhov-Regular.ttf",
"VollkornSC-Regular.ttf",
"Voltaire-Regular.ttf",
"VT323-Regular.ttf",
"VujahdayScript-Regular.ttf",
"Wallpoet-Regular.ttf",
"Warnes-Regular.ttf",
"WaterBrush-Regular.ttf",
"Waterfall-Regular.ttf",
"WDXLLubrifontJPN-Regular.ttf",
"Wellfleet-Regular.ttf",
"WendyOne-Regular.ttf",
"Whisper-Regular.ttf",
"WindSong-Regular.ttf",
"WireOne-Regular.ttf",
"WixMadeforText-Regular.ttf",
"XanhMono-Regular.ttf",
"YaldeviColombo-Regular.ttf",
"Yantramanav-Regular.ttf",
"YatraOne-Regular.ttf",
"YeonSung-Regular.ttf",
"YesevaOne-Regular.ttf",
"Yesteryear-Regular.ttf",
"Yinmar-Regular.ttf",
"Yomogi-Regular.ttf",
"YoungSerif-Regular.ttf",
"YujiBoku-Regular.ttf",
"YujiHentaiganaAkari-Regular.ttf",
"YujiHentaiganaAkebono-Regular.ttf",
"YujiMai-Regular.ttf",
"YujiSyuku-Regular.ttf",
"YuseiMagic-Regular.ttf",
"Zain-Regular.ttf",
"ZCOOLKuaiLe-Regular.ttf",
"ZCOOLQingKeHuangYou-Regular.ttf",
"ZCOOLXiaoWei-Regular.ttf",
"ZenAntique-Regular.ttf",
"ZenAntiqueSoft-Regular.ttf",
"ZenDots-Regular.ttf",
"ZenKakuGothicAntique-Regular.ttf",
"ZenKakuGothicNew-Regular.ttf",
"ZenKurenaido-Regular.ttf",
"ZenLoop-Regular.ttf",
"ZenMaruGothic-Regular.ttf",
"ZenOldMincho-Regular.ttf",
"ZenTokyoZoo-Regular.ttf",
"ZhiMangXing-Regular.ttf",
"ZillaSlab-Regular.ttf",
];

// ----- DOM Elements -----
const previewText = document.getElementById('previewText');
const slantSlider = document.getElementById('slantSlider');
const slantValue = document.getElementById('slantValue');
const widthSlider = document.getElementById('widthSlider');
const widthValue = document.getElementById('widthValue');
const heightSlider = document.getElementById('heightSlider');
const heightValue = document.getElementById('heightValue');
const invertToggle = document.getElementById('invertToggle');
const spacingSlider = document.getElementById('spacingSlider');
const spacingValue = document.getElementById('spacingValue');
const monospaceToggle = document.getElementById('monospaceToggle');
const verticalFlipToggle = document.getElementById('verticalFlipToggle');
const resetBtn = document.getElementById('resetBtn');
const downloadBtn = document.getElementById('downloadBtn');
const fontPicker = document.getElementById('fontPicker');
const fontCategory = document.getElementById('fontCategory');
const randomBtn = document.getElementById('randomBtn');

if (randomBtn) {
  randomBtn.addEventListener('click', () => {
    if (fontPicker && fontPicker.options && fontPicker.options.length) {
      const i = Math.floor(Math.random() * fontPicker.options.length);
      fontPicker.selectedIndex = i;
      injectFontFace(fontPicker.value);
      updatePreview();
    }
  });
}


// --- Utility to get readable font family name from TTF filename ---
function ttfToFontFamily(ttfFile) {
  return ttfFile.replace(/\.ttf$/i, '').replace(/-/g, ' ');
}

function getFontCategory(ttfFile){
  const name = ttfToFontFamily(ttfFile).toLowerCase();
  if (/(mono|code|source code|iosevka|fira code)/.test(name)) return "Mono";
  if (/(slab)/.test(name)) return "Slab";
  if (/(serif|baskerville|playfair|merriweather|lora|libre baskerville|old standard|bodoni|garamond)/.test(name)) return "Serif";
  if (/(sans|gothic|grotesk|inter|roboto|open sans|noto sans|lato|heebo)/.test(name)) return "Sans";
  if (/(script|hand|brush|dancing|allura|pacifico|caveat|shadows into light|satisfy|marck|sue ellen|kalam)/.test(name)) return "Handwriting";
  if (/(display|fatface|stencil|inline|poster|impact|blackletter|fraktur|oswald|bangers|righteous|rammetto)/.test(name)) return "Display";
  return "Other";
}


const fontCache = {};

async function getFontObject(ttfFile) {
  if (fontCache[ttfFile]) return fontCache[ttfFile];
  const buffer = await fetch(`fonts/${ttfFile}`).then(r => r.arrayBuffer());
  const font = opentype.parse(buffer);
  fontCache[ttfFile] = font;
  return font;
}

// --- Dynamically add @font-face for local TTF file ---
function injectFontFace(ttfFile) {
  const fontFamily = ttfToFontFamily(ttfFile);
  let styleTag = document.getElementById('dynamicFontFace');
  if (styleTag) styleTag.remove();
  styleTag = document.createElement('style');
  styleTag.id = 'dynamicFontFace';
  styleTag.innerHTML = `
    @font-face {
      font-family: "${fontFamily}";
      src: url("fonts/${ttfFile}") format("truetype");
      font-weight: 400;
      font-style: normal;
    }
  `;
  document.head.appendChild(styleTag);
}

// --- Populate Font Picker Dropdown ---
function populateFontPicker(filter = "", category = "All") {
  fontPicker.innerHTML = '';
  const cat = category || "All";
  localFonts.forEach(ttf => {
    const display = ttfToFontFamily(ttf).replace(/-?Regular$/i, '').trim();
    const matchesText = display.toLowerCase().includes(filter.toLowerCase());
    const matchesCat = (cat === "All") ? true : (getFontCategory(ttf) === cat);
    if (matchesText && matchesCat) {
      const option = document.createElement('option');
      option.value = ttf;
      option.textContent = display;
      fontPicker.appendChild(option);
    }
  });
}
populateFontPicker("", fontCategory ? fontCategory.value : "All");

const fontSearch = document.getElementById('fontSearch');
let debounceTimeout;
fontSearch.addEventListener('input', () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    populateFontPicker(fontSearch.value, fontCategory ? fontCategory.value : "All");
    if (fontPicker.options.length > 0) {
      fontPicker.selectedIndex = 0;
      injectFontFace(fontPicker.value);
      updatePreview();
    }
  }, 120);
});

if (typeof fontCategory !== 'undefined' && fontCategory) {
  fontCategory.addEventListener('change', () => {
    populateFontPicker(fontSearch.value, fontCategory.value);
    if (fontPicker.options.length > 0) {
      fontPicker.selectedIndex = 0;
      injectFontFace(fontPicker.value);
      updatePreview();
    }
  });
}


// --- Event listeners for font change ---
fontPicker.addEventListener('change', () => {
  injectFontFace(fontPicker.value);
  updatePreview();
});

// ----- Unified Effect Getter -----
function getCurrentEffects() {
  let spacing = parseInt(spacingSlider.value) || 0;
return {
  slant: parseInt(slantSlider.value) || 0,
  width: parseInt(widthSlider.value) || 0,
  height: parseInt(heightSlider.value) || 0,
  letterSpacing: spacing,
  monospace: monospaceToggle.checked,
  verticalFlip: verticalFlipToggle.checked,
  invert: invertToggle.checked,
};
}

// Helper matrix functions
function multiplyMatrix(m1, m2) {
  return [
    m1[0]*m2[0] + m1[1]*m2[2],
    m1[0]*m2[1] + m1[1]*m2[3],
    m1[2]*m2[0] + m1[3]*m2[2],
    m1[2]*m2[1] + m1[3]*m2[3],
    m1[0]*m2[4] + m1[1]*m2[5] + m1[4],
    m1[2]*m2[4] + m1[3]*m2[5] + m1[5],
  ];
}
function applyMatrix(x, y, m) {
  return [
    x * m[0] + y * m[2] + m[4],
    x * m[1] + y * m[3] + m[5]
  ];
}

function applyFontEffectsToGlyphs(glyphArr, effects) {
  const slant = effects.slant || 0;
  const scaleX = effects.width ? 1 + effects.width / 10 : 1;
  const scaleY = effects.height ? 1 + effects.height / 10 : 1;
  const letterSpacing = effects.letterSpacing || 0;
  const tanA = Math.tan(slant * Math.PI / 180);

  let globalMinY = Infinity;
  let globalMaxY = -Infinity;

  glyphArr.forEach(g => {
    if (typeof g.yMin === "number") globalMinY = Math.min(globalMinY, g.yMin);
    if (typeof g.yMax === "number") globalMaxY = Math.max(globalMaxY, g.yMax);
  });

  if (!isFinite(globalMinY)) globalMinY = -500;
  if (!isFinite(globalMaxY)) globalMaxY = 1500;

  const centerY = (globalMaxY + globalMinY) / 2;
  const flip = effects.verticalFlip ? -1 : 1;
  const yShift = effects.verticalFlip ? centerY * 2 : 0;

  glyphArr.forEach(glyph => {
    if (!glyph.path || !glyph.path.commands) return;
    const baseAdvanceWidth = typeof glyph.advanceWidth === 'number' ? glyph.advanceWidth : 600;

    let mat = [
      scaleX, 0,
      tanA, scaleY * flip,
      0, yShift
    ];

    if (effects.invert) {
      const w = baseAdvanceWidth * scaleX;
      const invertMat = [-1, 0, 0, 1, w, 0];
      mat = multiplyMatrix(invertMat, mat);
    }

    glyph.path.commands.forEach(cmd => {
      if ('x' in cmd && 'y' in cmd) {
        const pt = applyMatrix(cmd.x, cmd.y, mat);
        cmd.x = pt[0];
        cmd.y = pt[1];
      }
      if ('x1' in cmd && 'y1' in cmd) {
        const pt = applyMatrix(cmd.x1, cmd.y1, mat);
        cmd.x1 = pt[0];
        cmd.y1 = pt[1];
      }
      if ('x2' in cmd && 'y2' in cmd) {
        const pt = applyMatrix(cmd.x2, cmd.y2, mat);
        cmd.x2 = pt[0];
        cmd.y2 = pt[1];
      }
    });
  });

  const fontObj = glyphArr[0]?.font || null;
  if (fontObj) {
    const pad = Math.abs(globalMaxY - globalMinY) * 2; // double the space
    fontObj.ascender = pad;
    fontObj.descender = -pad;

    if (fontObj.tables?.os2) {
      const os2 = fontObj.tables.os2;
      os2.sTypoAscender = pad;
      os2.sTypoDescender = -pad;
      os2.usWinAscent = pad;
      os2.usWinDescent = pad;
    }
  }

  if (effects.monospace) {
    let maxAdvance = 0;
    for (let glyph of glyphArr) {
      if (glyph.advanceWidth > maxAdvance && glyph.advanceWidth < 10000) {
        maxAdvance = glyph.advanceWidth;
      }
    }
    if (!maxAdvance || maxAdvance < 100) maxAdvance = 1200;
    for (let glyph of glyphArr) {
      glyph.advanceWidth = maxAdvance;
    }
  } else {
    for (let glyph of glyphArr) {
      const aw0 = typeof glyph.advanceWidth === 'number' ? glyph.advanceWidth : 600;
      glyph.advanceWidth = Math.max(50, Math.round(aw0 * scaleX));
      if (letterSpacing && glyph.unicode !== 32) {
        glyph.advanceWidth += letterSpacing * 20;
      }
    }
  }
}


async function updatePreview() {
  const previewSVG = document.getElementById('previewSVG');
  let text = previewText.value || " ";

  const effects = getCurrentEffects();
  slantValue.textContent = effects.slant;
  widthValue.textContent = effects.width;
  heightValue.textContent = effects.height;
  spacingValue.textContent = effects.letterSpacing;

  const fontWeight = 400;
  const fontSize = 56;
  const family = `"${ttfToFontFamily(fontPicker.value)}", Arial, Helvetica, sans-serif`;

  let previewContainer = document.getElementById('previewContainer');
  let svgWidth = previewContainer ? previewContainer.clientWidth : 1200;
  let svgHeight = 220;

  previewSVG.innerHTML = '';
  previewSVG.setAttribute('width', svgWidth);
  previewSVG.setAttribute('height', svgHeight);

  const font = await getFontObject(fontPicker.value);

  let charWidths = [];
  let totalWidth = 0;
  let spaceWidth = null;
  let maxWidth = 0;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let charWidth;
    if (char === " ") {
      if (spaceWidth === null) {
        const tempSpace = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        tempSpace.setAttribute('font-size', fontSize);
        tempSpace.setAttribute('font-family', family);
        tempSpace.setAttribute('font-weight', fontWeight);
        tempSpace.textContent = " ";
        previewSVG.appendChild(tempSpace);
        spaceWidth = tempSpace.getComputedTextLength() || fontSize * 0.33;
        previewSVG.removeChild(tempSpace);
      }
      charWidth = spaceWidth * (1 + effects.letterSpacing / 20);
    } else {
      const glyph = font.charToGlyph(char);
      charWidth = (glyph.advanceWidth || 600) * (fontSize / (font.unitsPerEm || 1000));
    }
    charWidths.push(charWidth);
    if (charWidth > maxWidth) maxWidth = charWidth;
    totalWidth += charWidth;
  }

  if (effects.monospace) {
    totalWidth = (maxWidth + effects.letterSpacing) * text.length - effects.letterSpacing;
    charWidths = Array(text.length).fill(maxWidth);
    spaceWidth = maxWidth;
  } else {
    for (let i = 1; i < text.length; i++) {
      if (text[i-1] !== " " && text[i] !== " ") {
        totalWidth += effects.letterSpacing;
      }
    }
  }

  let centerX = -totalWidth / 2;
  let offsetX = centerX;
  let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  let prevGlyph = null;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const glyph = font.charToGlyph(char);
    let kerning = 0;
    if (prevGlyph && char !== " " && text[i-1] !== " ") {
      kerning = font.getKerningValue(prevGlyph, glyph) * (fontSize / (font.unitsPerEm || 1000));
    }

    let charWidth = charWidths[i];
    let charX = offsetX + kerning;
    let charFontSize = fontSize;

    const charElem = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    charElem.setAttribute('x', charX);
    charElem.setAttribute('y', fontSize / 2);
    charElem.setAttribute('font-size', charFontSize);
    charElem.setAttribute('font-family', family);
    charElem.setAttribute('font-weight', fontWeight);
    charElem.setAttribute('fill', 'black');
    charElem.textContent = char;

    if (effects.monospace) {
  charElem.setAttribute('text-anchor', 'middle');
} else {
  charElem.setAttribute('text-anchor', 'start');
}

    let transform = "";
    if (effects.invert && char !== " ") {
  transform += `translate(${charX + charWidths[i]},0) scale(-1,1) translate(${-charX},0) `;
}
    if (effects.verticalFlip && char !== " ") {
      transform += `translate(${charX},${fontSize/2 + fontSize - 30}) scale(1,-1) translate(${-charX},${-fontSize/2 + fontSize}) `;
    }
    if (transform && char !== " ") {
      charElem.setAttribute('transform', transform.trim());
    }

    group.appendChild(charElem);

    // Always advance offsetX normally so every letter stays in its box
    if (effects.monospace && i < text.length - 1) {
      offsetX += charWidths[i] + effects.letterSpacing;
    } else if (!effects.monospace && i < text.length - 1) {
      if (text[i] !== " " && text[i + 1] !== " ") {
        offsetX += charWidths[i] + effects.letterSpacing + kerning;
      } else {
        offsetX += charWidths[i] + kerning;
      }
    } else {
      offsetX += charWidths[i];
    }

    prevGlyph = glyph;
  }

  let baseScaleX = effects.width ? 1 + effects.width / 10 : 1;
  let baseScaleY = effects.height ? 1 + effects.height / 10 : 1;

  group.setAttribute(
    'transform',
    `translate(${svgWidth / 2},${svgHeight / 2}) skewX(${-effects.slant}) scale(${baseScaleX},${baseScaleY})`
  );
  previewSVG.appendChild(group);
}


// ----- Event Listeners -----
slantSlider.addEventListener('input', updatePreview);
widthSlider.addEventListener('input', updatePreview);
heightSlider.addEventListener('input', updatePreview);
invertToggle.addEventListener('change', updatePreview);
spacingSlider.addEventListener('input', updatePreview);
monospaceToggle.addEventListener('change', updatePreview);
verticalFlipToggle.addEventListener('change', updatePreview);
previewText.addEventListener('input', updatePreview);
window.addEventListener('resize', updatePreview);

function syncUIControlsToValues() {
  if (slantValue) slantValue.textContent = slantSlider.value;
  if (widthValue) widthValue.textContent = widthSlider.value;
  if (heightValue) heightValue.textContent = heightSlider.value;
  if (spacingValue) spacingValue.textContent = spacingSlider.value;
}

resetBtn.addEventListener('click', () => {
  const currentFont = fontPicker.value; // remember selected font

  previewText.value = "Try typing with your font!";
  slantSlider.value = 0;
  widthSlider.value = 0;
  heightSlider.value = 0;
  spacingSlider.value = 0;
  invertToggle.checked = false;
  monospaceToggle.checked = false;
  if (verticalFlipToggle) verticalFlipToggle.checked = false;
  if (fontSearch) {
    fontSearch.value = "";
    populateFontPicker();
  }

  // restore selection
  fontPicker.value = currentFont;
  injectFontFace(currentFont);

  syncUIControlsToValues();
  setTimeout(updatePreview, 0);
});

// ----- Download TTF Font -----
downloadBtn.addEventListener('click', async () => {
  const fileName = fontPicker.value;
  console.log("Downloading this file:", fileName);
  const baseFontName = fileName.replace(/\.ttf$/i, '').replace(/-/g, ' ');
  const customName = document.getElementById('fontFileName')?.value.trim() || baseFontName.replace(/ /g, '_') + '_custom';

  const fontBuffer = await fetch(`fonts/${fileName}`).then(r => r.arrayBuffer());
  let font;
  try {
    font = opentype.parse(fontBuffer);
    console.log("Parsed font object:", font);
  } catch (err) {
    alert('Failed to parse font.');
    return;
  }
  let glyphArr = [];
  if (font.glyphs && Array.isArray(font.glyphs.glyphs)) {
    glyphArr = font.glyphs.glyphs;
  } else if (font.glyphs && typeof font.glyphs.length === 'number' && typeof font.glyphs.get === 'function') {
    for (let i = 0; i < font.glyphs.length; i++) glyphArr.push(font.glyphs.get(i));
  } else {
    alert("Unable to read glyphs from font. Check font file or OpenType.js version.");
    return;
  }

  const defaultAdvance = font.unitsPerEm || 1024;
  for (let g of glyphArr) {
    if (typeof g.advanceWidth !== "number" || isNaN(g.advanceWidth)) {
      g.advanceWidth = defaultAdvance;
    }
  }

  const effects = getCurrentEffects();
  applyFontEffectsToGlyphs(glyphArr, effects);

  // Set internal font names to match the user chosen file name
const familyName = customName;           // e.g. "KyleFont"
const styleName  = "Regular";            // keep simple for now
const postName   = `${familyName}-${styleName}`.replace(/\s+/g, "");

// Name table
font.names = font.names || {};
font.names.fontFamily         = { en: familyName };
font.names.fullName           = { en: `${familyName} ${styleName}` };
font.names.postScriptName     = { en: postName };
font.names.fontSubfamily      = { en: styleName };
font.names.preferredFamily    = { en: familyName };
font.names.preferredSubfamily = { en: styleName };
font.names.uniqueID           = { en: `${familyName} ${styleName} 1.000` };
font.names.version            = { en: "Version 1.000" };

// Make sure style bits do not mislabel it
if (font.tables && font.tables.os2) {
  font.tables.os2.usWeightClass = 400; // Regular weight
  let sel = font.tables.os2.fsSelection || 0;
  sel |= 0x40; // Regular bit
  sel &= ~0x01; // clear Italic
  sel &= ~0x20; // clear Bold
  font.tables.os2.fsSelection = sel;
}


  const outBuffer = font.toArrayBuffer();
  const blob = new Blob([outBuffer], { type: "font/ttf" });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${customName}.ttf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Inject font and show preview at load
injectFontFace(fontPicker.value);
document.addEventListener('DOMContentLoaded', updatePreview);

