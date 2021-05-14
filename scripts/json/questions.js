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
            "question_en": "Měla by velikost vlády být omezena?",
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