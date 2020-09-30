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
            <b-tabs card fill no-fade>
              <b-tab no-body title="Carta">
                <div>
                  <b-card-img :src="card.imageSrc" :alt="card.title"></b-card-img>
                </div>
              </b-tab>
              <b-tab no-body title="Descripción">
                <b-card
                  overlay
                  :img-src="card.imageSrc"
                  :img-alt="card.title"
                  class="card-back"
                >
                  <div class="text-center">
                    <b-card-title> {{ card.order }} </b-card-title>
                    <b-card-sub-title> {{ card.title }} </b-card-sub-title>
                    <b-card-text> {{ card.description }} </b-card-text>
                  </div>
                </b-card>
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