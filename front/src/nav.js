$(() => {

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("#homelink").click(async (e) => {
        let clickText = "Home";
        $.post('http://localhost:8080/page_change', { data: clickText }, (e) => {
            console.log("Successfully updated current page");
        });
        $.get('http://localhost:8080/page_change', (newpage) => {
            $('#currentPage').text(() => {
                return newpage;
            })
        })
    });

    $("#y1link").click(async (e) => {
        let clickText = "Year 1";
        $.post('http://localhost:8080/page_change', { data: clickText }, (e) => {
            console.log("Successfully updated current page");
        });
        $.get('http://localhost:8080/page_change', (newpage) => {
            $('#currentPage').text(() => {
                return newpage;
            })
        })
    });

    $("#y2link").click(async (e) => {
        let clickText = "Year 2";
        $.post('http://localhost:8080/page_change', { data: clickText }, (e) => {
            console.log("Successfully updated current page");
        });
        $.get('http://localhost:8080/page_change', (newpage) => {
            $('#currentPage').text(() => {
                return newpage;
            })
        })
    });

    $("#y3link").click(async (e) => {
        let clickText = "Year 3";
        $.post('http://localhost:8080/page_change', { data: clickText }, (e) => {
            console.log("Successfully updated current page");
        });
        $.get('http://localhost:8080/page_change', (newpage) => {
            $('#currentPage').text(() => {
                return newpage;
            })
        })
    });

    $("#mlink").click(async (e) => {
        let clickText = "Masters Year";
        $.post('http://localhost:8080/page_change', { data: clickText }, (e) => {
            console.log("Successfully updated current page");
        });
        $.get('http://localhost:8080/page_change', (newpage) => {
            $('#currentPage').text(() => {
                return newpage;
            })
        })
    });

    $("#alink").click(async (e) => {
        let clickText = "About me";
        $.post('http://localhost:8080/page_change', { data: clickText }, (e) => {
            console.log("Successfully updated current page");
        });
        $.get('http://localhost:8080/page_change', (newpage) => {
            $('#currentPage').text(() => {
                return newpage;
            })
        })
    });
})


