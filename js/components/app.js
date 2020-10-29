const Component = {
  name: 'app',

  data() {
    return {
    };
  },

  methods: {
  },

  template: `<div class="app-box">
    <header>
      <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
        <b-navbar-brand href="#">
          <b-button variant="secondary" v-b-toggle.sidebar-menu>Tarot Reader</b-button>
        </b-navbar-brand>

        <b-sidebar id="sidebar-menu" title="Menú" bg-variant="light" text-variant="dark" backdrop shadow>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item route to="/">Inicio</b-nav-item>
              <b-nav-item route to="/cartas">Cartas</b-nav-item>
              
              <div style="border-bottom: 1px solid #abe;"></div>
              <b-nav-item route to="/configuracion">Configuración</b-nav-item>
              <b-nav-item route to="/acerca">Acerca de</b-nav-item>
            </b-nav>
          </nav>
        </b-sidebar>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item route to="/"></b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item><span></span></b-nav-item>
            </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <main style="margin-top:64px;">
        <router-view></router-view>
    </main>

    <footer>
        <div class="text-center my-3">
            <small>Tarot Reader - 2020 - Rulo Kobashikawa</small>
        </div>
    </footer>
  </div>`,

};

export default Component;