<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar">
      <img src="@/assets/img/gymbulls-removebg-preview.png" alt="Logo" class="logo">
      <div class="nav-buttons">
        <button @click="scrollTo('inicio')">Inicio</button>
        <button @click="scrollTo('sobre-nosotros')">Sobre Nosotros</button>
        <button @click="scrollTo('')"><a href="/errorPage.html" class="btn">Contacto</a></button>
      </div>
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
        <RouterLink to="/home/login">
          <button class="dashboard-btn">¡Inicia sesión!</button>
        </RouterLink>
      </div>
    </section>

    <!-- SECCIÓN SOBRE NOSOTROS -->
    <section id="sobre-nosotros" class="sobre-nosotros-section">
      <div class="sobre-nosotros-content">
        <h2 class="sobre-nosotros-title">¿Por qué elegirnos?</h2>
        <p class="sobre-nosotros-description">
          En Gym Bulls, contamos con entrenadores expertos, equipos de última tecnología, y un ambiente de motivación
          continua para ayudarte a lograr tus objetivos.
        </p>
        <div class="values-container">
          <div class="value-item" data-img="/src/assets/img/img1.jpg">
            <h3>Entrenadores Expertos</h3>
            <p>Contamos con un equipo altamente capacitado, listo para brindarte un entrenamiento personalizado.</p>
          </div>
          <div class="value-item" data-img="/src/assets/img/amigas.jpg">
            <h3>Ambiente Motivador</h3>
            <p>Te ofrecemos un espacio donde te sentirás motivado y apoyado por otros miembros y entrenadores.</p>
          </div>
          <div class="value-item" data-img="/src/assets/img/img3.jpg">
            <h3>Resultados Reales</h3>
            <p>Nos enfocamos en resultados tangibles, con programas de entrenamiento diseñados para maximizar tu
              rendimiento.</p>
          </div>
        </div>
      </div>
    </section>

    <div>
      <div class="triangle-container">
        <div class="triangle"></div>
        <img src="/src/assets/img/gymbulls-removebg-preview.png" alt="Logo" class="triangle-logo">
      </div>
    </div>


    <!-- CARRUSEL -->
    <div class="carousel-section" id="carrusel">
      <div class="carousel-container">
        <Carousel :autoplay="3000" :wrap-around="true">
          <Slide v-for="(img, index) in images" :key="index">
            <img :src="img" alt="Imagen de carrusel" class="carousel-image">
          </Slide>
        </Carousel>

        <!-- Rectángulo con texto sobre el carrusel -->
        <div class="carousel-overlay">
          <div class="carousel-text">Bienvenido a Gym Bulls: Donde la Fuerza y la Disciplina Se Encuentran.🔥🏋️‍♂️
          </div>
          <br>
          <p class="inicio-description">
            Transforma tu cuerpo, fortalece tu mente y supera tus límites con nosotros. Contamos con entrenadores
            expertos,
            equipos de última generación y un ambiente que te impulsa a dar siempre lo mejor. <br>¡Únete al equipo y
            conquista tus metas!"
          </p>
        </div>

      </div>
    </div>

    <!-- Renderiza las rutas dinámicas -->
    <router-view></router-view>
    <!-- FOOTER -->
    <footer class="footer">
    <div class="footer-content">
      <h2 class="footer-title">Gym <span>Bulls</span></h2>
      <p>© 2025 Gym Bulls. Todos los derechos reservados.</p>
      <div class="social-icons">
        <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import '@fortawesome/fontawesome-free/css/all.min.css'


export default defineComponent({
  components: { Carousel, Slide },
  setup() {
    const images = [
      "/src/assets/img/img1.jpg",
      "/src/assets/img/img2.jpg",
      "/src/assets/img/img3.jpg",
      "/src/assets/img/img4.jpg",
      "/src/assets/img/pexels-victorfreitas-841130.jpg",
      "/src/assets/img/img5.jpg",
    ];

    const valueItems = ref([]);

    // Manejar la animación al pasar el mouse
    const handleMouseEvent = (event, img) => {
      if (event.type === "mouseenter") {
        event.target.style.backgroundImage = `url(${img})`;
        event.target.style.backgroundSize = "cover";
        event.target.style.backgroundPosition = "center";
        event.target.style.color = "transparent";
      } else {
        event.target.style.backgroundImage = "none";
        event.target.style.color = "white";
      }
    };

    onMounted(() => {
      valueItems.value = document.querySelectorAll(".value-item");
      valueItems.value.forEach((item) => {
        item.addEventListener("mouseenter", (e) =>
          handleMouseEvent(e, item.dataset.img)
        );
        item.addEventListener("mouseleave", handleMouseEvent);
      });
    });

    return {
      images,
      scrollTo(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      },
    };
  },
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
  font-size: 65px;
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
  background-color: red;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 32px;
}

/* Sección Sobre Nosotros */
.sobre-nosotros-section {
  background: linear-gradient(135deg, #000000, #a81313);
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
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
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
}

/* Contenedor del carrusel con posición relativa */
.carousel-container {
  position: relative;
}

/* Estilo para las imágenes del carrusel */
.carousel-image {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

/* Rectángulo con texto sobre el carrusel */
.carousel-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.683);
  /* Fondo oscuro */
  color: white;
  padding: 20px 40px;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
  z-index: 10;
  /* Asegura que el texto esté sobre el carrusel */
  text-align: center;
}


/* Estilos para el triángulo y logo */
.triangle-container {
  position: absolute;
  right: 0px;
  /* Cambiado de right a left */
  top: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.triangle {
  width: 0;
  height: 0;
  border-top: 250px solid transparent;
  /* Aumentado tamaño */
  border-bottom: 250px solid transparent;
  border-right: 350px solid rgba(255, 255, 255, 0.189);
  /* Apunta en la dirección contraria */
}

.triangle-logo {
  position: absolute;
  top: 50%;
  right: -50px;
  /* Ajustado para que se posicione mejor */
  transform: translateY(-50%);
  width: 450px;
  /* Más grande */
  height: auto;
}

/* Footer */
.footer {
  background: black;
  color: white;
  text-align: center;
  padding: 30px 20px;
  font-family: Arial, sans-serif;
  animation: fadeInUp 1s ease;
}

.footer-content {
  max-width: 600px;
  margin: 0 auto;
}

.footer-title {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
}

.footer-title span {
  color: red; /* Color de acento si quieres resaltar "Bulls" */
}

.social-icons {
  margin-top: 15px;
}

.social-icons a {
  color: white;
  margin: 0 10px;
  font-size: 20px;
  transition: transform 0.3s, color 0.3s;
}

.social-icons a:hover {
  color: red;
  transform: scale(1.2);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
