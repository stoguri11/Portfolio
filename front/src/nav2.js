$(() => {

    $('button.dropdown-toggle').on("click", function(e){
        $(this).closest('div').toggleClass('open');
        e.stopPropagation();
        e.preventDefault();
    });

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(".dropitem").click((e) => {
        var clickText = $(e.target).text();

        $('#currentPage').text(() => {
            return clickText;
        });

        let path = 'http://localhost:8080/nav/';
        switch(clickText) {
            case 'Web Foundations':
                path += 'webf1' ;
                break;
            case 'Introduction to Programming':
                path += 'intprog' ;
                break;
            case 'Network Fundamentals':
                path += 'netfun' ;
                break;
        }
        console.log(path)
        $.get(path, (resp) => {
            console.log(resp)
            $("body").html(resp) ;
        });

    });
})


