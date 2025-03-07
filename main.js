const checkboxes = document.querySelectorAll("input")
const taskCard = document.querySelectorAll("div")


checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", (event) => {
        // Desmarcar todos los checkboxes excepto el seleccionado
        checkboxes.forEach(cb => {
            if (cb !== event.target) cb.checked = false;
        });

        // Renderizar el contenido según el checkbox seleccionado
        renderContent(event.target);
    });
});

async function renderContent(Time) {
    try {
        const response = await fetch("./data.json");
        const data = await response.json();
        const content = data.map(datos => datos); // Procesamos los datos

        taskCard.forEach(card => {
            let task = card.classList;
            
            for (let single of content) {
                if (single.title === task[0] && Time.id === "daily")  {
                    card.innerHTML = `
                        <div class="container">
                            <h3>${single.title}</h3>
                            <div class="ellipsis-container">
                            <img class="ellipsis" alt="" src="./images/icon-ellipsis.svg">
                            <img class="ellipsis" alt="" src="./images/icon-ellipsis.svg">
                            <img class="ellipsis" alt="" src="./images/icon-ellipsis.svg">
                            </div>
                        </div>
                        <div class="hrs">
                            <h2>${single.timeframes.daily.current}${single.timeframes.daily.current === 1 ? "hr" : "hrs"}</h2> 
                            <p>Previous - ${single.timeframes.daily.previous}${single.timeframes.daily.previous === 1 ? "hr" : "hrs"}</p>
                        </div>
                    `;
                } else if(single.title === task[0] && Time.id === "weekly") {
                    card.innerHTML = `
                        <div class="container">
                            <h3>${single.title}</h3>
                            <div class="ellipsis-container">
                            <img class="ellipsis" alt="" src="./images/icon-ellipsis.svg">
                            <img class="ellipsis" alt="" src="./images/icon-ellipsis.svg">
                            <img class="ellipsis" alt="" src="./images/icon-ellipsis.svg">
                            </div>
                        </div>
                        <div class="hrs">
                            <h2>${single.timeframes.weekly.current}${single.timeframes.weekly.current === 1 ? "hr" : "hrs"}</h2> 
                            <p>Previous - ${single.timeframes.weekly.previous}${single.timeframes.weekly.previous === 1 ? "hr" : "hrs"}</p>
                        </div>
                    `;
                } else if(single.title === task[0] && Time.id === "monthly") {
                    card.innerHTML = `
                        <div class="container">
                            <h3>${single.title}</h3>
                            <div class="ellipsis-container">
                            <img class="ellipsis" alt="" src="./images/icon-ellipsis.svg">
                            <img class="ellipsis" alt="" src="./images/icon-ellipsis.svg">
                            <img class="ellipsis" alt="" src="./images/icon-ellipsis.svg">
                            </div>
                        </div>
                        <div class="hrs">
                            <h2>${single.timeframes.monthly.current}${single.timeframes.monthly.current === 1 ? "hr" : "hrs"}</h2> 
                            <p>Previous - ${single.timeframes.monthly.previous}${single.timeframes.monthly.previous === 1 ? "hr" : "hrs"}</p>
                        </div>
                    `;
                }
            }
        });

    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

