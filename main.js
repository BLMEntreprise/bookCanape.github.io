// Charger le JSON
const canapes = [
  {
    "ref": "YY-01",
    "image": "YY-01.jpg",
    "tailles": ["200 x 100 x H70"],
    "cartons": ["118 x 72 x 37"],
    "poids": ["55.5"],
    "options": ["Extensible"],
    "images_options": ["YY-01-O.jpg"]
  },
  {
    "ref": "YY-02",
    "image": "YY-02.jpg",
    "tailles": ["200 x 100 x H70"],
    "cartons": ["118 x 72 x 48"],
    "poids": ["55.5"],
    "options": ["Extensible"],
    "images_options": ["YY-02-O.jpg"]
  },
  {
    "ref": "YY-03",
    "image": "YY-03.jpg",
    "tailles": ["220 x 100 x H62", "260 x 100 x H62", "300 x 100 x H62"],
    "cartons": ["118 x 63 x 41","115 x 72 x 38","118 x 63 x 41 / 31 x 31 x 85"],
    "poids": ["40","45","66"],
    "options": ["2 places","3 places","4 places"]
  },
  {
    "ref": "YY-04",
    "image": "YY-04.jpg",
    "tailles": ["220 x 100 x H72","300 x 100 x H72"],
    "cartons": ["118 x 63 x 41","118 x 63 x 41 / 31 x 31 x 85"],
    "poids": ["50","66"],
    "options": ["2 places","3 places"]
  },
  {
    "ref": "YY-05",
    "image": "YY-05.jpg",
    "tailles": ["263 x 100 x H70","284 x 100 x H70","304 x 200 x H70"],
    "cartons": ["108 x 70 x 38 / 41 x 40 x 110","108 x 72 x 41 / 41 x 40 x 110","110 x 80 x 46 / 110 x 69 x 35 / 110 x 65 x 35"],
    "poids": ["79","81","149"],
    "options": ["2 places","3 places","Big sofa"],
    "images_options": ["YY-05-O.jpg"]
  },
  {
    "ref": "YY-06",
    "image": "YY-06.jpg",
    "tailles": ["230 x 96 x H68 + 80 x 150"],
    "cartons": ["110 x 47 x 42 + 110 x 43 x 40"],
    "poids": ["58"],
    "options": ["3 places + angle"]
  },
  {
    "ref": "YY-07",
    "image": "YY-07.jpg",
    "tailles": ["270 x 95 x H62  + 175"],
    "cartons": ["110 x 47 x 42 + 110 x 43 x 39"],
    "poids": ["71"],
    "options": ["3 places + angle"]
  },
  {
    "ref": "YY-08",
    "image": "YY-08.jpg",
    "tailles": ["277 x 100 x H82"],
    "cartons": ["117 x 62 x 35 / 118 x 48 x 38"],
    "poids": ["78.5"],
    "options": ["3 places + angle"],
    "images_options": ["YY-08-O.jpg"]
  },
  {
    "ref": "YY-09",
    "image": "YY-09.jpg",
    "tailles": ["150 x 170 x H66","300 x 170 x H66","280 x 100 x H66"],
    "cartons": ["(155 x 35 x 35) x 2","158 x 38 x 45 / 158 x 38 x 45 / 158 x 38 x 38","118 x 56 x 60 / 35 x 35 x 95"],
    "poids": ["55,5","117","66"],
    "options": ["1 place","2 places","3 places - sofa"],
    "images_options": ["YY-09-O.jpg","YY-09-O1.jpg"]
  },
  {
    "ref": "YY-10",
    "image": "YY-10.jpg",
    "tailles": ["272 x 100 x H61","182 x 100 x H61","200 x 100 x H61","90 x 100 x 35"],
    "cartons": ["1118 x 75 x 37 / 118 x 35 x 35","118 x 42 x 46","118 x 42 x 46","100 x 31 x 31"],
    "poids": ["65","36","40","15"],
    "options": ["3 places","2 places sans 1 accoudoir","2 places","Repose pied"],
    "images_options": ["YY-10-O.jpg","YY-10-O1.jpg"]
  },
  {
    "ref": "YY-11",
    "image": "YY-11.jpg",
    "tailles": ["100 x 100 x H60","340 x 102 x H60"],
    "cartons": ["35 x 35 x 125","35 x 35 x 130 / 130 x 41 x 38"],
    "poids": ["65","—"],
    "options": ["1 place","2 places"]
  },
  {
    "ref": "YY-12",
    "image": "YY-12.jpg",
    "tailles": ["90 x 90 x H65","270 x 90 x H65"],
    "cartons": ["100 x 35 x 35","100 x 35 x 35 / 3"],
    "poids": ["—","65"],
    "options": ["1 place","3 places"]
  },
  {
    "ref": "YY-13",
    "image": "YY-13.jpg",
    "tailles": ["100 x 100 x H70","85 x 85 x H70"],
    "cartons": ["—","—"],
    "poids": ["20","17"],
    "options": ["1 place","3 places"]
  },
  {
    "ref": "YY-14",
    "image": "YY-14.jpg",
    "tailles": ["270 x 95 x H62 - 175"],
    "cartons": ["110 x 42 x 47 / 2"],
    "poids": ["72"],
    "options": ["2 places + lounge"]
  },
  {
    "ref": "YY-15",
    "image": "YY-15.jpg",
    "tailles": ["320 x 100 x H65 - repose pied 100 x 80 x H40"],
    "cartons": ["118 x 42 x 42 / 2 - 118 x 35 x 35"],
    "poids": ["78"],
    "options": ["3 places + repose pied"]
  },
  {
    "ref": "YY-16",
    "image": "YY-16.jpg",
    "tailles": ["280 x 100 x H60","100 x 76 x H38"],
    "cartons": ["118 x 63 x 41 / 31 x 31 x 110","100 x 31 x 31"],
    "poids": ["66","15"],
    "options": ["3 places","repose pied"],
    "images_options": ["YY-16-O.jpg"]
  },
  {
    "ref": "YY-17",
    "image": "YY-17.jpg",
    "tailles": ["220 x 105 x H88"],
    "cartons": ["100 x 100 x H88"],
    "poids": ["102"],
    "options": ["2 places"]
  },
  {
    "ref": "YY-18",
    "image": "YY-18.jpg",
    "tailles": ["240 x 100 x H68"],
    "cartons": ["118 x 70 x 36"],
    "poids": ["54"],
    "options": ["3 places"],
    "images_options": ["YY-18-O.jpg"]
  },
  {
    "ref": "YY-19",
    "image": "YY-19.jpg",
    "tailles": ["100 x 100 x H80"],
    "cartons": ["—"],
    "poids": ["—"],
    "options": ["1 place - avec 1, 2 accoudoirs, ou sans"],
    "images_options": ["YY-19-O.jpg"]
  },
  {
    "ref": "YY-20",
    "image": "YY-20.jpg",
    "tailles": ["280 x 95 x H75"],
    "cartons": ["—"],
    "poids": ["—"],
    "options": ["2 places - repose pied"],
    "images_options": ["YY-20-O.jpg"]
  },
  {
    "ref": "YY-21",
    "image": "YY-21.jpg",
    "tailles": ["200 x 90 x H73 - ouvert 200 x 115 x H36.5"],
    "cartons": ["125 x 35 x 35"],
    "poids": ["36"],
    "options": ["1 place"],
    "images_options": ["YY-21-O.jpg"]
  },
  {
    "ref": "YY-22",
    "image": "YY-22.jpg",
    "tailles": ["300 x 103 x H70 - angle 170 x 115 x H70"],
    "cartons": ["125 x 46 x 52 / 2 - 125 x 46 x 52"],
    "poids": ["80 - 40"],
    "options": ["3 places + angle"]
  },
  {
    "ref": "YY-23",
    "image": "YY-23.jpg",
    "tailles": ["250 x 105 x H72 - Repose pied 73 x 73 x 430"],
    "cartons": ["118 x 35 x 35 / 2 - 29 x 29 x 85"],
    "poids": ["50 - 10"],
    "options": ["2 places + repose pied"]
  },
  {
    "ref": "YY-24",
    "image": "YY-24.jpg",
    "tailles": ["214 x 170 x H60"],
    "cartons": ["—"],
    "poids": ["—"],
    "options": ["2 places"]
  },
  {
    "ref": "YY-25",
    "image": "YY-25.jpg",
    "tailles": ["266 x 95 x H80","180 x 95 x H80"],
    "cartons": ["—"],
    "poids": ["—"],
    "options": ["2 places + angles"]
  },
  {
    "ref": "YY-26",
    "image": "YY-26.jpg",
    "tailles": ["270 x 100 x H87","180 x 95 x H87"],
    "cartons": ["—"],
    "poids": ["—"],
    "options": ["3 places + angles"]
  },
  {
    "ref": "YY-27",
    "image": "YY-27.jpg",
    "tailles": ["210 x 120 x H60"],
    "cartons": ["—"],
    "poids": ["—"],
    "options": ["2 places"]
  },
  {
    "ref": "YY-28",
    "image": "YY-28.jpg",
    "tailles": ["120 x 120 x H73"],
    "cartons": ["130 x 35 x 35"],
    "poids": ["24"],
    "options": ["1 place"]
  },
  {
    "ref": "YY-29",
    "image": "YY-29.jpg",
    "tailles": ["194 x 120 x H76"],
    "cartons": ["—"],
    "poids": ["—"],
    "options": ["2 places"]
  },
  {
    "ref": "YY-30",
    "image": "YY-30.jpg",
    "tailles": ["245 x 120 x H76"],
    "cartons": ["130 x 55 x 55"],
    "poids": ["55"],
    "options": ["3 places"]
  },
  {
    "ref": "YY-31",
    "image": "YY-31.jpg",
    "tailles": ["184 x 75 x H36"],
    "cartons": ["—"],
    "poids": ["—"],
    "options": ["repose pied"]
  }
]

generateCatalogue(canapes);

function generateCatalogue(canapes) {
  const catalogue = document.getElementById('catalogue');

  canapes.forEach(canape => {
    const card = document.createElement('div');
    card.className = 'card';

    // Image principale
    const img = document.createElement('img');
    img.src = `images/${canape.image}`;
    img.alt = canape.ref;
    img.className = 'small-img'; // taille standard
    img.onclick = () => showModal(img.src);
    card.appendChild(img);

    // Référence
    const title = document.createElement('h2');
    title.textContent = canape.ref;
    card.appendChild(title);

            // Options
    if (canape.options) {
      const options = document.createElement('p');
      options.innerHTML = `<strong>Options:</strong> ${canape.options.join(' / ')}`;
      card.appendChild(options);

    // Tailles
    const tailles = document.createElement('p');
    tailles.innerHTML = `<strong>Tailles (cm):</strong> ${canape.tailles.join(' / ')}`;
    card.appendChild(tailles);

    // Cartons
    const cartons = document.createElement('p');
    cartons.innerHTML = `<strong>Cartons (cm):</strong> ${canape.cartons.join(' / ')}`;
    card.appendChild(cartons);

    // Poids
    const poids = document.createElement('p');
    poids.innerHTML = `<strong>Poids (kg):</strong> ${canape.poids.join(' / ')}`;
    card.appendChild(poids);


      if (canape.images_options) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options-images';
        canape.images_options.forEach(optImg => {
          const optImage = document.createElement('img');
          optImage.src = `images/${optImg}`;
          optImage.alt = canape.ref + ' option';
          optImage.onclick = () => showModal(optImage.src);
          optionsDiv.appendChild(optImage);
        });
        card.appendChild(optionsDiv);
      }
    }

    catalogue.appendChild(card);
  });
}

// Modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModalBtn = document.getElementById('close-modal');

function showModal(src) {
  modal.style.display = 'flex';
  modalImg.src = src;
}

closeModalBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if(e.target === modal) modal.style.display='none'; }
