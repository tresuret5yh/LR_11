<template>
  <div class="home">
    <section class="hero">
      <h1>Добро пожаловать в TechSolutions</h1>
      <p>Ваш надежный партнер в digital-решениях</p>
      <router-link to="/services" class="cta-button">Наши услуги</router-link>
    </section>

    <section class="features">
      <div class="feature-card">
        <h3>Инновации</h3>
        <p>Используем передовые технологии</p>
      </div>
      <div class="feature-card">
        <h3>Опыт</h3>
        <p>12 лет на рынке IT-услуг</p>
      </div>
      <div class="feature-card">
        <h3>Надежность</h3>
        <p>Гарантия качества</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #42b983, #35495e);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  background: white;
  color: #42b983;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.feature-card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}
</style>