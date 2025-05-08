<template>
    <div class="services">
      <h2>Наши услуги</h2>
      
      <div class="service-list">
        <div v-for="service in services" :key="service.id" class="service-card">
          <div class="service-icon">
            <span>{{ service.icon }}</span>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <p class="price">{{ service.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          { id: 1, title: 'Веб-разработка', description: 'Создание современных веб-приложений', price: 'от 50 000 ₽', icon: '💻' },
          { id: 2, title: 'Мобильные приложения', description: 'Разработка под iOS и Android', price: 'от 100 000 ₽', icon: '📱' },
          { id: 3, title: 'UI/UX Дизайн', description: 'Создание удобных интерфейсов', price: 'от 30 000 ₽', icon: '🎨' },
          { id: 4, title: 'SEO продвижение', description: 'Повышение видимости в поисковиках', price: 'от 20 000 ₽/мес', icon: '🔍' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .service-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .service-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    text-align: center;
  }
  
  .service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .price {
    font-weight: bold;
    color: #42b983;
    margin-top: 1rem;
  }
  </style>