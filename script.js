// Araç verileri
const cars = [
  {
    name: 'VW Golf',
    price: 1500000,
    features: 'eTSI Mild Hybrid, 10.3" Bilgi ve Eğlence Sistemi',
    image: 'https://cdn.motor1.com/images/mgl/3WvOWL/s1/volkswagen-golf-2024-restyling---foto.jpg',
    safety: {
      airbags: true,
      abs: true,
      esp: true,
      crashTestScore: 4.5,
      mortalityRate: '4%',
      blindSpotWarning: true,
      laneAssist: true,
      aeb: true,
      trafficSignRecognition: false,
      pedestrianDetection: true
    }
  },
  {
    name: 'Toyota Corolla',
    price: 1100000,
    features: 'Adaptif Cruise Control, Hybrid Motor',
    image: 'https://ares.shiftdelete.net/2023/02/2023-Toyota-Corolla.jpg',
    safety: {
      airbags: true,
      abs: true,
      esp: false,
      crashTestScore: 4.2,
      mortalityRate: '5%',
      blindSpotWarning: false,
      laneAssist: false,
      aeb: true,
      trafficSignRecognition: true,
      pedestrianDetection: false
    }
  },
  {
    name: 'Renault Megane',
    price: 1200000,
    features: 'Yeni TCe Motor, Otoyol Asistanı',
    image: 'https://cdn.motor1.com/images/mgl/9oXJ0/s3/2021-renault-megane-sedan.jpg',
    safety: {
      airbags: true,
      abs: true,
      esp: true,
      crashTestScore: 4.8,
      mortalityRate: '3%',
      blindSpotWarning: true,
      laneAssist: true,
      aeb: true,
      trafficSignRecognition: true,
      pedestrianDetection: true
    }
  },
  {
    name: 'BMW 5 Serisi',
    price: 3000000,
    features: 'Lüks, Yüksek Performans, Adaptif Far Sistemi',
    image: 'https://www.borusanoto.com/Uploads/Modeller/BMW/Yeni-BMW-5-Serisi/Yeni-BMW-5-Serisi-Sedan-2023/header.webp',
    safety: {
      airbags: true,
      abs: true,
      esp: true,
      crashTestScore: 5,
      mortalityRate: '2%',
      blindSpotWarning: true,
      laneAssist: true,
      aeb: true,
      trafficSignRecognition: true,
      pedestrianDetection: true
    }
  },
  {
    name: 'Volvo XC90',
    price: 4000000,
    features: 'Hibrid Motor, Gelişmiş Güvenlik Sistemi',
    image: 'https://nebune.com.tr/wp-content/uploads/2024/09/yeni-volvo-xc90-ve-ex90-tanitildi-iste-ozellikleri-1-780x470.jpg',
    safety: {
      airbags: true,
      abs: true,
      esp: true,
      crashTestScore: 5,
      mortalityRate: '2.5%',
      blindSpotWarning: true,
      laneAssist: true,
      aeb: true,
      trafficSignRecognition: true,
      pedestrianDetection: true
    }
  },
  {
    name: 'Volvo S90',
    price: 3500000,
    features: 'Lüks Sedan, Otoyol Asistanı, Sürüş Yardımcıları',
    image: 'https://pic.otoyazar.com/wp-content/uploads/2015/12/volvo-s90-2.jpg',
    safety: {
      airbags: true,
      abs: true,
      esp: true,
      crashTestScore: 5,
      mortalityRate: '2.1%',
      blindSpotWarning: true,
      laneAssist: true,
      aeb: true,
      trafficSignRecognition: true,
      pedestrianDetection: true
    }
  },
  {
    name: 'Audi A3',
    price: 2200000,
    features: 'Audi Virtual Cockpit, İleri Seviye Sürüş Yardımcıları',
    image: 'https://www.vagcomcenter.com/wp-content/uploads/2023/11/AUDI-A3.jpeg',
    safety: {
      airbags: true,
      abs: true,
      esp: true,
      crashTestScore: 4.7,
      mortalityRate: '4.3%',
      blindSpotWarning: true,
      laneAssist: true,
      aeb: true,
      trafficSignRecognition: true,
      pedestrianDetection: true
    }
  },
  // Yeni araçlar
  {
    name: 'Honda Civic',
    price: 1700000,
    features: 'Honda Sensing, Motor Seçenekleri',
    image: 'https://pic.otoyazar.com/wp-content/uploads/2021/11/honda-civic.jpg',
    safety: {
      airbags: true,
      abs: true,
      esp: true,
      crashTestScore: 4.6,
      mortalityRate: '3.8%',
      blindSpotWarning: true,
      laneAssist: true,
      aeb: true,
      trafficSignRecognition: true,
      pedestrianDetection: false
    }
  },
  {
    name: 'Ford Focus',
    price: 1300000,
    features: 'Yeni 1.0 EcoBoost Motor, Akıllı Sürüş Asistanı',
    image: 'https://arabam-blog.mncdn.com/wp-content/uploads/2019/02/Kapak-Yeni-Ford-Focus-1-2-e1550927431926-1024x768.jpg',
    safety: {
      airbags: true,
      abs: true,
      esp: true,
      crashTestScore: 4.4,
      mortalityRate: '4.1%',
      blindSpotWarning: false,
      laneAssist: true,
      aeb: true,
      trafficSignRecognition: true,
      pedestrianDetection: true
    }
  },
  {
    name: 'Mazda 3',
    price: 1600000,
    features: 'Skyactiv Motor, İleri Sürüş Yardımcıları',
    image: 'https://preview.redd.it/which-year-of-the-mazda-3-is-best-hatchback-v0-j3the7nkwi1c1.jpeg?auto=webp&s=8ca23ccf675f503df7c1834fe5b11b70758407c2',
    safety: {
      airbags: true,
      abs: true,
      esp: true,
      crashTestScore: 4.9,
      mortalityRate: '3%',
      blindSpotWarning: true,
      laneAssist: true,
      aeb: true,
      trafficSignRecognition: false,
      pedestrianDetection: true
    }
  }
];

const carList = document.getElementById('carList');
const compareButton = document.getElementById('compareButton');
const comparisonResult = document.getElementById('comparisonResult');
let selectedCars = [];

// Araçları listeleme
function displayCars(cars) {
  carList.innerHTML = '';
  cars.forEach((car) => {
    const carElement = document.createElement('div');
    carElement.classList.add('car');
    carElement.innerHTML = `
      <h3>${car.name}</h3>
      <p>Fiyat: ${car.price} TL</p>
      <p>Özellikler: ${car.features}</p>
      <img src="${car.image}" alt="${car.name}">
      <button onclick="selectCar('${car.name}')">Seç</button>
    `;
    carList.appendChild(carElement);
  });
}

// Araç seçme
function selectCar(carName) {
  const car = cars.find((c) => c.name === carName);
  if (selectedCars.includes(car)) {
    selectedCars = selectedCars.filter((c) => c !== car);
  } else {
    selectedCars.push(car);
  }
  console.log('Seçili Araçlar:', selectedCars);
}

// Karşılaştırma
compareButton.addEventListener('click', () => {
  if (selectedCars.length < 2) {
    comparisonResult.innerHTML = 'Lütfen en az iki araç seçin!';
    return;
  }

  let comparisonHTML = `
    <table>
      <tr>
        <th>Araç</th>
        <th>Hava Yastıkları</th>
        <th>ABS</th>
        <th>ESP</th>
        <th>Çarpışma Testi Puanı</th>
        <th>Ölüm Oranı</th>
        <th>Kör Nokta Uyarı Sistemi</th>
        <th>Şerit Takip Asistanı</th>
        <th>Otomatik Acil Frenleme Sistemi</th>
        <th>Trafik İşareti Tanıma</th>
        <th>Yaya Tespiti</th>
      </tr>
  `;

  selectedCars.forEach((car) => {
    comparisonHTML += `
      <tr>
        <td>${car.name}</td>
        <td>${car.safety.airbags ? '✔️' : '❌'}</td>
        <td>${car.safety.abs ? '✔️' : '❌'}</td>
        <td>${car.safety.esp ? '✔️' : '❌'}</td>
        <td>${car.safety.crashTestScore}</td>
        <td>${car.safety.mortalityRate}</td>
        <td>${car.safety.blindSpotWarning ? '✔️' : '❌'}</td>
        <td>${car.safety.laneAssist ? '✔️' : '❌'}</td>
        <td>${car.safety.aeb ? '✔️' : '❌'}</td>
        <td>${car.safety.trafficSignRecognition ? '✔️' : '❌'}</td>
        <td>${car.safety.pedestrianDetection ? '✔️' : '❌'}</td>
      </tr>
    `;
  });

  comparisonHTML += `</table>`;
  comparisonResult.innerHTML = comparisonHTML;
});

// Araçları listele
displayCars(cars);

// Modal işlemleri
const aboutButton = document.getElementById('aboutButton');
const aboutModal = document.getElementById('aboutModal');
const closeBtn = document.querySelector('.close-btn');

aboutButton.addEventListener('click', () => {
  aboutModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  aboutModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === aboutModal) {
    aboutModal.style.display = 'none';
  }
});
