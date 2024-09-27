document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('#sidebar ul li');
    const sections = document.querySelectorAll('section');

    // 메뉴 항목 클릭 시 부드러운 스크롤과 active 클래스 적용
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(li => li.classList.remove('active'));
            this.classList.add('active');
            
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 스크롤 이벤트 감지하여 현재 섹션에 따라 메뉴 항목 활성화
    window.addEventListener('scroll', function() {
        let currentSection = '';

        // 각 섹션의 위치를 확인
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        // 사이드바 메뉴의 활성화 상태 변경
        menuItems.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('data-section') === currentSection) {
                li.classList.add('active');
            }
        });
    });
});
