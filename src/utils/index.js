import axios from 'axios';

export const formatNumber = (num) => {
  if (typeof num !== "undefined") {
    return num.toLocaleString(navigator.language, { minimumFractionDigits: 0 });
  }
  return 0;
}


export const formatDate = (dateString) => {
  const dt = new Date(dateString);
  return `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt
    .getDate()
    .toString()
    .padStart(2, '0')}/${dt
    .getFullYear()
    .toString()
    .padStart(4, '0')} ${dt
    .getHours()
    .toString()
    .padStart(2, '0')}:${dt
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${dt
    .getSeconds()
    .toString()
    .padStart(2, '0')}`;
};

export const getLocation = () => {
  return axios.get('https://ipapi.co/json')
    .then((res) => {
      return {
        countryCode: res.data.country,
        countryName: res.data.country_name
      }
    });
}

export const getStatusInCountry = async (country, key) => {
  if (typeof country.iso3 !== "undefined") {
    return await axios.get('https://covid19.mathdro.id/api/countries/' + country.iso3)
          .then(details => {
            let name = country.name;
            let confirmed = details.data.confirmed.value;
            let recovered = details.data.recovered.value;
            let deaths = details.data.deaths.value;
            let lastUpdate = details.data.lastUpdate.value;

            return {key, name, confirmed, recovered, deaths, lastUpdate}
          })
          .catch (error => {
            console.log(error);
          })
  }
}