$(() => {

    $('#diss').on('click', (e) => {
        window.open('./reports/FYP.pdf');
        return false;
    })

    $('#pp').on('click', (e) => {
        window.open('./reports/pp.pdf');
        return false;
    })

})