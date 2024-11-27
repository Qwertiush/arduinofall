const { Engine, Render, World, Bodies, Body, Events } = Matter;

const textures = [
  'graphics/rezystor.png',
  'graphics/led.png',
  'graphics/tranzystor.png',
  'graphics/servo.png',
  'graphics/batteria.png',
  'graphics/silnik.png',
  'graphics/breadboard.png',
  'graphics/arduinoBoard.png'
];
// inny promien wszystkie bo źle sie dzieje
const circles = [
  {
    id: 0, // Unikalny identyfikator
    name: "Rezystor",
    description: "Rezystor to element, który ogranicza przepływ prądu w obwodzie elektrycznym. Działa trochę jak przeszkoda, która spowalnia prąd, żeby nie przepływał za szybko. Jest bardzo ważny, ponieważ pomaga chronić inne części układu przed uszkodzeniem i zapewnia, że wszystko działa poprawnie.",
    body: Bodies.circle(450, 50, 40, {
      friction: 0.2,
      frictionAir: 0.01,
      restitution: 0.9,
      density: 0.001,
      render: {
        sprite: {
          texture: textures[0], // Adres URL do obrazka
          xScale: 0.2,
          yScale: 0.2
        },
      },
    }),
  },
    {
      id: 1, // Unikalny identyfikator
      name: "Dioda LED",
      description: "Dioda LED to specjalny element, który świeci, gdy przepływa przez niego prąd elektryczny. LED jest bardzo wydajny, co oznacza, że potrzebuje mało energii, żeby działać. Stosuje się go w lampkach, ekranach, znakach drogowych i wielu innych urządzeniach.",
      body: Bodies.circle(450, 50, 50, {
        friction: 0.2,
        frictionAir: 0.01,
        restitution: 0.9,
        density: 0.001,
        render: {
          fillStyle: '#3498db',
          strokeStyle: '#2c3e50',
        },
      }),
    },
    {
      id: 2, // Unikalny identyfikator
      name: "Tranzystor",
      description: "Tranzystor to element, który działa jak przełącznik albo wzmacniacz. Potrafi sterować przepływem prądu: może go włączać, wyłączać albo zwiększać. Jest jednym z podstawowych elementów w elektronice i znajduje się we wszystkich komputerach, telefonach i wielu innych urządzeniach.",
      body: Bodies.circle(450, 50, 60, {
        friction: 0.2,
        frictionAir: 0.01,
        restitution: 0.9,
        density: 0.001,
        render: {
          fillStyle: '#eb3434',
          strokeStyle: '#2c3e50',
          lineWidth: 10,
        },
      }),
    },
    {
      id: 3, // Unikalny identyfikator
      name: "Servo",
      description: "Serwo to silnik, który może obracać się o określony kąt. Dzięki temu jest bardzo precyzyjny i można go wykorzystać w robotyce, modelarstwie i automatyce. Serwo często spotyka się w robotach, które muszą coś podnosić, przesuwać lub obracać w dokładnie określony sposób.",
      body: Bodies.circle(450, 50, 70, {
        friction: 0.2,
        frictionAir: 0.01,
        restitution: 0.9,
        density: 0.001,
        render: {
          fillStyle: '#44ba11',
          strokeStyle: '#2c3e50',
          lineWidth: 10,
        },
      }),
    },
    {
      id: 4, // Unikalny identyfikator
      name: "Bateria",
      description: "Bateria to źródło energii, które przechowuje ładunek elektryczny. Dzięki baterii urządzenia, takie jak piloty, zegarki, latarki czy zabawki, mogą działać bez podłączania do gniazdka. Bateria zamienia energię chemiczną w elektryczną i dostarcza prąd, który zasila urządzenia.",
      body: Bodies.circle(450, 50, 80, {
        friction: 0.2,
        frictionAir: 0.01,
        restitution: 0.9,
        density: 0.001,
        render: {
          fillStyle: '#11baa6',
          strokeStyle: '#2c3e50',
          lineWidth: 10,
        },
      }),
    },
    {
      id: 5, // Unikalny identyfikator
      name: "Silnik",
      description: "Silnik elektryczny to urządzenie, które przekształca energię elektryczną w ruch. Kiedy silnik jest podłączony do źródła prądu, zaczyna się obracać, co pozwala na napędzanie różnych mechanizmów. Silnik elektryczny jest stosowany w wielu urządzeniach, które wymagają ruchu, takich jak wentylatory, samochody elektryczne czy maszyny.",
      body: Bodies.circle(450, 50, 90, {
        friction: 0.2,
        frictionAir: 0.01,
        restitution: 0.9,
        density: 0.001,
        render: {
          fillStyle: '#ba1184',
          strokeStyle: '#2c3e50',
          lineWidth: 10,
        },
      }),
    },
    {
      id: 6, // Unikalny identyfikator
      name: "Płyta stykowa",
      description: "Płyta stykowa to narzędzie, które pozwala na łatwe łączenie różnych elementów elektronicznych, takich jak rezystory, diody czy przyciski, bez konieczności lutowania. Dzięki płycie stykowej możemy szybko testować różne układy elektroniczne, aby sprawdzić, czy działają poprawnie, zanim zdecydujemy się na stałe połączenie.",
      body: Bodies.circle(450, 50, 100, {
        friction: 0.2,
        frictionAir: 0.01,
        restitution: 0.9,
        density: 0.001,
        render: {
          fillStyle: '#ba1184',
          strokeStyle: '#2c3e50',
          lineWidth: 10,
        },
      }),
    },
    {
      id: 7, // Unikalny identyfikator
      name: "Płyta Arduino",
      description: "Płyta Arduino to mały komputer, który można zaprogramować, żeby wykonywał różne zadania. Arduino pozwala tworzyć elektroniczne projekty, takie jak roboty, automatyczne lampy, czy czujniki, które mierzą temperaturę. Jest popularny w nauce programowania i elektroniki, ponieważ jest łatwy w użyciu i daje wiele możliwości.",
      body: Bodies.circle(450, 50, 110, {
        friction: 0.2,
        frictionAir: 0.01,
        restitution: 0.9,
        density: 0.001,
        render: {
          fillStyle: '#ba1184',
          strokeStyle: '#2c3e50',
          lineWidth: 10,
        },
      }),
    },
]

// Funkcja ładująca obrazy asynchronicznie
function loadTextures() {
  return Promise.all(
    textures.map((url) => new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    }))
  );
}

// 2. Tworzenie silnika fizycznego
const engine = Engine.create();
const world = engine.world;

// 3. Ustawienie renderera
function setUpRender (){
  if(window.innerWidth <= 1080){
    return Matter.Render.create({
      element: document.querySelector('.game-world'), // Attach to the game-world div
      engine: engine,
      options: {
        width: window.innerWidth,  // Set appropriate dimensions
        height: 600,
        wireframes: false, // Use full-color rendering
        background: '#4e6882'
      }
    });
  }
  else{
    return Matter.Render.create({
      element: document.querySelector('.game-world'), // Attach to the game-world div
      engine: engine,
      options: {
        width: 600,
        height: 600,
        wireframes: false,
        background: '#4e6882'
      }
    });
  }
}
const render = setUpRender();

// 4. Tworzenie obiektów fizycznych statycznych
var ground = Bodies.rectangle(300, 600, 610, 60, { isStatic: true,restitution: 0.9, });
var leftBorder = Bodies.rectangle(0,200,60,800, { isStatic: true,restitution: 0.9, });
var rightBorder = Bodies.rectangle(600,200,60,800, { isStatic: true,restitution: 0.9, });

function setUpWorldElements(){
  if(window.innerWidth <= 1080){
    ground = Bodies.rectangle(window.innerWidth/2, 600, window.innerWidth, 60, { isStatic: true,restitution: 0.9, });
    leftBorder = Bodies.rectangle(0,200,60,800, { isStatic: true,restitution: 0.9, });
    rightBorder = Bodies.rectangle(window.innerWidth,200,60,800, { isStatic: true,restitution: 0.9, });
  }
}

setUpWorldElements();

// 5. Dodanie obiektów do świata
World.add(world, [ground,leftBorder,rightBorder]);

loadTextures().then((images) => {
  // Wczytaj tekstury i przypisz je do ciał
  circles.forEach((circle, index) => {
    const body = circle.body;
    const image = images[index];

    // Sprawdzamy, czy obrazek został poprawnie załadowany
    if (image && image.width && image.height) {
      // Oblicz odpowiednią skalę na podstawie promienia
      const scale = (circle.body.circleRadius * 2) / Math.max(image.width, image.height);

      // Przypisanie tekstury i skalowanie
      body.render.sprite.texture = image.src;
      body.render.sprite.xScale = scale;
      body.render.sprite.yScale = scale;

            // Wyśrodkowanie tekstury w obrębie ciała
            body.render.sprite.xOffset = 0;  // Przesunięcie o połowę szerokości
            body.render.sprite.yOffset = 0; // Przesunięcie o połowę wysokości

    } else {
      console.error('Nie udało się załadować obrazu dla indeksu: ' + index);
    }
  });

  Matter.Runner.run(engine);
  Render.run(render);
}).catch(error => {
  console.error('Błąd przy ładowaniu obrazków: ', error);
});

// 7. (Opcjonalnie) Nasłuchiwanie na zdarzenia (np. kolizje)
Events.on(engine, 'collisionStart', function(event) {
  let pairs = event.pairs; // Pary ciał, które się zderzyły

  pairs.forEach(function(pair) {
    // Przeszukanie tablicy `circles` w celu znalezienia id ciał
    const bodyA = pair.bodyA;
    const bodyB = pair.bodyB;

    // Znalezienie id obiektu A

    var bodyAId = -1;
    var bodyBId = -1;
    for(var i = 0; i < circles.length; i++){
      if(bodyA.circleRadius === circles[i].body.circleRadius){
        bodyAId = i;
      }
      if(bodyB.circleRadius === circles[i].body.circleRadius){
        bodyBId = i;
      }
    }

    if(bodyAId === bodyBId){
      const position = bodyB.position;

      World.remove(world, [bodyA,bodyB]);

      const newBodyId = bodyBId + 1;

      if(newBodyId < circles.length){
        const baseBody = circles[newBodyId].body;
        const newCircle = Bodies.circle(position.x, position.y, baseBody.circleRadius, {
          render: baseBody.render, // Skopiuj styl renderowania
        });

        if(!techElements.find((id) => id === newBodyId)){
          addTechElement('sidebar',textures[newBodyId], circles[newBodyId].name, newBodyId, handleTechElementClick);
          techElements.push(newBodyId);
        }
        World.add(world, [newCircle]);
      }
    }
  });
});

var canClick = true;
var popUpActive = false;
var popUpActiveElementID = 0;

const fallHight = 0;
var mousePos = [];
var techElements = [0,1];
addTechElement('sidebar',textures[0], circles[0].name, 0, handleTechElementClick);
addTechElement('sidebar',textures[1], circles[1].name, 1, handleTechElementClick);
const maxLen = 2;
var activeCircle = Math.floor(Math.random() * maxLen);

const customCursor = document.getElementById('custom-cursor');
const cursorImage = document.getElementById('cursor-img');
customCursor.style.top = `${50}px`;

cursorImage.style.width = `${circles[activeCircle].body.circleRadius*2}px`;
cursorImage.style.height = `${circles[activeCircle].body.circleRadius*2}px`;
cursorImage.src = textures[activeCircle];

const canvas = render.canvas; // Pobierz element canvas z renderera

const rect = canvas.getBoundingClientRect();

addEventListener("mousemove", (event) => {
  mousePos = getMouseWorldPosition(event);
  //customCursor.style.left = `${event.clientX}px`;
  customCursor.style.top = `${50}px`;

  if(event.clientX > rect.right){
    customCursor.style.left = rect.right;
  }
  else if(event.clientX < rect.left){
    customCursor.style.left = rect.left;
  }
  else{
    customCursor.style.left = `${event.clientX}px`;
  }
});

addEventListener("click", (event) => {
  
  if(!canClick){
    console.log("click not approved");
    return;
  }
  // Pobierz granice canvas

  // Sprawdź, czy kliknięcie jest wewnątrz granic canvas
  const isInsideWorld = event.clientX >= rect.left &&
                        event.clientX <= rect.right &&
                        event.clientY >= rect.top &&
                        event.clientY <= rect.bottom;

  if (isInsideWorld) {
    AddCircle([mousePos[0],fallHight], activeCircle);
    activeCircle = Math.floor(Math.random() * maxLen);

    cursorImage.style.width = `${circles[activeCircle].body.circleRadius*2}px`;
    cursorImage.style.height = `${circles[activeCircle].body.circleRadius*2}px`;
    cursorImage.src = textures[activeCircle];

  }
});

function AddCircle(position, circle) {
  const [x, y] = position;

  const baseBody = circles[circle].body;
  const newCircle = Bodies.circle(x, y, baseBody.circleRadius, {
    render: baseBody.render, // Skopiuj styl renderowania
  });

  World.add(world, [newCircle]);
}

function getMouseWorldPosition(event) {
  const rect = canvas.getBoundingClientRect();
  return [event.clientX - rect.left, event.clientY - rect.top];
}

function addTechElement(containerId, imgSrc, elementName, elementId, onClickCallback) {
  // Znalezienie kontenera na podstawie ID
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Nie znaleziono kontenera o ID "${containerId}"`);
    return;
  }

  // Tworzenie głównego div elementu
  const techElement = document.createElement('div');
  techElement.className = 'tech-element';

  // Dodanie zdarzenia onclick
  if (typeof onClickCallback === 'function') {
    techElement.addEventListener('click', () => onClickCallback(elementId));
  }

  // Tworzenie elementu img
  const img = document.createElement('img');
  img.className = 'tech-element-img';
  img.src = imgSrc;
  img.alt = elementName || 'Brak opisu';

  // Tworzenie kontenera na nazwę
  const nameContainer = document.createElement('div');
  nameContainer.className = 'tech-element-name-container';

  // Tworzenie paragrafu z nazwą
  const nameParagraph = document.createElement('p');
  nameParagraph.className = 'tech-element-name';
  nameParagraph.textContent = elementName;

  // Łączenie elementów
  nameContainer.appendChild(nameParagraph);
  techElement.appendChild(img);
  techElement.appendChild(nameContainer);

  // Dodawanie do kontenera
  container.appendChild(techElement);
}

  // Przykładowa funkcja onClick
function handleTechElementClick(id) {
  console.log(`Kliknięto na element: ${id}`);
  popUpActiveElementID = id;
  if(!popUpActive){
    showPopup(id);
    popUpActive = !popUpActive;
    canClick = !canClick;
  }
}

const closeButton = document.getElementById('pop-up-close-btn');
closeButton.onclick = function() {
  popUpActive = false;
  canClick = true;
  console.log("Popup zamknięty!");
  hidePopup();
};

function showPopup(id) {
  const popup = document.getElementById('pop-up');

  setUpPopUp(id);

  popup.style.visibility = 'visible'; // Pokazuje element
}

function hidePopup() {
  const popup = document.getElementById('pop-up');
  popup.style.visibility = 'hidden'; // Ukrywa element
}

function setUpPopUp(id){
  const header = document.getElementById('pop-up-element-name');
  const image = document.getElementById('pop-up-element-img');
  const paragraph = document.getElementById('pop-up-element-text');

  header.textContent = circles[id].name;
  image.src = textures[id];
  paragraph.textContent = circles[id].description;
}


/*
// Funkcja centrowania
function centerCanvas() {
  const canvas = render.canvas;
  canvas.style.position = 'absolute';
  canvas.style.top = `${window.innerHeight / 2 - canvas.height / 2}px`;
  canvas.style.left = `${window.innerWidth / 2 - canvas.width / 2}px`;
}

// Wywołanie centrowania na start i po zmianie rozmiaru okna
centerCanvas();
window.addEventListener('resize', centerCanvas);*/