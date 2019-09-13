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

export async function getGeolocation(lat, long) {
  fetch(
    "https://nominatim.openstreetmap.org/reverse?format=geojson&lat=" +
      lat +
      "&lon=" +
      long
  )
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.features[0].properties.display_name;
    })
    .catch(error => {
      console.error(error);
      return error + "could not find location with geolocation";
    });
}
