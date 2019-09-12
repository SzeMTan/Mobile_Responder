import { getFormattedDate, getGeolocation } from "./helpers";
module.exports = {
  globalUnit: "ACY3",
  darkState: true,
  jobs: [
    {
      title: "P036986219",
      priority: "P1",
      code: "3T Turnover",
      destination:
        "University of Auckland, Waterloo Quadrant, Auckland Central, Waitemata, Auckland, 1053, New Zealand / Aotearoa",
      date: getFormattedDate("02:35"),
      status: "PENDING",
      latlng: { latitude: -36.848671, longitude: 174.770107 },
      assigned: false,
      teamAssigned: "", 
      jobCloseCode: ""
    },
    {
      title: "P036986218",
      priority: "P2",
      code: "1C Car/person acting suspiciously",
      destination:
        "Science Centre (303), 38, Princes Street, Auckland Central, Waitemata, Auckland, 1010, New Zealand / Aotearoa",
      date: getFormattedDate("03:03"),
      status: "CLOSED",
      latlng: { latitude: -36.853943, longitude: 174.768265 },
      assigned: true,
      teamAssigned: "",
      jobCloseCode: ""
    },
    {
      title: "P036986217",
      priority: "P2",
      code: "3F Foot patrol",
      destination:
        "Wellesley Street East, Auckland Central, Waitemata, Auckland, 1010, New Zealand / Aotearoa",
      date: getFormattedDate("08:25"),
      status: "ASSIGNED",
      latlng: { latitude: -36.852638, longitude: 174.768265 },
      assigned: true,
      teamAssigned: "PBY",
      jobCloseCode: "",
    },
    {
      title: "P036546217",
      priority: "P2",
      code: "3H Hotel visit",
      destination:
        "Auckland Hebrew Congregation, 108, Greys Avenue, Auckland Central, Waitemata, Auckland, 1010, New Zealand / Aotearoa",
      date: getFormattedDate("10:24"),
      status: "CLOSED",
      latlng: { latitude: -36.855786, longitude: 174.759803 },
      assigned: true,
      teamAssigned: "ACY3",
      jobCloseCode: ""
    },
    {
      title: "P036986223",
      priority: "P2",
      code: "5F Family Harm",
      destination:
        "21, Dacre Street, Newton, Waitemata, Auckland, 1024, New Zealand / Aotearoa",
      date: getFormattedDate("11:40"),
      status: "CLOSED",
      latlng: { latitude: -36.861438, longitude: 174.758121 },
      assigned: true,
      teamAssigned: "CEPR22",
      jobCloseCode: ""
    }
  ],
  units: [
    {
      title: "PBY",
      code: "3C-CRIME PREVENTION ADVICE",
      destination:
        "5, Alten Road, Auckland Central, Waitemata, Auckland, 1053, New Zealand / Aotearoa",
      id: "P036986219",
      status: "ARRIVED",
      latlng: { latitude: -36.850581, longitude: 174.772951 }
    },
    {
      title: "ACY3",
      code: "3M-DIRECTED PATROL",
      destination:
        "University Of Auckland, Wynyard Street, Auckland Central, Waitemata, Auckland, 1053, New Zealand / Aotearoa",
      id: "P036986219",
      status: "ARRIVED",
      latlng: { latitude: -36.851958, longitude: 174.772524 }
    },
    {
      title: "ACY1",
      code: "3M-DIRECTED PATROL",
      destination:
        "Grafton Road, Auckland Central, Waitemata, Auckland, 1053, New Zealand / Aotearoa",
      id: "P036986219",
      status: "ARRIVED",
      latlng: { latitude: -36.854165, longitude: 174.770824 }
    }
  ],
  messages: [
    {
      sender: "Comms",
      message:
        "HEADLINE: Operator - female req police - line cutting in and out",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "female stating address",
      date: getFormattedDate(""),
      uri: false,
      pinned: false
    },
    {
      sender: "Comms",
      message: "said she was locked out",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    }
  ],
  mounted: false
};
