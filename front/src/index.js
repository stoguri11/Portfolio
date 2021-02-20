$(() => {

    $('button.dropdown-toggle').on("click", function (e) {
        e.preventDefault();
        $(this).closest('div').toggleClass('open');
    });

    $("#menu-toggle, .dropitem").on("click", (e) => {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("#content-wrapper").on("click", (e) => {
        e.preventDefault();
        console.log('click');
        $("#wrapper").addClass("toggled");
    });

    $(".dropitem").click(function (e) {
        e.preventDefault();

        var clickText = $(e.target).text();

        $("#currentPage").text(() => {
            return clickText;
        });

        let content;
        if (clickText == "Masters Project") {
            content = "./html/y4/mastproj.html";
        } else if (clickText == "Applied Data and Text Analytics") {
            content = "./html/y4/adta.html";
        } else if (clickText = "Parallel Programming") {
            content = "./html/y4/pp.html";
        } else if (clickText = "Computer Vision") {
            content = "./html/y4/comvi.html";
        } else if (clickText = "Scientific Computing and Simulation") {
            content = "./html/y4/scas.html"
        } else if (clickText = "Final Year Project") {
            content = "./html/y3/fyp.html";
        } else if (clickText = "Theoretical Comuter Science") {
            content = "./html/y3/theocs.html";
        } else if (clickText = "Distributed Systems") {
            content = "./html/y3/disys.html";
        } else if (clickText = "Robotics") {
            content = "./html/y3/rob.html";
        } else if (clickText = "Enterprise Web Architectures") {
            content = "./html/y3/entwa.html";
        } else if (clickText = "Data and Algorithms") {
            content = "./html/y2/dsalg.html";
        } else if ("Maths and Functional Programming") {
            content = "./html/y2/mafp.html";
        } else if (clickText = "Operating Systems and Networking") {
            content = "./html/y2/osan.html";
        } else if (clickText = "Advanced Programming Concepts") {
            content = "./html/y2/adproc.html";
        } else if (clickText = "Software Engineering") {
            content = "./html/y2/inse.html";
        } else if (clickText = "Web Programming") {
            content = "./html/y2/webprog.html";
        } else if (clickText = "Year 1") {
            content = "./html/year1.html";
        } else (
            content = ",./html/about.html"
        )

            $.get(content, async (html) => {
                $("#contentarea").html(html);
            });
    });

});

