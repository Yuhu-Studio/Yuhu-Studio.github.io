document.addEventListener("DOMContentLoaded", function() {
    // 모든 사이드바 메뉴 항목 가져오기
    const menuItems = document.querySelectorAll('#sidebar ul li');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 클릭된 항목에 'active' 클래스 추가, 나머지는 제거
            menuItems.forEach(li => li.classList.remove('active'));
            this.classList.add('active');

            // 해당 섹션으로 부드럽게 스크롤
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
