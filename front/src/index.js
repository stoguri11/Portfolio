$(() => {

    $('button.dropdown-toggle').on("click", function (e) {
        $(this).closest('div').toggleClass('open');
        e.stopPropagation();
        e.preventDefault();
    });

    $("#menu-toggle").on("click", (e) => {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(".dropitem").click(function (e) {
        e.preventDefault();

        var clickText = $(e.target).text();

        $("currentPage").text(() => {
            return clickText ;
        });

        let content;
        switch (clickText) {

            case "Web Foundations":
                content = "./webf.html";
                break;

            case "Introduction to Programming":
                content = "./intprog.html";
                break;

            case "Network Fundamentals":
                content = "./netfun.html";
                break;

            case "About me":
                content = "./about.html";
                break;
        }

        $("#contentarea").load(content);
    });

});

