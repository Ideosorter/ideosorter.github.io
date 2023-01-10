export default {
    private_property: {
        question: i18n.question_private_property,
        answers: [
            "yes",
            "no"
        ],
        results: {},
        nextquestion: {
            "yes": "theo",
            "no": "market"
        }
    },
    theo: {
        question: i18n.question_theo,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "theocracy"
        },
        nextquestion: {
            "no": "distributism"
        }
    },
    distributism: {
        question: i18n.question_distributism,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "distributism"
        },
        nextquestion: {
            "no": "conditional_land_ownership"
        }
    },
    conditional_land_ownership: {
        question: i18n.question_conditional_land_ownership,
        answers: [
            "conditional",
            "unconditional"
        ],
        results: {},
        nextquestion: {
            "conditional": "scope_of_government2",
            "unconditional": "scope_of_government1"
        }
    },
    scope_of_government1: {
        question: i18n.question_scope_of_government1,
        answers: [
            "yes",
            "no",
            "nostate"
        ],
        results: {},
        nextquestion: {
            "yes": "watchman_state",
            "no": "tradvals",
            "nostate": "counter_economics"
        }
    },
    watchman_state: {
        question: i18n.question_watchman_state,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "minarch"
        },
        nextquestion: {
            "no": "welfare"
        }
    },
    welfare: {
        question: i18n.question_welfare,
        answers: [
            "yes",
            "no"
        ],
        results: {},
        nextquestion: {
            "yes": "welfare_needed",
            "no": "limited_gov_tradvals"
        }
    },
    welfare_needed: {
        question: i18n.question_welfare_needed,
        answers: [
            "welfare",
            "noneed"
        ],
        results: {
            "welfare": "socbert",
            "noneed": "bhl"
        },
        nextquestion: {}
    },
    limited_gov_tradvals: {
        question: i18n.question_limited_gov_tradvals,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "paleobert",
            "no": "libert"
        },
        nextquestion: {}
    },
    tradvals: {
        question: i18n.question_tradvals,
        answers: [
            "yes",
            "no"
        ],
        results: {},
        nextquestion: {
            "yes": "tradauthstate",
            "no": "govbasicneeds"
        }
    },
    tradauthstate: {
        question: i18n.question_tradauthstate,
        answers: [
            "yes",
            "no"
        ],
        results: {},
        nextquestion: {
            "yes": "corp_cap",
            "no": "strong_safety_net"
        }
    },
    corp_cap: {
        question: i18n.question_corp_cap,
        answers: [
            "capitalism",
            "corporatism"
        ],
        results: {},
        nextquestion: {
            "capitalism": "markreg",
            "corporatism": "unions_vs_state"
        }
    },
    markreg: {
        question: i18n.question_markreg,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "socnat",
            "no": "nazcap"
        },
        nextquestion: {}
    },
    unions_vs_state: {
        question: i18n.question_unions_vs_state,
        answers: [
            "unions",
            "state"
        ],
        results: {
            "unions": "natsynd"
        },
        nextquestion: {
            "state": "clergygov"
        }
    },
    clergygov: {
        question: i18n.question_clergygov,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "clerfash"
        },
        nextquestion: {
            "no": "racesuperior"
        }
    },
    racesuperior: {
        question: i18n.question_racesuperior,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "nazi",
            "no": "fascism"
        },
        nextquestion: {}
    },
    strong_safety_net: {
        question: i18n.question_strong_safety_net,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "patcon"
        },
        nextquestion: {
            "no": "intervgov"
        }
    },
    intervgov: {
        question: i18n.question_intervgov,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "neocon",
            "no": "paleocon"
        },
        nextquestion: {}
    },
    govbasicneeds: {
        question: i18n.question_govbasicneeds,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "socdem"
        },
        nextquestion: {
            "no": "econreg"
        }
    },
    econreg: {
        question: i18n.question_econreg,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "lib",
            "no": "neolib"
        },
        nextquestion: {}
    },
    counter_economics: {
        question: i18n.question_counter_economics,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "agorism"
        },
        nextquestion: {
            "no": "coop_ancap"
        }
    },
    coop_ancap: {
        question: i18n.question_coop_ancap,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "leftroth",
            "no": "ancap"
        },
        nextquestion: {}
    },
    scope_of_government2: {
        question: i18n.question_scope_of_government2,
        answers: [
            "yes",
            "no",
            "nostate"
        ],
        results: {
            "yes": "geolib",
            "nostate": "angeo"
        },
        nextquestion: {
            "no": "landwelfare"
        }
    },
    landwelfare: {
        question: i18n.question_landwelfare,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "socgeo",
            "no": "georgism"
        },
        nextquestion: {}
    },
    market: {
        question: i18n.question_market,
        answers: [
            "yes",
            "no"
        ],
        results: {},
        nextquestion: {
            "yes": "statesoc",
            "no": "marx"
        }
    },
    statesoc: {
        question: i18n.question_statesoc,
        answers: [
            "yes",
            "no",
            "nostate"
        ],
        results: {
            "yes": "tito",
            "no": "marksoc"
        },
        nextquestion: {
            "nostate": "mutualaid"
        }
    },
    mutualaid: {
        question: i18n.question_mutualaid,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "no": "lwma"
        },
        nextquestion: {
            "yes": "racism"
        }
    },
    racism: {
        question: i18n.question_racism,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "natan",
            "no": "mutualism"
        },
        nextquestion: {}
    },
    marx: {
        question: i18n.question_marx,
        answers: [
            "yes",
            "no"
        ],
        results: {},
        nextquestion: {
            "yes": "transstate",
            "no": "techno"
        }
    },
    transstate: {
        question: i18n.question_transstate,
        answers: [
            "yes",
            "no"
        ],
        results: {},
        nextquestion: {
            "yes": "soc_directstate1",
            "no": "labvouch"
        }
    },
    soc_directstate1: {
        question: i18n.question_soc_directstate1,
        answers: [
            "workers",
            "state"
        ],
        results: {},
        nextquestion: {
            "workers": "rev_ed",
            "state": "vanguard"
        }
    },
    vanguard: {
        question: i18n.question_vanguard,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "no": "orthmarx"
        },
        nextquestion: {
            "yes": "vanguard_ed"
        }
    },
    vanguard_ed: {
        question: i18n.question_vanguard_ed,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "castro"
        },
        nextquestion: {
            "no": "cultural_revolution"
        }
    },
    cultural_revolution: {
        question: i18n.question_cultural_revolution,
        answers: [
            "yes",
            "no"
        ],
        results: {},
        nextquestion: {
            "yes": "3worlds",
            "no": "nep"
        }
    },
    "3worlds": {
        question: i18n.question_3worlds,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "mao",
            "no": "mlm"
        },
        nextquestion: {

        }
    },
    nep: {
        question: i18n.question_nep,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "deng",

        },
        nextquestion: {
            "no": "socinone"
        }
    },
    socinone: {
        question: i18n.question_socinone,
        answers: [
            "yes",
            "no"
        ],
        results: {},
        nextquestion: {
            "yes": "aboveall1",
            "no": "posadism"
        }
    },
    aboveall1: {
        question: i18n.question_aboveall1,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "nazbol",
            "no": "ml"
        },
        nextquestion: {}
    },
    posadism: {
        question: i18n.question_posadism,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "posadism",
            "no": "trot"
        },
        nextquestion: {}
    },
    rev_ed: {
        question: i18n.question_rev_ed,
        answers: [
            "yes",
            "no"
        ],
        results: {},
        nextquestion: {
            "yes": "synd1",
            "no": "mediabad"
        }
    },
    synd1: {
        question: i18n.question_synd1,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "deleon"
        },
        nextquestion: {
            "no": "centplan"
        }
    },
    centplan: {
        question: i18n.question_centplan,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "bordiga",
            "no": "luxem"
        },
        nextquestion: {}
    },
    mediabad: {
        question: i18n.question_mediabad,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "situationist",
            "no": "councom"
        },
        nextquestion: {}
    },
    labvouch: {
        question: i18n.question_labvouch,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "ancol"
        },
        nextquestion: {
            "no": "agriculture"
        }
    },
    agriculture: {
        question: i18n.question_agriculture,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "no": "anprim"
        },
        nextquestion: {
            "yes": "synd2"
        }
    },
    synd2: {
        question: i18n.question_synd2,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "ansynd",
            "no": "ancom"
        },
        nextquestion: {}
    },
    techno: {
        question: i18n.question_techno,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "technocracy"
        },
        nextquestion: {
            "no": "electsoc"
        }
    },
    electsoc: {
        question: i18n.question_electsoc,
        answers: [
            "electoralism",
            "revolution"
        ],
        results: {
            "electoralism": "demsoc"
        },
        nextquestion: {
            "revolution": "soc_directstate2"
        }
    },
    soc_directstate2: {
        question: i18n.question_soc_directstate2,
        answers: [
            "workers",
            "state"
        ],
        results: {},
        nextquestion: {
            "workers": "agriculture_industrial",
            "state": "esobullshit"
        }
    },
    esobullshit: {
        question: i18n.question_esobullshit,
        answers: [
            "dasein",
            "classnation"
        ],
        results: {
            "dasein": "4theory"
        },
        nextquestion: {
            "classnation": "bankjews"
        }
    },
    bankjews: {
        question: i18n.question_bankjews,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "strasser"
        },
        nextquestion: {
            "no": "aboveall2"
        }
    },
    aboveall2: {
        question: i18n.question_aboveall2,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "nazbol",
            "no": "statesoc"
        },
        nextquestion: {}
    },
    agriculture_industrial: {
        question: i18n.question_agriculture_industrial,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "agsoc"
        },
        nextquestion: {
            "no": "synd3"
        }
    },
    synd3: {
        question: i18n.question_synd3,
        answers: [
            "yes",
            "no"
        ],
        results: {
            "yes": "synd",
            "no": "libsoc"
        },
        nextquestion: {}
    }
}