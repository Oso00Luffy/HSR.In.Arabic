document.addEventListener('DOMContentLoaded', function() {
    const root = document.documentElement;

    document.body.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'theme-toggle') {
            if (root.getAttribute('data-color-scheme') === 'dark') {
                root.setAttribute('data-color-scheme', 'light');
            } else {
                root.setAttribute('data-color-scheme', 'dark');
            }
        }
    });
});

function toggleLanguage() {
    const contentDiv = document.getElementById('content');
    const currentLanguage = contentDiv.getAttribute('lang');
    
    // Toggle between 'ar' (Arabic) and 'en' (English)
    const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    
    // Update the lang attribute of the content div
    contentDiv.setAttribute('lang', newLanguage);
    
    // Replace the content based on the new language
    if (newLanguage === 'ar') {
        contentDiv.innerHTML = '<p>هذا محتوى باللغة العربية.</p>';
    } else {
        contentDiv.innerHTML = '<p>This is some English content.</p>';
    }
}