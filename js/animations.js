const fadeIns = document.querySelectorAll('.session-3');
var listImg = document.querySelectorAll('.lit');

function checkScroll() {
  fadeIns.forEach(fadeIn => {
    const fadeInTop = fadeIn.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (fadeInTop < windowHeight - 100) {
      fadeIn.classList.add('show'); // Hiện phần tử khi nó ở trong khung nhìn
    }
  });
}

// Lắng nghe sự kiện cuộn
window.addEventListener('scroll', checkScroll);

// Kích hoạt kiểm tra khi trang vừa tải
checkScroll();