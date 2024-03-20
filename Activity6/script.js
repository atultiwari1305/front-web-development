$(document).ready(function() {
    $('#add-task').click(function() {
        var task = $('#task-input').val();
        if (task !== '') {
            $('#task-list').append('<li><span class="task-text">' + task + '</span><button class="complete-btn">Complete</button><button class="delete-btn">Delete</button></li>');
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', '.complete-btn', function() {
        $(this).siblings('.task-text').toggleClass('completed');
    });

    $('#task-list').on('click', '.task-text', function() {
        $(this).toggleClass('completed');
    });

    $('#task-list').on('click', '.delete-btn', function() {
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
    });
});
