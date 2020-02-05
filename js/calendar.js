    $(document).ready(function () {
        $("#my-calendar").zabuto_calendar({
            language: "es",
            ajax: { url: "datos.json",
                    modal: true
                 }
                 })
    });
