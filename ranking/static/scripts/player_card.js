$(".options .arrow-right").click(function() {
    l_arrow = $(this).parent().parent().find(".arrow-left");
    l_arrow.css("opacity","1");
    l_arrow.removeClass("disabled");
    additional = $(this).parent().parent().parent().parent();
    h1 = additional.find('.more-info h1');
    current_tab = $(this).parent().parent().parent().find(".info .tab-active");
    if($(this).parent().parent().parent().find(".info ").hasClass("hide-info"))
    {
        current_tab = $(this).parent().parent().parent().find(".edit-info .tab-active");
    }
    if (current_tab.next().next().hasClass("tab") === false){
                    $(this).css("opacity","0.5");
                    $(this).addClass("disabled");
            }
    current_tab.fadeOut("fast", function () {
            current_tab.removeClass("tab-active");
            current_tab.next().hide().fadeIn("fast" , function () {
                h1.removeClass('hide-info');
                h1.css('display','block');
               current_tab.next().addClass("tab-active");
            });
    });


});

$(".options .arrow-left").click(function() {
    r_arrow = $(this).parent().parent().find(".arrow-right");
    r_arrow.css("opacity","1");
    r_arrow.removeClass("disabled");
    additional = $(this).parent().parent().parent().parent();
    h1 = additional.find('.more-info h1');
    h1_change = false;
    current_tab = $(this).parent().parent().parent().find(".info .tab-active");
    if($(this).parent().parent().parent().find(".info ").hasClass("hide-info"))
    {
        current_tab = $(this).parent().parent().parent().find(".edit-info .tab-active");
        h1_change = true;
    }
    if (current_tab.prev().prev().hasClass("tab") === false){
                    $(this).css("opacity","0.5");
                    $(this).addClass("disabled");
                    if(h1_change)
                    {
                        h1.fadeOut("fast", function () {
                            h1.addClass('hide-info');
                        });
                    }
            }
    current_tab.fadeOut("fast", function () {
            current_tab.removeClass("tab-active");
            current_tab.prev().hide().fadeIn("fast", function () {
               current_tab.prev().addClass("tab-active");
            });
    });

});

$(".card .additional .options .edit").click(function(){
    $(this).parent().find('.confirm').toggleClass("hide-button");
    $(this).parent().find('.delete').toggleClass("hide-button");
    additional = $(this).parent().parent().parent().parent();
    additional.toggleClass("edit-additional");
    additional.toggleClass("edit-off-additional");
    default_tabs = additional.find(".more-info .info");
    edit_tabs = additional.find(".more-info .edit-info");
    h1 = additional.find(".more-info h1");
    default_tabs.toggleClass("hide-info");
    edit_tabs.toggleClass("hide-info");
    l_arrow = $(this).parent().parent().find(".arrow-left");
    r_arrow = $(this).parent().parent().find(".arrow-right");

    if(edit_tabs.hasClass("hide-info"))
    {
        active_tab = default_tabs.find(".tab-active");
        h1.removeClass('hide-info');
        h1.css("display", "block");
        if(active_tab.is(':first-child'))
        {
            l_arrow.css("opacity","0.5");
            l_arrow.addClass("disabled");

            r_arrow.css("opacity","1");
            r_arrow.removeClass("disabled");
        }
        else if(active_tab.is(':last-child'))
        {
            l_arrow.css("opacity","1");
            l_arrow.removeClass("disabled");

            r_arrow.css("opacity","0.5");
            r_arrow.addClass("disabled");
        }
        else
        {
            l_arrow.css("opacity","1");
            l_arrow.removeClass("disabled");

            r_arrow.css("opacity","1");
            r_arrow.removeClass("disabled");
        }
    }
    else {
        active_tab = edit_tabs.find(".tab-active");
        if(active_tab.is(':first-child'))
        {
            l_arrow.css("opacity","0.5");
            l_arrow.addClass("disabled");

            r_arrow.css("opacity","1");
            r_arrow.removeClass("disabled");
            h1.addClass('hide-info');
            h1.css("display", "none");
        }
        else if(active_tab.is(':last-child'))
        {
            l_arrow.css("opacity","1");
            l_arrow.removeClass("disabled");

            r_arrow.css("opacity","0.5");
            r_arrow.addClass("disabled");
            h1.removeClass('hide-info');
        }
        else
        {
            l_arrow.css("opacity","1");
            l_arrow.removeClass("disabled");
            
            r_arrow.css("opacity","1");
            r_arrow.removeClass("disabled");
            h1.removeClass('hide-info');
        }
    }
});

$( document ).ready(function() {
    $(".edit-info #id_birthday").attr('type', 'date');
    $(".edit-info #id_birthday").css("max-width", "110px");
});

$( document ).ready(function() {
     $(".hidden-value").each(function() {
         form = $(this).next().find(".edit-form");
         form.val($(this).text());
         if(form.is("select")) {
             if (form.is("#id_preferred_foot") || form.is("#id_position")) {
                 var dict = {
                     "left": "Lewa",
                     "right": "Prawa",
                     "both": "Obie",
                     "ST": "N",
                     "LW": "LS",
                     "RW": "PS",
                     "LM": "LP",
                     "RM": "PP",
                     "CAM": "ŚPO",
                     "CM": "ŚP",
                     "CDM": "ŚPD",
                     "CB": "ŚO",
                     "LB": "LO",
                     "RB": "PO",
                     "GK": "BR",
                 };
                 form.val(form.find("option:contains(" + dict[$(this).text()] + ")").val()).change()
             }
             else {
             form.val(form.find("option:contains(" + $(this).text() + ")").val()).change();
             }
         }
    }) ;
});

$( document ).ready(function() {
    $(".edit-info .tab .input-group").change();
});

$(".edit-info .tab .input-group").change(function() {
  tab = $(this).parent().parent().parent();
  elem = tab.find(".edit-info-first-tab #id_position");
  if(elem.val() == 'ST'){
      // tab.find(".edit-info .tab .input-group #id_goals_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_goals_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_big_chances_missed").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_big_chances_missed").val('');
      // tab.find(".edit-info .tab .input-group #id_big_chances_created").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_big_chances_created").val('');

      tab.find(".edit-info .tab .input-group #id_touches_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_touches_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_interceptions_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_interceptions_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_tackles_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_tackles_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_clearances_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clearances_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").val('');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").val('');

      // tab.find(".edit-info .tab .input-group #id_successful_dribbles").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_successful_dribbles").val('');
      // tab.find(".edit-info .tab .input-group #id_duels_won").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_duels_won").val('');
      tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_fouled_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_fouled_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_offsides_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_offsides_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").val('');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").val('');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").val('');
  }
  else if(elem.val() == 'RW' || elem.val() == 'LW'){
      // tab.find(".edit-info .tab .input-group #id_goals_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_goals_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_big_chances_missed").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_big_chances_missed").val('');
      // tab.find(".edit-info .tab .input-group #id_big_chances_created").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_big_chances_created").val('');

      tab.find(".edit-info .tab .input-group #id_touches_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_touches_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_interceptions_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_interceptions_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_tackles_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_tackles_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_clearances_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clearances_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").val('');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").val('');

      // tab.find(".edit-info .tab .input-group #id_successful_dribbles").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_successful_dribbles").val('');
      // tab.find(".edit-info .tab .input-group #id_duels_won").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_duels_won").val('');
      tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_fouled_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_fouled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").val('');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").val('');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").val('');
  }
  else if(elem.val() == 'RM' || elem.val() == 'LM'){
      tab.find(".edit-info .tab .input-group #id_goals_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").val('');
      // tab.find(".edit-info .tab .input-group #id_big_chances_created").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_big_chances_created").val('');

      // tab.find(".edit-info .tab .input-group #id_touches_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_touches_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").val('');

      // tab.find(".edit-info .tab .input-group #id_interceptions_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_interceptions_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_tackles_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_tackles_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_clearances_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clearances_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").val('');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").val('');

      tab.find(".edit-info .tab .input-group #id_successful_dribbles").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_dribbles").val('');
      // tab.find(".edit-info .tab .input-group #id_duels_won").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_duels_won").val('');
      // tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").val('');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").val('');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").val('');
  }
  else if(elem.val() == 'CAM'){
      // tab.find(".edit-info .tab .input-group #id_goals_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_goals_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").val('');
      // tab.find(".edit-info .tab .input-group #id_big_chances_created").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_big_chances_created").val('');

      // tab.find(".edit-info .tab .input-group #id_touches_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_touches_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_key_passes_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_key_passes_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_interceptions_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_interceptions_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_tackles_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_tackles_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_clearances_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clearances_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").val('');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").val('');

      // tab.find(".edit-info .tab .input-group #id_successful_dribbles").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_successful_dribbles").val('');
      // tab.find(".edit-info .tab .input-group #id_duels_won").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_duels_won").val('');
      // tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").val('');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").val('');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").val('');
  }
  else if(elem.val() == 'CM'){
      tab.find(".edit-info .tab .input-group #id_goals_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").val('');
      // tab.find(".edit-info .tab .input-group #id_big_chances_created").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_big_chances_created").val('');

      // tab.find(".edit-info .tab .input-group #id_touches_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_touches_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").val('');

      // tab.find(".edit-info .tab .input-group #id_interceptions_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_interceptions_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_tackles_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_tackles_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_clearances_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clearances_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").val('');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").val('');

      tab.find(".edit-info .tab .input-group #id_successful_dribbles").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_dribbles").val('');
      // tab.find(".edit-info .tab .input-group #id_duels_won").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_duels_won").val('');
      // tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").val('');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").val('');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").val('');
  }
  else if(elem.val() == 'CDM'){
      tab.find(".edit-info .tab .input-group #id_goals_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_created").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_created").val('');

      // tab.find(".edit-info .tab .input-group #id_touches_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_touches_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").val('');

      // tab.find(".edit-info .tab .input-group #id_interceptions_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_interceptions_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_tackles_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_tackles_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_dribbled_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_dribbled_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_clearances_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_clearances_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").val('');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").val('');

      tab.find(".edit-info .tab .input-group #id_successful_dribbles").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_dribbles").val('');
      // tab.find(".edit-info .tab .input-group #id_duels_won").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_duels_won").val('');
      // tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_fouls_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_fouls_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").val('');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").val('');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").val('');
  }
  else if(elem.val() == 'LB' || elem.val() == 'RB'){
      tab.find(".edit-info .tab .input-group #id_goals_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_created").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_created").val('');

      // tab.find(".edit-info .tab .input-group #id_touches_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_touches_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_interceptions_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_interceptions_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_tackles_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_tackles_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_dribbled_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_dribbled_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_clearances_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_clearances_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").val('');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").val('');

      tab.find(".edit-info .tab .input-group #id_successful_dribbles").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_dribbles").val('');
      // tab.find(".edit-info .tab .input-group #id_duels_won").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_duels_won").val('');
      tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").val('');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").val('');
      // tab.find(".edit-info .tab .input-group #id_clean_sheets").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_clean_sheets").val('');
  }
  else if(elem.val() == 'CB'){
      tab.find(".edit-info .tab .input-group #id_goals_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_created").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_created").val('');

      tab.find(".edit-info .tab .input-group #id_touches_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_touches_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").val('');

      // tab.find(".edit-info .tab .input-group #id_interceptions_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_interceptions_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_tackles_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_tackles_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_dribbled_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_dribbled_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_clearances_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_clearances_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").val('');
      // tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").val('');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").val('');

      tab.find(".edit-info .tab .input-group #id_successful_dribbles").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_dribbles").val('');
      // tab.find(".edit-info .tab .input-group #id_duels_won").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_duels_won").val('');
      tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").val('');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").val('');
      // tab.find(".edit-info .tab .input-group #id_clean_sheets").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_clean_sheets").val('');
  }
  else if(elem.val() == 'GK'){
      tab.find(".edit-info .tab .input-group #id_goals_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_created").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_created").val('');

      tab.find(".edit-info .tab .input-group #id_touches_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_touches_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_interceptions_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_interceptions_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_tackles_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_tackles_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_clearances_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_clearances_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").val('');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").val('');

      tab.find(".edit-info .tab .input-group #id_successful_dribbles").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_dribbles").val('');
      tab.find(".edit-info .tab .input-group #id_duels_won").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_duels_won").val('');
      tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").val('');

      // tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_penalties_saved").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_penalties_saved").val('');
      // tab.find(".edit-info .tab .input-group #id_saves_per_game").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_saves_per_game").val('');
      // tab.find(".edit-info .tab .input-group #id_successful_saves_percent").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_successful_saves_percent").val('');
      // tab.find(".edit-info .tab .input-group #id_clean_sheets").parent().parent().css('display', 'none');
      // tab.find(".edit-info .tab .input-group #id_clean_sheets").val('');
  }
  /*
  i = 0;
  tab.find(".edit-info .edit-info-tab .edit-input-group").each(function(index) {
      if($(this).find(".coords").eq(i).css('display') != 'None')
      {
            i++;
            if(i == 25)
            {
                console.log(i);
               tab.find(".edit-info .edit-info-tab").append("XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
            }
      }
  });
   */

});

/*
      tab.find(".edit-info .tab .input-group #id_shots_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_shots_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_goals_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_missed").val('');
      tab.find(".edit-info .tab .input-group #id_big_chances_created").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_big_chances_created").val('');

      tab.find(".edit-info .tab .input-group #id_touches_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_touches_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_crosses_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_accurate_passes_oposhalf_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_key_passes_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_interceptions_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_interceptions_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_tackles_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_tackles_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_dribbled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_clearances_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clearances_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_goal").val('');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_error_leading_to_shot").val('');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalty_committed").val('');

      tab.find(".edit-info .tab .input-group #id_successful_dribbles").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_dribbles").val('');
      tab.find(".edit-info .tab .input-group #id_duels_won").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_duels_won").val('');
      tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_possession_lost_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouls_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_fouled_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_offsides_per_game").val('');

      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_goals_conceded_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_penalties_saved").val('');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_saves_per_game").val('');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_successful_saves_percent").val('');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").parent().parent().css('display', 'none');
      tab.find(".edit-info .tab .input-group #id_clean_sheets").val('');
 */