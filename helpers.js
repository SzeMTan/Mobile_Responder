const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

export function getFormattedDate(time) {
  d = new Date();

  formattedDate = d.getDate() + " " + monthNames[d.getMonth()] + " ";

  if (time == "") {
    formattedDate = formattedDate + d.getHours() + ":";

    if (d.getMinutes() < 10) {
      formattedDate = formattedDate + "0" + d.getMinutes();
    } else {
      formattedDate = formattedDate + d.getMinutes();
    }
  } else {
    formattedDate = formattedDate + time;
  }
  return formattedDate;
}
