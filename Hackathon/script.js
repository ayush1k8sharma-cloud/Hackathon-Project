
document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      
      // Animate hamburger icon
      navToggle.style.transform = expanded ? 'rotate(0deg)' : 'rotate(90deg)';
    });
  }

  // Close mobile menu when clicking on links
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.style.transform = 'rotate(0deg)';
      }
    });
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
  animatedElements.forEach(el => observer.observe(el));

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.site-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.style.background = 'rgba(15, 23, 36, 0.95)';
      header.style.backdropFilter = 'blur(20px)';
    } else {
      header.style.background = 'linear-gradient(135deg, #0f1724 0%, #1e293b 100%)';
      header.style.backdropFilter = 'blur(10px)';
    }

    // Hide/show header on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
  });

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }

  // Add loading animation
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    document.body.style.opacity = '1';
  }, 100);

  const y = new Date().getFullYear();
  if (document.getElementById('year')) document.getElementById('year').textContent = y;

  // Initialize workout categories if on workouts page
  if (document.querySelector('.workout-categories')) {
    // Make sure cardio is shown by default
    const cardioCategory = document.getElementById('cardio');
    if (cardioCategory) {
      cardioCategory.style.display = 'block';
    }
    
    // Set cardio tab as active
    const cardioTab = document.querySelector('[onclick="showCategory(\'cardio\')"]');
    if (cardioTab) {
      cardioTab.classList.add('active');
    }
  }
});

function calculateBMI() {
  const w = parseFloat(document.getElementById('weight').value);
  const hcm = parseFloat(document.getElementById('height').value);
  const resultEl = document.getElementById('bmiResult');
  if (!w || !hcm) {
    resultEl.textContent = 'Please enter valid weight and height.';
    return;
  }
  const h = hcm / 100;
  const bmi = w / (h * h);
  const rounded = Math.round(bmi * 10) / 10;
  let category = '';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal weight';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  resultEl.textContent = `Your BMI is ${rounded} — ${category}.`;
}

function submitContact(e) {
  e.preventDefault();
  const name = document.getElementById('cname').value.trim();
  const email = document.getElementById('cemail').value.trim();
  const message = document.getElementById('cmessage').value.trim();
  const status = document.getElementById('contactStatus');

  if (!name || !email || !message) {
    status.textContent = 'Please fill all fields.';
    return;
  }

  status.textContent = 'Thank you! Your message has been received.';

  document.getElementById('cname').value = '';
  document.getElementById('cemail').value = '';
  document.getElementById('cmessage').value = '';
}

function selectPlan(planName) {
  alert(`You selected the ${planName} plan.`);
}

function calculateCalories() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const age = parseFloat(document.getElementById('age').value);
  const activity = parseFloat(document.getElementById('activity').value);
  const resultEl = document.getElementById('calorieResult');
  
  if (!weight || !height || !age) {
    resultEl.textContent = 'Please enter valid weight, height, and age.';
    resultEl.style.display = 'block';
    return;
  }
  
  // Calculate BMR using Mifflin-St Jeor Equation
  // For men: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) + 5
  // For women: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) - 161
  // Using average values for demonstration (assuming male)
  const bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  const tdee = Math.round(bmr * activity);
  
  // Calculate calorie goals
  const maintenance = tdee;
  const weightLoss = Math.round(tdee - 500);
  const weightGain = Math.round(tdee + 500);
  
  resultEl.innerHTML = `
    <strong>Your Daily Calorie Needs:</strong><br>
    <span style="color: #2ecc71;">• Maintenance: ${maintenance} calories/day</span><br>
    <span style="color: #e74c3c;">• Weight Loss: ${weightLoss} calories/day</span><br>
    <span style="color: #3498db;">• Weight Gain: ${weightGain} calories/day</span><br>
    <small style="color: #7f8c8d; margin-top: 10px; display: block;">
      Based on your activity level: ${document.getElementById('activity').selectedOptions[0].text}
    </small>
  `;
  resultEl.style.display = 'block';
}

function showCategory(category) {
  // Hide all video categories
  const categories = document.querySelectorAll('.video-category');
  categories.forEach(cat => {
    cat.style.display = 'none';
  });
  
  // Remove active class from all tabs
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Show selected category
  const selectedCategory = document.getElementById(category);
  if (selectedCategory) {
    selectedCategory.style.display = 'block';
    selectedCategory.style.animation = 'fadeInUp 0.6s ease-out';
  }
  
  // Add active class to clicked tab
  const activeTab = document.querySelector(`[onclick="showCategory('${category}')"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
}

