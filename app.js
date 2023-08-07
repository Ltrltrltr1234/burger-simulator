Vue.component('normalupgrade', {
    props: ['upgradeid', 'name', 'desc'],
    template: '<button :id="\'upgrade\' + upgradeid" class="upgrade" :onclick="\'buymax(\' + upgradeid + \')\'"><h3>{{ name }} <span :id="\'bought\' + upgradeid"></span></h3><p>{{ desc }}</p><p>Cost: <span :id="\'cost\' + upgradeid"></span> 🍔</p><div :id="\'upgrade\' + upgradeid + \'current\'"></div></button>',
  })

Vue.component('autobuyer', {
    props: ['autobuyerid', 'upg', 'displayid'],
    template: '<div :id="\'autobuyer\' + autobuyerid"><p>Auto upgrader {{displayid}} ACTIVE: Upgrades {{ upg }} every tick</p></div>'
})

Vue.component('transcendupgrade', {
  props: ['upgradeid', 'name', 'desc'],
  template: '<div class=trupgradewrapper><button :id="\'trupgrade\' + upgradeid" class="trupgrade" :onclick="\'buytr(\' + upgradeid + \')\'"><h3>{{ name }} <span :id="\'trbought\' + upgradeid"></span></h3><p>{{ desc }}</p><p>Cost: <span :id="\'trcost\' + upgradeid"></span> hypercubes</p><div :id="\'trupgrade\' + upgradeid + \'current\'"></div></button><button :id="\'trupgradebuymax\' + upgradeid" class="trupgradebuymax" :onclick="\'buytrmax(\' + upgradeid + \')\'">Buy max</button></div>',
})

Vue.component('oblivionupgrade', {
  props: ['upgradeid', 'name', 'desc'],
  template: '<div class=trupgradewrapper><button :id="\'trupgrade\' + upgradeid" class="trupgrade oblivionupgrade" :onclick="\'buytr(\' + upgradeid + \')\'"><h3>{{ name }} <span :id="\'trbought\' + upgradeid"></span></h3><p>{{ desc }}</p><p>Cost: <span :id="\'trcost\' + upgradeid"></span> <span class=oblivionburger><span class=oblivionburgerlogo>🍔</span><span class=oblivionburgersymbol>Θ</span></span></p><div :id="\'trupgrade\' + upgradeid + \'current\'"></div></button><button :id="\'trupgradebuymax\' + upgradeid" class="trupgradebuymax" :onclick="\'buytrmax(\' + upgradeid + \')\'">Buy 10</button></div>',
})

var app1 = new Vue({
  el: '#app1',
  data: {
    currenttab: "burgers",
    upgrades: [
      {
        id: 1,
        displayid: 1,
        name: 'More burger',
        desc: 'Double base burger gain',
      },
      {
        id: 2,
        displayid: 2,
        name: 'Larger burger',
        desc: 'Multiply base burger production equal to Log10(burger)^(0.85Y) where Y is the bought amount of this upgrade'
      },
      {
        id: 3,
        displayid: 3,
        name: 'Burger power',
        desc: 'Increase power to which base burger gain is raised to by 0.05'
      },
      {
        id: 4,
        displayid: 4,
        name: 'Blasphemer\'s Gluttony',
        desc: 'Turns effect of More Burger from 2^X to (0.1Y+1)^(2^X) where Y is the bought amount of this upgrade'
      },
      {
        id: 5,
        displayid: 5,
        name: 'Cosmic Annihilation',
        desc: 'Tetrate burger production to 10000Y where Y is the bought amount of this upgrade'
      },
      {
        id: 6,
        displayid: 6,
        name: 'Multiversal Apeirogon',
        desc: 'Apply a Tetration to burger production proportional to Log(Super-log(burger))^(Y^0.6) where Y is the bought amount of this upgrade'
      },
      {
        id: 7,
        displayid: 7,
        name: 'Eschaton Singularity',
        desc: 'Multiply the effect of Cosmic Annihilation by 2^Y where Y is the bought amount of this upgrade'
      }
    ],
    transcendupgrades: [
      {
        id: 1,
        displayid: 1,
        name: 'Extradimensional capitalism',
        desc: 'Multiply base Omega-burger gain by 3'
      },
      {
        id: 2,
        displayid: 2,
        name: 'Hyperplanar homeomorphy',
        desc: 'Multiply Hypercube gain by 2'
      },
      {
        id: 3,
        displayid: 3,
        name: 'Hyperoperative grindset',
        desc: 'Multiply Omega-power by 2'
      },
      {
        id: 4,
        displayid: 4,
        name: 'Metaphysical construct',
        desc: 'Multiply base Hypercube production equal to Log10(hypercube)^(5Y) where Y is the bought amount of this upgrade'
      },
      {
        id: 5,
        displayid: 5,
        name: 'Transtemporal continuum',
        desc: 'Non-transcendent Autobuyers are always active and you gain hypercubes as if you were transcending every tick (0.02 seconds), one-time purchase'
      },
      {
        id: 6,
        displayid: 6,
        name: 'Deterministic Nihilism',
        desc: 'Unlock Oblivion-tainted burgers and Oblivion Upgrades, one-time purchase'
      }
    ],
    oblivionupgrades:[
      {
        id: 8,
        displayid: 8,
        name: 'Tartarean polychoron',
        desc: 'Log(Super-log(Super-log(burger)))^Y multiplies Oblivion-burger effect'
      },
      {
        id: 9,
        displayid: 9,
        name: 'Time-etched edifice',
        desc: 'Multiply Oblivion-burger tetration effect by 300'
      },
      {
        id: 10,
        displayid: 10,
        name: 'Chaos theory',
        desc: 'Raise Time-etched edifice\'s multiplier to a power of 1+0.2Y'
      },
      {
        id: 11,
        displayid: 11,
        name: 'Principalis orthogonality',
        desc: 'Raise base Oblivion-burger effect to 5Y'
      },
      {
        id: 12,
        displayid: 12,
        name: 'Epistemological obliteration',
        desc: 'Abyss-tainted coalescence gives Log(X)^Y times more Oblivion-burgers, where X is total Oblivion-burgers bought'
      },
      {
        id: 13,
        displayid: 13,
        name: 'Kardashevian omegastructure',
        desc: 'Abyss-tainted coalescence gives Y^1.4x more Oblivion-burgers'
      },
      {
        id: 14,
        displayid: 14,
        name: 'Proclamation of Nyarlathotep',
        desc: 'Overall Oblivion-burger effect is raised to 1+0.1Y and Principalis orthogonality is raised to 1+0.15Y'
      },
      {
        id: 15,
        displayid: 15,
        name: 'Eschatological hypothesis',
        desc: 'Generates bought instances of Abyss-tainted coalescence for free at a rate of 25 per second'
      },
    ]
    
  }
})