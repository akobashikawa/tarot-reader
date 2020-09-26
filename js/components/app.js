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
        <b-col md="4" v-for="card of cards" style="display: flex;">
          <b-card
            no-body
            class="shadow mt-3"
          >
            <b-tabs card fill>
              <b-tab no-body title="Carta">
                <div>
                  <b-card-img :src="card.imageSrc" :alt="card.title"></b-card-img>
                </div>
              </b-tab>
              <b-tab title="Descripción">
                <div>
                  <b-card-title class="text-center">{{ card.order }} <br> {{ card.title }}</b-card-title>
                  <b-card-text class="text-center">{{ card.description }}</b-card-text>
                </div>
              </b-tab>
            </b-tabs>
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