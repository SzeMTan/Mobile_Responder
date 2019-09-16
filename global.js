import { getFormattedDate, getGeolocation } from "./helpers";
module.exports = {
  globalUnit: "ACY3",
  darkState: true,
  jobs: [
    {
      title: "P036986219",
      priority: "P1",
      code: "3530 - Disorder",
      destination:
        "University of Auckland, Waterloo Quadrant, Auckland Central, Waitemata, Auckland, 1053, New Zealand / Aotearoa",
      date: getFormattedDate("02:35"),
      status: "PENDING",
      latlng: { latitude: -36.848671, longitude: 174.770107 },
      assigned: false,
      teamAssigned: "", 
      jobCloseCode: "",
      headline: "2 UK males physically fighting on street – UK WPNS"
    },
    {
      title: "P036986218",
      priority: "P1",
      code: "6110 - Trespass",
      destination:
        "Science Centre (303), 38, Princes Street, Auckland Central, Waitemata, Auckland, 1010, New Zealand / Aotearoa",
      date: getFormattedDate("03:03"),
      status: "CLOSED",
      latlng: { latitude: -36.853943, longitude: 174.768265 },
      assigned: true,
      teamAssigned: "PBY",
      headline:
        "Known homeless male sitting on doorstep – asking for money – weap UK",
      jobCloseCode: "K2"
    },
    {
      title: "P036986217",
      priority: "P2",
      code: "1S - Sudden Death",
      destination:
        "Wellesley Street East, Auckland Central, Waitemata, Auckland, 1010, New Zealand / Aotearoa",
      date: getFormattedDate("08:25"),
      status: "ASSIGNED",
      latlng: { latitude: -36.852638, longitude: 174.768265 },
      assigned: true,
      headline: "Infmt has found 1S daughter",
      teamAssigned: "PBY",
      jobCloseCode: "",
    },
    {
      title: "P036546217",
      priority: "P2",
      code: "5F Family Harm",
      destination:
        "Auckland Hebrew Congregation, 108, Greys Avenue, Auckland Central, Waitemata, Auckland, 1010, New Zealand / Aotearoa",
      date: getFormattedDate("10:24"),
      status: "CLOSED",
      latlng: { latitude: -36.855786, longitude: 174.759803 },
      assigned: true,
      headline: "Ex was refusing to leave nil weapons",
      teamAssigned: "ACY3",
      jobCloseCode: "K3"
    },
    {
      title: "P036986223",
      priority: "P2",
      code: "1V - Vehicle collision",
      destination:
        "21, Dacre Street, Newton, Waitemata, Auckland, 1024, New Zealand / Aotearoa",
      date: getFormattedDate("11:40"),
      status: "CLOSED",
      headline: "Orange 2 – Traffic/Transportation Incident",
      latlng: { latitude: -36.861438, longitude: 174.758121 },
      assigned: true,
      teamAssigned: "CEPR22",
      jobCloseCode: "K4"
    }
  ],
  units: [
    {
      title: "CEW23",
      names: "Emil Leyendecker, Elva Cumpston",
      userids: "emi391, elv524",
      title: "CEW23",
      code: "1V Vehicle collision",
      destination:
        "146 Trafalgar Street, Onehunga, Auckland",
      id: "P036986219",
      status: "DISPATCHED",
      numberPlate: "GYC892 - marked car",
      latlng: { latitude: -36.850581, longitude: 174.772951 },
      equipment: "2x Glock pistols, \n2x Taser, \nTDD(Tire Deflation Device), \nfirst aid kit"
    },    {
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
      equipment: "2x Glock pistols, \n2x Bushmaster rifles, \nTDD(Tire Deflation Device), \nfirst aid kit"
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
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message: "Currently at doorstep",
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
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message: "Infmt’s husband has said daughter is “completely rigid”",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message: "Daughter is CRIGHTON/Debbie – 23 years",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message: "Infmt has her husband and 8 yr old daughter with her",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message: "Event copied to ambulance via intercad",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message: "Ambo event 8788-1-2019/09/14-POL linked",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message:
          "Ambo update: Problem changed to: Purple – cardiac arrest/respiratory arrest/death",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message:
          "Caller name = CRIGHTON/Joan, caller address = 46 Mountain Road, Otara, caller phone = 09 377 8076",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message:
          "Ambo update: Problem changed to Red – cardiac arrest/respiratory arrest/death",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message: "AMB2POL: PT deceased",
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
        date: getFormattedDate("")
      },
      {
        sender: "Comms",
        message: "Still there at 14 Princes Street",
        date: getFormattedDate(""),
        uri: false,
        pinned: false
      },
      {
        sender: "Comms",
        message: "Ex partner is THU/Tatai DOB 06051993",
        uri: false,
        pinned: false,
        date: getFormattedDate("")
      }
    ],
    [
      {
        sender: "Comms",
        message: "Car v parked car – dominoes car – driver angry",
        uri: false,
        pinned: false
      },
      {
        sender: "Comms",
        message: "Ambo event created 0302-1-2019/09/14-POL",
        uri: false,
        pinned: false
      }
    ]
  ],
  mounted: false
};
