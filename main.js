
// Gộp tất cả các xử lý cuộn trang vào một hàm duy nhất
window.onscroll = function() {
    scrollFunction();
    showBackToTopButton();
};

// Hàm thu nhỏ menu khi cuộn trang
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "25px 40px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "40px 10px";
        document.getElementById("logo").style.fontSize = "35px";
    }
}

// Hiển thị nút back-to-top khi cuộn trang
function showBackToTopButton() {
    let backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Cuộn lên đầu trang với hiệu ứng mượt mà
function scrollToTop(duration) {
    const start = document.documentElement.scrollTop || document.body.scrollTop;
    const startTime = performance.now();

    function scrollStep(timestamp) {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easing = easeInOutQuad(progress);
        document.documentElement.scrollTop = document.body.scrollTop = start * (1 - easing);

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(scrollStep);
}

// Cuộn lên đầu trang khi nhấn nút back-to-top
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    scrollToTop(1000); // Thay đổi 1000ms để điều chỉnh thời gian cuộn lên
});

// Cuộn trượt xuống ở ảnh bìa
function scrollDown() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Mở ảnh cá nhân
var modal = document.getElementById("myModal");
var img = document.getElementById("imgme");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var navbar = document.getElementById("navbar");

img.onclick = function() {
    modal.style.display = "block";
    navbar.style.display = "none"; // Ẩn navbar
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
    navbar.style.display = "flex"; // Hiển thị lại navbar
}

// Tự động đi đến mục đã chọn
document.getElementById("skill-menu").addEventListener("click", function() {
    const skillSection = document.getElementById("skill");
    skillSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.getElementById("home-menu").addEventListener("click", function() {
    const homeSection = document.getElementById("home");
    homeSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.getElementById("about-menu").addEventListener("click", function() {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.getElementById("resume-menu").addEventListener("click", function() {
    const resumeSection = document.getElementById("resume");
    resumeSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.getElementById("contact-menu").addEventListener("click", function() {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});