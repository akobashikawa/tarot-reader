var app = new Vue({
  el: '#app',

  data() {
    return {
      cards: [],
    };
  },

  template: `<div>
    <b-container>
      <h1>Tarot Reader</h1>

      <h2>Cartas</h2>

      <b-row>
        <b-col sm="4">
          <b-card
            title="El Loco"
            img-src="img/maj00.jpg"
            img-alt="El Loco"
            img-top
          >
            <b-card-text>Una persona inocente y buena al inicio de un viaje.</b-card-text>
          </b-card>
        </b-col>
      </b-row>

    </b-container>
  </div>`
});