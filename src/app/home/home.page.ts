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

  public slideOpts = {
    slidesPerView: 2
  }
  
  public cervejas = [
    { id: 1, nome: 'Budweiser', valor: 42, desc: '12 unidades de Budweiser 350ML' },
    { id: 2, nome: 'Heineken', valor: 53, desc: '12 unidades de Heineken 350ML'   },
    { id: 3, nome: 'Brahma', valor: 38, desc: '12 unidades de Brahma 350ML'       },
    { id: 4, nome: 'Skol', valor: 36, desc: '12 unidades de Skol 350ML'           },
    { id: 5, nome: 'Itaipava', valor: 32, desc: '12 unidades de Itaipava 350ML'   }
  ]
  
  
  public uisques = [
    { id: 1, nome: 'BlackLabel', valor: 180, desc: 'Blended scotch whisky 12 Anos - 75% Teor Alcoolico - 750ML'           },
    { id: 2, nome: 'RedLabel', valor: 75, desc: 'Blended scotch whisky 8 Anos - 40% Teor Alcoolico - 750ML'               },
    { id: 3, nome: 'Royal Salut', valor: 900, desc: 'Whisky Chivas Royal Salute 21 anos Azul 700 ml - 40% Teor Alcoolico' },
    { id: 4, nome: 'Passaport', valor: 50, desc: 'Whisky Escoces 900ML - 40% Teor Alcoolico'                              },
    { id: 5, nome: 'Chivas', valor: 130, desc: 'Whisky Escoces 12 Anos 750ML - 40% Teor Alcoolico'                        }
  ]
  
  public gins = [
    { id: 1, nome: 'Bombay Sapphire', valor: 110, desc: 'Garrafa de Gin  Inglês Bombay Sapphire 750 ml - 47% Teor Alcoolico'  },
    { id: 2, nome: 'Tanqueray', valor: 100, desc: 'Tanqueray London Dry Gin 750 ml - 47% Teor Alcoolico'                      },
    { id: 3, nome: 'Larios', valor: 60, desc: 'Gin Larios Ginebra Mediterránea London Dry 700 ml - 37% Teor Alcoolico'        },
    { id: 4, nome: 'Gordons', valor: 70, desc: 'Gin Gordons London Dry 750 ml - 43% Teor Alcoolico'                           }
  ]

  public vinhos = [
    { id: 1, nome: 'Paschoeto', valor: 10, desc: 'Vinho tinto suave 880ML - 10.6% Teor Alcoolico'                       },
    { id: 2, nome: 'Porto Mouro', valor: 15, desc: 'Vinho Porto Mouro Tinto Seco 750ML - 10.5% Teor Alcoolico'          },
    { id: 3, nome: 'Quinta do Morgado', valor: 15, desc: 'Vinho tinto suave 750ML - 11% Teor Alcoolico'                 },
    { id: 4, nome: 'Chardonnay', valor: 50, desc: 'Vinho Santa Helena Reservado Chardonnay 750ML - 12% Teor Alcoolico'  }
  ]

  public vodkas = [
    { id: 1, nome: 'Absolut', valor: 90, desc: 'Garrafa de Absolut Vodka 1L - 40% Teor Alcoolico'                       },
    { id: 2, nome: 'SKYY', valor: 50, desc: 'Garrafa de SKYY Vodka 980ML - 40$ Teor Alcoolico'                          },
    { id: 3, nome: 'Askov Vermelha', valor: 15, desc: 'Garrafa de Askov Frutas Vermelhas 980ML - 13.5% Teor Alcoolico'  },
    { id: 4, nome: 'Askov Roxa', valor: 15, desc: 'Garrafa de Askov Frutas Roxas 980ML - 13.5% Teor Alcoolico'          }
  ]
  
  public formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  //public cCaminho = '../../assets/img/';


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
      case 'Vinhos':
        this.bebidas = this.vinhos;
        break;
      case 'Vodkas':
        this.bebidas = this.vodkas;
        break;  
      }
  }

}
