    $(document).ready(function () {
        $("#my-calendar").zabuto_calendar({
            language: "es",
            legend: [
                {type: "text", label: "Special event", badge: "00"},
                {type: "block", label: "Regular event", classname: "purple"},
                {type: "spacer"},
                {type: "text", label: "Bad"},
                {type: "list", list: ["grade-1", "grade-2", "grade-3", "grade-4"]},
                {type: "text", label: "Good"}
              ],
            data: [
                {
                    "date":"2020-01-26",
                    "badge":true,
                    "title":"Competición Jaca",
                    "body":"<p class=\"lead\">Party<\/p><p>Like it's 1999.<\/p>",
                    "footer":"At Paisley Park",
                    "classname":"bg-secondary"
                  }
            ],
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
