
/* =========================================================
   ECOS DE LA HISTORIA
   JavaScript | Segunda Guerra Mundial
========================================================= */

"use strict";

/* =========================================================
   1. INFORMACIÓN DE LOS ACONTECIMIENTOS HISTÓRICOS
========================================================= */

const historicalEvents = {
    polonia: {
        date: "1 DE SEPTIEMBRE DE 1939",
        title: "La invasión de Polonia",
        category: "EL INICIO DE LA GUERRA",
        image: "images/invasion-polonia.jpg",
        alt: "Imagen histórica de la invasión de Polonia",
        lead: "La invasión alemana de Polonia desencadenó la guerra en Europa y provocó una respuesta militar de Reino Unido y Francia.",
        sections: [
            {
                heading: "Una Europa al borde del conflicto",
                paragraphs: [
                    "Durante la década de 1930, la Alemania nazi, dirigida por Adolf Hitler, desarrolló una política expansionista. En marzo de 1938, Alemania se anexionó Austria y, posteriormente, obtuvo territorios checoslovacos mediante el Acuerdo de Múnich. En marzo de 1939, ocupó el resto de las tierras checas.",
                    "El 23 de agosto de 1939, Alemania y la Unión Soviética firmaron un pacto de no agresión. Un protocolo secreto contemplaba el reparto de zonas de influencia en Europa oriental, incluida Polonia."
                ]
            },
            {
                heading: "El ataque del 1 de septiembre",
                paragraphs: [
                    "El ejército alemán invadió Polonia el 1 de septiembre de 1939. Sus fuerzas combinaron ataques aéreos, unidades blindadas y tropas terrestres para avanzar rápidamente. Esta forma de combatir suele relacionarse con el concepto de guerra relámpago, aunque la campaña también dependió de la superioridad militar alemana y de las circunstancias del conflicto.",
                    "El 17 de septiembre, la Unión Soviética invadió Polonia desde el este, de acuerdo con los intereses territoriales contemplados en el pacto germano-soviético."
                ]
            },
            {
                heading: "La respuesta de Reino Unido y Francia",
                paragraphs: [
                    "El 3 de septiembre de 1939, Reino Unido y Francia declararon la guerra a Alemania después de que esta no atendiera sus exigencias para retirarse de Polonia. Por ello, la invasión se considera el comienzo de la Segunda Guerra Mundial en Europa.",
                    "Varsovia cayó a finales de septiembre y las fuerzas polacas continuaron resistiendo en distintas circunstancias. Aunque el territorio quedó repartido entre Alemania y la Unión Soviética, la resistencia polaca no desapareció."
                ]
            },
            {
                heading: "Consecuencias históricas",
                paragraphs: [
                    "La ocupación trajo represión, desplazamientos forzados, persecución y violencia contra la población civil. Con el tiempo, la ocupación alemana de Polonia se convirtió en uno de los principales escenarios del Holocausto.",
                    "La invasión demostró que las concesiones diplomáticas anteriores no habían detenido la expansión de Hitler. Europa entró en una guerra que pronto se extendería a otras regiones del mundo."
                ]
            }
        ]
    },

    britania: {
        date: "JULIO – OCTUBRE DE 1940",
        title: "La batalla de Inglaterra",
        category: "LA DEFENSA DEL REINO UNIDO",
        image: "images/batalla-britania.jpg",
        alt: "Avión de combate de la época de la batalla de Inglaterra",
        lead: "La batalla de Inglaterra fue una campaña aérea en la que la Real Fuerza Aérea británica impidió que Alemania obtuviera la superioridad aérea necesaria para una posible invasión.",
        sections: [
            {
                heading: "La situación después de Francia",
                paragraphs: [
                    "En junio de 1940, Francia fue derrotada y firmó un armisticio con Alemania. Reino Unido quedó como el principal adversario de Hitler en Europa occidental.",
                    "El gobierno alemán consideró una invasión de las islas británicas, conocida como Operación León Marino. Para que el plan tuviera posibilidades, Alemania necesitaba controlar el espacio aéreo sobre el canal de la Mancha y el sur de Inglaterra."
                ]
            },
            {
                heading: "Una batalla en el cielo",
                paragraphs: [
                    "La Luftwaffe, fuerza aérea alemana, atacó aeródromos, instalaciones militares, puertos y otros objetivos. La Real Fuerza Aérea británica, conocida como RAF, respondió con aviones de combate como el Hawker Hurricane y el Supermarine Spitfire.",
                    "Los británicos contaban con una red de radares y un sistema de coordinación que les ayudaba a detectar los ataques y dirigir a sus escuadrones. Sin embargo, sus pilotos y comunidades también soportaron grandes pérdidas y una enorme presión."
                ]
            },
            {
                heading: "El cambio de estrategia",
                paragraphs: [
                    "En septiembre de 1940, Alemania intensificó los ataques contra Londres y otras ciudades. Los bombardeos contra zonas urbanas se extendieron durante meses en la campaña conocida como Blitz.",
                    "La resistencia británica impidió que Alemania lograra la superioridad aérea que necesitaba. La invasión prevista no se llevó a cabo y la operación fue aplazada indefinidamente."
                ]
            },
            {
                heading: "¿Por qué fue importante?",
                paragraphs: [
                    "Fue una de las primeras grandes derrotas estratégicas de Hitler. Reino Unido conservó su independencia y continuó participando en la guerra.",
                    "La batalla también mostró la importancia del radar, la coordinación militar, la producción de aviones y la capacidad de una sociedad para resistir una campaña de bombardeos."
                ]
            }
        ]
    },

    pearl: {
        date: "7 DE DICIEMBRE DE 1941",
        title: "El ataque a Pearl Harbor",
        category: "LA GUERRA SE EXTIENDE AL PACÍFICO",
        image: "images/pearl-harbor.jpg",
        alt: "Recreación histórica del ataque a Pearl Harbor",
        lead: "El ataque sorpresa japonés contra la base naval estadounidense de Pearl Harbor llevó a Estados Unidos a entrar directamente en la Segunda Guerra Mundial.",
        sections: [
            {
                heading: "Tensiones en el Pacífico",
                paragraphs: [
                    "Durante los años anteriores, Japón había ampliado su presencia militar en Asia, incluida la guerra contra China. Su expansión y sus operaciones militares provocaron tensiones con Estados Unidos y otras potencias.",
                    "Estados Unidos impuso restricciones económicas a Japón, entre ellas medidas relacionadas con el suministro de petróleo. Las negociaciones diplomáticas no lograron resolver las diferencias."
                ]
            },
            {
                heading: "El ataque del 7 de diciembre",
                paragraphs: [
                    "La mañana del 7 de diciembre de 1941, aviones de la Armada Imperial Japonesa atacaron la base naval estadounidense de Pearl Harbor, en Hawái. El ataque se desarrolló en varias oleadas y alcanzó buques, aviones e instalaciones militares.",
                    "Murieron más de 2.400 estadounidenses y muchos más resultaron heridos. Varios buques fueron hundidos o dañados y numerosos aviones quedaron destruidos o inutilizados."
                ]
            },
            {
                heading: "Estados Unidos entra en la guerra",
                paragraphs: [
                    "El 8 de diciembre, el presidente Franklin D. Roosevelt se dirigió al Congreso. Estados Unidos declaró la guerra a Japón. El 11 de diciembre, Alemania e Italia declararon la guerra a Estados Unidos, que respondió con sus propias declaraciones de guerra.",
                    "El conflicto, que ya se desarrollaba en Europa, África y Asia, se convirtió todavía más claramente en una guerra mundial."
                ]
            },
            {
                heading: "Consecuencias",
                paragraphs: [
                    "La industria, las fuerzas armadas y los recursos estadounidenses tuvieron un papel decisivo en los años siguientes. El país participó en campañas navales, aéreas y terrestres tanto en Europa como en el Pacífico.",
                    "El ataque también tuvo consecuencias graves para la población japonesa-estadounidense. En 1942, el gobierno estadounidense ordenó el traslado y confinamiento de numerosas personas de ascendencia japonesa, incluidas muchas que eran ciudadanas estadounidenses."
                ]
            }
        ]
    },

    stalingrado: {
        date: "AGOSTO DE 1942 – FEBRERO DE 1943",
        title: "La batalla de Stalingrado",
        category: "EL GIRO EN EL FRENTE ORIENTAL",
        image: "images/stalingrado.jpg",
        alt: "Ruinas urbanas durante la batalla de Stalingrado",
        lead: "La batalla de Stalingrado fue uno de los enfrentamientos más decisivos y destructivos de la guerra. La derrota alemana debilitó gravemente sus fuerzas en el frente oriental.",
        sections: [
            {
                heading: "La ofensiva alemana de 1942",
                paragraphs: [
                    "En el verano de 1942, Alemania lanzó una ofensiva en el sur de la Unión Soviética. Buscaba controlar zonas estratégicas y recursos, especialmente las regiones petroleras del Cáucaso.",
                    "Stalingrado, situada junto al río Volga, tenía importancia industrial y de transporte. La ciudad también tenía un valor simbólico por llevar el nombre del dirigente soviético Iósif Stalin."
                ]
            },
            {
                heading: "Combates entre las ruinas",
                paragraphs: [
                    "Las tropas alemanas y soviéticas lucharon por calles, edificios, fábricas y puntos de paso. La destrucción de la ciudad convirtió muchos espacios en posiciones defensivas improvisadas.",
                    "Las condiciones fueron extremas para soldados y civiles. El frío, la falta de alimentos, las enfermedades y la interrupción de los suministros aumentaron el sufrimiento humano."
                ]
            },
            {
                heading: "La contraofensiva soviética",
                paragraphs: [
                    "En noviembre de 1942, el Ejército Rojo lanzó la Operación Urano contra los flancos del ejército alemán, donde se encontraban fuerzas aliadas de Alemania con defensas más vulnerables.",
                    "La maniobra rodeó a una gran agrupación alemana dentro de la ciudad. Los intentos alemanes de abastecerla y romper el cerco fracasaron."
                ]
            },
            {
                heading: "La derrota alemana",
                paragraphs: [
                    "Las fuerzas alemanas cercadas capitularon en febrero de 1943. La batalla causó pérdidas enormes entre militares y civiles de ambos bandos.",
                    "La derrota representó un punto de inflexión: Alemania perdió la iniciativa estratégica en gran parte del frente oriental y la Unión Soviética empezó a avanzar hacia el oeste en las campañas posteriores."
                ]
            }
        ]
    },

    normandia: {
        date: "6 DE JUNIO DE 1944",
        title: "El desembarco de Normandía",
        category: "LA APERTURA DEL FRENTE OCCIDENTAL",
        image: "images/normandia.jpg",
        alt: "Desembarco aliado en las playas de Normandía",
        lead: "El Día D abrió un gran frente aliado en Europa occidental y puso en marcha una campaña que contribuyó a la liberación de Francia y al avance hacia Alemania.",
        sections: [
            {
                heading: "La preparación de la operación",
                paragraphs: [
                    "Desde 1943, los Aliados occidentales preparaban una gran invasión de la Europa ocupada. La operación recibió el nombre de Operación Overlord y estuvo dirigida por un mando aliado multinacional.",
                    "La preparación incluyó el traslado de tropas y suministros al Reino Unido, el engaño militar para confundir a Alemania y el bombardeo de objetivos estratégicos."
                ]
            },
            {
                heading: "El 6 de junio de 1944",
                paragraphs: [
                    "En las primeras horas del Día D, fuerzas aerotransportadas fueron lanzadas detrás de las defensas alemanas. Después, tropas aliadas desembarcaron en cinco sectores de la costa de Normandía, en Francia.",
                    "Las fuerzas estadounidenses, británicas, canadienses y de otros países enfrentaron obstáculos, fuego defensivo y dificultades para asegurar las playas. Las pérdidas humanas fueron graves."
                ]
            },
            {
                heading: "La batalla por Francia",
                paragraphs: [
                    "Tras los desembarcos, los Aliados establecieron una cabeza de puente y comenzaron a introducir más soldados, vehículos y suministros. La resistencia alemana hizo que el avance tierra adentro fuera difícil.",
                    "En agosto de 1944, los Aliados liberaron París con la participación de fuerzas francesas. Las tropas alemanas fueron empujadas hacia el este, aunque la guerra en Europa continuó durante meses."
                ]
            },
            {
                heading: "Importancia histórica",
                paragraphs: [
                    "Normandía permitió consolidar un frente occidental desde el cual los Aliados pudieron avanzar hacia Alemania. Este avance coincidió con las ofensivas soviéticas desde el este.",
                    "El éxito de la operación dependió de la cooperación entre distintos países, la superioridad logística y aérea aliada, la planificación y el sacrificio de militares y civiles."
                ]
            }
        ]
    },

    berlin: {
        date: "ABRIL – MAYO DE 1945",
        title: "La caída de Berlín",
        category: "EL FIN DEL RÉGIMEN NAZI",
        image: "images/berlin-1945.jpg",
        alt: "Berlín en ruinas durante los últimos días de la guerra en Europa",
        lead: "La batalla de Berlín fue la ofensiva final de gran escala del frente europeo. La toma de la capital alemana aceleró el colapso del régimen nazi.",
        sections: [
            {
                heading: "Alemania, cercada",
                paragraphs: [
                    "A comienzos de 1945, las fuerzas soviéticas avanzaban desde el este, mientras las fuerzas estadounidenses, británicas, francesas y otros aliados progresaban desde el oeste.",
                    "Las ciudades alemanas habían sufrido bombardeos y muchas regiones estaban destruidas. La población civil afrontaba desplazamientos, escasez y el derrumbe de los servicios."
                ]
            },
            {
                heading: "La ofensiva sobre Berlín",
                paragraphs: [
                    "En abril de 1945, el Ejército Rojo inició la ofensiva final sobre Berlín. Los combates se desarrollaron en los accesos a la ciudad y después en sus calles y edificios.",
                    "Las fuerzas alemanas incluían unidades regulares y grupos movilizados con recursos cada vez más limitados. La resistencia fue intensa, pero no pudo detener el avance soviético."
                ]
            },
            {
                heading: "El derrumbe del régimen",
                paragraphs: [
                    "Adolf Hitler se suicidó en su búnker el 30 de abril de 1945. Berlín capituló ante las fuerzas soviéticas el 2 de mayo.",
                    "Alemania firmó la rendición incondicional en mayo. La capitulación entró en vigor el 8 de mayo de 1945, fecha que se conmemora en gran parte de Europa como el Día de la Victoria en Europa."
                ]
            },
            {
                heading: "Lo que dejó la batalla",
                paragraphs: [
                    "La batalla dejó enormes daños materiales y pérdidas humanas. La derrota del régimen nazi puso fin a la guerra en Europa, pero no al conflicto mundial, que continuó en Asia y el Pacífico.",
                    "Después de la guerra, Alemania quedó dividida en zonas de ocupación administradas por las potencias vencedoras. Las decisiones de la posguerra contribuyeron a transformar el orden político europeo."
                ]
            }
        ]
    },

    hiroshima: {
        date: "6 DE AGOSTO DE 1945",
        title: "Hiroshima y la bomba atómica",
        category: "EL FINAL DE LA GUERRA EN EL PACÍFICO",
        image: "images/hiroshima.jpg",
        alt: "Imagen histórica relacionada con el bombardeo atómico de Hiroshima",
        lead: "El lanzamiento de una bomba atómica sobre Hiroshima marcó un momento decisivo de la historia y mostró las consecuencias devastadoras de las armas nucleares.",
        sections: [
            {
                heading: "La guerra en el Pacífico",
                paragraphs: [
                    "En el verano de 1945, Japón continuaba en guerra contra los Aliados, incluso después de la derrota alemana. Las fuerzas estadounidenses habían avanzado mediante campañas navales y operaciones en distintas islas del Pacífico.",
                    "Estados Unidos había desarrollado un arma nuclear mediante el Proyecto Manhattan. El presidente Harry S. Truman autorizó su uso contra Japón."
                ]
            },
            {
                heading: "El bombardeo del 6 de agosto",
                paragraphs: [
                    "El 6 de agosto de 1945, un avión estadounidense lanzó una bomba atómica sobre Hiroshima. La explosión destruyó amplias zonas de la ciudad y provocó incendios, daños generalizados y numerosas muertes.",
                    "Las víctimas incluyeron civiles. Muchas personas murieron ese día y otras fallecieron posteriormente por lesiones y enfermedades relacionadas con la radiación."
                ]
            },
            {
                heading: "Nagasaki y la rendición japonesa",
                paragraphs: [
                    "El 8 de agosto, la Unión Soviética declaró la guerra a Japón y comenzó operaciones militares contra las fuerzas japonesas en Manchuria. El 9 de agosto, Estados Unidos lanzó una segunda bomba atómica sobre Nagasaki.",
                    "El gobierno japonés anunció su aceptación de la rendición el 15 de agosto. La ceremonia formal de rendición se celebró el 2 de septiembre de 1945."
                ]
            },
            {
                heading: "Debate y memoria",
                paragraphs: [
                    "El uso de las bombas atómicas sigue siendo objeto de debate histórico y ético. Se discuten sus efectos sobre la decisión japonesa de rendirse, las alternativas militares y diplomáticas y el impacto sobre la población civil.",
                    "Hiroshima y Nagasaki se convirtieron en símbolos de las consecuencias de la guerra nuclear. La memoria de las víctimas continúa alimentando las iniciativas internacionales de desarme y prevención de conflictos."
                ]
            }
        ]
    },

    victoria: {
        date: "2 DE SEPTIEMBRE DE 1945",
        title: "El final de la Segunda Guerra Mundial",
        category: "EL FIN DEL CONFLICTO MUNDIAL",
        image: "images/victoria-1945.jpg",
        alt: "Imagen conmemorativa del final de la Segunda Guerra Mundial",
        lead: "La rendición formal de Japón en septiembre de 1945 puso fin a la Segunda Guerra Mundial, después de seis años de combates y una destrucción sin precedentes.",
        sections: [
            {
                heading: "Una guerra en varios continentes",
                paragraphs: [
                    "Desde 1939, el conflicto se había extendido por Europa, África, Asia y los océanos Atlántico y Pacífico. Decenas de países participaron directa o indirectamente en la guerra.",
                    "El conflicto provocó la muerte de decenas de millones de personas, entre militares y civiles. El Holocausto, las masacres, los bombardeos, las hambrunas y los desplazamientos forzados dejaron consecuencias duraderas."
                ]
            },
            {
                heading: "La derrota de Alemania",
                paragraphs: [
                    "La Alemania nazi se rindió en mayo de 1945 después de las ofensivas aliadas desde el oeste y el avance soviético desde el este.",
                    "La capitulación alemana terminó la guerra en Europa, pero Japón continuó combatiendo en Asia y el Pacífico."
                ]
            },
            {
                heading: "La rendición de Japón",
                paragraphs: [
                    "En agosto de 1945, los bombardeos atómicos de Hiroshima y Nagasaki y la entrada de la Unión Soviética en la guerra contra Japón contribuyeron a la decisión japonesa de rendirse. Los historiadores continúan debatiendo el peso relativo de estos factores y de otros elementos.",
                    "Japón anunció la aceptación de la rendición el 15 de agosto. La firma formal tuvo lugar el 2 de septiembre de 1945, a bordo del acorazado USS Missouri."
                ]
            },
            {
                heading: "Un mundo transformado",
                paragraphs: [
                    "Tras la guerra, Europa quedó profundamente debilitada y Estados Unidos y la Unión Soviética se convirtieron en superpotencias. Las diferencias entre ambas potencias contribuyeron al inicio de la Guerra Fría.",
                    "En 1945 se fundó la Organización de las Naciones Unidas, cuyo propósito incluía promover la cooperación internacional y evitar nuevos conflictos mundiales.",
                    "La reconstrucción, los juicios por crímenes de guerra, la descolonización y la creación de nuevas instituciones internacionales marcaron las décadas siguientes."
                ]
            }
        ]
    }
};


/* =========================================================
   2. ELEMENTOS DE LA PÁGINA
========================================================= */

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));


/* =========================================================
   3. MODO CLARO Y MODO OSCURO
========================================================= */

function initTheme() {
    const themeButton = $(
        ".theme-toggle, #theme-toggle, [data-theme-toggle]"
    );

    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem("ecos-theme");
    } catch (error) {
        // La página sigue funcionando si el almacenamiento está bloqueado.
    }

    const prefersDark = window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    function applyTheme(theme) {
        const dark = theme === "dark";

        document.body.classList.toggle("dark-mode", dark);
        document.documentElement.style.colorScheme = dark ? "dark" : "light";

        if (themeButton) {
            themeButton.textContent = dark ? "☀️" : "🌙";
            themeButton.setAttribute(
                "aria-label",
                dark ? "Activar modo claro" : "Activar modo oscuro"
            );
            themeButton.setAttribute("aria-pressed", String(dark));
            themeButton.title = dark
                ? "Cambiar a modo claro"
                : "Cambiar a modo oscuro";
        }

        try {
            localStorage.setItem("ecos-theme", theme);
        } catch (error) {
            // El tema se aplica aunque no se pueda guardar.
        }
    }

    applyTheme(initialTheme);

    if (themeButton) {
        themeButton.addEventListener("click", () => {
            const nextTheme = document.body.classList.contains("dark-mode")
                ? "light"
                : "dark";

            applyTheme(nextTheme);
        });
    }
}


/* =========================================================
   4. CORRECCIÓN Y COMPROBACIÓN DE IMÁGENES
========================================================= */

function initImages() {
    const imageAliases = {
        "berlin-1945.png": "images/berlin-1945.jpg",
        "invasion-polonia.png": "images/invasion-polonia.jpg",
        "batalla-britania.png": "images/batalla-britania.jpg",
        "pearl-harbor.png": "images/pearl-harbor.jpg",
        "stalingrado.png": "images/stalingrado.jpg",
        "normandia.png": "images/normandia.jpg",
        "hiroshima.png": "images/hiroshima.jpg",
        "victoria-1945.png": "images/victoria-1945.jpg"
    };

    const imageElements = $$("img");

    imageElements.forEach((img) => {
        const currentSrc = img.getAttribute("src");

        if (currentSrc) {
            const filename = currentSrc.split("/").pop().toLowerCase();

            if (imageAliases[filename]) {
                img.setAttribute("src", imageAliases[filename]);
            }
        }

        img.addEventListener("error", () => {
            console.error(
                "[Ecos de la Historia] No se pudo cargar la imagen:",
                img.getAttribute("src")
            );

            img.dataset.imageError = "true";
            img.style.backgroundColor = "var(--paper-dark)";
            img.style.objectFit = "contain";
            img.style.minHeight = "100px";

            if (!img.alt) {
                img.alt = "Imagen no disponible";
            }
        });

        img.addEventListener("load", () => {
            delete img.dataset.imageError;
        });

        // Comprueba también las imágenes que fallaron antes de iniciar el JS.
        if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) {
            img.dataset.imageError = "true";
            console.warn(
                "[Ecos de la Historia] Revisa la ruta de esta imagen:",
                img.getAttribute("src")
            );
        }
    });
}


/* =========================================================
   5. IDENTIFICAR CADA ACONTECIMIENTO
========================================================= */

function normalizeText(text) {
    return String(text || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function getEventKey(card) {
    const explicitKey =
        card.dataset.event ||
        card.dataset.history ||
        card.dataset.id ||
        (card.querySelector("[data-event]") || {}).dataset?.event;

    if (explicitKey) {
        const key = normalizeText(explicitKey)
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

        const aliases = {
            "polonia": "polonia",
            "invasion-polonia": "polonia",
            "invasion-de-polonia": "polonia",
            "britania": "britania",
            "batalla-britania": "britania",
            "batalla-de-inglaterra": "britania",
            "inglaterra": "britania",
            "pearl": "pearl",
            "pearl-harbor": "pearl",
            "ataque-pearl-harbor": "pearl",
            "stalingrado": "stalingrado",
            "batalla-stalingrado": "stalingrado",
            "normandia": "normandia",
            "desembarco-normandia": "normandia",
            "berlin": "berlin",
            "berlin-1945": "berlin",
            "caida-berlin": "berlin",
            "hiroshima": "hiroshima",
            "bomba-atomica": "hiroshima",
            "victoria": "victoria",
            "final-guerra": "victoria",
            "fin-guerra": "victoria",
            "fin-segunda-guerra-mundial": "victoria"
        };

        if (aliases[key]) {
            return aliases[key];
        }
    }

    const title = normalizeText(
        card.querySelector("h2, h3, h4, .event-title")?.textContent ||
        card.textContent
    );

    if (title.includes("polonia")) return "polonia";
    if (title.includes("inglaterra") || title.includes("britania")) return "britania";
    if (title.includes("pearl") || title.includes("harbor")) return "pearl";
    if (title.includes("stalingrado")) return "stalingrado";
    if (title.includes("normandia")) return "normandia";
    if (title.includes("berlin")) return "berlin";
    if (title.includes("hiroshima") || title.includes("nagasaki")) return "hiroshima";
    if (
        title.includes("final de la guerra") ||
        title.includes("fin de la guerra") ||
        title.includes("victoria de 1945")
    ) {
        return "victoria";
    }

    const img = $("img", card);

    if (img) {
        const src = normalizeText(img.getAttribute("src"));

        if (src.includes("invasion-polonia")) return "polonia";
        if (src.includes("batalla-britania")) return "britania";
        if (src.includes("pearl-harbor")) return "pearl";
        if (src.includes("stalingrado")) return "stalingrado";
        if (src.includes("normandia")) return "normandia";
        if (src.includes("berlin-1945")) return "berlin";
        if (src.includes("hiroshima")) return "hiroshima";
        if (src.includes("victoria-1945")) return "victoria";
    }

    return null;
}


/* =========================================================
   6. CREAR EL CONTENIDO COMPLETO DEL EXPEDIENTE
========================================================= */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function renderEvent(event) {
    const sectionsHTML = event.sections.map((section) => {
        const paragraphsHTML = section.paragraphs.map((paragraph) =>
            `<p>${escapeHTML(paragraph)}</p>`
        ).join("");

        return `
            <section class="detail-section">
                <h3>${escapeHTML(section.heading)}</h3>
                ${paragraphsHTML}
            </section>
        `;
    }).join("");

    return `
        <article class="historical-article">
            <span class="detail-date">${escapeHTML(event.date)}</span>
            <h2>${escapeHTML(event.title)}</h2>
            <p class="detail-lead">${escapeHTML(event.lead)}</p>

            <figure class="detail-figure">
                <img
                    src="${escapeHTML(event.image)}"
                    alt="${escapeHTML(event.alt)}"
                    loading="lazy"
                >
                <figcaption>
                    Expediente histórico: ${escapeHTML(event.title)}.
                </figcaption>
            </figure>

            ${sectionsHTML}

            <p class="detail-note">
                <strong>Nota histórica:</strong>
                Este texto es una síntesis educativa. Para una investigación
                académica, contrasta las fechas y las interpretaciones con
                fuentes históricas fiables.
            </p>
        </article>
    `;
}


/* =========================================================
   7. ABRIR Y CERRAR EXPEDIENTES
========================================================= */

function initHistoricalCards() {
    const cards = $$(".event-card");
    const detailPanel = $("#event-detail, .event-detail");
    const detailContent = $("#detail-content");

    if (!cards.length) {
        console.warn(
            "[Ecos de la Historia] No se encontraron tarjetas .event-card."
        );
        return;
    }

    if (!detailPanel || !detailContent) {
        console.warn(
            "[Ecos de la Historia] Falta #event-detail o #detail-content en el HTML."
        );
        return;
    }

    let lastActiveCard = null;

    function closeEvent(restoreFocus = false) {
        detailPanel.hidden = true;
        detailPanel.setAttribute("aria-hidden", "true");

        cards.forEach((card) => {
            card.classList.remove("is-selected");

            const button = $(".event-card-button", card);

            if (button) {
                button.setAttribute("aria-expanded", "false");
            }
        });

        if (restoreFocus && lastActiveCard) {
            const button = $(".event-card-button", lastActiveCard);

            if (button) {
                button.focus();
            }
        }
    }

    function openEvent(card) {
        const key = getEventKey(card);
        const event = key ? historicalEvents[key] : null;

        if (!event) {
            console.warn(
                "[Ecos de la Historia] No se encontró la historia de esta tarjeta.",
                card
            );

            detailContent.innerHTML = `
                <h2>Expediente no disponible</h2>
                <p>
                    No se pudo identificar este acontecimiento.
                    Revisa el título de la tarjeta o añade un atributo
                    data-event con su identificador.
                </p>
            `;
        } else {
            detailContent.innerHTML = renderEvent(event);
        }

        lastActiveCard = card;
        detailPanel.hidden = false;
        detailPanel.setAttribute("aria-hidden", "false");

        cards.forEach((item) => {
            const selected = item === card;

            item.classList.toggle("is-selected", selected);

            const button = $(".event-card-button", item);

            if (button) {
                button.setAttribute("aria-expanded", String(selected));
            }
        });

        detailPanel.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth",
            block: "start"
        });
    }

    cards.forEach((card) => {
        const button = $(".event-card-button", card) || card;

        if (button.tagName === "BUTTON") {
            button.setAttribute("aria-haspopup", "region");
            button.setAttribute("aria-expanded", "false");
        }

        button.addEventListener("click", (event) => {
            // No intercepta enlaces u otros botones interiores.
            if (event.target.closest("a") && event.target.closest("a") !== button) {
                return;
            }

            openEvent(card);
        });
    });

    const closeButtons = $$(
        ".detail-close, #close-detail, [data-close-detail]",
        detailPanel
    );

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => closeEvent(true));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !detailPanel.hidden) {
            closeEvent(true);
        }
    });

    closeEvent(false);
}


/* =========================================================
   8. ANIMACIONES AL DESPLAZARSE POR LA PÁGINA
========================================================= */

function initRevealAnimations() {
    const elements = $$(".reveal");

    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
    });

    elements.forEach((element) => observer.observe(element));
}


/* =========================================================
   9. BOTONES PARA NAVEGAR A LAS SECCIONES
========================================================= */

function initNavigation() {
    $$('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");

            if (!href || href === "#") return;

            const target = $(href);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "auto"
                    : "smooth",
                block: "start"
            });

            if (target.matches("button, a, input, textarea, select")) {
                target.focus({ preventScroll: true });
            }
        });
    });
}


/* =========================================================
   10. DOSSIER SECRETO, SI EXISTE EN EL HTML
========================================================= */

function initSecretDossier() {
    const trigger = $(
        "#secret-trigger, [data-secret-trigger], .secret-trigger"
    );

    const panel = $(
        "#secret-dossier, [data-secret-panel], .secret-dossier"
    );

    if (!trigger || !panel) return;

    const closeButton = $(
        "#secret-close, [data-secret-close], .secret-close",
        panel
    );

    function setOpen(open) {
        panel.hidden = !open;
        panel.setAttribute("aria-hidden", String(!open));
        trigger.setAttribute("aria-expanded", String(open));
    }

    trigger.addEventListener("click", () => {
        setOpen(panel.hidden);
    });

    if (closeButton) {
        closeButton.addEventListener("click", () => setOpen(false));
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !panel.hidden) {
            setOpen(false);
            trigger.focus();
        }
    });

    setOpen(false);
}


/* =========================================================
   11. INICIALIZAR LA PÁGINA
========================================================= */

function initEcosDeLaHistoria() {
    initTheme();
    initImages();
    initHistoricalCards();
    initRevealAnimations();
    initNavigation();
    initSecretDossier();

    console.info(
        "%cECOS DE LA HISTORIA",
        "font-size:18px;font-weight:bold;color:#8d392b;"
    );

    console.info(
        "Sistema interactivo iniciado correctamente."
    );
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEcosDeLaHistoria);
} else {
    initEcosDeLaHistoria();
}
