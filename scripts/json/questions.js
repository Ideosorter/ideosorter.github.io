questions = { // don't change this line
        "private_property": {
            "question_en": "Should Private Property exist?",
            "question_cs": "Mělo by soukromé vlastnictví existovat?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {},
            "nextquestion": {
                "yes": "theo",
                "no": "market"
            }
        },
        "theo": {
            "question_en": "Should society be run by intermediaries to a deity?",
            "question_cs": "Měla by společnost být řízena prostředníky božstva?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "theocracy",
            },
            "nextquestion": {
                "no": "distributism",
            }
        },
        "distributism": {
            "question_en": "Should private property be made as widely owned as possible?",
            "question_cs": "Mělo by soukromé vlastnictví být rozšířeno co nejvíce?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "distributism",
            },
            "nextquestion": {
                "no": "conditional_land_ownership",
            }
        },
        "conditional_land_ownership": {
            "question_en": "Should land ownership be conditional or unconditional?",
            "question_cs": "Mělo by vlastnictví pozemku být podmínečné nebo nepodmínečné?",
            "answers": [
                "conditional",
                "unconditional"
            ],
            "results": {
            },
            "nextquestion": {
                "conditional": "scope_of_government2",
                "unconditional": "scope_of_government1",
            }
        },
        "scope_of_government1": { //not here
            "question_en": "Should the scope of government be limited?",
            "question_cs": "Měla by velikost vlády být omezena?",
            "answers": [
                "yes",
                "no",
                "nostate"
            ],
            "results": {
            },
            "nextquestion": {
                "yes": "watchman_state",
                "no": "tradvals",
                "nostate": "counter_economics"
            }
        },
        "watchman_state": {
            "question_en": "Should the government purely be a night watchman state?",
            "question_cs": "Měla by vláda být čistě “stát noční hlídky”?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "minarch",
            },
            "nextquestion": {
                "no": "welfare",
            }
        },
        "welfare": {
            "question_en": "Should there be a focus on helping the disadvantaged?",
            "question_cs": "Mělo by být zaměření na pomoc znevýhodněným?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
            },
            "nextquestion": {
                "yes": "welfare_needed",
                "no": "limited_gov_tradvals",
            }
        },
        "welfare_needed": {
            "question_en": "Would welfare be needed to help the disadvantaged under a deregulated market economy?",
            "question_cs": "Byly by socialní dávky zapotřebí v neregulované trhové ekonomice?",
            "answers": [
                "welfare",
                "noneed"
            ],
            "results": {
                "welfare": "socbert",
                "noneed": "bhl",
            },
            "nextquestion": {
            }
        },
        "limited_gov_tradvals": {
            "question_en": "Do you think a more limited government would lead to a resurgence in traditional values?",
            "question_cs": "Myslíte si, že větší omezení vlády by vedlo ke znovuobnově tradičních hodnot?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "paleobert",
                "no": "libert",
            },
            "nextquestion": {
            }
        },
        "tradvals": {
            "question_en": "In your ideal society, would traditional values be upheld?",
            "question_cs": "Byly by ve Vaší ideální společnosti prosazovány tradiční hodnoty?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
            },
            "nextquestion": {
                "yes": "tradauthstate",
                "no": "govbasicneeds",
            }
        },
        "tradauthstate": {
            "question_en": "Do you deem an authoritarian state necessary to secure the values and sovereignty of your nation?",
            "question_cs": "Považujete autoritativní stát za nutný v zabezpečení hodnot a nezávislosti Vašeho národa?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
            },
            "nextquestion": {
                "yes": "corp_cap",
                "no": "strong_safety_net",
            }
        },
        "corp_cap": {
            "question_en": "Should the government embrace capitalism or corporatism?",
            "question_cs": "Měla by vláda prosazovat kapitalismus nebo korporatismus?",
            "answers": [
                "capitalism",
                "corporatism"
            ],
            "results": {
            },
            "nextquestion": {
                "capitalism": "markreg",
                "corporatism": "unions_vs_state",
            }
        },
        "markreg": {
            "question_en": "Should the market be closely regulated?",
            "question_cs": "Měl by trh být úzce regulován?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "socnat",
                "no": "nazcap",
            },
            "nextquestion": {
            }
        },
        "unions_vs_state": {
            "question_en": "Should the economy by organized by unions, or by the state?",
            "question_cs": "Měla by ekonomie být organizována odbory, nebo státem?",
            "answers": [
                "unions",
                "state"
            ],
            "results": {
                "unions": "natsynd",
            },
            "nextquestion": {
                "state": "clergygov",
            }
        },
        "clergygov": {
            "question_en": "Should the clergy be a part of government?",
            "question_cs": "Mělo by duchovenstvo být součástí vlády?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "clerfash",
            },
            "nextquestion": {
                "no": "racesuperior",
            }
        },
        "racesuperior": {
            "question_en": "Do you deem your race to be superior above all others?",
            "question_cs": "Považujete svou rasu za nadřazenou všem ostatním?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "nazi",
                "no": "fascism",
            },
            "nextquestion": {
            }
        },
        "strong_safety_net": {
            "question_en": "Should there be a strong social safety net for the disadvantaged in society?",
            "question_cs": "Měla by tu být silná sociální síť záchrany?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "patcon",
            },
            "nextquestion": {
                "no": "intervgov",
            }
        },
        "intervgov": {
            "question_en": "Should the government intervene in wars that do not directly interfere with your country's national sovereignty?",
            "question_cs": "Měla by vláda zasahovat ve válkách neohrožujících národní nezávislost Vaší země?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "neocon",
                "no": "paleocon",
            },
            "nextquestion": {
            }
        },
        "govbasicneeds": {
            "question_en": "Should the government provide the basic necessities to its citizens?",
            "question_cs": "Měla by vláda poskytovat základní potřeby jejím občanům?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "socdem",
            },
            "nextquestion": {
                "no": "econreg",
            }
        },
        "econreg": {
            "question_en": "Should the economy be tightly regulated?",
            "question_cs": "Měla by ekonomie být úzce regulována?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "lib",
                "no": "neolib",
            },
            "nextquestion": {
            }
        },
        "counter_economics": {
            "question_en": "Should counter-economics be the focus of bringing about an ideal society?",
            "question_cs": "Měla by tzv. kontraekonomika být základem přivození ideální společnosti?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "agorism",
            },
            "nextquestion": {
                "no": "coop_ancap",
            }
        },
        "coop_ancap": {
            "question_en": "Do you think that a completely deregulated, stateless society will lead to a market dominated by worker co-operatives?",
            "question_cs": "Myslíte si, že kompletně neregulovaná společnost vyústí v trh dominovaný družstvy?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "leftroth",
                "no": "ancap",
            },
            "nextquestion": {
            }
        },
        "scope_of_government2": {
            "question_en": "Should the scope of government be limited?",
            "question_cs": "Mělo by vládní pole působnosti být omezeno?",
            "answers": [
                "yes",
                "no",
                "nostate"
            ],
            "results": {
                "yes": "geolib",
                "nostate": "angeo"
            },
            "nextquestion": {
                "no": "landwelfare",
            }
        },
        "landwelfare": {
            "question_en": "Should the revenue from land value taxes be put primarily towards welfare?",
            "question_cs": "Měl by se zisk z daní hodnoty pozemku využít primárně na sociální zabezpečení?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "socgeo",
                "no": "georgism",
            },
            "nextquestion": {
            }
        },
        "market": {
            "question_en": "Should the market mechanism drive the allocation of goods?",
            "question_cs": "Mělo by přiřazování zboží být řízeno tržními mechanismy?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
            },
            "nextquestion": {
                "yes": "statesoc",
                "no": "marx",
            }
        },
        "statesoc": {
            "question_en": "Should there be a strong authoritarian state to protect the working class from foreign nations?",
            "question_cs": "Měl by existovat silný autoritní stát na ochranu dělnické třídy před ostatními národy?",
            "answers": [
                "yes",
                "no",
                "nostate"
            ],
            "results": {
                "yes": "tito",
                "no": "marksoc",
            },
            "nextquestion": {
                "nostate": "mutualaid"
            }
        },
        "mutualaid": {
            "question_en": "Should the economy be based around the principles of mutual aid?",
            "question_cs": "Měla by ekonomie být založena na principech vzájemné pomoci?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "no": "lwma",
            },
            "nextquestion": {
                "yes": "racism",
            }
        },
        "racism": {
            "question_en": "Should communities be made up of ethnically homogenous populations?",
            "question_cs": "Měly by komunity být tvořeny etnicky stejnorodými populacemi?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "natan",
                "no": "mutualism",
            },
            "nextquestion": {
            }
        },
        "marx": {
            "question_en": "Should the goal of our society be to move towards a classless, moneyless and stateless society?",
            "question_cs": "měl by cíl naší společnosti být pohyb ke společnosti, která je beztřídní, bezpeněžná a bezstátní?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
            },
            "nextquestion": {
                "yes": "transstate",
                "no": "techno",
            }
        },
        "transstate": {
            "question_en": "Is a transitory state necessary to reach this goal?",
            "question_cs": "Je k dosažení tohoto cíle nutný přechodný stát?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
            },
            "nextquestion": {
                "yes": "soc_directstate1",
                "no": "labvouch",
            }
        },
        "soc_directstate1": {
            "question_en": "Should the workers directly own the means of production in this stage, or should the state be in control of them?",
			"question_cs": "Měli by dělníci přímo vlastnit prostředky výroby, nebo by je měl ovládat stát?",
			
            "answers": [
                "workers",
                "state"
            ],
            "results": {
            },
            "nextquestion": {
                "workers": "rev_ed",
                "state": "vanguard",
            }
        },
        "vanguard": {
            "question_en": "Is a vanguard party necessary to lead the working class in the revolution?",
			"question_cs": "Je k vedení dělnické třídy v revoluci nutná předvojová strana?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "no": "orthmarx",
            },
            "nextquestion": {
                "yes": "vanguard_ed",
            }
        },
        "vanguard_ed": {
            "question_en": "Should the role of this vanguard party be only to educate? As opposed to being some form of political leadership.",
			"question_cs": "Měla by role této předvojové strany být pouze v edukaci dělnictva (v protikladu k nějaké formě politického vedení)?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "castro",
            },
            "nextquestion": {
                "no": "cultural_revolution",
            }
        },
        "cultural_revolution": {
            "question_en": "Should there be a cultural revolution to purge reactionary thought from society?",
			"question_cs": "Měla by tu být kulturní revoluce k odstranění reakčních myšlenek ze společnosti?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
            },
            "nextquestion": {
                "yes": "3worlds",
                "no": "socinone",
            }
        },
        "3worlds": {
            "question_en": "Do you subscribe to Mao Zedong's Three Worlds Theory?",
			"question_cs": "Souhlasíte s Teorií tří světů od Mao Ce-tunga?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "no": "mlm",
            },
            "nextquestion": {
                "yes": "nep",
            }
        },
        "nep": {
            "question_en": "Do you think that a multi-generational stage of state capitalism is necessary to prepare the economy for socialism?",
			"question_cs": "Myslíte si, že vícegenerační fáze státního kapitalismu je nutná k přípravě ekonomie na socialismus?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "deng",
                "no": "mao",
            },
            "nextquestion": {
            }
        },
        "socinone": {
            "question_en": "Do you think that socialism can be achieved within one nation?",
			"question_cs": "Myslíte si, že je možné dosáhnout socialismu v jedné zemi?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
            },
            "nextquestion": {
                "yes": "aboveall1",
                "no": "posadism",
            }
        },
        "aboveall1": {
            "question_en": "Do you think that the nation should be of most importance above all?",
			"question_cs": "Myslíte si, že národ je nejvyšší důležitostí nade vše?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "nazbol",
                "no": "ml",
            },
            "nextquestion": {
            }
        },
        "posadism": {
            "question_en": "Do you think an apocalyptic event would be the best way to achieve socialism?",
			"question_cs": "Myslíte si, že nejlepším způsobem dosažení socialismu je skrz apokalyptickou událost?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "posadism",
                "no": "trot",
            },
            "nextquestion": {
            }
        },
        "rev_ed": {
            "question_en": "Should there be a revolutionary party to teach the masses during and after the revolution?",
			"question_cs": "Měla by existovat revoluční strana na učení lidí při revoluci a po ní?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
            },
            "nextquestion": {
                "yes": "synd1",
                "no": "mediabad",
            }
        },
        "synd1": {
            "question_en": "Should society be organized through unions?",
			"question_cs": "Měla by společnost být organizována pomocí odborů?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "deleon",
            },
            "nextquestion": {
                "no": "centplan",
            }
        },
        "centplan": {
            "question_en": "Should the economy be planned centrally?",
			"question_cs": "Měla by společnost být cetrálně plánovaná?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "bordiga",
                "no": "luxem",
            },
            "nextquestion": {
            }
        },
        "mediabad": {
            "question_en": "Is mass media your focal issue with capitalism?",
			"question_cs": "Jsou hromadná média Váš nejdůležitější problém s kapitalismem?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "situationist",
                "no": "councom",
            },
            "nextquestion": {
            }
        },
        "labvouch": {
            "question_en": "Should society feature labour vouchers as compensation for work?",
			"question_cs": "Měla by společnost mít pracovní vouchery jako kompenzaci za práci?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "ancol",
            },
            "nextquestion": {
                "no": "agriculture",
            }
        },
        "agriculture": {
            "question_en": "Should agriculture be practiced?",
			"question_cs": "Mělo by se užívat zemědělství?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "no": "anprim",
            },
            "nextquestion": {
                "yes": "synd2",
            }
        },
        "synd2": {
            "question_en": "Should society be organized through unions?",
			"question_cs": "Měla by společnost být organizována pomocí odborů?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "ansynd",
                "no": "ancom",
            },
            "nextquestion": {
            }
        },
        "techno": {
            "question_en": "Should the state and/or economy be run exclusively by experts?",
			"question_cs": "Měl(a) by stát/ekonomie být řízena pouze odborníky?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "technocracy",
            },
            "nextquestion": {
                "no": "electsoc",
            }
        },
        "electsoc": {
            "question_en": "Should socialism be achieved through electoralism or through revolutionary means?",
			"question_cs": "Měl by socialismus být dosažen pomocí reformy nebo revoluce?",
            "answers": [
                "electoralism",
                "revolution"
            ],
            "results": {
                "electoralism": "demsoc",
            },
            "nextquestion": {
                "revolution": "soc_directstate2",
            }
        },
        "soc_directstate2": {
            "question_en": "Should the workers directly own the means of production or should the state be in control of them?",
			"question_cs": "Měli by dělníci přímo vlastnit prostředky výroby, nebo by je měl ovládat stát?",
            "answers": [
                "workers",
                "state"
            ],
            "results": {
            },
            "nextquestion": {
                "workers": "agriculture_industrial",
                "state": "esobullshit",
            }
        },
        "esobullshit": {
            "question_en": "Should class/nation be the main subject of political discussion, or should it be the Dasein (human essence)?",
            "answers": [
                "dasein",
                "classnation"
            ],
            "results": {
                "dasein": "4theory",
            },
            "nextquestion": {
                "classnation": "bankjews",
            }
        },
        "bankjews": {
            "question_en": "Do you believe that the source economic problems faced by workers is down to Jewish bankers?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "strasser",
            },
            "nextquestion": {
                "no": "aboveall2",
            }
        },
        "aboveall2": {
            "question_en": "Do you think that the nation should be of most importance above all?",
			"question_cs": "Myslíte si, že by národ měl být nejvyšší důležitosti nade vše?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "nazbol",
                "no": "statesoc",
            },
            "nextquestion": {
            }
        },
        "agriculture_industrial": {
            "question_en": "Should society be focused more on agriculture than on industrial work?",
			"question_cs": "Měla by společnost být zaměřena více na zemědělství, než na průmyslovou výrobu?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "agsoc",
            },
            "nextquestion": {
                "no": "synd3",
            }
        },
        "synd3": {
            "question_en": "Should society be organised through unions?",
			"question_cs": "Měla by společnost být organizována pomocí odborů?",
            "answers": [
                "yes",
                "no"
            ],
            "results": {
                "yes": "synd",
                "no": "libsoc",
            },
            "nextquestion": {
            }
        }
    }
