const content = document.getElementById('content');

async function getChars(){
    const res = await fetch('https://finalspaceapi.com/api/v0/character/');
    const chars = await res.json();
    createCharCard(chars);
  }

  const createCharCard = chars =>{
    const charEl = document.createElement('ul');
    charEl.classList.add('final');
    let output = '';
    const img_url = 'https://finalspaceapi.com/api/character/avatar';
    chars.forEach(char => output += `
    <li class="container">
    <div class="img-container">
     <img src="${char.img_url}" alt="${undefined}">
    </div>
    <div class="info">
     <h4 class="number">#${char.id}</h4>
     <h4 class="name">${char.name}</h4>
     <p>Species: ${char.species}</p>
    </div>
    </li>
    `);
    const charInnerHTML = output;
    charEl.innerHTML = charInnerHTML;
    content.appendChild(charEl);
  }
  
  getChars();