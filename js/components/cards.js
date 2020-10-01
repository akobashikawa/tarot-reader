import Deck from './deck-01.js';

const Component = {
  name: 'cards',

  data() {
    return {
      cards: Deck,
      showTags: ['mayor', 'bastos', 'espadas', 'copas', 'oros'],
    };
  },

  computed: {
    cardsList() {
      const items = Deck.filter(card => this.showTags.some(x => card.tags.includes(x)));
      return items;
    },
  },

  template: `<div>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-form-group label="Mostrar">
            <b-form-checkbox-group
              id="checkbox-show-options"
              v-model="showTags"
              name="checkbox-show-options"
            >
              <b-form-checkbox value="mayor">Arcana Mayor</b-form-checkbox>
              <b-form-checkbox value="bastos">Bastos</b-form-checkbox>
              <b-form-checkbox value="espadas">Espadas</b-form-checkbox>
              <b-form-checkbox value="copas">Copas</b-form-checkbox>
              <b-form-checkbox value="oros">Oros</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" v-for="card of cardsList" style="display: flex;">
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
  </div>`,
};

export default Component;