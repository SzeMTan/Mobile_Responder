import { Notifications, Permissions } from "expo";

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

async function sendSingleNotification(message) {
  await sleep(2000);
  let notificationId = await Notifications.presentLocalNotificationAsync({
    title: "New messages",
    body: message
  });
  console.log(notificationId);
}

async function startSendingNotification(f) {
  Notifications.dismissAllNotificationsAsync();
  Notifications.cancelAllScheduledNotificationsAsync();

  await sendSingleNotification("d0100017: something happened...");
  f("d0100017: something happened...")
  await sendSingleNotification("d0100018: something happened...");
  f("d0100018: something happened...")

  await sendSingleNotification("d0100019: something happened...");
  f("d0100019: something happened...")

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
