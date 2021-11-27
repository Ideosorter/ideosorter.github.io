questions = { // don't change this line
        "private_property": {
            "question_en": "Should Private Property exist?",
            "question_cs": "Mělo by soukromé vlastnictví existovat?",
            "question_de": "Sollte Privateigentum existieren?",
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
            "question_de": "Sollte die Gesellschaft von Vermittlern eines Gottes regiert werden?",
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
            "question_de": "Sollte Eigentum so weit wie möglich in der Bevölkerung verteilt werden?",
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
            "question_de": "Sollte Grundbesitz an Bedingungen geknüpft sein oder nicht?",
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
            "question_de": "Sollte der Kompetenzbereich von Regierungen eingeschränkt sein?",
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
            "question_de": "Sollte die Regierung einzig einen Nachtwächterstaat bilden?",
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
            "question_de": "Sollte ein Fokus auf der Hilfe für Benachteiligte liegen?",
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
            "question_de": "Wäre in einer deregulierten Marktwirtschaft Sozialhilfe nötig, um den Benachteiligten zu helfen?",
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
            "question_de": "Glauben Sie, dass ein begrenzterer Staat zu einem Wiederaufleben der traditionellen Werte führen würde?",
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
            "question_de": "Würden in Ihrer idealen Gesellschaft die traditionellen Werte aufrechterhalten werden?",
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
            "question_de": "Halten Sie einen autoritären Staat für notwendig, um die Werte und die Souveränität Ihres Landes zu sichern?",
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
            "question_de": "Sollte sich die Regierung den Kapitalismus oder den Korporatismus zu eigen machen?",
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
            "question_de": "Sollte der Markt streng reguliert werden?",
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
            "question_de": "Sollte die Wirtschaft von Gewerkschaften oder vom Staat organisiert sein?",
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
            "question_de": "Sollte der Klerus Teil der Regierung sein?",
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
            "question_de": "Glauben Sie, dass Ihre Rasse allen anderen überlegen ist?",
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
            "question_de": "Sollte es ein starkes soziales Sicherheitsnetz für die Benachteiligten in der Gesellschaft geben?",
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
            "question_de": "Sollte die Regierung in Kriege eingreifen, die die nationale Souveränität Ihres Landes nicht direkt beeinträchtigen?",
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
            "question_de": "Sollte der Staat seine Bürger mit dem Nötigsten versorgen?",
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
            "question_de": "Sollte die Wirtschaft streng reguliert werden?",
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
            "question_de": "Sollte die Gegenwirtschaft im Mittelpunkt der Verwirklichung einer idealen Gesellschaft stehen?",
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
            "question_de": "Glauben Sie, dass eine völlig deregulierte, staatenlose Gesellschaft zu einem von Arbeitergenossenschaften beherrschten Markt führen wird?",
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
            "question_de": "Sollte der Kompetenzbereich von Regierungen eingeschränkt sein?",
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
            "question_de": "Sollen die Einnahmen aus der Grundsteuer in erster Linie für soziale Zwecke verwendet werden?",
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
            "question_de": "Sollte der Marktmechanismus die Verteilung der Güter steuern?",
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
            "question_de": "Sollte es einen starken autoritären Staat geben, um die Arbeiterklasse vor fremden Nationen zu schützen?",
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
            "question_de": "Sollte die Wirtschaft auf den Grundsätzen der gegenseitigen Hilfe beruhen?",
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
            "question_de": "Sollten die Gemeinschaften aus ethnisch homogenen Bevölkerungsgruppen bestehen?",
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
            "question_de": "Sollte es das Ziel unserer Gesellschaft eine klassenlose, geldlose und staatenlose Gesellschaft sein?",
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
            "question_de": "Ist ein vorübergehender Staat notwendig, um dieses Ziel zu erreichen?",
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
            "question_de": "Sollen die Arbeiter in dieser Phase die Produktionsmittel direkt besitzen oder soll der Staat die Kontrolle darüber haben?",
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
            "question_de": "Ist eine Partei als Avantgarde notwendig, um die Arbeiterklasse in der Revolution zu führen?",
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
            "question_de": "Sollte die Rolle dieser Avantgardepartei nur darin bestehen, aufzuklären, im Gegensatz zu einer Form der politischen Führung?",
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
            "question_de": "Sollte es eine Kulturrevolution geben, um reaktionäres Denken aus der Gesellschaft zu verbannen?",
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
            "question_de": "Sind Sie Anhänger der Drei-Welten-Theorie von Mao Zedong?",
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
            "question_de": "Sind Sie der Meinung, dass eine mehrgenerationale Phase des Staatskapitalismus notwendig ist, um die Wirtschaft auf den Sozialismus vorzubereiten?",
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
            "question_de": "Glauben Sie, dass der Sozialismus innerhalb einer einzigen Nation verwirklicht werden kann?",
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
            "question_de": "Sind Sie der Meinung, dass die Nation vor Allem im Vordergrund stehen sollte?",
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
            "question_de": "Glauben Sie, dass ein apokalyptisches Ereignis der beste Weg wäre, um den Sozialismus zu erreichen?",
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
            "question_de": "Sollte es eine revolutionäre Partei geben, die die Massen während und nach der Revolution unterrichtet?",
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
            "question_de": "Sollte die Gesellschaft durch Gewerkschaften organisiert werden?",
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
            "question_de": "Sollte die Wirtschaft zentral geplant werden?",
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
            "question_de": "Sind die Massenmedien Ihr Hauptproblem mit dem Kapitalismus?",
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
            "question_de": "Sollte die Gesellschaft Arbeitsgutscheine als Ausgleich für Arbeit anbieten?",
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
            "question_de": "Sollte Landwirtschaft praktiziert werden?",
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
            "question_de": "Sollte die Gesellschaft durch Gewerkschaften organisiert werden?",
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
            "question_de": "Sollte der Staat und/oder die Wirtschaft ausschließlich von Experten geleitet werden?",
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
            "question_de": "Soll der Sozialismus durch Elektoralismus oder durch revolutionäre Mittel erreicht werden?",
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
            "question_de": "Sollen die Arbeitnehmer direkt die Produktionsmittel besitzen oder soll der Staat die Kontrolle darüber haben?",
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
            "question_de": "Sollte die Klasse/Nation das Hauptthema der politischen Diskussion sein, oder sollte es das Dasein (das menschliche Wesen) sein?",
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
            "question_de": "Glauben Sie, dass die wirtschaftlichen Probleme der Arbeitnehmer auf das Konto jüdischer Bankiers gehen?",
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
            "question_de": "Sind Sie der Meinung, dass die Nation vor Allem im Vordergrund stehen sollte?",
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
            "question_de": "Sollte sich die Gesellschaft mehr auf die Landwirtschaft als auf die Industriearbeit konzentrieren?",
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
            "question_de": "Sollte die Gesellschaft durch Gewerkschaften organisiert werden?",
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