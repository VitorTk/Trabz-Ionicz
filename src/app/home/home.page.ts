import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public menus = [
    { id: 1, nome: 'Cervejas'  },
    { id: 2, nome: 'Uisques'   },
    { id: 3, nome: 'Gins'      },
    { id: 4, nome: 'Vinhos'   },
    { id: 5, nome: 'Vodkas'   }
  ]

  
  public cervejas = [
    { id: 1, nome: 'Budweiser'  },
    { id: 2, nome: 'Heineken'   },
    { id: 3, nome: 'Brahma'     },
    { id: 4, nome: 'Skol'       },
    { id: 5, nome: 'Itaipava'   }
  ]
  
  
  public uisques = [
    { id: 1, nome: 'BlackLaber'   },
    { id: 2, nome: 'RedLabel'     },
    { id: 3, nome: 'Royal Salut'  },
    { id: 4, nome: 'Passaport'    },
    { id: 5, nome: 'Chivas'       }
  ]
  
  public gins = [
    { id: 1, nome: 'Bombay Sapphire'  },
    { id: 2, nome: 'Tanqueray'        },
    { id: 3, nome: 'Larios'           },
    { id: 4, nome: 'Gordons'          }
  ]
  
  public bebidas = this.cervejas;
  
  constructor() {}
  
  public menuChange(nomeBebida) {
    switch(nomeBebida) {
      case 'Cervejas':
        this.bebidas = this.cervejas;
        break;
      case 'Uisques':
        this.bebidas = this.uisques;
        break;
      case 'Gins':
        this.bebidas = this.gins;
        break;
      }
  }

}
