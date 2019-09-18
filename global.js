import { getFormattedDate, getGeolocation } from "./helpers";
module.exports = {
  globalUnit: "ACY3",
  darkState: true,
  jobs: [
    {
      title: "P036986219",
      priority: "P1",
      code: "3530 - Disorder",
      destination: "Amy Street, Ellerslie, Auckland",
      date: getFormattedDate(""),
      status: "PENDING",
      latlng: { latitude: -36.848671, longitude: 174.770107 },
      assigned: false,
      teamAssigned: "",
      jobCloseCode: "",
      headline: "2 UK males physically fighting on street – UK WPNS",
      cross: { x1: "Pukerangi Cr", x2: "Elwood Pl" },
      times: {
        dispatched: "",
        firstArrival: "",
        closed: ""
      },
      caller: {
        source: "Phone",
        name: "BROWN/Vicky",
        address: "33A Amy Street, Ellerslie, Auckland",
        number: "09 525 6009"
      }
    },
    {
      title: "P036986218",
      priority: "P1",
      code: "6110 - Trespass",
      destination: "25 London Road, Mount Eden, Auckland",
      date: getFormattedDate("03:03"),
      status: "ASSIGNED",
      latlng: { latitude: -36.853943, longitude: 174.768265 },
      assigned: true,
      teamAssigned: "PBY",
      headline:
        "Known homeless male sitting on doorstep – asking for money – weap UK",
      jobCloseCode: "",
      caller: {
        source: "ANI/ALI",
        name: "LOMAX/Isaac",
        address: "25 London Road, Mount Eden",
        number: "09 585 2678"
      },
      times: {
        dispatched: getFormattedDate("03:34"),
        firstArrival: getFormattedDate("04:01"),
        closed: ""
      },
      cross: { x1: "Dominion Rd", x2: "Eldon Rd" }
    },
    {
      title: "P036986217",
      priority: "P2",
      code: "1S - Sudden Death",
      destination: "46 Mountain Road, Otara, Auckland",
      date: getFormattedDate("08:25"),
      status: "CLOSED",
      latlng: { latitude: -36.852638, longitude: 174.768265 },
      assigned: true,
      headline: "Infmt has found his daughter",
      teamAssigned: "PBY",
      jobCloseCode: "K3",
      caller: {
        source: "ANI/ALI",
        name: "CRIGHTON/Joan",
        address: "46 Mountain Road, Otara, Auckland",
        number: "09 377 8076"
      },
      times: {
        dispatched: getFormattedDate("09:01"),
        firstArrival: getFormattedDate("09:13"),
        closed: getFormattedDate("10:30")
      },
      cross: { x1: "Waterview Cr", x2: "Robert St" }
    },
    {
      title: "P036546217",
      priority: "P2",
      code: "5F Family Harm",
      destination: "14 Princes Street, Onehunga, Auckland",
      date: getFormattedDate("10:24"),
      status: "ASSIGNED",
      latlng: { latitude: -36.855786, longitude: 174.759803 },
      assigned: true,
      headline: "Ex was refusing to leave nil weapons",
      teamAssigned: "ACY3",
      jobCloseCode: "",
      caller: {
        source: "ANI/ALI",
        name: "THU/Eli",
        address: "14 Princes Street, Onehunga, Auckland",
        number: "022 87776 556"
      },
      times: {
        dispatched: getFormattedDate("11:01"),
        firstArrival: "",
        closed: ""
      },
      cross: { x1: "Hill St", x2: "Gloucester Park Rd" }
    },
    {
      title: "P036986223",
      priority: "P2",
      code: "1V - Vehicle collision",
      destination: "146 Trafalgar Street, Onehunga, Auckland",
      date: getFormattedDate("02:35"),
      status: "CLOSED",
      headline: "Orange 2 – Traffic/Transportation Incident",
      latlng: { latitude: -36.861438, longitude: 174.758121 },
      assigned: true,
      teamAssigned: "CEPR22",
      jobCloseCode: "K4",
      caller: {
        source: "AMB",
        name: "N/A",
        address: "N/A",
        number: "021 1135 8760"
      },
      times: {
        dispatched: getFormattedDate("02:40"),
        firstArrival: getFormattedDate("02:40"),
        closed: getFormattedDate("02:45")
      },
      cross: { x1: "Selwyn St", x2: "Onehunga Mall" }
    }
  ],
  units: [
    {
      title: "CEW23",
      names: "Emil Leyendecker, Elva Cumpston",
      userids: "emi391, elv524",
      title: "CEW23",
      code: "1V Vehicle collision",
      destination: "146 Trafalgar Street, Onehunga, Auckland",
      id: "P036986219",
      status: "DISPATCHED",
      numberPlate: "GYC892 - marked car",
      latlng: { latitude: -36.850581, longitude: 174.772951 },
      equipment:
        "2x Glock pistols, \n2x Taser, \nTDD(Tire Deflation Device), \nfirst aid kit"
    },
    {
      title: "PBY",
      names: "Randell Gammons, Angelic Mcaleer",
      userids: "ran753, ang028",
      code: "3C-CRIME PREVENTION ADVICE",
      destination:
        "5, Alten Road, Auckland Central, Waitemata, Auckland, 1053, New Zealand / Aotearoa",
      id: "P036986219",
      status: "UNASSIGNED",
      numberPlate: "GNN593 - marked car",
      latlng: { latitude: -36.850581, longitude: 174.772951 },
      equipment:
        "2x Glock pistols, \n2x Bushmaster rifles, \nTDD(Tire Deflation Device), \nfirst aid kit"
    },
    {
      title: "ACY3",
      names: "Sammy Munford, Garry Grajeda",
      userids: "sam012, gar357",
      code: "3M-DIRECTED PATROL",
      destination:
        "University Of Auckland, Wynyard Street, Auckland Central, Waitemata, Auckland, 1053, New Zealand / Aotearoa",
      id: "P036986219",
      status: "DISPATCHED",
      numberPlate: "KWH692 - marked car",
      latlng: { latitude: -36.851958, longitude: 174.772524 },
      equipment: "4x road cones, \nfirst aid kit"
    },
    {
      title: "ACY1",
      names: "Cassidy Law, Vernita Wason",
      userids: "cas035, ver829",
      code: "3M-DIRECTED PATROL",
      destination:
        "Grafton Road, Auckland Central, Waitemata, Auckland, 1053, New Zealand / Aotearoa",
      id: "P036986219",
      status: "DISPATCHED",
      numberPlate: "CYJ472 - marked car",
      latlng: { latitude: -36.854165, longitude: 174.770824 },
      equipment: "2x Glock pistols, \nfirst aid kit"
    }
  ],
  messages: [
    [
      {
        sender: "Comms",
        message: "DN Nil",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message: "CES34 advised",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message: "2 males currently sitting outside 33A Amy Street",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message: "Infmt standing across the road outside house",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      }
    ],
    [
      {
        sender: "Comms",
        message: "TD Nil",
        uri: false,
        pinned: false,
        date: getFormattedDate("03:03")
      },
      {
        sender: "Comms",
        message: "Currently at doorstep",
        uri: false,
        pinned: false,
        date: getFormattedDate("03:05")
      }
    ],
    [
      {
        sender: "Comms",
        message: "TD Nil",
        uri: false,
        pinned: false,
        date: getFormattedDate("08:25")
      },
      {
        sender: "Comms",
        message: "Infmt’s husband has said daughter is “completely rigid”",
        uri: false,
        pinned: false,
        date: getFormattedDate("08:30")
      },
      {
        sender: "Comms",
        message: "Daughter is CRIGHTON/Debbie – 23 years",
        uri: false,
        pinned: false,
        date: getFormattedDate("09:09")
      },
      {
        sender: "Comms",
        message: "Infmt has her husband and 8 yr old daughter with her",
        uri: false,
        pinned: false,
        date: getFormattedDate("09:10")
      },
      {
        sender: "Comms",
        message: "Event copied to ambulance via intercad",
        uri: false,
        pinned: false,
        date: getFormattedDate("09:40")
      },
      {
        sender: "Comms",
        message: "Ambo event 8788-1-2019/09/14-POL linked",
        uri: false,
        pinned: false,
        date: getFormattedDate("10:19")
      },
      {
        sender: "Comms",
        message:
          "Ambo update: Problem changed to: Purple – cardiac arrest/respiratory arrest/death",
        uri: false,
        pinned: false,
        date: getFormattedDate("10:19")
      },
      {
        sender: "Comms",
        message:
          "Caller name = CRIGHTON/Joan, caller address = 46 Mountain Road, Otara, caller phone = 09 377 8076",
        uri: false,
        pinned: false,
        date: getFormattedDate("10:20")
      },
      {
        sender: "Comms",
        message:
          "Ambo update: Problem changed to Red – cardiac arrest/respiratory arrest/death",
        uri: false,
        pinned: false,
        date: getFormattedDate("10:25")
      },
      {
        sender: "Comms",
        message: "AMB2POL: PT deceased",
        uri: false,
        pinned: false,
        date: getFormattedDate("10:30")
      }
    ],
    [
      {
        sender: "Comms",
        message: "TD Nil",
        uri: false,
        pinned: false,
        date: getFormattedDate("11:05")
      },
      {
        sender: "Comms",
        message: "Still there at 14 Princes Street",
        date: getFormattedDate("11:20"),
        uri: false,
        pinned: false
      },
      {
        sender: "Comms",
        message: "Ex partner is THU/Tatai DOB 06051993",
        uri: false,
        pinned: false,
        date: getFormattedDate("11:21")
      }
    ],
    [
      {
        sender: "Comms",
        message: "Car v parked car – dominoes car – driver angry",
        uri: false,
        pinned: false,
        date: getFormattedDate("02:35")
      },
      {
        sender: "Comms",
        message: "Ambo event created 0302-1-2019/09/14-POL",
        uri: false,
        pinned: false,
        date: getFormattedDate("02:35")
      },
      {
        sender: "Comms",
        message: "Location = 146 Trafalgar Street, Onehunga, Auckland",
        uri: false,
        pinned: false,
        date: getFormattedDate("02:35")
      },
      {
        sender: "Comms",
        message:
          "AMBO update: Caller name = Melanie, Caller phone = 021 1135 8760",
        uri: false,
        pinned: false,
        date: getFormattedDate("02:36")
      },
      {
        sender: "Comms",
        message:
          "Reg no. HHK712, make/model: Toyota Ractis hatchback, colour silver, year 2005, current owner PETERSON/Ben DW889982, male, 05/10/1987, 450 Great South Road, Greenlane, Auckland, licence expiry 01/03/2020, WOD due 04/05/20, VIN 564237534543",
        uri: false,
        pinned: false,
        date: getFormattedDate("02:37")
      },
      {
        sender: "Comms",
        message: "11:07hrs CHX organising tow",
        uri: false,
        pinned: false,
        date: getFormattedDate("02:37")
      },
      {
        sender: "Comms",
        message: "A1 Onehunga Towing Ltd – refused",
        uri: false,
        pinned: false,
        date: getFormattedDate("02:39")
      },
      {
        sender: "Comms",
        message: "Crystal Panelbeaters Ltd – accept",
        uri: false,
        pinned: false,
        date: getFormattedDate("02:40")
      },
      {
        sender: "Comms",
        message: "Supercity towing ETA 20-30 mins",
        uri: false,
        pinned: false,
        date: getFormattedDate("02:42")
      },
      {
        sender: "Comms",
        message: "Unit adv",
        uri: false,
        pinned: false,
        date: getFormattedDate("02:43")
      },
      {
        sender: "Comms",
        message:
          "Tow company advised that vehicle is blocking the road currently – will attend as soon as possible within 20-30 mins at most",
        uri: false,
        pinned: false,
        date: getFormattedDate("02:45")
      }
    ]
  ],
  mounted: [false, false, false, false, false],
  onDuty: [
    {
      prn: "1234567",
      name: "SMITH, John",
      licence: "DJ817761",
      age: '26',
      address: '501 North Highland Avenue',
      dob: '27/04/1993',
      phone:'0211234560'
    },
    {
      prn: "5783665",
      name: "WICK, John",
      licence: "DP654321",
      age: '32',
      address: '67 Dominion Road, Mount Roskill',
      dob: '01/08/1987',
      phone: '021 8990373'

    },

  ]
};
