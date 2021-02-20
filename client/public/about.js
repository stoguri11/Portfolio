$(() => {

    $('#linkedin').on('click', (e) => {
        window.open('https://www.linkedin.com/in/sam-toguri-117488207');
        return false ;
    });

    $('#email').on('click', (e) => {
        window.location.href = "mailto:samtoguri@outlook.com?subject=Portfolio Website";
    });

});
