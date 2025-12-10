
// Inicializar Ícones Lucide com segurança
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    } else {
        console.warn("Lucide library not loaded.");
    }
});

// --- RENTAL DATA (ALUGUÉIS COMUNS) ---
const rentalsData = [
    {
        title: "Quiosque com Churrasqueira",
        price: "R$ 70,00 / dia",
        description: "Localizados à beira do lago, no morro e em meio a natureza, são Quiosques com Churrasqueira, pia, mesas, bancos, chuveiro e luz (220 w). Para que você passe bons momentos com sua família, com todo o conforto que o Sítio proporciona.",
        features: [
            "Capacidade: Até 12 pessoas",
            "Disponível diariamente em alta temporada (reserva necessária)",
            "Churrasqueira, Pia, Mesa e Bancos",
            "Ponto de luz 220V",
            "Estacionamento disponível (cobrado à parte)"
        ],
        images: [
            "img/pis8.webp",
            "img/sp2.webp",
            
        ]
    },
    {
        title: "Hospedagem / Pousada",
        price: "A partir de R$ 140,00",
        description: "Hospedagem completa para aproveitar o parque por mais tempo.\n\nVALORES:\nSegunda a Sexta: R$ 140 por pessoa (Ingresso incluso).\nSábado e Domingo: R$ 160 por pessoa (Ingresso incluso).\n\nPacote para 2 dias e uma noite.\nCrianças até 4 anos não pagam. Crianças de 5 a 9 anos pagam meia.",
        features: [
            "Ingresso do parque incluso (2 dias)",
            "Cozinha c/ utensílios",
            "Banheiro privativo",
            "WI-FI e Ventilador de teto",
            "Roupa de cama não inclusa"
        ],
        images: [
            "img/p2.webp",
            "img/p3.webp",
            "img/p4.webp",
            "img/p5.webp"
        ]
    },
    {
        title: "Piscina Privativa",
        price: "Sob Consulta",
        description: "O Sítio do Beto Possui Três Espaços Privativos para Locação. O local ideal para sua confraternização e aniversário. Este espaço possui estrutura privilegiada com salão para até 40 pessoas, piscina privativa, cadeiras de sol, chuveiro, em uma área particular para seu evento.",
        features: [
            "Capacidade: 40 a 120 pessoas",
            "Piscina Privativa Exclusiva",
            "Salão Coberto com Churrasqueira, Pia, Mesas",
            "Geladeira para Armazenar Bebida com Gelo",
            "Banheiro Masculino e Feminino",
            "Guarda-Sóis e Cadeiras de sol"
        ],
        images: [
            "img/pis1.webp",
            "img/pis2.webp",
            "img/pis3.webp",
            "img/pis6.webp",
            "img/pis7.webp"
            
        ]
    }
];

// --- EVENT SPACES DATA (5 ESPAÇOS ESPECÍFICOS) ---
const eventSpacesData = [
    {
        name: "Salão Acácia",
        capacity: "Até 300 Pessoas",
        description: "Nosso maior e mais tradicional salão. O Salão Acácia é perfeito para grandes casamentos, formaturas e eventos corporativos que exigem espaço amplo e versatilidade. Possui pé direito alto e excelente ventilação.",
        features: ["Palco para banda/DJ", "Cozinha industrial anexa", "Camarim privativo", "Ar condicionado central", "Acesso independente"],
        images: [
            "img/sa1.webp",
            "img/sa2.webp",
            "img/sa3.webp",
            "img/sa5.webp",
            "img/sa6.webp"
        ]
    },
    {
        name: "Espaço VIP",
        capacity: "Até 80 Pessoas",
        description: "Um ambiente intimista e sofisticado para pequenas celebrações, reuniões de diretoria ou coquetéis exclusivos. O Espaço VIP oferece privacidade total com acabamentos de alto padrão e mobiliário confortável.",
        features: ["Lounge com sofás", "Bar privativo", "Iluminação cênica", "Smart TV 75\"", "Acústica tratada"],
        images: [
            "img/pis1.webp",
            "img/pis2.webp",
            "img/pis3.webp",
            "img/pis6.webp",
            "img/pis7.webp"
        ]
    },
    {
        name: "Salão Panorâmico",
        capacity: "Até 200 Pessoas",
        description: "Com paredes de vidro e vista privilegiada para o lago e as piscinas, o Salão Panorâmico integra seu evento à natureza exuberante do parque, garantindo fotos incríveis durante o dia ou à noite.",
        features: ["Vista 360º", "Luz natural abundante", "Deck externo anexo", "Cortinas automatizadas", "Piso em porcelanato"],
        images: [
            "img/sp1.webp",
            "img/sp2.webp",
            "img/sp3.webp",
            "img/sp4.webp"
        ]
    },
    {
        name: "Salão Ipê",
        capacity: "Até 150 Pessoas",
        description: "O charme rústico define o Salão Ipê. Construído com madeiras nobres e detalhes em pedra, cria uma atmosfera acolhedora ideal para aniversários, bodas e encontros de família.",
        features: ["Estilo rústico chique", "Lareira decorativa", "Varanda coberta", "Mesas de madeira maciça", "Churrasqueira interna"],
        images: [
             "img/sli1.webp",
            "img/sli2.webp",
            "img/sli3.webp",
            "img/sli4.webp",
            "img/sli5.webp",
            "img/sli6.webp",
            "img/sli7.webp"
        ]
    },
    {
        name: "Salão Imbuia",
        capacity: "Até 120 Pessoas",
        description: "Moderno e funcional, o Salão Imbuia é a escolha certa para workshops, palestras e treinamentos empresariais. Localizado em uma área tranquila do parque para garantir o foco dos participantes.",
        features: ["Projetor e Telão", "Sistema de som integrado", "Mesas modulares", "Internet dedicada", "Área para Coffee Break"],
        images: [
             "img/imbu1.webp",
             "img/imbu2.webp",
             "img/imbu3.webp",
             "img/imbu4.webp",
             "img/imbu5.webp",
             "img/imbu6.webp"
        
           
        ]
    }
];

// --- ATTRACTIONS DATA (ATRAÇÕES DO PARQUE) ---
const attractionsData = [
    {
        title: "Complexo de Piscinas",
        subtitle: "17 Piscinas Adulto e 5 Infantis",
        description: "Para proporcionar aos seus clientes um amplo espaço de diversão para toda a família, o Sítio do Beto disponibiliza um complexo com piscinas, rampas molhadas, tobo-águas, atrações infantis e free-falls, que dão aquele friozinho na barriga, para quem gosta de velocidade, emoção e muita adrenalina.\n\nO parque aquático do Sítio do Beto possui um complexo com 17 piscinas adulto e 5 piscinas infantis, para seu amplo lazer e diversão.",
        features: [
            "Qtd: 17 piscinas (adulto) e 5 (infantil)",
            "Profundidade: 1,2m (adulto) e 60cm (infantil)",
            "Comprimento Total: 8m (adulto) e 6m (infantil)",
            "Largura: 3m (Média)",
            "Água tratada diariamente e monitorada"
        ],
        images: [
            "img/complexo1.webp",
            "img/complexo2.webp"
        ]
    },
    {
        title: "Toboáguas Radicais",
        subtitle: "Aventuras de até 15 metros",
        description: "Os Tobo-Águas do Sítio do Beto são verdadeiras aventuras aquáticas para crianças e adultos. Com descidas que chegam até 15 metros de altura e até 65 metros de comprimento, nossos Tobo-Águas são verdadeiras opções de diversão com muita aventura e adrenalina.",
        features: [
            "Amarelo: 15m alt, 65m comp, 30km/h (50s)",
            "Azul: 14m alt, 52m comp, 40km/h (40s)",
            "Branco: 13m alt, 62m comp, 40km/h (40s)",
            "Vermelho: 12m alt, 40m comp, 30km/h (30s)",
            "Restrição: A partir de 8 anos / 80cm"
        ],
        images: [
            "img/toboga1.webp",
            "img/toboga2.webp",
            "img/toboga3.webp",
            "img/toboga4.webp"
        ]
    },
    {
        title: "Tirolesa e Natureza",
        subtitle: "360m de percurso e Reserva Ambiental",
        description: "O Sítio do Beto conta com a maior tirolesa do estado (360m), atravessando todo o Sítio. A Reserva Ambiental localizada na encosta do morro do Itacolomi abriga fauna e flora diversificadas. Pelos arroios encontram-se lontras, bugios e muitas outras espécies. É um local que transmite paz.",
        features: [
            "Tirolesa: 360m de percurso a 70km/h",
            "Restrição Tirolesa: A partir de 8 anos / 80cm",
            "Reserva Ambiental: Encosta do morro Itacolomi",
            "Patrimônio: Morro declarado patrimônio cultural",
            "Atenção: Trilha fechada para preservação"
        ],
        images: [
            "img/aventura.webp",
            "img/aventura2.webp",
            "img/aventura3.webp",
            "img/aventura4.webp"
        ]
    },
    {
        title: "Esportes e Lazer",
        subtitle: "Futebol, Vôlei e Sala de Jogos",
        description: "A Cancha de Futebol de Praia (40x35m) tem iluminação para jogos noturnos e vestiário. A Cancha de Vôlei de Praia permite competição divertida. Possuímos também uma Sala de Jogos com ping-pong, fla-flu e snooker para interação e diversão com seus amigos.",
        features: [
            "Futebol: 40m x 35m (com iluminação)",
            "Vôlei de Praia (com rede)",
            "Sala de Jogos: Ping-pong, Fla-flu, Snooker",
            "Fornecemos a bola para os jogos",
            "Uso livre (Agendamento para horário extra)"
        ],
        images: [
            "img/jogo2.webp",
            "img/jogo4.webp",
            "img/jogo5.webp"
        ]
    }
];

// ==========================================
// FUNÇÕES GLOBAIS (MODAIS E INTERAÇÃO)
// ==========================================

// --- RENTAL MODAL LOGIC ---
window.openRentalModal = function(index) {
    const modal = document.getElementById('rental-modal');
    const data = rentalsData[index];
    
    if(!modal || !data) return;

    // Preencher Textos
    document.getElementById('rental-title').innerText = data.title;
    document.getElementById('rental-title-overlay').innerText = data.title;
    document.getElementById('rental-price').innerText = data.price;
    document.getElementById('rental-desc').innerText = data.description;

    // Preencher Features
    const featuresList = document.getElementById('rental-features');
    featuresList.innerHTML = '';
    data.features.forEach(feat => {
        const li = document.createElement('li');
        li.className = 'flex items-center text-gray-600 text-sm';
        li.innerHTML = `<i data-lucide="check" class="text-green-500 mr-2 w-4 flex-shrink-0"></i> <span>${feat}</span>`;
        featuresList.appendChild(li);
    });

    // Configurar Imagem Principal
    const mainImg = document.getElementById('rental-main-img');
    mainImg.src = data.images[0];

    // Gerar Thumbnails
    const thumbsContainer = document.getElementById('rental-thumbnails');
    thumbsContainer.innerHTML = '';
    data.images.forEach((imgSrc, i) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.className = `w-20 h-20 object-cover rounded-lg cursor-pointer rental-thumb ${i === 0 ? 'active' : ''}`;
        img.onclick = () => window.changeRentalImage(imgSrc, img);
        thumbsContainer.appendChild(img);
    });

    // Atualizar Ícones e Abrir
    if(window.lucide) lucide.createIcons();
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
};

window.closeRentalModal = function() {
    const modal = document.getElementById('rental-modal');
    if(modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.classList.add('hidden'), 300);
        document.body.style.overflow = '';
    }
};

window.changeRentalImage = function(src, thumbElement) {
    const mainImg = document.getElementById('rental-main-img');
    if(mainImg) {
        mainImg.style.opacity = '0.5';
        setTimeout(() => {
            mainImg.src = src;
            mainImg.style.opacity = '1';
        }, 200);
    }
    document.querySelectorAll('#rental-thumbnails .rental-thumb').forEach(el => el.classList.remove('active'));
    if(thumbElement) thumbElement.classList.add('active');
};


// --- EVENTS MODAL LOGIC (5 SALÕES) ---
window.openEventsModal = function() {
    const modal = document.getElementById('events-modal');
    if(!modal) {
        console.error("Modal de eventos não encontrado no DOM");
        return;
    }
    
    const listContainer = document.getElementById('event-spaces-list');
    listContainer.innerHTML = '';

    // Gerar botões do menu lateral
    eventSpacesData.forEach((space, index) => {
        const btn = document.createElement('button');
        // A classe 'event-menu-btn' é usada para controle, as outras são estilos Tailwind
        btn.className = `w-full text-left p-4 rounded-xl transition-all font-medium text-sm flex items-center justify-between group event-menu-btn mb-2`;
        
        // Estilo inicial (o primeiro item será ativado pelo loadEventSpace, mas definimos base aqui)
        btn.innerHTML = `
            <span>${space.name}</span>
            <i data-lucide="chevron-right" class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"></i>
        `;
        btn.onclick = () => window.loadEventSpace(index, btn);
        listContainer.appendChild(btn);
    });

    // Carregar o primeiro espaço automaticamente
    if (listContainer.children.length > 0) {
        window.loadEventSpace(0, listContainer.children[0]);
    }

    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
};

window.loadEventSpace = function(index, btnElement) {
    const data = eventSpacesData[index];
    if(!data) return;

    // Atualizar estilos dos botões (Active State)
    document.querySelectorAll('.event-menu-btn').forEach(b => {
        b.className = 'w-full text-left p-4 rounded-xl transition-all font-medium text-sm flex items-center justify-between group event-menu-btn bg-white text-gray-600 hover:bg-gray-100 mb-2 border border-transparent';
        const icon = b.querySelector('i');
        if(icon) icon.style.opacity = '';
    });

    if(btnElement) {
        btnElement.className = 'w-full text-left p-4 rounded-xl transition-all font-bold text-sm flex items-center justify-between group event-menu-btn bg-blue-600 text-white shadow-lg transform scale-105 mb-2 border border-blue-400';
        const icon = btnElement.querySelector('i');
        if(icon) icon.style.opacity = '1';
    }

    // Preencher Conteúdo
    document.getElementById('event-title').innerText = data.name;
    document.getElementById('event-title-overlay').innerText = data.name;
    document.getElementById('event-capacity').innerText = data.capacity;
    document.getElementById('event-desc').innerText = data.description;

    const featuresList = document.getElementById('event-features');
    featuresList.innerHTML = '';
    data.features.forEach(feat => {
        const li = document.createElement('li');
        li.className = 'flex items-center text-gray-600 text-sm';
        li.innerHTML = `<i data-lucide="check-circle" class="text-blue-500 mr-2 w-4 flex-shrink-0"></i> <span>${feat}</span>`;
        featuresList.appendChild(li);
    });

    // Imagem Principal
    const mainImg = document.getElementById('event-main-img');
    mainImg.style.opacity = 0;
    setTimeout(() => {
        mainImg.src = data.images[0];
        mainImg.style.opacity = 1;
    }, 200);

    // Thumbnails
    const thumbsContainer = document.getElementById('event-thumbnails');
    thumbsContainer.innerHTML = '';
    data.images.forEach((imgSrc, i) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.className = `w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all ${i === 0 ? 'border-white scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`;
        img.onclick = function() {
            mainImg.src = imgSrc;
            // Reset active styles inside this specific container
            Array.from(thumbsContainer.children).forEach(c => {
                c.classList.remove('border-white', 'scale-105');
                c.classList.add('border-transparent', 'opacity-70');
            });
            this.classList.remove('border-transparent', 'opacity-70');
            this.classList.add('border-white', 'scale-105');
        };
        thumbsContainer.appendChild(img);
    });

    if(window.lucide) lucide.createIcons();
};

window.closeEventsModal = function() {
    const modal = document.getElementById('events-modal');
    if(modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.classList.add('hidden'), 300);
        document.body.style.overflow = '';
    }
};


// --- ATTRACTION MODAL LOGIC ---
window.openAttractionModal = function(index) {
    const modal = document.getElementById('attraction-modal');
    const data = attractionsData[index];
    
    if(!modal || !data) return;

    // Preencher Textos
    document.getElementById('attraction-title').innerText = data.title;
    document.getElementById('attraction-title-overlay').innerText = data.title;
    document.getElementById('attraction-subtitle').innerText = data.subtitle;
    document.getElementById('attraction-desc').innerText = data.description;

    // Preencher Features
    const featuresList = document.getElementById('attraction-features');
    featuresList.innerHTML = '';
    data.features.forEach(feat => {
        const li = document.createElement('li');
        li.className = 'flex items-center text-gray-600 text-sm';
        li.innerHTML = `<i data-lucide="zap" class="text-yellow-500 mr-2 w-4 flex-shrink-0"></i> <span>${feat}</span>`;
        featuresList.appendChild(li);
    });

    // Imagem Principal
    const mainImg = document.getElementById('attraction-main-img');
    mainImg.src = data.images[0];

    // Thumbnails
    const thumbsContainer = document.getElementById('attraction-thumbnails');
    thumbsContainer.innerHTML = '';
    data.images.forEach((imgSrc, i) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.className = `w-20 h-20 object-cover rounded-lg cursor-pointer rental-thumb ${i === 0 ? 'active' : ''}`;
        img.onclick = () => window.changeAttractionImage(imgSrc, img);
        thumbsContainer.appendChild(img);
    });

    if(window.lucide) lucide.createIcons();
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
};

window.closeAttractionModal = function() {
    const modal = document.getElementById('attraction-modal');
    if(modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.classList.add('hidden'), 300);
        document.body.style.overflow = '';
    }
};

window.changeAttractionImage = function(src, thumbElement) {
    const mainImg = document.getElementById('attraction-main-img');
    if(mainImg) {
        mainImg.style.opacity = '0.5';
        setTimeout(() => {
            mainImg.src = src;
            mainImg.style.opacity = '1';
        }, 200);
    }
    document.querySelectorAll('#attraction-thumbnails .rental-thumb').forEach(el => el.classList.remove('active'));
    if(thumbElement) thumbElement.classList.add('active');
};


// --- LIGHTBOX LOGIC (ZOOM SIMPLES) ---
window.openLightbox = function(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if(lightbox && img) {
        img.src = src;
        lightbox.classList.remove('hidden');
        setTimeout(() => lightbox.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
    }
};

window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    if(lightbox) {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.classList.add('hidden');
            document.getElementById('lightbox-img').src = '';
        }, 300);
        document.body.style.overflow = '';
    }
};

// --- EVENT LISTENERS GLOBAIS ---
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.closeLightbox();
        window.closeRentalModal();
        window.closeAttractionModal();
        window.closeEventsModal();
    }
});

// Fechar ao clicar fora (Overlay)
['lightbox', 'rental-modal', 'attraction-modal', 'events-modal'].forEach(id => {
    const el = document.getElementById(id);
    if(el) {
        el.addEventListener('click', (e) => {
            if (e.target.id === id) {
                if(id === 'lightbox') window.closeLightbox();
                else if(id === 'rental-modal') window.closeRentalModal();
                else if(id === 'attraction-modal') window.closeAttractionModal();
                else if(id === 'events-modal') window.closeEventsModal();
            }
        });
    }
});


// --- NAVBAR SCROLL & MOBILE MENU ---
const navbar = document.getElementById('navbar');
const navLogo = document.getElementById('nav-logo');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuBtnIcon = document.querySelector('#mobile-menu-btn i');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuBtn = document.getElementById('close-mobile-menu');

window.addEventListener('scroll', () => {
    if(!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white/95', 'shadow-md', 'backdrop-blur-sm', 'py-2');
        navbar.classList.remove('bg-transparent', 'py-4', 'border-transparent');
        navLogo?.classList.remove('text-white');
        navLogo?.classList.add('text-blue-900');
        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-gray-700');
        });
        if(mobileMenuBtnIcon) mobileMenuBtnIcon.style.color = '#1e3a8a'; 
    } else {
        navbar.classList.remove('bg-white/95', 'shadow-md', 'backdrop-blur-sm', 'py-2');
        navbar.classList.add('bg-transparent', 'py-4', 'border-transparent');
        navLogo?.classList.add('text-white');
        navLogo?.classList.remove('text-blue-900');
        navLinks.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-gray-700');
        });
        if(mobileMenuBtnIcon) mobileMenuBtnIcon.style.color = 'white';
    }
});

function toggleMenu() {
    if(!mobileMenu) return;
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => mobileMenu.classList.remove('translate-y-full', 'opacity-0'), 10);
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.add('translate-y-full', 'opacity-0');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
        document.body.style.overflow = '';
    }
}

mobileMenuBtn?.addEventListener('click', toggleMenu);
closeMobileMenuBtn?.addEventListener('click', toggleMenu);
document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', toggleMenu));


// --- CAROUSEL LOGIC ---
const carouselContainer = document.getElementById('carousel-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
let autoScrollInterval;
const SCROLL_AMOUNT = 350;

if(carouselContainer) {
    if(btnNext) {
        btnNext.addEventListener('click', () => {
            carouselContainer.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
            resetAutoScroll();
        });
    }

    if(btnPrev) {
        btnPrev.addEventListener('click', () => {
            carouselContainer.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
            resetAutoScroll();
        });
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            if (Math.ceil(carouselContainer.scrollLeft + carouselContainer.clientWidth) >= carouselContainer.scrollWidth) {
                carouselContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carouselContainer.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
            }
        }, 3000);
    }

    carouselContainer.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    carouselContainer.addEventListener('mouseleave', startAutoScroll);
    
    startAutoScroll();

    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        startAutoScroll();
    }
}

// Testimonials Carousel
const testimonialsContainer = document.getElementById('testimonials-carousel');
if(testimonialsContainer) {
    let testimonialsInterval = setInterval(() => {
        if (Math.ceil(testimonialsContainer.scrollLeft + testimonialsContainer.clientWidth) >= testimonialsContainer.scrollWidth) {
            testimonialsContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            testimonialsContainer.scrollBy({ left: 320, behavior: 'smooth' });
        }
    }, 4000);
    
    testimonialsContainer.addEventListener('mouseenter', () => clearInterval(testimonialsInterval));
    testimonialsContainer.addEventListener('mouseleave', () => {
        testimonialsInterval = setInterval(() => {
            if (Math.ceil(testimonialsContainer.scrollLeft + testimonialsContainer.clientWidth) >= testimonialsContainer.scrollWidth) {
                testimonialsContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                testimonialsContainer.scrollBy({ left: 320, behavior: 'smooth' });
            }
        }, 4000);
    });
}


// --- FAQ ACCORDION ---
const faqButtons = document.querySelectorAll('.faq-btn');
faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('i');
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.classList.remove('rotate-180');
        } else {
            document.querySelectorAll('.faq-content').forEach(el => el.style.maxHeight = null);
            document.querySelectorAll('.faq-btn i').forEach(el => el.classList.remove('rotate-180'));
            content.style.maxHeight = content.scrollHeight + "px";
            icon.classList.add('rotate-180');
        }
    });
});
