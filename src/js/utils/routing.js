    
export function initializeRouting(){
        console.log(1111111);
        
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams);
        
        const page = urlParams.get('page');
        console.log(page);
        

        const contentSection = document.getElementById('content-section-placeholder');
        const generalLook = document.getElementById('general-look-placeholder');

        if (page) {
                contentSection.classList.toggle('d-block', true);
                generalLook.classList.toggle('d-none', true);
        }
        else {
            // Default behavior if page is not 'myproject' or not present
                contentSection.classList.toggle('d-none', true);
                generalLook.classList.toggle('d-block', true);
        }
}