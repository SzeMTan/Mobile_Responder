import { Notifications, Permissions } from "expo";
import { Platform } from "react-native";
import { getFormattedDate } from "./helpers";

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

const messages = [
  {
    sender: "d0750033",
    message: "said 'we will see you soon, thank you'",
    uri: false,
    pinned: false
  },
  {
    sender: "d0750033",
    message: "Hung up",
    uri: false,
    pinned: false
  },
  {
    sender: "d0750033",
    message: "C/T calling back",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710033",
    message: "female back on line",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710033",
    message: "states are cold and want to go inside to bed",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710033",
    message: "sound quite young - mid to late teens perhaps",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710033",
    message: "line disconnected again",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "TD 3 mins",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "NIL ringing straight to UK V/MAIL - msg left to call 111 back",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "End of Duplicate Event data",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message:
      "HEADLINE: young male asking for police then hung up - NIL DISTRESS OR B/G NOISE",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message:
      "HEADLINE: FEMALE didn't speak to operator - sounded rushed - kept saying 'let's go'",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "POSS was on the move",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "Call Window as Auckland",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message:
      "ECLI Handset (GPS) for +64632899889(Vodafone): LL(174:51:19.7640,-36:52:43.0680)",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "several calls in PCL form number",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "relates to P058239789",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "CT calling back",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "Duplicate Event: Location = 20 Symonds St, AUCKLAND",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message:
      "female stating its a family argument and trying to reason with her mother",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "sounds like informant has been locked out of house",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "They said police aren't needed anymore and disconnected",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "CT Standing down",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "Event P036994062 Dispatch Assigned",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "Same event",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "End of Duplicate Event data",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "ADDRESS NOT CONFIRMED",
    uri: false,
    pinned: false
  },
  {
    sender: "$ONI34",
    message:
      "just called informant, introduced myself and got reply 'don't really need you, too late' and hung up. Sounded like she was in a car",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "Preempt Unit ONI34",
    uri: false,
    pinned: false
  },
  {
    sender: "d0710013",
    message: "held for earlies",
    uri: false,
    pinned: false
  }
];

async function sendSingleNotification(message) {
  await sleep(2000);
  let notificationId = await Notifications.presentLocalNotificationAsync({
    title: "New messages",
    body: message
  });
  console.log(notificationId);
}

async function startSendingNotification(f) {
  if (Platform.OS != "ios") {
    Notifications.dismissAllNotificationsAsync();
    Notifications.cancelAllScheduledNotificationsAsync();
  }

  for (let i = 0; i < messages.length; i++) {
    await sendSingleNotification(
      messages[i].sender + ": " + messages[i].message
    );
    formattedDate = getFormattedDate("");
    messages[i].date = formattedDate;
    f(messages[i]);
  }
}

export async function askPermissions(f) {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );

  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus === "granted") {
    startSendingNotification(f);
  }
}
