<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar">
      <img src="/src/assets/img/gymbulls-removebg-preview.png" alt="Logo" class="logo">
      <div class="nav-buttons">
        <button @click="scrollTo('inicio')">Inicio</button>
        <button @click="scrollTo('sobre-nosotros')">Sobre Nosotros</button>
        <button>Contacto</button>
      </div>
      <button class="logout-btn">Cerrar sesión</button>
    </nav>

    <!-- SECCIÓN INICIO -->
    <section id="inicio" class="inicio-section">
      <div class="overlay"></div>
      <img src="/src/assets/img/pexels-leonardho-1552249.jpg" class="background-image">
      <div class="inicio-content">
        <h1 class="inicio-title">
          Fortalece tu <br>
          cuerpo con <br>
          profesionales
        </h1>
        <p class="inicio-description">
          ¡Entrena como un profesional! Mejora tu salud y resistencia con nuestros programas de Training, Gym y más.
        </p>
        <RouterLink to="/home/Menu">
          <button class="dashboard-btn">Ir al Menu</button>
        </RouterLink>
      </div>
      <div class="inicio-image-wrapper">
        <div class="inicio-overlay"></div>
        <img src="/src/assets/img/gymbulls-removebg-preview.png" class="inicio-image">
      </div>
    </section>

    <!-- SECCIÓN SOBRE NOSOTROS -->
  <section id="sobre-nosotros" class="sobre-nosotros-section">
  <h2 class="sobre-nosotros-title">¿Por qué elegirnos?</h2>
  <p class="sobre-nosotros-description">Entrenadores expertos, resultados reales y un ambiente que te motiva a superarte cada día.</p>
  <div class="sobre-nosotros-content">
    <div class="sobre-nosotros-list">
      <div class="row-top">
        <p>✔ Planes Personalizados</p>
        <p>✔ Instalaciones de Primera</p>
      </div>
      <div class="row-bottom">
        <p>✔ Soporte 24/7</p>
        <p>✔ Resultados Garantizados</p>
      </div>
    </div>
    <div class="sobre-nosotros-images">
      <img src="./GymFrontEnd/src/assets/img/pexels-leonardho-1552242.jpg" class="image">
      <img src="./GymFrontEnd/src/assets/img/pexels-leonardho-1552249.jpg" class="image">
      <img src="./GymFrontEnd/src/assets/img/pexels-willpicturethis-1954524.jpg" class="image">
    </div>
  </div>
</section>
  <!-- 👇 Aquí se renderizará el Dashboard -->
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: transparent;
  z-index: 10;
}

.logo {
  height: 80px;
}

.nav-buttons {
  display: flex;
  gap: 24px;
  color: white;
  font-size: 18px;
}

.nav-buttons button {
  background: none;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.logout-btn {
  background-color: red;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}

/* Sección Inicio */
.inicio-section {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  padding-left: 16px;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgb(112, 112, 112);
  opacity: 0.5;
}

.background-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.inicio-content {
  position: relative;
  z-index: 10;
  max-width: 400px;
}

.inicio-title {
  font-size: 60px;
  font-weight: bold;
  color: antiquewhite;
  line-height: 1.2;
  padding-left: 32px;
}

.inicio-description {
  font-size: 15px;
  margin-top: 16px;
  color: white;
  font-weight: 300;
  padding-left: 32px;
}

.dashboard-btn {
  margin-top: 24px;
  padding: 12px 24px;
  background-color: blue;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 32px;
}

/* Imagen y overlay de la sección inicio */
.inicio-image-wrapper {
  position: absolute;
  right: 16px;
  top: 33%;
  opacity: 0.6;
}

.inicio-overlay {
  position: relative;
  width: 256px;
  height: 256px;
  background-color: white;
  opacity: 0.2;
  transform: rotate(45deg);
}

.inicio-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Sección Sobre Nosotros */
.sobre-nosotros-section {
  background-color: white;
  text-align: center;
  padding: 64px 0;
}

.sobre-nosotros-title {
  font-size: 36px;
  font-weight: bold;
}

.sobre-nosotros-description {
  font-size: 18px;
  margin-top: 8px;
}

.sobre-nosotros-content {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  gap: 40px;
}

.sobre-nosotros-list {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 32px;
}

.sobre-nosotros-list p {
  font-size: 20px;
  font-weight: 600;
}

.row-top,
.row-bottom {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.sobre-nosotros-images {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
}

.image {
  width: 160px;
  height: 160px;
  object-fit: cover;
}

.image-bottom {
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 192px;
  height: 192px;
  object-fit: cover;
}
</style>