 
      jQuery(document).ready(function ($) {
        $("[data-background]").each(function () {
          $(this).css(
            "background-image",
            "url(" + $(this).attr("data-background") + ")",
          );
        });
        function tg_theme_toggler() {
          $(".modeSwitch").on("change", function () {
            toggleTheme();
          });
          function tg_set_scheme(tg_theme) {
            localStorage.setItem("tg_theme_scheme", tg_theme);
            document.documentElement.setAttribute("tg-theme", tg_theme);
          }
          function toggleTheme() {
            if (localStorage.getItem("tg_theme_scheme") === "dark") {
              tg_set_scheme("light");
            } else {
              tg_set_scheme("dark");
            }
          }
          function tg_init_theme() {
            if (localStorage.getItem("tg_theme_scheme") === "dark") {
              tg_set_scheme("dark");
              document.querySelector(".modeSwitch").checked = true;
            } else {
              tg_set_scheme("light");
              document.querySelector(".modeSwitch").checked = false;
            }
          }
          tg_init_theme();
        }
        if ($(".modeSwitch").length > 0) {
          tg_theme_toggler();
        }
      });
   