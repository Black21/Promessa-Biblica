import React, { Component } from 'react';
import './estilo.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''

    };
    this.Ler = this.Ler.bind(this);

    this.frases = [
      "Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens, Colossenses 3:23",

      "O que as suas mãos tiverem que fazer, que o façam com toda a sua força, pois na sepultura, para onde você vai, não há atividade nem planejamento, não há conhecimento nem sabedoria. Eclesiastes 9:10" ,
      "Tudo posso naquele que me fortalece. Filipenses 4:13",

      "Portanto, também nós, uma vez que estamos rodeados por tão grande nuvem de testemunhas, livremo-nos de tudo o que nos atrapalha e do pecado que nos envolve e corramos com perseverança a corrida que nos é proposta, tendo os olhos fitos em Jesus, autor e consumador da nossa fé. Ele, pela alegria que lhe fora proposta, suportou a cruz, desprezando a vergonha, e assentou-se à direita do trono de Deus. Pensem bem naquele que suportou tal oposição dos pecadores contra si mesmo, para que vocês não se cansem nem desanimem. Hebreus 12:1-3",

      "Irmãos, não penso que eu mesmo já o tenha alcançado, mas uma coisa faço: esquecendo-me das coisas que ficaram para trás e avançando para as que estão adiante, prossigo para o alvo, a fim de ganhar o prêmio do chamado celestial de Deus em Cristo Jesus. Filipenses 3:13-14",

      "pois é Deus quem efetua em vocês tanto o querer quanto o realizar, de acordo com a boa vontade dele. Filipenses 2:13",

      "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. Jeremias 29:11",

      "Mil poderão cair ao seu lado; dez mil, à sua direita,mas nada o atingirá. Salmos 91:7",

      "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará'.Deuteronômio 31:6",

      "E eu farei o que vocês pedirem em meu nome, para que o Pai seja glorificado no Filho. O que vocês pedirem em meu nome, eu farei. João 14:13-14"
      ];
  }

  Ler() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
    this.setState(state);

  }

  render() {
    return (
      <div className='container'>
        <img src={require('./assets/promessacx.png')} className="img" />
        <Botao nome="Ler a palavra" acaoBtn={this.Ler} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>

    );
  }
}
class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}> {this.props.nome}</button>

      </div>
    );

  }

}

export default App;
