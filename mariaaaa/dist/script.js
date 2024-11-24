$(document).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    // Clique no envelope ou no botão "Open"
    btn_open.click(function() {
        open();
    });
    
    // Clique no botão "Reset"
    btn_reset.click(function() {
        close();
    });

    // Função para abrir o envelope e mostrar o GIF
    function open() {
        envelope.addClass("open").removeClass("close");
        
        // Verifica se o GIF existe e mostra ele com fadeIn
        $(".gif").fadeIn();
    }

    // Função para fechar o envelope
    function close() {
        envelope.addClass("close").removeClass("open");
        
        // Esconde o GIF ao fechar
        $(".gif").fadeOut();
    }
});
