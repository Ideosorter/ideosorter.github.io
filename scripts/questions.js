export default {
  "private_property": {
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
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "theocracy"
    },
    "nextquestion": {
      "no": "distributism"
    }
  },
  "distributism": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "distributism"
    },
    "nextquestion": {
      "no": "conditional_land_ownership"
    }
  },
  "conditional_land_ownership": {
    "answers": [
      "conditional",
      "unconditional"
    ],
    "results": {},
    "nextquestion": {
      "conditional": "scope_of_government2",
      "unconditional": "scope_of_government1"
    }
  },
  "scope_of_government1": {
    "answers": [
      "yes",
      "no",
      "nostate"
    ],
    "results": {},
    "nextquestion": {
      "yes": "watchman_state",
      "no": "tradvals",
      "nostate": "counter_economics"
    }
  },
  "watchman_state": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "minarch"
    },
    "nextquestion": {
      "no": "welfare"
    }
  },
  "welfare": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {},
    "nextquestion": {
      "yes": "welfare_needed",
      "no": "limited_gov_tradvals"
    }
  },
  "welfare_needed": {
    "answers": [
      "welfare",
      "noneed"
    ],
    "results": {
      "welfare": "socbert",
      "noneed": "bhl"
    },
    "nextquestion": {}
  },
  "limited_gov_tradvals": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "paleobert",
      "no": "libert"
    },
    "nextquestion": {}
  },
  "tradvals": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {},
    "nextquestion": {
      "yes": "tradauthstate",
      "no": "govbasicneeds"
    }
  },
  "tradauthstate": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {},
    "nextquestion": {
      "yes": "corp_cap",
      "no": "strong_safety_net"
    }
  },
  "corp_cap": {
    "answers": [
      "capitalism",
      "corporatism"
    ],
    "results": {},
    "nextquestion": {
      "capitalism": "markreg",
      "corporatism": "unions_vs_state"
    }
  },
  "markreg": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "socnat",
      "no": "nazcap"
    },
    "nextquestion": {}
  },
  "unions_vs_state": {
    "answers": [
      "unions",
      "state"
    ],
    "results": {
      "unions": "natsynd"
    },
    "nextquestion": {
      "state": "clergygov"
    }
  },
  "clergygov": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "clerfash"
    },
    "nextquestion": {
      "no": "racesuperior"
    }
  },
  "racesuperior": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "nazi",
      "no": "fascism"
    },
    "nextquestion": {}
  },
  "strong_safety_net": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "patcon"
    },
    "nextquestion": {
      "no": "intervgov"
    }
  },
  "intervgov": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "neocon",
      "no": "paleocon"
    },
    "nextquestion": {}
  },
  "govbasicneeds": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "socdem"
    },
    "nextquestion": {
      "no": "econreg"
    }
  },
  "econreg": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "lib",
      "no": "neolib"
    },
    "nextquestion": {}
  },
  "counter_economics": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "agorism"
    },
    "nextquestion": {
      "no": "coop_ancap"
    }
  },
  "coop_ancap": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "leftroth",
      "no": "ancap"
    },
    "nextquestion": {}
  },
  "scope_of_government2": {
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
      "no": "landwelfare"
    }
  },
  "landwelfare": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "socgeo",
      "no": "georgism"
    },
    "nextquestion": {}
  },
  "market": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {},
    "nextquestion": {
      "yes": "statesoc",
      "no": "marx"
    }
  },
  "statesoc": {
    "answers": [
      "yes",
      "no",
      "nostate"
    ],
    "results": {
      "yes": "tito",
      "no": "marksoc"
    },
    "nextquestion": {
      "nostate": "mutualaid"
    }
  },
  "mutualaid": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "no": "lwma"
    },
    "nextquestion": {
      "yes": "racism"
    }
  },
  "racism": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "natan",
      "no": "mutualism"
    },
    "nextquestion": {}
  },
  "marx": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {},
    "nextquestion": {
      "yes": "transstate",
      "no": "techno"
    }
  },
  "transstate": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {},
    "nextquestion": {
      "yes": "soc_directstate1",
      "no": "labvouch"
    }
  },
  "soc_directstate1": {
    "answers": [
      "workers",
      "state"
    ],
    "results": {},
    "nextquestion": {
      "workers": "rev_ed",
      "state": "vanguard"
    }
  },
  "vanguard": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "no": "orthmarx"
    },
    "nextquestion": {
      "yes": "vanguard_ed"
    }
  },
  "vanguard_ed": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "castro"
    },
    "nextquestion": {
      "no": "cultural_revolution"
    }
  },
  "cultural_revolution": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {},
    "nextquestion": {
      "yes": "3worlds",
      "no": "socinone"
    }
  },
  "3worlds": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "no": "mlm"
    },
    "nextquestion": {
      "yes": "nep"
    }
  },
  "nep": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "deng",
      "no": "mao"
    },
    "nextquestion": {}
  },
  "socinone": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {},
    "nextquestion": {
      "yes": "aboveall1",
      "no": "posadism"
    }
  },
  "aboveall1": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "nazbol",
      "no": "ml"
    },
    "nextquestion": {}
  },
  "posadism": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "posadism",
      "no": "trot"
    },
    "nextquestion": {}
  },
  "rev_ed": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {},
    "nextquestion": {
      "yes": "synd1",
      "no": "mediabad"
    }
  },
  "synd1": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "deleon"
    },
    "nextquestion": {
      "no": "centplan"
    }
  },
  "centplan": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "bordiga",
      "no": "luxem"
    },
    "nextquestion": {}
  },
  "mediabad": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "situationist",
      "no": "councom"
    },
    "nextquestion": {}
  },
  "labvouch": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "ancol"
    },
    "nextquestion": {
      "no": "agriculture"
    }
  },
  "agriculture": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "no": "anprim"
    },
    "nextquestion": {
      "yes": "synd2"
    }
  },
  "synd2": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "ansynd",
      "no": "ancom"
    },
    "nextquestion": {}
  },
  "techno": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "technocracy"
    },
    "nextquestion": {
      "no": "electsoc"
    }
  },
  "electsoc": {
    "answers": [
      "electoralism",
      "revolution"
    ],
    "results": {
      "electoralism": "demsoc"
    },
    "nextquestion": {
      "revolution": "soc_directstate2"
    }
  },
  "soc_directstate2": {
    "answers": [
      "workers",
      "state"
    ],
    "results": {},
    "nextquestion": {
      "workers": "agriculture_industrial",
      "state": "esobullshit"
    }
  },
  "esobullshit": {
    "answers": [
      "dasein",
      "classnation"
    ],
    "results": {
      "dasein": "4theory"
    },
    "nextquestion": {
      "classnation": "bankjews"
    }
  },
  "bankjews": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "strasser"
    },
    "nextquestion": {
      "no": "aboveall2"
    }
  },
  "aboveall2": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "nazbol",
      "no": "statesoc"
    },
    "nextquestion": {}
  },
  "agriculture_industrial": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "agsoc"
    },
    "nextquestion": {
      "no": "synd3"
    }
  },
  "synd3": {
    "answers": [
      "yes",
      "no"
    ],
    "results": {
      "yes": "synd",
      "no": "libsoc"
    },
    "nextquestion": {}
  }
}
