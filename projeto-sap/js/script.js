// Função para exibir notificações
function showNotification(message, type) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.add(type, "show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// Dicionários de estados, cidades e empresas
const estadosCidades = {
  CE: {
    "Aquiraz": "AQZ",
    "Beberibe": "BBB",
    "Cascavel": "CVL",
    "Caucaia": "CUC",
    "Chorozinho": "CZH",
    "Eusebio": "ESB",
    "Fortaleza": "FLA",
    "Guaiuba": "GBA",
    "Horizonte": "HZT",
    "Itaitinga": "IAGA",
    "Maracanau": "MCW",
    "Maranguape": "MUE",
    "Pacajus": "PJS",
    "Pacatuba": "PUB",
    "Pindoretama": "PDJ",
    "Sao Goncalo do Amarante": "SGA",
    "Acarape": "ACP",
    "Apuiarés": "AUS",
    "Aracoiaba": "AAB",
    "Aratuba": "ATU",
    "Barreira": "BRK",
    "Baturite": "BTT",
    "Caninde": "CIE",
    "Capistrano": "CSR",
    "Caridade": "CID",
    "General Sampaio": "GNL",
    "Guaramiranga": "GAG",
    "Mulungu": "MUN",
    "Ocara": "OCR",
    "Pacoti": "PTY",
    "Palmacia": "PMC",
    "Paramoti": "POY",
    "Redencao": "RDC",
    "Itapage": "IGE",
    "Paracuru": "PUU",
    "Paraipaba": "PWB",
    "Iguatu":"IAU",
    "Pentecoste": "POE",
    "Sao Luis do Curu": "SRU",
    "Tejucuoca": "TJU",
    "Trairi": "TRY",
    "Tururu": "TUK",
    "Umirim": "URM",
    "Uruburetama": "UUA",
    "Alto Santo": "ATO",
    "Aracati": "ACA",
    "Fortim": "FORT",
    "Cedro": "CED",
    "Oros": "OOS",
    "Ibicuitinga": "ICN",
    "Icapui": "ICP",
    "Iracema": "ICA",
    "Itaicaba": "IAX",
    "Jaguaruana": "JGN",
    "Limoeiro do Norte": "LNT",
    "Morada Nova": "MVA",
    "Palhano": "PHN",
    "Potiretama": "PTZ",
    "Quixere": "QXE",
    "Russas": "RUS",
    "Sao Joao do Jaguaribe": "SUB",
    "Tabuleiro do Norte": "TNT",
    "Abaiara": "ABY",
    "Aurora": "AUR",
    "Barbalha": "BBH",
    "Barro": "BAO",
    "Brejo Santo": "BJS",
    "Caririacu": "CAC",
    "Crato": "CTO",
    "Granjeiro": "GJO",
    "Jardim": "JDM",
    "Jati": "JAT",
    "Juazeiro do Norte": "JNE",
    "Mauriti": "MRT",
    "Milagres": "MGS",
    "Missao Velha": "MAH",
    "Penaforte": "PFT",
    "Porteiras": "PTX",
    "Varzea Alegre": "VZG",
    "Aiuaba": "AIB",
    "Altaneira": "ANY",
    "Antonina do Norte": "ANE",
    "Araripe": "ARP",
    "Assare": "ASE",
    "Campos Sales": "CMS",
    "Farias Brito": "FBO",
    "Nova Olinda": "NID",
    "Potengi": "PGY",
    "Salitre": "SIQ",
    "Santana do Cariri": "SCI",
    "Tarrafas": "TRR",
    "Alcantaras": "ACX",
    "Amontada": "AOW",
    "Carire": "CIW",
    "Catunda": "CATN",
    "Coreau": "CEA",
    "Forquilha": "FRQ",
    "Groairas": "GRO",
    "Hidrolandia": "HDA",
    "Iraucuba": "ICB",
    "Itapipoca": "IOP",
    "Massape": "MSS",
    "Meruoca": "MEU",
    "Miraima": "MIK",
    "Moraujo": "MUJ",
    "Reriutaba": "RRB",
    "Santa Quiteria": "SNQ",
    "Santana do Acarau": "SAU",
    "Sobral": "SOL",
    "Varjota": "VJT",
    "Carnaubal": "CUB",
    "Croata": "COZ",
    "Frecheirinha": "FHH",
    "Graca": "GCA",
    "Guaraciaba do Norte": "GRN",
    "Ibiapina": "INX",
    "Mucambo": "MUM",
    "Pacuja": "PUJ",
    "Sao Benedito": "SBN",
    "Tiangua": "TIG",
    "Ubajara": "UBJ",
    "Vicosa do Ceara": "VCC"
  },
  RN: {
    "Ares": "ARE",
    "Baía Formosa": "BFA",
    "Barcelona": "BRC",
    "Bento Fernandes": "BFN",
    "Bom Jesus": "BOU",
    "Brejinho": "BJN",
    "Canguaretama": "CGM",
    "Ceará-Mirim": "CAY",
    "Espírito Santo": "ESO",
    "Extremoz": "EXZ",
    "Goianinha": "GOH",
    "Ielmo Marinho": "IEL",
    "Januário Cicco": "BASD",
    "Japi": "JAP",
    "João Câmara": "JOA",
    "Jundiá": "JUCI",
    "Lagoa D'Anta": "LGD",
    "Lagoa de Pedras": "LGE",
    "Lagoa de Velhos": "LEL",
    "Lagoa Salgada": "LLG",
    "Lajes Pintadas": "LES",
    "Macaíba": "MCI",
    "Maxaranguape": "MXE",
    "Montanhas": "MTH",
    "Monte Alegre": "MOG",
    "Monte das Gameleiras": "MMS",
    "Natal": "NTL",
    "Nísia Floresta": "NSF",
    "Nova Cruz": "NCZ",
    "Parnamirim": "PWM",
    "Passa e Fica": "PEF",
    "Passagem": "PGM",
    "Pedro Velho": "PDH",
    "Poço Branco": "POC",
    "Presidente Juscelino": "SECD",
    "Pureza": "PZA",
    "Riachuelo": "RHE",
    "Rio do Fogo": "ROFG",
    "Ruy Barbosa": "RYA",
    "Santa Cruz": "SNZ",
    "Santa Maria": "SAAI",
    "Santo Antônio": "SOT",
    "São Bento do Trairí": "SWB",
    "São Gonçalo do Amarante": "SGM",
    "São José de Mipibu": "SII",
    "São José do Campestre": "SAC",
    "São Miguel do Gostoso": "SMDT",
    "São Paulo do Potengi": "SLG",
    "São Pedro": "SPK",
    "São Tomé": "STM",
    "Senador Elói de Souza": "SOZ",
    "Senador Georgino Avelino": "SGV",
    "Serra de São Bento": "SBK",
    "Serrinha": "SWR",
    "Sítio Novo": "SYO",
    "Taipu": "TAI",
    "Tangará": "TNG",
    "Tibau do Sul": "TUL",
    "Touros": "TUS",
    "Várzea": "VZA",
    "Vera Cruz": "VRZ",
    "Vila Flor": "VLR",
    "Açu": "ACU",
    "Água Nova": "AGV",
    "Alexandria": "AXD",
    "Almino Afonso": "ALF",
    "Antônio Martins": "ANM",
    "Apodi": "APD",
    "Areia Branca": "ABC",
    "Augusto Severo": "CWD",
    "Baraúna": "BRN",
    "Caraúbas": "CRB",
    "Carnaubais": "CNU",
    "Coronel João Pessoa": "CJA",
    "Doutor Severiano": "DRV",
    "Encanto": "ECT",
    "Felipe Guerra": "FPG",
    "Francisco Dantas": "FAD",
    "Frutuoso Gomes": "FRG",
    "Governador Dix-Sept Rosado": "GXS",
    "Grossos": "GSS",
    "Ipanguaçu": "INC",
    "Itajá": "ITJY",
    "Itaú": "ITW",
    "Janduís": "JIS",
    "João Dias": "JOD",
    "José da Penha": "JOP",
    "Lucrécia": "LUR",
    "Luís Gomes": "LGO",
    "Major Sales": "MASA",
    "Marcelino Vieira": "MCV",
    "Martins": "MTN",
    "Messias Targino": "MTR",
    "Mossoró": "MRO",
    "Olho-d'Água do Borges": "OAB",
    "Paraná": "PWN",
    "Paraú": "PAW",
    "Patu": "PTW",
    "Pau dos Ferros": "PFR",
    "Pilões": "PLK",
    "Portalegre": "PLW",
    "Rafael Fernandes": "RFL",
    "Rafael Godeiro": "RFG",
    "Riacho da Cruz": "RCZ",
    "Riacho de Santana": "RAD",
    "Rodolfo Fernandes": "RFF",
    "São Francisco do Oeste": "SFT",
    "São Miguel": "SMU",
    "São Rafael": "SFA",
    "Serra do Mel": "SYF",
    "Serrinha dos Pintos": "SEPS",
    "Severiano Melo": "SWV",
    "Taboleiro Grande": "TLG",
    "Tenente Ananias": "TNN",
    "Tibau": "TIBA",
    "Triunfo Potiguar": "TRIU",
    "Umarizal": "UZL",
    "Upanema": "UNM",
    "Venha-Ver": "VAVR",
    "Viçosa": "VIO",
    "Acari": "ACI",
    "Bodó": "BODO",
    "Caicó": "CIC",
    "Campo Redondo": "CDW",
    "Carnaúba dos Dantas": "CUO",
    "Cerro Corá": "CCW",
    "Coronel Ezequiel": "CEZ",
    "Cruzeta": "CZE",
    "Currais Novos": "CSS",
    "Equador": "EQD",
    "Florânia": "FNA",
    "Ipueira": "IXP",
    "Jacañã": "JAN",
    "Jardim de Piranhas": "JMH",
    "Jardim do Seridó": "JMS",
    "Jucurutu": "JTU",
    "Lagoa Nova": "LGN",
    "Ouro Branco": "OOB",
    "Parelhas": "PRH",
    "Santana do Seridó": "SKA",
    "São Fernando": "SXF",
    "São João do Sabugi": "SSY",
    "São José do Seridó": "SKS",
    "São Vicente": "SOV",
    "Serra Negra do Norte": "SAW",
    "Serra Caiada": "SECD",
    "Tenente Laurentino Cruz": "TNLO",
    "Timbaúba dos Batistas": "TTT",
    "Afonso Bezerra": "AFZ",
    "Alto do Rodrigues": "ADG",
    "Angicos": "ANO",
    "Caiçara do Norte": "CCRA",
    "Caiçara do Rio do Vento": "CCV",
    "Fernando Pedroza": "FEPE",
    "Galinhos": "GAL",
    "Guamaré": "GME",
    "Jandaíra": "JDR",
    "Jardim de Angicos": "JMG",
    "Lajes": "LJE",
    "Macau": "MCU",
    "Parazinho": "PRZ",
    "Pedra Grande": "PGR",
    "Pedra Preta": "PAP",
    "Pedro Avelino": "PDL",
    "Pendências": "PNS",
    "Porto do Mangue": "POMA",
    "Santana do Matos": "SMS",
    "São Bento do Norte": "SBE"
 },
 PB:{
    "ALHANDRA": "AHD",
    "BAIA DA TRAICAO": "BAI",
    "BAYEUX": "BEX",
    "CAAPORA": "CPX",
    "CABEDELO": "CBD",
    "CAPIM": "CAPI",
    "CONDE": "CWX",
    "CRUZ DO ESPIRITO SANTO": "CZD",
    "CUITE DE MAMANGUAPE": "CUTM",
    "CURRAL DE CIMA": "CUCI",
    "ITAPOROROCA": "IOO",
    "JACARAU": "JAC",
    "JOAO PESSOA": "JPA",
    "LUCENA": "LUN",
    "MAMANGUAPE": "MME",
    "MARCACAO": "MRCA",
    "MATARACA": "MCX",
    "PEDRAS DE FOGO": "PFO",
    "PEDRO REGIS": "PERG",
    "PITIMBU": "PMU",
    "RIACHAO DO POCO": "RDPC",
    "RIO TINTO": "RTT",
    "SANTA RITA": "SRI",
    "SAO MIGUEL DE TAIPU": "SMP",
    "SAPE": "SPH",
    "SOBRADO": "SOBR",
    "ALAGOA GRANDE": "AGG",
    "ALAGOINHA": "AHA",
    "ARACAGI": "AAG",
    "BELEM": "BEM",
    "BORBOREMA": "BBE",
    "CAICARA": "CIX",
    "CALDAS BRANDAO": "CLSD",
    "CUITEGI": "CIG",
    "DUAS ESTRADAS": "DES",
    "GUARABIRA": "GBI",
    "GURINHEM": "GIH",
    "ITABAIANA": "IYN",
    "JURIPIRANGA": "JNG",
    "LAGOA DE DENTRO": "LDT",
    "LOGRADOURO": "LOGA",
    "MARI": "MAI",
    "MOGEIRO": "MGY",
    "MULUNGU": "MUL",
    "PILAR": "PYR",
    "PILOES": "PYL",
    "PILOEZINHOS": "POZ",
    "PIRPIRITUBA": "PPB",
    "SALGADO DE SAO FELIX": "SSX",
    "SAO JOSE DOS RAMOS": "SJWR",
    "SERRA DA RAIZ": "SDZ",
    "SERRARIA": "SRY",
    "SERTAOZINHO": "SERT",
    "ALAGOA NOVA": "AGO",
    "ALCANTIL": "ALCA",
    "ALGODAO DE JANDAIRA": "ALGJ",
    "ARARA": "ARX",
    "ARARUNA": "AAN",
    "AREIA": "AEI",
    "AREIAL": "AEA",
    "AROEIRAS": "AES",
    "BANANEIRAS": "BNN",
    "BARAUNA": "BARS",
    "BARRA DE SANTA ROSA": "BEN",
    "BARRA DE SANTANA": "BRSN",
    "BOA VISTA": "BVTA",
    "BOQUEIRAO": "BQO",
    "CACIMBA DE DENTRO": "CIB",
    "CAMPINA GRANDE": "CGE",
    "CAMPO DE SANTANA": "TAM",
    "CASSERENGUE": "CSRE",
    "CATURITE": "CATR",
    "CUBATI": "CBT",
    "CUITE": "CUT",
    "DAMIAO": "DMIO",
    "DONA INES": "DNS",
    "ESPERANCA": "ERA",
    "FAGUNDES": "FGS",
    "FREI MARTINHO": "FRH",
    "GADO BRAVO": "GABR",
    "INGA": "INA",
    "ITATUBA": "ITX",
    "JUAREZ TAVORA": "JZT",
    "JUAZEIRINHO": "JZH",
    "LAGOA SECA": "LGC",
    "MASSARANDUBA": "MNU",
    "MATINHAS": "MATN",
    "MONTADAS": "MDK",
    "NATUBA": "NUB",
    "NOVA FLORESTA": "NVF",
    "NOVA PALMEIRA": "NVL",
    "OLIVEDOS": "OVD",
    "PEDRA LAVRADA": "PVD",
    "PICUI": "PCI",
    "POCINHOS": "PHS",
    "PUXINANA": "PXA",
    "QUEIMADAS": "QUS",
    "REMIGIO": "RMG",
    "RIACHAO": "RAAO",
    "RIACHAO DO BACAMARTE": "RCBE",
    "RIACHO DE SANTO ANTONIO": "RISA",
    "SANTA CECILIA": "SCUM",
    "SAO SEBASTIAO DE LAGOA DE ROCA": "SKL",
    "SERIDO": "SIDO",
    "SERRA REDONDA": "SDK",
    "SOLANEA": "SOA",
    "SOLEDADE": "SOD",
    "SOSSEGO": "SOSS",
    "TENORIO": "TENO",
    "UMBUZEIRO": "UUZ",
    "AMPARO": "AMPA",
    "BARRA DE SAO MIGUEL": "BRG",
    "CABACEIRAS": "CCK",
    "CAMALAU": "CMW",
    "CARAUBAS": "CRAU",
    "CONGO": "CXG",
    "COXIXOLA": "COXI",
    "GURJAO": "GRJ",
    "LIVRAMENTO": "LVR",
    "MONTEIRO": "MER",
    "OURO VELHO": "OUV",
    "PARAR I": "PARR",
    "PRATA": "PRK",
    "SANTO ANDRE": "STND",
    "SAO DOMINGOS DO CARIRI": "SDWM",
    "SAO JOAO DO CARIRI": "SCX",
    "SAO JOAO DO TIGRE": "SXG",
    "SAO JOSE DOS CORDEIROS": "SXC",
    "SAO SEBASTIAO DO UMBUZEIRO": "SMZ",
    "SERRA BRANCA": "SRB",
    "SUME": "SUE",
    "ZABELE": "ZABE"
	
},
PE:{
    "ABREU E LIMA": "ABU",
    "ARACOIABA": "ARAB",
    "CABO DE SANTO AGOSTINHO": "CBO",
    "CAMARAGIBE": "CGB",
    "CHA DE ALEGRIA": "CHG",
    "IGARASSU": "ISS",
    "ILHA DE ITAMARACA": "IMC",
    "ITAPISSUMA": "ITS",
    "JABOATAO DOS GUARARAPES": "JBO",
    "MORENO": "MEN",
    "OLINDA": "OLD",
    "PAULISTA": "PUI",
    "RECIFE": "RCE",
    "SAO LOURENCO DA MATA": "SDM",
    "AMARAJI": "ARJ",
    "CHA GRANDE": "CHD",
    "ESCADA": "EAA",
    "GRAVATA": "GVT",
    "IPOJUCA": "IPJ",
    "POMBOS": "POB",
    "PRIMAVERA": "PVE",
    "SIRINHAEM": "SHM",
    "VITORIA DE SANTO ANTAO": "VSA",
    "ALIANCA": "AIN",
    "BOM JARDIM": "BJI",
    "BUENOS AIRES": "BOS",
    "CAMUTANGA": "CUN",
    "CARPINA": "CAA",
    "CASINHAS": "CASI",
    "CONDADO": "CDD",
    "CUMARU": "CUW",
    "FEIRA NOVA": "FNV",
    "FERNANDO DE NORONHA": "FEN",
    "FERREIROS": "FRS",
    "GLORIA DO GOITA": "GGT",
    "GOIANA": "GOI",
    "ITAMBE": "IBX",
    "ITAQUITINGA": "IQW",
    "JOAO ALFREDO": "JFD",
    "LAGOA DO CARRO": "LACA",
    "LAGOA DO ITAENGA": "LOG",
    "LIMOEIRO": "LIO",
    "MACAPARANA": "MCN",
    "MACHADOS": "MHO",
    "NAZARE DA MATA": "NZM",
    "OROBO": "OOO",
    "PASSIRA": "PSS",
    "PAUDALHO": "PLH",
    "SALGADINHO": "SGH",
    "SAO VICENTE FERRER": "SVF",
    "SURUBIM": "SUU",
    "TIMBAUBA": "TIU",
    "TRACUNHAEM": "THM",
    "VERTENTE DO LERIO": "VELE",
    "VICENCIA": "VCI",
    "AGRESTINA": "AGE",
    "ALTINHO": "ANH",
    "BARRA DE GUABIRABA": "BGB",
    "BELO JARDIM": "BJM",
    "BEZERROS": "BEZ",
    "BONITO": "BNO",
    "BREJO DA MADRE DE DEUS": "BDD",
    "CACHOEIRINHA": "CIH",
    "CAMOCIM DE SAO FELIX": "CFX",
    "CARUARU": "CRU",
    "CUPIRA": "CUP",
    "FREI MIGUELINHO": "FML",
    "JATAUBA": "JTB",
    "RIACHO DAS ALMAS": "RHM",
    "SAIRE": "SYE",
    "SANTA CRUZ DO CAPIBARIBE": "SZC",
    "SANTA MARIA DO CAMBUCA": "SCU",
    "SAO BENTO DO UNA": "SUN",
    "SAO CAITANO": "SIT",
    "SAO JOAQUIM DO MONTE": "SQM",
    "TACAIMBO": "TAC",
    "TAQUARITINGA DO NORTE": "TQN",
    "TORITAMA": "TTA",
    "VERTENTES": "VTS",
    "AGUA PRETA": "AGP",
    "BARREIROS": "BAR",
    "BELEM DE MARIA": "BEL",
    "CATENDE": "CTN",
    "CORTES": "COE",
    "GAMELEIRA": "GLR",
    "JAQUEIRA": "JAQU",
    "JOAQUIM NABUCO": "JNO",
    "LAGOA DOS GATOS": "LGG",
    "MARAIAL": "MAA",
    "PALMARES": "PLS",
    "PANELAS": "PES",
    "QUIPAPA": "QPA",
    "RIBEIRAO": "RBE",
    "RIO FORMOSO": "RIF",
    "SAO BENEDITO DO SUL": "SDI",
    "SAO JOSE DA COROA GRANDE": "SEC",
    "TAMANDARE": "TAMA",
    "XEXEU": "XEXE",
    "AGUAS BELAS": "AGB",
    "ANGELIM": "AGM",
    "BOM CONSELHO": "BCE",
    "BREJAO": "BRA",
    "CAETES": "CEK",
    "CALCADO": "CDK",
    "CANHOTINHO": "CHH",
    "CAPOEIRAS": "CYX",
    "CORRENTES": "COT",
    "GARANHUNS": "GUS",
    "IATI": "IKI",
    "IBIRAJUBA": "IJB",
    "JUCATI": "JUCT",
    "JUPI": "JUI",
    "JUREMA": "JUM",
    "LAGOA DO OURO": "LOO",
    "LAJEDO": "LJD",
    "PALMEIRINA": "PME",
    "PARANATAMA": "PMK",
    "SALOA": "SLX",
    "SAO JOAO": "SOJ",
    "TEREZINHA": "TEZ",
    "ALAGOINHA": "AGH",
    "ARCOVERDE": "ACV",
    "BUIQUE": "BQU",
    "IGUARACI": "IRC",
    "ITAIBA": "IYB",
    "PEDRA": "PED",
    "PESQUEIRA": "PQE",
    "POCAO": "PCO",
    "SANHARO": "SNH",
    "SERTANIA": "STN",
    "TUPANATINGA": "TTN",
    "VENTUROSA": "VUS",
    "BETANIA": "BEA",
    "CALUMBI": "CLI",
    "CUSTODIA": "CUD",
    "FLORES": "FLS",
    "IBIMIRIM": "IIM",
    "INAJA": "INJ",
    "JATOBA": "VJTB",
    "MANARI": "MANA",
    "PETROLANDIA": "PTR",
    "SANTA CRUZ DA BAIXA VERDE": "SCBV",
    "SERRA TALHADA": "SHD",
    "TACARATU": "TTU",
    "TRIUNFO": "TNF",
    "BELEM DE SAO FRANCISCO": "BLF",
    "CARNAUBEIRA DA PENHA": "CRNU",
    "FLORESTA": "FRT",
    "ITACURUBA": "IWB",
    "CEDRO": "CXD",
    "MIRANDIBA": "MDB",
    "SALGUEIRO": "SGI",
    "SAO JOSE DO BELMONTE": "SDB",
    "SERRITA": "SEY",
    "TERRA NOVA": "TEV",
    "VERDEJANTE": "VJE",
    "AFOGADOS DA INGAZEIRA": "AFI",
    "BREJINHO": "BJH",
    "CARNAIBA": "CNB",
    "INGAZEIRA": "IGZ",
    "ITAPETIM": "IKM",
    "QUIXABA": "QUIA",
    "SANTA TEREZINHA": "SAZ",
    "SAO JOSE DO EGITO": "SJG",
    "SOLIDAO": "SWL",
    "TABIRA": "TBR",
    "TUPARETAMA": "TUE",
    "BODOCO": "BOO",
    "CABROBO": "COO",
    "EXU": "EXU",
    "GRANITO": "GIT",
    "IPUBI": "IPB",
    "MOREILANDIA": "MODA",
    "OROCO": "ORO",
    "OURICURI": "OUI",
    "PARNAMIRIM": "PIM",
    "SANTA CRUZ": "STKZ",
    "SANTA FILOMENA": "SNFM",
    "ARARIPINA": "ARR",
    "TRINDADE": "TDD",
    "AFRANIO": "AFO",
    "DORMENTES": "DORM",
    "LAGOA GRANDE": "LAGD",
    "PETROLINA": "PTA",
    "SANTA MARIA DA BOA VISTA": "SIB"
	
},
BA: {
    "Camaçari": "CAR",
    "Candeias": "CIS",
    "Catu": "CAU",
    "Dias D'Ávila": "DSA",
    "Itaparica": "IAP",
    "Lauro de Freitas": "LFS",
    "Madre de Deus": "MDY",
    "Mata de São João": "MJO",
    "Pojuça": "PJC",
    "Salvador": "SDR",
    "São Francisco do Conde": "SFN",
    "São Sebastião do Passé": "SSE",
    "Simões Filho": "SMF",
    "Vera Cruz": "VCZ",
    "Almadina": "ALM",
    "Arataca": "ATW",
    "Barro Preto": "BPO",
    "Buerarema": "BUE",
    "Coaraci": "COC",
    "Firmino Alves": "FMV",
    "Floresta Azul": "FAL",
    "Ibicaraí": "ICR",
    "Ibiçuí": "IBC",
    "Iguaí": "IUI",
    "Ilhéus": "ILH",
    "Itabuna": "ITB",
    "Itaju do Colônia": "IJL",
    "Itajuípe": "IJP",
    "Itape": "YPE",
    "Itapitanga": "ITT",
    "Itororó": "IRR",
    "Jussari": "JSI",
    "Nova Canaa": "NCO",
    "Santa Cruz da Vitória": "SVT",
    "São José da Vitória": "SVQ",
    "Una": "WNA",
    "Uruçuca": "UUU",
    "Eunápolis": "EUS",
    "Guaratinga": "GNG",
    "Itabela": "IBH",
    "Itagimirim": "IMM",
    "Itapebi": "IEY",
    "Porto Seguro": "PGU",
    "Santa Cruz Cabrália": "SZB",
    "Alcobaça": "ALC",
    "Caravelas": "CRV",
    "Ibirapuã": "IBP",
    "Itamaraju": "IMJ",
    "Itanhem": "IHM",
    "Jucuruçu": "JUC",
    "Lajedão": "LED",
    "Medeiros Neto": "MSN",
    "Mucuri": "MUI",
    "Nova Viçosa": "NVV",
    "Prado": "PRD",
    "Teixeira de Freitas": "TAF",
    "Vereda": "VEE",
    "Belmonte": "BLE",
    "Camacan": "CCN",
    "Canavieiras": "CVS",
    "Itarantim": "IRM",
    "Mascote": "MAE",
    "Pau Brasil": "PSL",
    "Potiraguá": "POG",
    "Santa Luzia": "SUY",
    "Aurelino Leal": "AEL",
    "Barra do Rocha": "BCH",
    "Camamu": "CMM",
    "Gandu": "GDU",
    "Gongogi": "GGG",
    "Ibirapitanga": "IIP",
    "Ibirataia": "IRT",
    "Igrapiúna": "IGH",
    "Itacaré": "IRE",
    "Itamari": "IMY",
    "Ituberá": "IUR",
    "Marau": "MRU",
    "Nilo Peçanha": "NIA",
    "Nova Ibia": "NIB",
    "Piraí do Norte": "PDQ",
    "Presidente Tancredo Neves": "PTQ",
    "Teolândia": "TEN",
    "Ubaitaba": "UIA",
    "Ubatã": "UAT",
    "Wenceslau Guimarães": "WGS",
    "Aiquara": "AIQ",
    "Apuarema": "APE",
    "Cravolândia": "CVO",
    "Dário Meira": "DMA",
    "Ipiau": "IPW",
    "Irajuba": "IRJ",
    "Itagi": "YGI",
    "Itagiba": "IGB",
    "Itaquara": "IQA",
    "Itiruçu": "IIC",
    "Jaguaquara": "JGQ",
    "Jequié": "JEE",
    "Jitaúna": "JTN",
    "Lafaiete Coutinho": "LFE",
    "Lajedo do Tabocal": "LTL",
    "Manoel Vitorino": "MVO",
    "Maracás": "MAS",
    "Nova Itarana": "NOI",
    "Planaltino": "PLY",
    "Santa Inês": "SAT",
    "Baixa Grande": "BXD",
    "Caém": "CKX",
    "Caldeirão Grande": "CDG",
    "Capim Grosso": "CCG",
    "Jacobina": "JBN",
    "Macajuba": "MJU",
    "Mairi": "MRY",
    "Miguel Calmon": "MGN",
    "Mirangaba": "MIN",
    "Morro do Chapeu": "MHU",
    "Mundo Novo": "MNO",
    "Ourolândia": "OUL",
    "Piritiba": "PRI",
    "Ponto Novo": "PNF",
    "Quixabeira": "QXR",
    "São José do Jacuípe": "SUJ",
    "Saúde": "SUX",
    "Serrolândia": "SEL",
    "Tapiramutá": "TAP",
    "Várzea da Roça": "VDA",
    "Várzea do Poço": "VZC",
    "Várzea Nova": "VOA",
    "América Dourada": "AED",
    "Barra do Mendes": "BDS",
    "Barro Alto": "BLT",
    "Cafarnaum": "CFM",
    "Canarana": "CNR",
    "Central": "CAL",
    "Ipebeba": "IBB",
    "Ibititá": "IIY",
    "Irecê": "IEE",
    "João Dourado": "JDY",
    "Jussara": "JSS",
    "Lapão": "LPO",
    "Mulungu do Morro": "MUD",
    "Presidente Dutra": "PDN",
    "São Gabriel": "SYK",
    "Uibaí": "UII",
    "Barra": "BAA",
    "Gentio do Ouro": "GOU",
    "Itaguacu da Bahia": "IGD",
    "Xique-Xique": "XXQ",
    "Casa Nova": "CSV",
    "Curaca": "CRX",
    "Juazeiro": "JUO",
    "Sobradinho": "SHB",
    "Uauá": "UAU",
    "Andorinha": "ADK",
    "Antonio Gonçalves": "AV S",
    "Campo Formoso": "CFS",
    "Filadélfia": "FDA",
    "Itiúba": "IIB",
    "Jaguarari": "JGA",
    "Pindobaçu": "PDC",
    "Senhor do Bonfim": "SBM",
    "Umburanas": "UMS",
    "Campo Alegre de Lourdes": "CGR",
    "Pilão Arcado": "PID",
    "Remanso": "REM",
    "Sento Sé": "SES",
    "Água Fria": "AFA",
    "Amélia Rodrigues": "ARG",
    "Anguera": "AEX",
    "Antonio Cardoso": "ATC",
    "Conceição da Feira": "CFA",
    "Conceição do Jacuípe": "CJP",
    "Coração de Maria": "CEI",
    "Feira de Santana": "FSA",
    "Ipecaeta": "IEC",
    "Irara": "IRX",
    "Santa Bárbara": "SNB",
    "Santanópolis": "SXA",
    "Santo Amaro": "SNA",
    "Santo Estevão": "SEV",
    "São Gonçalo dos Campos": "SGC",
    "Saubara": "SUF",
    "Serra Preta": "SXX",
    "Tanquinho": "TQH",
    "Teodoro Sampaio": "TDS",
    "Terra Nova": "TNV",
    "Adustina": "ASN",
    "Antas": "ANX",
    "Banzai": "BZE",
    "Cícero Dantas": "CDT",
    "Cipo": "CIP",
    "Fátima": "FIA",
    "Heliópolis": "HIS",
    "Nova Soure": "NVO",
    "Novo Triunfo": "NTF",
    "Paripiranga": "PGA",
    "Ribeira do Amparo": "RII",
    "Ribeira do Pombal": "RBP",
    "Tucano": "TCN",
    "Cansanção": "CSO",
    "Canudos": "CUS",
    "Euclides da Cunha": "ECN",
    "Monte Santo": "MEO",
    "Quijingue": "QJG",
    "Araci": "AAC",
    "Barrocas": "BRKS",
    "Biritinga": "BIR",
    "Candeal": "CNW",
    "Capela do Alto Alegre": "CWG",
    "Conceição do Coité": "CCC",
    "Gavião": "GVO",
    "Ichu": "ICH",
    "Lamarão": "LAR",
    "Nordestina": "NTA",
    "Nova Fátima": "NFT",
    "Pé de Serra": "PPW",
    "Pintadas": "PNY",
    "Queimadas": "QES",
    "Retirolandia": "RRD",
    "Riachão do Jacuípe": "RJP",
    "Santaluz": "SUZ",
    "São Domingos": "SGQ",
    "Serrinha": "SEH",
    "Teofilândia": "TOF",
    "Valente": "VLE",
    "Abaré": "ABE",
    "Chorrocho": "CKH",
    "Coronel João Sá": "CRJ",
    "Glória": "GLO",
    "Jeremoabo": "JRO",
    "Macururé": "MUX",
    "Paulo Afonso": "PAF",
    "Pedro Alexandre": "PXD",
    "Rodelas": "RDE",
    "Santa Brígida": "SGY",
    "Sítio do Quinto": "SQI",
    "Boa Vista do Tupim": "BTM",
    "Bonito": "BNK",
    "Iacu": "ICU",
    "Ibiquera": "IIQ",
    "Ipirá": "IPI",
    "Itaberaba": "IEB",
    "Itaeté": "IEW",
    "Lajedinho": "LEH",
    "Marcionilio Souza": "MNZ",
    "Ruy Barbosa": "RYY",
    "Sapeaçu": "SAP",
    "Souto Soares": "SOS",
    "Tanque Novo": "TNX",
    "Várzea do Poço": "VPC",
    "Wenceslau Guimarães": "WGS"
  },
 PI:{
    "ALTO LONGA": "AOX",
    "ALTOS": "ATS",
    "BENEDITINOS": "BTS",
    "BOQUEIRAO DO PIAUI": "BQRO",
    "CAMPO MAIOR": "CRA",
    "COCAL DE TELHA": "CLTH",
    "COIVARAS": "CRAS",
    "CURRALINHOS": "CLHO",
    "DEMERVAL LOBAO": "DVB",
    "JATOBA DO PIAUI": "JAOB",
    "JOSE DE FREITAS": "JFT",
    "LAGOA ALEGRE": "LGAG",
    "LAGOA DO PIAUI": "LAKY",
    "MONSENHOR GIL": "MHG",
    "NOSSA SENHORA DE NAZARE": "NSHN",
    "NOVO SANTO ANTONIO": "NSTA",
    "PAU D'ARCO DO PIAUÍ": "PDCP",
    "SIGEFREDO PACHECO": "SFPO",
    "TERESINA": "TSA",
    "UNIAO": "UIO",
    "BARRAS": "BRZ",
    "BOA HORA": "BOHO",
    "CABECEIRAS DO PIAUI": "CBRS",
    "CAMPO LARGO DO PIAUI": "CLAR",
    "MIGUEL ALVES": "MLV",
    "NOSSA SENHORA DOS REMEDIOS": "NRM",
    "PORTO": "PRW",
    "ASSUNCAO DO PIAUI": "ASUO",
    "BURITI DOS MONTES": "BUMS",
    "CASTELO DO PIAUI": "CPI",
    "JUAZEIRO DO PIAUI": "JUAZ",
    "PRATA DO PIAUI": "PPY",
    "SAO JOAO DA SERRA": "SXJ",
    "SAO MIGUEL DO TAPUIO": "SUO",
    "AGRICOLANDIA": "AIL",
    "AGUA BRANCA": "ABA",
    "AMARANTE": "ANT",
    "ANGICAL DO PIAUI": "ALD",
    "BARRO DURO": "BDU",
    "ELESBAO VELOSO": "EEV",
    "HUGO NAPOLEAO": "HUN",
    "JARDIM DO MULATO": "JDMU",
    "LAGOINHA DO PIAUI": "LAOI",
    "MIGUEL LEAO": "MIE",
    "OLHO D'AGUA DO PIAUI": "OHDU",
    "PALMEIRAIS": "PYA",
    "PASSAGEM FRANCA DO PIAUI": "PGFA",
    "REGENERACAO": "RGE",
    "SANTO ANTONIO DOS MILAGRES": "STML",
    "SAO FELIX DO PIAUI": "SXI",
    "SAO GONCALO DO PIAUI": "SCY",
    "SAO MIGUEL DA BAIXA GRANDE": "SMBG",
    "SAO PEDRO DO PIAUI": "SPP",
    "BRASILEIRA": "BSLA",
    "CAPITAO DE CAMPOS": "CPW",
    "DOMINGOS MOURAO": "DMM",
    "LAGOA DE SAO FRANCISCO": "LGSF",
    "MILTON BRANDAO": "MLTB",
    "PEDRO II": "PDO",
    "PIRIPIRI": "PIP",
    "BOM PRINCIPIO DO PIAUI": "BMPP",
    "BURITI DOS LOPES": "BIL",
    "CAJUEIRO DA PRAIA": "CJUO",
    "CARAUBAS DO PIAUI": "CRWB",
    "CAXINGO": "CXGO",
    "COCAL": "CCX",
    "COCAL DOS ALVES": "CLAV",
    "ILHA GRANDE": "ILGD",
    "JOAQUIM PIRES": "JQP",
    "LUIS CORREIA": "LSR",
    "MURICI DOS PORTELAS": "MIPA",
    "PARNAIBA": "PNA",
    "BATALHA": "BLH",
    "ESPERANTINA": "ENA",
    "JOCA MARQUES": "JCMS",
    "LUZILANDIA": "LZN",
    "MADEIRO": "MDIO",
    "MATIAS OLIMPIO": "MSO",
    "MORRO DO CHAPEU DO PIAUI": "MRCP",
    "PIRACURUCA": "PCR",
    "SAO JOAO DA FRONTEIRA": "SJFT",
    "SAO JOAO DO ARRAIAL": "SJRL",
    "SAO JOSE DO DIVINO": "SJDV",
    "ALAGOINHA DO PIAUI": "AKP",
    "ALEGRETE DO PIAUI": "ATPI",
    "AROEIRAS DO ITAIM": "ARDY",
    "BELEM DO PIAUI": "BLMP",
    "BOCAINA": "BCI",
    "CAJAZEIRAS DO PIAUI": "CZEI",
    "CALDEIRAO GRANDE DO PIAUI": "CDGD",
    "CAMPO GRANDE DO PIAUI": "CGDP",
    "CARIDADE DO PIAUI": "CDDE",
    "COLONIA DO PIAUI": "CLPI",
    "CURRAL NOVO DO PIAUI": "CLNW",
    "DOM EXPEDITO LOPES": "DEL",
    "FLORESTA DO PIAUI": "FRTA",
    "FRANCISCO MACEDO": "FCCM",
    "FRANCISCO SANTOS": "FCC",
    "FRONTEIRAS": "FNT",
    "GEMINIANO": "GMNO",
    "IPIRANGA DO PIAUI": "IPD",
    "ITAINOPOLIS": "ITO",
    "JAICOS": "JOS",
    "MARCOLANDIA": "MCLD",
    "MASSAPE DO PIAUI": "MSSP",
    "MONSENHOR HIPOLITO": "MHP",
    "OEIRAS": "OES",
    "PADRE MARCOS": "PMY",
    "PAQUETA": "PKUT",
    "PATOS DO PIAUI": "PAOS",
    "PICOS": "PCZ",
    "PIO IX": "PIX",
    "SANTA CRUZ DO PIAUI": "SZI",
    "SANTA ROSA DO PIAUI": "SANS",
    "SANTANA DO PIAUI": "STPI",
    "SANTO ANTONIO DE LISBOA": "SSB",
    "SANTO INACIO DO PIAUI": "SYU",
    "SAO JOAO DA CANABRAVA": "SCB",
    "SAO JOAO DA VARJOTA": "SJVJ",
    "SAO JOSE DO PIAUI": "SPY",
    "SAO JULIAO": "SYJ",
    "SAO LUIS DO PIAUI": "SLUS",
    "SIMOES": "SYS",
    "SUSSUAPARA": "SSUP",
    "TANQUE DO PIAUI": "TAQE",
    "VERA MENDES": "VMDS",
    "VILA NOVA DO PIAUI": "VLNK",
    "WALL FERRAZ": "WLFZ",
    "AROAZES": "ARZ",
    "BARRA D'ALCANTARA": "BRNR",
    "FRANCINOPOLIS": "FOO",
    "INHUMA": "INU",
    "LAGOA DO SITIO": "LGST",
    "NOVO ORIENTE DO PIAUI": "NOP",
    "PIMENTEIRAS": "PET",
    "SANTA CRUZ DOS MILAGRES": "SCZM",
    "VALENCA DO PIAUI": "VPI",
    "VARZEA GRANDE": "VZD",
    "ACAUA": "ACAH",
    "BELA VISTA DO PIAUI": "BLVP",
    "BETANIA DO PIAUI": "BTAA",
    "CAMPINAS DO PIAUI": "CKU",
    "CAMPO ALEGRE DO FIDALGO": "CPAF",
    "CAPITAO GERVASIO OLIVEIRA": "CGVO",
    "CONCEICAO DO CANINDE": "CYE",
    "ISAIAS COELHO": "ISL",
    "JACOBINA DO PIAUI": "JCBA",
    "JOAO COSTA": "JCOT",
    "LAGOA DO BARRO DO PIAUI": "LGBR",
    "NOVA SANTA RITA": "NSTR",
    "PAES LANDIM": "PSK",
    "PAULISTANA": "PUS",
    "PEDRO LAURENTINO": "PDLT",
    "QUEIMADA NOVA": "QANA",
    "SAO FRANCISCO DE ASSIS DO PIAUI": "SFIS",
    "SAO JOAO DO PIAUI": "SPI",
    "SIMPLICIO MENDES": "SLC",
    "SOCORRO DO PIAUI": "SYC",
    "ARRAIAL": "ARK",
    "CANAVIEIRA": "CNVI",
    "FLORIANO": "FLO",
    "FRANCISCO AYRES": "FYS",
    "GUADALUPE": "GDP",
    "ITAUEIRA": "IUY",
    "JERUMENHA": "JNH",
    "NAZARE DO PIAUI": "NZI",
    "SAO FRANCISCO DO PIAUI": "SFU",
    "SAO JOSE DO PEIXE": "SXE",
    "SAO MIGUEL DO FIDALGO": "SMFD",
    "BREJO DO PIAUI": "BJOY",
    "CANTO DO BURITI": "CII",
    "COLONIA DO GURGUEIA": "CAGL",
    "ELISEU MARTINS": "ELS",
    "FLORES DO PIAUI": "FUI",
    "MANOEL EMIDIO": "MMI",
    "PAJEUDO PIAUI": "PAJW",
    "PAVUSSU": "PUNO",
    "RIBEIRA DO PIAUI": "RBA",
    "RIO GRANDE DO PIAUI": "RRP",
    "TAMBORIL DO PIAUI": "TBRI",
    "ALVORADA DO GURGUEIA": "ALVG",
    "BAIXA GRANDE DO RIBEIRO": "BXGY",
    "BOM JESUS": "BOM",
    "CRISTINO CASTRO": "CYT",
    "CURRAIS": "CURW",
    "PALMEIRA DO PIAUI": "PMD",
    "REDENCAO DO GURGUEIA": "RGG",
    "RIBEIRO GONCALVES": "RBG",
    "SANTA FILOMENA": "SFK",
    "SANTA LUZ": "SXZ",
    "AVELINO LOPES": "AVP",
    "BARREIRAS DO PIAUI": "BSD",
    "CORRENTE": "CNT",
    "CRISTALANDIA DO PIAUI": "CWI",
    "CURIMATA": "CYM",
    "GILBUES": "GLU",
    "JULIO BORGES": "JLBS",
    "MONTE ALEGRE DO PIAUI": "MOU",
    "MORRO CABECA NO TEMPO": "MCBT",
    "PARNAGUA": "PNW",
    "RIACHO FRIO": "RCFR",
    "SAO GONCALO DO GURGUEIA": "SOGA",
    "SEBASTIAO BARROS": "SBBR",
    "ANTONIO ALMEIDA": "AMD",
    "BERTOLINIA": "BTL",
    "LANDRI SALES": "LDL",
    "MARCOS PARENTE": "MPT",
    "PORTO ALEGRE DO PIAUI": "PTAP",
    "SEBASTIAO LEAL": "SBLL",
    "URUCUI": "UUC",
    "ANISIO DE ABREU": "ASB",
    "BONFIM DO PIAUI": "BNFM",
    "CARACOL": "CRW",
    "CORONEL JOSE DIAS": "CNJD",
    "DIRCEU ARCOVERDE": "DIU",
    "DOM INOCENCIO": "DIN",
    "FARTURA DO PIAUI": "FTUA",
    "GUARIBAS": "GUBS",
    "JUREMA": "JWMA",
    "SAO BRAZ DO PIAUI": "SOBS",
    "SAO LOURENCO DO PIAUI": "SLOP",
    "SAO RAIMUNDO NONATO": "SRN",
    "VARZEA BRANCA": "VBCA"
    },
	AL:{
	  "BARRA DE SANTO ANTONIO": "BNA",
	  "COQUEIRO SECO": "CQC",
	  "MACEIO": "MCO",
	  "MARECHAL DEODORO": "MHD",
	  "MESSIAS": "MEA",
	  "PARIPUEIRA": "PAPU",
	  "PILAR": "PLR",
	  "RIO LARGO": "RGO",
	  "SANTA LUZIA DO NORTE": "SZT",
	  "SAO LUIS DO QUITUNDE": "SLQ",
	  "SATUBA": "STU",
	  "BRANQUINHA": "BQH",
	  "CAMPESTRE": "CPEE",
	  "COLONIA LEOPOLDINA": "COL",
	  "FLEXEIRAS": "FXS",
	  "IBATEGUARA": "IBG",
	  "JACUIPE": "JPE",
	  "JAPARATINGA": "JPG",
	  "JOAQUIM GOMES": "JQG",
	  "JUNDIA": "JUD",
	  "MARAGOGI": "MGI",
	  "MATRIZ DE CAMARAGIBE": "MZC",
	  "MURICI": "MRI",
	  "NOVO LINO": "NLO",
	  "PASSO DE CAMARAGIBE": "PEG",
	  "PORTO CALVO": "PCV",
	  "PORTO DE PEDRAS": "POP",
	  "SAO JOSE DA LAJE": "SJJ",
	  "SAO MIGUEL DOS MILAGRES": "SYM",
	  "UNIAO DOS PALMARES": "UPS",
	  "ANADIA": "AAD",
	  "ATALAIA": "ATL",
	  "BARRA DE SAO MIGUEL": "BDG",
	  "BOCA DA MATA": "BOD",
	  "CAJUEIRO": "CJO",
	  "CAMPO ALEGRE": "CLR",
	  "CAPELA": "CPA",
	  "CHA PRETA": "CHK",
	  "CORURIPE": "CUI",
	  "JEQUIÁ DA PRAIA": "JQPA",
	  "MAR VERMELHO": "MVM",
	  "PAULO JACINTO": "PJO",
	  "PINDOBA": "PYD",
	  "QUEBRANGULO": "QGO",
	  "ROTEIRO": "RTI",
	  "SANTANA DO MUNDAU": "SUD",
	  "SAO MIGUEL DOS CAMPOS": "SMM",
	  "VICOSA": "VIS",
	  "BELEM": "BLX",
	  "CACIMBINHAS": "CBH",
	  "COITE DO NOIA": "CYO",
	  "DOIS RIACHOS": "DSH",
	  "ESTRELA DE ALAGOAS": "EAL",
	  "IGACI": "ICY",
	  "MAJOR ISIDORO": "MJR",
	  "MARIBONDO": "MBO",
	  "MINADOR DO NEGRAO": "MNX",
	  "PALMEIRA DOS INDIOS": "PIN",
	  "TANQUE D'ARCA": "TQD",
	  "TAQUARANA": "TAQ",
	  "ARAPIRACA": "AIR",
	  "BATALHA": "BTH",
	  "BELO MONTE": "BLN",
	  "CAMPO GRANDE": "CGN",
	  "CRAIBAS": "KIS",
	  "FEIRA GRANDE": "FGE",
	  "FELIZ DESERTO": "FZO",
	  "GIRAU DO PONCIANO": "GUP",
	  "IGREJA NOVA": "IGJ",
	  "JARAMATAIA": "JAA",
	  "JUNQUEIRO": "JQO",
	  "LAGOA DA CANOA": "LDC",
	  "LIMOEIRO DE ANADIA": "LIM",
	  "OLHO D'AGUA GRANDE": "OGG",
	  "PENEDO": "PND",
	  "PIACABUCU": "PIB",
	  "PORTO REAL DO COLEGIO": "PLC",
	  "SAO BRAS": "SOB",
	  "SAO SEBASTIAO": "SWS",
	  "TEOTONIO VILELA": "TNVL",
	  "TRAIPU": "TRP",
	  "CARNEIROS": "CKN",
	  "JACARE DOS HOMENS": "JSH",
	  "MARAVILHA": "MVI",
	  "MONTEIROPOLIS": "MON",
	  "OLHO D'AGUA DAS FLORES": "OLF",
	  "OLIVENCA": "OIV",
	  "OURO BRANCO": "OUB",
	  "PALESTINA": "PSY",
	  "PAO DE ACUCAR": "PKW",
	  "POCO DAS TRINCHEIRAS": "PCH",
	  "SANTANA DO IPANEMA": "SNN",
	  "SAO JOSE DA TAPERA": "SPX",
	  "SENADOR RUI PALMEIRA": "SUP",
	  "AGUA BRANCA": "ABN",
	  "CANAPI": "CNK",
	  "DELMIRO GOUVEIA": "DGA",
	  "INHAPI": "IHP",
	  "MATA GRANDE": "MGR",
	  "OLHO D'AGUA DO CASADO": "OHD",
	  "PARICONHA": "PRCH",
	  "PIRANHAS": "PYH"
	}


};

const categorias = {
  'GOVERNO': 'B2G',
  'EMPRESA': 'B2B',
  'PROVEDOR DE INTERNET': 'ISP',
  'PROJETOS DA AGILITY': 'AGL',
  'PROJETO FUST': 'FUST',
  'TARE-AL':'TARE-AL',
  'TARE-PB':'TARE-AL'
};

const servicos = {
  
  'REDE METRO ETHERNET': 'MTR',
  'REDE DWDM': 'DWDM',
  'REDES RÁDIOS': 'WL-RÁDIO',
  'INTERNET COM ONU (GPON)': 'GPON',
  'INTERNET COM ONU (GPON) E CABO AS': 'GPONAS',
  'WIFI DE ALTA PERFORMANCE': 'WIFI',
  'LINK DEDICADO': 'LINK',
  'VIDEO MONITORAMENTO': 'CFTV',
  'TELEFONIA': 'TEL'
};

const empresas = {
  'Brisanet': 'BRIT',
  'American Tower Company': 'AMT',
  'Brasil Tower Company': 'BTC',
};

// Função para formatar o CNPJ
function formatarCNPJ(cnpj) {
  return cnpj.replace(/\D/g, '');
}

// Atualizar cidades ao selecionar estado
document.getElementById('estado').addEventListener('change', function() {
  const estado = this.value;
  const cidadeSelect = document.getElementById('cidade');
  cidadeSelect.innerHTML = '<option value="">Selecionar opção</option>';  // Resetar as cidades

  if (estado && estadosCidades[estado]) {
    const cidades = estadosCidades[estado];
    for (const cidade in cidades) {
      const option = document.createElement('option');
      option.value = cidades[cidade];
      option.textContent = cidade;
      cidadeSelect.appendChild(option);
    }
  }
});

// Evento de envio do formulário
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const categoria = document.getElementById("categoria").value;
  const servico = document.getElementById("servico").value;
  const cnpj = document.getElementById("cnpj").value;
  const numeroContrato = document.getElementById("numeroContrato").value;
  const numeroPonto = document.getElementById("numeroPonto").value;
  const estado = document.getElementById("estado").value;
  const cidadeSigla = document.getElementById("cidade").value;
  const empresa = document.getElementById("empresa").value;

  const projetoPai = `${categorias[categoria]}-${servicos[servico]}-${formatarCNPJ(cnpj)}-${estado}-${empresas[empresa]}`;
  const projetoFilho = `${categorias[categoria]}-${servicos[servico]}-${numeroContrato}-${numeroPonto}-${cidadeSigla}-${empresas[empresa]}`;

  document.getElementById("projetoPai").textContent = projetoPai;
  document.getElementById("projetoFilho").textContent = projetoFilho;

  document.getElementById("popup").style.display = "flex";
});

// Fechar o popup
document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

// Função para copiar o projeto pai
document.getElementById("copyProjetoPai").addEventListener("click", function() {
  const projetoPai = document.getElementById("projetoPai").textContent;
  navigator.clipboard.writeText(projetoPai).then(() => {
    showNotification("Projeto Pai copiado com sucesso!", "success");
  }).catch(() => {
    showNotification("Erro ao copiar o Projeto Pai.", "error");
  });
});

// Função para copiar o projeto filho
document.getElementById("copyProjetoFilho").addEventListener("click", function() {
  const projetoFilho = document.getElementById("projetoFilho").textContent;
  navigator.clipboard.writeText(projetoFilho).then(() => {
    showNotification("Projeto Filho copiado com sucesso!", "success");
  }).catch(() => {
    showNotification("Erro ao copiar o Projeto Filho.", "error");
  });
});

// Fechar o popup com ESC
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    document.getElementById("popup").style.display = "none";
  }
});

// Botão de voltar
document.getElementById("backButton").addEventListener("click", function() {
  window.history.back();
});
