import Deck from './deck-01.js';

const Component = {
  name: 'app',

  data() {
    return {
      cards: Deck,
    };
  },

  methods: {
  },

  template: `<div>
    <b-container>

      <b-row>
        <b-col md="4" v-for="card of cards">
          <b-card
            :img-alt="card.title"
            no-body
            class="shadow mt-3"
          >
            <b-card-body>
              <div>
                <b-card-img :src="card.imageSrc"></b-card-img>
              </div>
              <div>
                <b-card-title class="text-center">{{ card.order }} {{ card.title }}</b-card-title>
                <b-card-text class="text-center">{{ card.description }}</b-card-text>
              </div>
            </b-card-body>
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