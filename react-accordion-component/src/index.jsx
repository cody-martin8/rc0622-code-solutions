import React from 'react';
import ReactDOM from 'react-dom/client';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, index) {
    if (index === this.state.isClicked) {
      return this.setState({ isClicked: null });
    }
    this.setState({ isClicked: index });
  }

  render() {
    let hidden;

    const Pokemon = props => {
      if (props.index === this.state.isClicked) {
        hidden = '';
      } else {
        hidden = 'hidden';
      }
      const { name, description } = props.value;
      return (
        <li>
          <div className="container" onClick={event => this.handleClick(event, props.index)}>
            <h1>{ name }</h1>
          </div>
          <div className={`container ${hidden}`}>
            <p>{ description }</p>
          </div>
        </li>
      );
    };

    const pokedex = this.props.pokedex;
    const monsters = pokedex.map((pokemon, index) =>
      <Pokemon key={index} value={pokemon} index={index}/>
    );
    return (
      <ul>{monsters}</ul>
    );
  }
}

const pokedex = [
  { name: 'Bulbasaur', description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.' },
  { name: 'Charmander', description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.' },
  { name: 'Squirtle', description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.' },
  { name: 'Pikachu', description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.' },
  { name: 'Jigglypuff', description: 'Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.' }
];

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<Accordion pokedex={pokedex} />);
