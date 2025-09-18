document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
});

function loadNavbar() {
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#app">
                    <i class="bi bi-scales me-2"></i>Prometeo
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#servicios">
                                <i class="bi bi-briefcase me-1"></i>Servicios
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#tarifas">
                                <i class="bi bi-calculator me-1"></i>Tarifas
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="bi bi-info-circle me-1"></i>Nosotros
                            </a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link btn btn-success" href="https://wa.me/51988206648?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20los%20servicios%20legales%20que%20brinda%20Prometeo." target="_blank">
                                <i class="bi bi-whatsapp me-1"></i>Contáctanos
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    } else {
        console.error('No se encontró el elemento con id "navbar-container"');
    }
}