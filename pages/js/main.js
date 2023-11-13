$(document).ready(function() {
    $('#form-contato').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        var nome = $('#nome');
        var email = $('#email');
        var mensagem = $('#mensagem');
        var erro = $('.alert');
        var campo = $('.alert span');

        erro.addClass('d-none');
        $('.is-invalid').removeClass('is-invalid');

        if (nome.val() == '') {
            erro.removeClass('d-none');
            campo.html('Nome');
            nome.focus();
            nome.addClass('is-invalid');
            return false;
        }

        if (email.val() == '') {
            erro.removeClass('d-none');
            campo.html('E-mail');
            email.focus();
            email.addClass('is-invalid');
            return false;
        }

        if (mensagem.val() == '') {
            erro.removeClass('d-none');
            campo.html('Mensagem');
            mensagem.focus();
            mensagem.addClass('is-invalid');
            return false;
        }

        // Form submission successful
        alert('Mensagem enviada com sucesso!');

        // Clear the form
        $('#form-contato')[0].reset();

        return true; // Submit the form
    });
});
