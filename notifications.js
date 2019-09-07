import { Notifications, Permissions } from "expo";

async function scheduleNotification() {
  let notificationId = Notifications.scheduleLocalNotificationAsync(
    {
      title: "I'm Scheduled",
      body: "Wow, I can show up even when app is closed"
    },
    {
      time: new Date().getTime() + 2000
    }
  );
  console.log(notificationId);
};

export async function askPermissions() {
  
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );

  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus === "granted") {
    scheduleNotification();
  }
};