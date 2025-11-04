/* ==========================================================================
   1. INICIALIZAÇÃO E EVENT LISTENER
   ========================================================================== */

// Garante que o script só execute após o carregamento completo do HTML.
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       2. SELETORES DO DOM & VARIÁVEIS
       ========================================================================== */

    const clockElement = document.getElementById('digital-clock');

    // Arrays para traduzir os dias e meses para o formato abreviado em Português.
    const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    
    /* ==========================================================================
       3. FUNÇÕES
       ========================================================================== */

    /**
     * Atualiza o conteúdo do relógio com a hora e a data formatadas.
     */
    function updateClock() {
        const now = new Date();

        const diaSemana = diasDaSemana[now.getDay()];
        const diaMes = now.getDate();
        const mes = meses[now.getMonth()];
        const ano = now.getFullYear();
        const dateString = `${diaSemana} ${diaMes} ${mes} ${ano}`;

        // Monta a string da hora, garantindo o formato de dois dígitos.
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        clockElement.innerHTML = `<span class="digital-clock__date">${dateString}</span><span class="digital-clock__time">${timeString}</span>`;
    }

    /* ==========================================================================
       4. EXECUÇÃO
       ========================================================================== */

    // Executa a função repetidamente a cada 1 segundo.
    setInterval(updateClock, 1000);

    // Executa a função uma vez imediatamente para evitar a tela em branco inicial.
    updateClock();
});