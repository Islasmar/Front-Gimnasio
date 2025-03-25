<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar">
      <img src="@/assets/img/gymbulls-removebg-preview.png" alt="Logo" class="logo">
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
      <img src="@/assets/img/pexels-leonardho-1552249.jpg" class="background-image">
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
          <button class="dashboard-btn">Ir al Menú</button>
        </RouterLink>
      </div>
    </section>

    <!-- SECCIÓN SOBRE NOSOTROS -->
    <section id="sobre-nosotros" class="sobre-nosotros-section">
      <div class="sobre-nosotros-content">
        <h2 class="sobre-nosotros-title">¿Por qué elegirnos?</h2>
        <p class="sobre-nosotros-description">
          En Gym Bulls, contamos con entrenadores expertos, equipos de última tecnología, y un ambiente de motivación continua para ayudarte a lograr tus objetivos. 
        </p>
        <div class="values-container">
          <div class="value-item">
            <h3>Entrenadores Expertos</h3>
            <p>Contamos con un equipo altamente capacitado, listo para brindarte un entrenamiento personalizado.</p>
          </div>
          <div class="value-item">
            <h3>Ambiente Motivador</h3>
            <p>Te ofrecemos un espacio donde te sentirás motivado y apoyado por otros miembros y entrenadores.</p>
          </div>
          <div class="value-item">
            <h3>Resultados Reales</h3>
            <p>Nos enfocamos en resultados tangibles, con programas de entrenamiento diseñados para maximizar tu rendimiento.</p>
          </div>
        </div>
      </div>
    </section>

        <!-- CARRUSEL -->
        <div class="carousel-section">
      <Carousel :autoplay="3000" :wrap-around="true">
        <Slide v-for="(img, index) in images" :key="index">
          <img :src="img" alt="Imagen de carrusel" class="carousel-image">
        </Slide>
      </Carousel>
    </div>

    <!-- Renderiza las rutas dinámicas -->
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: { Carousel, Slide },
  data() {
    return {
      images: [
        "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
        "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3838700/pexels-photo-3838700.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    };
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    },
    prevSlide() {
      this.$refs.carousel.prev();
    },
    nextSlide() {
      this.$refs.carousel.next();
    }
  }
});
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

/* Sección Sobre Nosotros */
.sobre-nosotros-section {
  background: linear-gradient(135deg, #9e1313, #a81313);
  color: white;
  text-align: center;
  padding: 80px 0;
}

.sobre-nosotros-title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 20px;
}

.sobre-nosotros-description {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.values-container {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
}

.value-item {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  text-align: left;
}

.value-item h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.value-item p {
  font-size: 16px;
  font-weight: 300;
}


/* Sección Carrusel */
.carousel-section {
  text-align: center;
  padding: 40px 0;
}

/* Estilo para las imágenes del carrusel */
.carousel-image {
  width: 40%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

</style>
