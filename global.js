import { getFormattedDate } from "./helpers"
module.exports = {
  darkState: false,
  jobs: [
    {
      title: "P036986219",
      priority: "P2",
      code: "3C-CRIME PREVENTION ADVICE",
      destination: "10 Waterloo Quadrant",
      date: getFormattedDate("02:35"),
      status: "PENDING",
      latlng: { latitude: -36.848671, longitude: 174.770107 },
      assigned: false
    },
    {
      title: "P036986218",
      priority: "P2",
      code: "3C-CRIME PREVENTION ADVICE",
      destination: "10 Waterloo Quadrant",
      date: getFormattedDate("03:03"),
      status: "CLOSED",
      latlng: { latitude: -36.853943, longitude: 174.768265 },
      assigned: false
    },
    {
      title: "P036986217",
      priority: "P2",
      code: "3C-CRIME PREVENTION ADVICE",
      destination: "10 Waterloo Quadrant",
      date: getFormattedDate("08:25"),
      status: "PENDING",
      latlng: { latitude: -36.852638, longitude: 174.768265 },
      assigned: true
    },
    {
      title: "P036546217",
      priority: "P2",
      code: "3C-CRIME PREVENTION ADVICE",
      destination: "10 Waterloo Quadrant",
      date: getFormattedDate("10:24"),
      status: "CLOSED",
      latlng: { latitude: -36.852638, longitude: 174.768265 },
      assigned: true
    },
    {
      title: "P036986223",
      priority: "P2",
      code: "3C-CRIME PREVENTION ADVICE",
      destination: "10 Waterloo Quadrant",
      date: getFormattedDate("11:40"),
      status: "CLOSED",
      latlng: { latitude: -36.852638, longitude: 174.768265 },
      assigned: true
    }
  ],
  units: [
    {
      title: "PBY",
      code: "3C-CRIME PREVENTION ADVICE",
      destination: "10 Waterloo Quadrant",
      id: "P036986219",
      status: "ARRIVED",
      latlng: { latitude: -36.850581, longitude: 174.772951 }
    },
    {
      title: "ACY3",
      code: "3M-DIRECTED PATROL",
      destination: "10 Waterloo Quadrant",
      id: "P036986219",
      status: "ARRIVED",
      latlng: { latitude: -36.851958, longitude: 174.772524 }
    },
    {
      title: "ACY1",
      code: "3M-DIRECTED PATROL",
      destination: "10 Waterloo Quadrant",
      id: "P036986219",
      status: "ARRIVED",
      latlng: { latitude: -36.854165, longitude: 174.770824 }
    }
  ],
  messages: [
    {
      sender: "d0750033",
      message: "HEADLINE: Operator - female req police - line cutting in and out",
      uri: false,
      pinned: false,
      date: getFormattedDate(""),
    },
    {
      sender: "d0750033",
      message: "female stating address",
      date: getFormattedDate(""),
      uri: false,
      pinned: false
    },
    {
      sender: "d0750033",
      message: "said she was locked out",
      uri: false,
      pinned: false,
      date: getFormattedDate(""),
    },
  ],
  mounted: false
};
