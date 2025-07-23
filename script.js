// Event: Button Click
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('You clicked the button! ');
});

// Event: Change Button Color
document.getElementById('colorBtn').addEventListener('click', () => {
  document.body.style.backgroundColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16);
});

// Event: Hover
document.getElementById('hoverPara').addEventListener('mouseover', () => {
  document.getElementById('hoverPara').style.color = 'blue';
});
document.getElementById('hoverPara').addEventListener('mouseout', () => {
  document.getElementById('hoverPara').style.color = 'black';
});

// Event: Keypress
document.addEventListener('keypress', (e) => {
  document.getElementById('keypressOutput').textContent =
    `You typed: ${e.key}`;
});

// Bonus: Double-click
document.getElementById('secretBox').addEventListener('dblclick', () => {
  alert(' Secret revealed! ');
});

// Slideshow Logic
const images = [
  'https://via.placeholder.com/300?text=1',
  'https://via.placeholder.com/300?text=2',
  'https://via.placeholder.com/300?text=3'
];
let imgIndex = 0;
document.getElementById('nextBtn').addEventListener('click', () => {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById('galleryImg').src = images[imgIndex];
});

// Accordion
const titles = document.querySelectorAll('.accordion-title');
titles.forEach((title) => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Form Validation
document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  let valid = true;

  if (!email.value.includes('@')) {
    document.getElementById('emailFeedback').textContent = 'Invalid email';
    valid = false;
  } else {
    document.getElementById('emailFeedback').textContent = '';
  }

  if (password.value.length < 8) {
    document.getElementById('passwordFeedback').textContent =
      'Password must be at least 8 characters';
    valid = false;
  } else {
    document.getElementById('passwordFeedback').textContent = '';
  }

  if (valid) {
    alert('Form submitted successfully!');
  }
});

// Real-time Feedback
document.getElementById('password').addEventListener('input', (e) => {
  const val = e.target.value;
  if (val.length < 8) {
    document.getElementById('passwordFeedback').textContent = 'Too short';
  } else {
    document.getElementById('passwordFeedback').textContent = 'Looking good!';
  }
});
