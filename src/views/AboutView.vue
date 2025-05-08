<template>
    <div class="about">
      <h2>О нашей компании</h2>
      
      <div class="history">
        <h3>Наша история</h3>
        <p>Основанная в 2013 году, наша компания начинала с маленькой команды из 3 человек. Сегодня у нас более 50 специалистов.</p>
      </div>
  
      <div class="team">
        <h3>Наша команда</h3>
        <div class="team-grid">
          <div v-for="member in team" :key="member.id" class="team-member">
            <img :src="member.photo" :alt="member.name">
            <h4>{{ member.name }}</h4>
            <p>{{ member.position }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        team: [
          { id: 1, name: 'Алексей Петров', position: 'CEO', photo: 'https://via.placeholder.com/150' },
          { id: 2, name: 'Мария Иванова', position: 'CTO', photo: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Иван Сидоров', position: 'Дизайнер', photo: 'https://via.placeholder.com/150' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
  }
  
  .team-member {
    text-align: center;
  }
  
  .team-member img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  </style>