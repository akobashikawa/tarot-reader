import Deck from './deck-01.js';

const Component = {
  name: 'app',

  data() {
    return {
      cards: Deck,
    };
  },

  template: `<div>
    <b-container>
      <h1>Tarot Reader</h1>

      <h2>Cartas</h2>

      <b-row>
        <b-col md="4" v-for="card of cards">
          <b-card
            :title="card.order + ': ' + card.title"
            :img-src="card.imageSrc"
            :img-alt="card.title"
            img-top
            class="shadow mb-2"
          >
            <b-card-text>{{ card.description }}</b-card-text>
          </b-card>
        </b-col>
      </b-row>

    </b-container>

    <footer class="text-center mt-3">
      <small>Tarot Reader - 2020 - Rulo Kobashikawa</small>
    </footer>
  </div>`
};

export default Component;