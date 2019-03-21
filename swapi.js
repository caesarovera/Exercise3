const getApi = () => {
  try {
    return axios.get('https://swapi.co/api/people')
  } catch (error) {
    console.error(error)
  }
}
const app = document.getElementById('root');
const container = document.createElement('tbody');
container.setAttribute('id', 'myTable');
app.appendChild(container);

const countPeoples = async () => {
  const peoples = getApi()
    .then(response => {
      if (response.data.results) {
        var hasil = response.data.results;
        for (let index = 0; index < hasil.length; index++) {
          const element = hasil[index];
          console.log(element); 
          const row = document.createElement('tr');

      const nama = document.createElement('td');
      nama.textContent = element.name;
      const tinggiBadan = document.createElement('td');
      tinggiBadan.textContent = `${element.height} cm`;
      const beratBadan = document.createElement('td');
      beratBadan.textContent = `${element.mass} kg`;
      const warnaRambut = document.createElement('td');
      warnaRambut.textContent = element.hair_color;
      const warnaKulit = document.createElement('td');
      warnaKulit.textContent = element.skin_color;
      const warnaMata = document.createElement('td');
      warnaMata.textContent = element.eye_color;
      const tanggalLahir = document.createElement('td');
      tanggalLahir.textContent = element.birth_year;
      const jenisKelamin = document.createElement('td');
      jenisKelamin.textContent = element.gender;
      container.appendChild(row);
      row.appendChild(nama);
      row.appendChild(tinggiBadan);
      row.appendChild(beratBadan);
      row.appendChild(warnaRambut);
      row.appendChild(warnaKulit);
      row.appendChild(warnaMata);
      row.appendChild(tanggalLahir);
      row.appendChild(jenisKelamin);
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
}
countPeoples()