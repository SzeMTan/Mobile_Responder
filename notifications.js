import { Notifications, Permissions } from "expo";
import { Platform } from "react-native";
import { getFormattedDate } from "./helpers";

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const messages = [
  [
    {
      sender: "Comms",
      message:
        "Descr 1  M/C approx late 20s, blue jeans with no top on, tattoos on shoulder",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message:
        "Descr 2 M/C approx. late 20s, wearing striped long sleeve top with tan jeans and white shoes",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Both males appear to be 1K",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Neighbour told infmt this has been going on for 30 mins",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "1 male is lying flat on back, with blood on face",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Other male is leaning on male",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Both males are in the middle of the driveway near the street",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Males are talking to each other now",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Both males ae in the middle of the driveway near the street",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "1 males just lifted head, so is responsive",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "UK drugs",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Adv to call back if anything changes or escalates",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Unit 10/2",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "One in custody, ambos transporting the victim",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "CES11 advising crime",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Male is status 1",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Victim believed to be Ryan GRAHAM",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "PRN 123456",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message:
        "Offender back at Mount Wellington and is John SMITH D/L DJ817761",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    }
  ],
  [
    {
      sender: "Comms",
      message: "Infmt elderly and hard of hearing",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Male is WORETA/Teodros/Warin",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Ages 26 years",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Known to local Police",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "M/Ethiopian, 5ft 10, medium build",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Wearing grey wraparound jacket",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message:
        "Police officers have previously turned up to infmt’s address to speak to them about this male",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Known in area to ask for money",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Confirm still at infmt’s address",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Adv will get unit to attend as soon as possible",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "NIA confirms male trespassed from property on 14 August",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message:
        "Person Id: 975693945 Master PRN 5783665 (Real) WORETA/Teodros/Warin (Home address) 67 Dominion Road, Mount Roskill, Auckland (Cell) 021 8990373",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Infmt on line",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Male still there now",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Male getting agitated",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Walking up and down",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Upgraded as trespassed male is still present",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Male is still there, infmt has obs",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Adv to call back if escalates",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Infmt back online",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Infmt stating male is still walking around on pathway",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Adv Police will attend when able",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Infmt back online",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message:
        "Infmt stating male currently posing risk of harm to self or others",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Adv to call back if situation escalates",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Hears male voice arguing",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Infmt still requesting Police",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Upgraded to P1 as male still present and becoming agitated",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message:
        "Male currently outside still talking to infmt’s friend who has come over",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "CT notes mental health alerts",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Adv Police will be there as soon as possible",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "Finding a unit",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    },
    {
      sender: "Comms",
      message: "AVI11 advised no issues",
      uri: false,
      pinned: false,
      date: getFormattedDate("")
    }
  ],
  [],
  [
    {
      sender: "Comms",
      message: "Nil alcohol or drugs",
      uri: false,
      pinned: false
    },
    {
      sender: "Comms",
      message: "3 adults one child",
      uri: false,
      pinned: false
    },
    {
      sender: "Comms",
      message: "Nil access to vehicle",
      uri: false,
      pinned: false
    },
    {
      sender: "Comms",
      message:
        "Infmt has served him with a trespass and will now drop him off at his parents – UK address",
      uri: false,
      pinned: false
    },
    {
      sender: "Comms",
      message: "Infmt will RTS with the trespass notice and do 5F report",
      uri: false,
      pinned: false
    },
    {
      sender: "Comms",
      message:
        "Ongoing issues with male forcing himself into her house to see the child",
      uri: false,
      pinned: false
    },
    {
      sender: "Comms",
      message: "Has been verbally abusive in past",
      uri: false,
      pinned: false
    },
    {
      sender: "Comms",
      message: "Infmt doesn’t require attendance now",
      uri: false,
      pinned: false
    },
    {
      sender: "Comms",
      message: "Advised to call back on 111 if anything escalates or changes",
      uri: false,
      pinned: false
    },
    {
      sender: "Comms",
      message: "Infmt will RTS",
      uri: false,
      pinned: false
    }
  ],
  []
];

async function sendSingleNotification(message) {
  await sleep(Math.random()*1000*Math.random()*100);
  let notificationId = await Notifications.presentLocalNotificationAsync({
    title: "New messages",
    body: message
  });
}

async function startSendingNotification(f, index) {
  if (Platform.OS != "ios") {
    Notifications.dismissAllNotificationsAsync();
    Notifications.cancelAllScheduledNotificationsAsync();
  }

  for (let i = 0; i < messages[index].length; i++) {
    await sendSingleNotification(
      messages[index][i].sender + ": " + messages[index][i].message
    );
    formattedDate = getFormattedDate("");
    messages[index][i].date = formattedDate;
    f(messages[index][i]);
  }
}

export async function askPermissions(f, index) {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );

  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus === "granted") {
    startSendingNotification(f, index);
  }
}
