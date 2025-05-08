<template>
    <div class="contacts">
      <h2>Свяжитесь с нами</h2>
      
      <div class="contact-container">
        <div class="contact-info">
          <h3>Контактная информация</h3>
          <p><strong>Адрес:</strong> г. Томск, ул. Учебная, 123</p>
          <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
          <p><strong>Email:</strong> info@techsolutions.ru</p>
          
          <div class="social-links">
            <a href="#" class="social-icon">📱</a>
            <a href="#" class="social-icon">💬</a>
            <a href="#" class="social-icon">📧</a>
          </div>
        </div>
        
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Ваше имя</label>
            <input type="text" id="name" placeholder="Иван Иванов">
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="example@mail.com">
          </div>
          
          <div class="form-group">
            <label for="message">Сообщение</label>
            <textarea id="message" rows="5" placeholder="Ваше сообщение..."></textarea>
          </div>
          
          <button type="submit" class="submit-btn">Отправить</button>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    margin-top: 2rem;
  }
  
  .contact-info {
    background: #f5f5f5;
    padding: 2rem;
    border-radius: 8px;
  }
  
  .social-links {
    margin-top: 1rem;
  }
  
  .social-icon {
    display: inline-block;
    margin-right: 1rem;
    font-size: 1.5rem;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  input, textarea {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .submit-btn {
    background: #42b983;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  </style>