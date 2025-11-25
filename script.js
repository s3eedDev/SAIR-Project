document.querySelectorAll('.nav-sections a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // يمنع التنقل المفاجئ
    const targetId = this.getAttribute('href'); // يأخذ الـ id من الرابط
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 80, // يطرح ارتفاع النافبار
      behavior: 'smooth' // الحركة السلسة
    });
  });
});// Smooth Scrolling for Navbar Links

// More Button Functionality START // 

// تحديد كل الأزرار الخاصة بالـMore
const moreButtons = document.querySelectorAll('.more-btn');

moreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const box = button.closest('.Box'); // يجيب أقرب بوكس
    const moreInfo = box.querySelector('.more-info'); // النص الإضافي

    if (moreInfo.style.display === 'block') {
      moreInfo.style.display = 'none';
      button.textContent = 'More';
    } else {
      moreInfo.style.display = 'block';
      button.textContent = 'Less';
    }
  });
});
// More Button Functionality END // 

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    const position = sec.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 150) {
      sec.classList.add('show');
    }
  });
}); // تأثير الظهور عند التمرير


const sendButton = document.querySelector('.ContactSection button');
sendButton.addEventListener('click', () => {
  alert('Your message has been sent successfully!');
}); // رسالة تأكيد عند الضغط على زر الإرسال


