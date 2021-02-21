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
        $("#wrapper").addClass("toggled");
    });

    $(".dropitem").click(function (e) {
        e.preventDefault();

        var clickText = $(e.target).text();
        console.log(clickText);

        $("#welcomeText").text(() => {
            return clickText;
        });

        let content;
        if (clickText == "Masters Project") {
            content = "mastproj.html";
        } else if (clickText == "Applied Data and Text Analytics") {
            content = "adta.html";
        } else if (clickText == "Parallel Programming") {
            content = "pp.html";
        } else if (clickText == "Computer Vision") {
            content = "comvi.html";
        } else if (clickText == "Scientific Computing and Simulation") {
            content = "scas.html"
        } else if (clickText == "Final Year Project") {
            content = "fyp.html";
        } else if (clickText == "Theoretical Computer Science") {
            content = "theocs.html";
        } else if (clickText == "Distributed Systems") {
            content = "disys.html";
        } else if (clickText == "Robotics") {
            content = "rob.html";
        } else if (clickText == "Enterprise Web Architectures") {
            content = "entwa.html";
        } else if (clickText == "Data and Algorithms") {
            content = "dsalg.html";
        } else if (clickText == "Maths and Functional Programming") {
            content = "mafp.html";
        } else if (clickText =="Operating Systems and Networking") {
            content = "osan.html";
        } else if (clickText == "Advanced Programming Concepts") {
            content = "adproc.html";
        } else if (clickText == "Software Engineering") {
            content = "inse.html";
        } else if (clickText == "Web Programming") {
            content = "webprog.html";
        } else if (clickText == "Year 1") {
            content = "year1.html";
        } else {
            content = "about.html"
        }

        console.log(content);

            $.get(content, async (html) => {
                $("#contentarea").load(content);
            });
    });

});

