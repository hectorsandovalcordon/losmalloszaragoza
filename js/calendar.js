$(document).ready(function () {
        //$("#date-popover").popover();
        $("#my-calendar").zabuto_calendar({
            language: "es",
            action: function () {
                return myDateFunction(this.id, false);
            },
            action_nav: function () {
                return myNavFunction(this.id);
            },
            legend: [
                {type: "text", label: "Competición Jaca", badge: "26 de Enero"},
                {type: "text", label: "Competición Panel", badge: "Marzo 2020"},
                {type: "text", label: "Quedada Albarracín", badge: "Diciembre 2020"},
              ],
            ajax: { url:"datos.json"}
            ,
            cell_border: true,
            today: true,
            show_days: true,
            weekstartson: 1,
            nav_icon: {
              prev: '<i class="fa fa-chevron-circle-left"></i>',
              next: '<i class="fa fa-chevron-circle-right"></i>'
            }
                 })
    });

    function myDateFunction(id, fromModal) {
        $("#date-popover").hide();
        if (fromModal) {
            $("#" + id + "_modal").modal("hide");
        }
        var date = $("#" + id).data("date");
        var hasEvent = $("#" + id).data("hasEvent");
        if (hasEvent && !fromModal) {
            return false;
        }
        $("#date-popover-content").html('You clicked on date ' + date);
        $("#date-popover").show();
        return true;
    }

    function myNavFunction(id) {
        $("#date-popover").hide();
        var nav = $("#" + id).data("navigation");
        var to = $("#" + id).data("to");
        console.log('nav ' + nav + ' to: \ + to.month + '/' + to.year')
}

