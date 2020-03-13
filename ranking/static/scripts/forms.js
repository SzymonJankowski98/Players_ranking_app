$(".add-player-button").click(function() {
    $("#add-player-form").toggleClass('hide-form');
    $("#add-league-form").addClass('hide-form');
    $("#add-nationality-form").addClass('hide-form');
});

$(".add-league-button").click(function() {
    $("#add-league-form").toggleClass('hide-form');
    $("#add-nationality-form").addClass('hide-form');
    $("#add-player-form").addClass('hide-form');
});

$(".add-nationality-button").click(function() {
    $("#add-nationality-form").toggleClass('hide-form');
    $("#add-player-form").addClass('hide-form');
    $("#add-league-form").addClass('hide-form');
});

$("#add-player-form #id_birthday").attr('type', 'date');

$( document ).ready(function() {
    $("#add-player-form #id_position").change();
});

$("#add-player-form #id_position").change(function() {
  elem = $("#add-player-form #id_position");
  if(elem.val() == 'ST'){
      $("#add-player-form .input-group").css('display', 'flex');
      // $("#add-player-form #id_shots_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_shots_per_game").val('');
      // $("#add-player-form #id_goals_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_goals_per_game").val('');
      // $("#add-player-form #id_big_chances_missed").parent().css('display', 'none');
      // $("#add-player-form #id_big_chances_missed").val('');
      // $("#add-player-form #id_big_chances_created").parent().css('display', 'none');
      // $("#add-player-form #id_big_chances_created").val('');

      $("#add-player-form #id_touches_per_game").parent().css('display', 'none');
      $("#add-player-form #id_touches_per_game").val('');
      $("#add-player-form #id_accurate_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_passes_per_game").val('');
      $("#add-player-form #id_accurate_crosses_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_crosses_per_game").val('');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").val('');
      $("#add-player-form #id_key_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_key_passes_per_game").val('');

      $("#add-player-form #id_interceptions_per_game").parent().css('display', 'none');
      $("#add-player-form #id_interceptions_per_game").val('');
      $("#add-player-form #id_tackles_per_game").parent().css('display', 'none');
      $("#add-player-form #id_tackles_per_game").val('');
      $("#add-player-form #id_dribbled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_dribbled_per_game").val('');
      $("#add-player-form #id_clearances_per_game").parent().css('display', 'none');
      $("#add-player-form #id_clearances_per_game").val('');
      $("#add-player-form #id_error_leading_to_goal").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_goal").val('');
      $("#add-player-form #id_error_leading_to_shot").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_shot").val('');
      $("#add-player-form #id_penalty_committed").parent().css('display', 'none');
      $("#add-player-form #id_penalty_committed").val('');

      // $("#add-player-form #id_successful_dribbles").parent().css('display', 'none');
      // $("#add-player-form #id_successful_dribbles").val('');
      // $("#add-player-form #id_duels_won").parent().css('display', 'none');
      // $("#add-player-form #id_duels_won").val('');
      $("#add-player-form #id_possession_lost_per_game").parent().css('display', 'none');
      $("#add-player-form #id_possession_lost_per_game").val('');
      $("#add-player-form #id_fouls_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouls_per_game").val('');
      // $("#add-player-form #id_fouled_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_fouled_per_game").val('');
      // $("#add-player-form #id_offsides_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_offsides_per_game").val('');

      $("#add-player-form #id_goals_conceded_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_conceded_per_game").val('');
      $("#add-player-form #id_penalties_saved").parent().css('display', 'none');
      $("#add-player-form #id_penalties_saved").val('');
      $("#add-player-form #id_saves_per_game").parent().css('display', 'none');
      $("#add-player-form #id_saves_per_game").val('');
      $("#add-player-form #id_successful_saves_percent").parent().css('display', 'none');
      $("#add-player-form #id_successful_saves_percent").val('');
      $("#add-player-form #id_clean_sheets").parent().css('display', 'none');
      $("#add-player-form #id_clean_sheets").val('');
  }
  else if(elem.val() == 'RW' || elem.val() == 'LW'){
      $("#add-player-form .input-group").css('display', 'flex');
      // $("#add-player-form #id_shots_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_shots_per_game").val('');
      // $("#add-player-form #id_goals_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_goals_per_game").val('');
      // $("#add-player-form #id_big_chances_missed").parent().css('display', 'none');
      // $("#add-player-form #id_big_chances_missed").val('');
      // $("#add-player-form #id_big_chances_created").parent().css('display', 'none');
      // $("#add-player-form #id_big_chances_created").val('');

      $("#add-player-form #id_touches_per_game").parent().css('display', 'none');
      $("#add-player-form #id_touches_per_game").val('');
      // $("#add-player-form #id_accurate_passes_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_accurate_passes_per_game").val('');
      $("#add-player-form #id_accurate_crosses_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_crosses_per_game").val('');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").val('');
      $("#add-player-form #id_key_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_key_passes_per_game").val('');

      $("#add-player-form #id_interceptions_per_game").parent().css('display', 'none');
      $("#add-player-form #id_interceptions_per_game").val('');
      $("#add-player-form #id_tackles_per_game").parent().css('display', 'none');
      $("#add-player-form #id_tackles_per_game").val('');
      $("#add-player-form #id_dribbled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_dribbled_per_game").val('');
      $("#add-player-form #id_clearances_per_game").parent().css('display', 'none');
      $("#add-player-form #id_clearances_per_game").val('');
      $("#add-player-form #id_error_leading_to_goal").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_goal").val('');
      $("#add-player-form #id_error_leading_to_shot").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_shot").val('');
      $("#add-player-form #id_penalty_committed").parent().css('display', 'none');
      $("#add-player-form #id_penalty_committed").val('');

      // $("#add-player-form #id_successful_dribbles").parent().css('display', 'none');
      // $("#add-player-form #id_successful_dribbles").val('');
      // $("#add-player-form #id_duels_won").parent().css('display', 'none');
      // $("#add-player-form #id_duels_won").val('');
      $("#add-player-form #id_possession_lost_per_game").parent().css('display', 'none');
      $("#add-player-form #id_possession_lost_per_game").val('');
      $("#add-player-form #id_fouls_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouls_per_game").val('');
      // $("#add-player-form #id_fouled_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_fouled_per_game").val('');
      $("#add-player-form #id_offsides_per_game").parent().css('display', 'none');
      $("#add-player-form #id_offsides_per_game").val('');

      $("#add-player-form #id_goals_conceded_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_conceded_per_game").val('');
      $("#add-player-form #id_penalties_saved").parent().css('display', 'none');
      $("#add-player-form #id_penalties_saved").val('');
      $("#add-player-form #id_saves_per_game").parent().css('display', 'none');
      $("#add-player-form #id_saves_per_game").val('');
      $("#add-player-form #id_successful_saves_percent").parent().css('display', 'none');
      $("#add-player-form #id_successful_saves_percent").val('');
      $("#add-player-form #id_clean_sheets").parent().css('display', 'none');
      $("#add-player-form #id_clean_sheets").val('');

  }
  else if(elem.val() == 'RM' || elem.val() == 'LM'){
      $("#add-player-form .input-group").css('display', 'flex');
      $("#add-player-form #id_big_chances_missed").parent().css('display', 'none');
      $("#add-player-form #id_shots_per_game").parent().css('display', 'none');
      $("#add-player-form #id_shots_per_game").val('');
      $("#add-player-form #id_goals_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_per_game").val('');
      $("#add-player-form #id_big_chances_missed").parent().css('display', 'none');
      $("#add-player-form #id_big_chances_missed").val('');
      // $("#add-player-form #id_big_chances_created").parent().css('display', 'none');
      // $("#add-player-form #id_big_chances_created").val('');

      // $("#add-player-form #id_touches_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_touches_per_game").val('');
      $("#add-player-form #id_accurate_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_passes_per_game").val('');
      // $("#add-player-form #id_accurate_crosses_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_accurate_crosses_per_game").val('');
      // $("#add-player-form #id_accurate_passes_oposhalf_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_accurate_passes_oposhalf_per_game").val('');
      $("#add-player-form #id_key_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_key_passes_per_game").val('');

      // $("#add-player-form #id_interceptions_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_interceptions_per_game").val('');
      // $("#add-player-form #id_tackles_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_tackles_per_game").val('');
      $("#add-player-form #id_dribbled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_dribbled_per_game").val('');
      $("#add-player-form #id_clearances_per_game").parent().css('display', 'none');
      $("#add-player-form #id_clearances_per_game").val('');
      $("#add-player-form #id_error_leading_to_goal").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_goal").val('');
      $("#add-player-form #id_error_leading_to_shot").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_shot").val('');
      $("#add-player-form #id_penalty_committed").parent().css('display', 'none');
      $("#add-player-form #id_penalty_committed").val('');

      $("#add-player-form #id_successful_dribbles").parent().css('display', 'none');
      $("#add-player-form #id_successful_dribbles").val('');
      // $("#add-player-form #id_duels_won").parent().css('display', 'none');
      // $("#add-player-form #id_duels_won").val('');
      // $("#add-player-form #id_possession_lost_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_possession_lost_per_game").val('');
      $("#add-player-form #id_fouls_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouls_per_game").val('');
      $("#add-player-form #id_fouled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouled_per_game").val('');
      $("#add-player-form #id_offsides_per_game").parent().css('display', 'none');
      $("#add-player-form #id_offsides_per_game").val('');

      $("#add-player-form #id_goals_conceded_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_conceded_per_game").val('');
      $("#add-player-form #id_penalties_saved").parent().css('display', 'none');
      $("#add-player-form #id_penalties_saved").val('');
      $("#add-player-form #id_saves_per_game").parent().css('display', 'none');
      $("#add-player-form #id_saves_per_game").val('');
      $("#add-player-form #id_successful_saves_percent").parent().css('display', 'none');
      $("#add-player-form #id_successful_saves_percent").val('');
      $("#add-player-form #id_clean_sheets").parent().css('display', 'none');
      $("#add-player-form #id_clean_sheets").val('');
  }
  else if(elem.val() == 'CAM'){
      $("#add-player-form .input-group").css('display', 'flex');
      $("#add-player-form #id_shots_per_game").parent().css('display', 'none');
      $("#add-player-form #id_shots_per_game").val('');
      // $("#add-player-form #id_goals_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_goals_per_game").val('');
      $("#add-player-form #id_big_chances_missed").parent().css('display', 'none');
      $("#add-player-form #id_big_chances_missed").val('');
      // $("#add-player-form #id_big_chances_created").parent().css('display', 'none');
      // $("#add-player-form #id_big_chances_created").val('');

      // $("#add-player-form #id_touches_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_touches_per_game").val('');
      $("#add-player-form #id_accurate_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_passes_per_game").val('');
      $("#add-player-form #id_accurate_crosses_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_crosses_per_game").val('');
      // $("#add-player-form #id_accurate_passes_oposhalf_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_accurate_passes_oposhalf_per_game").val('');
      // $("#add-player-form #id_key_passes_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_key_passes_per_game").val('');

      $("#add-player-form #id_interceptions_per_game").parent().css('display', 'none');
      $("#add-player-form #id_interceptions_per_game").val('');
      $("#add-player-form #id_tackles_per_game").parent().css('display', 'none');
      $("#add-player-form #id_tackles_per_game").val('');
      $("#add-player-form #id_dribbled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_dribbled_per_game").val('');
      $("#add-player-form #id_clearances_per_game").parent().css('display', 'none');
      $("#add-player-form #id_clearances_per_game").val('');
      $("#add-player-form #id_error_leading_to_goal").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_goal").val('');
      $("#add-player-form #id_error_leading_to_shot").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_shot").val('');
      $("#add-player-form #id_penalty_committed").parent().css('display', 'none');
      $("#add-player-form #id_penalty_committed").val('');

      // $("#add-player-form #id_successful_dribbles").parent().css('display', 'none');
      // $("#add-player-form #id_successful_dribbles").val('');
      // $("#add-player-form #id_duels_won").parent().css('display', 'none');
      // $("#add-player-form #id_duels_won").val('');
      // $("#add-player-form #id_possession_lost_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_possession_lost_per_game").val('');
      $("#add-player-form #id_fouls_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouls_per_game").val('');
      $("#add-player-form #id_fouled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouled_per_game").val('');
      $("#add-player-form #id_offsides_per_game").parent().css('display', 'none');
      $("#add-player-form #id_offsides_per_game").val('');

      $("#add-player-form #id_goals_conceded_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_conceded_per_game").val('');
      $("#add-player-form #id_penalties_saved").parent().css('display', 'none');
      $("#add-player-form #id_penalties_saved").val('');
      $("#add-player-form #id_saves_per_game").parent().css('display', 'none');
      $("#add-player-form #id_saves_per_game").val('');
      $("#add-player-form #id_successful_saves_percent").parent().css('display', 'none');
      $("#add-player-form #id_successful_saves_percent").val('');
      $("#add-player-form #id_clean_sheets").parent().css('display', 'none');
      $("#add-player-form #id_clean_sheets").val('');
  }
  else if(elem.val() == 'CM'){
      $("#add-player-form .input-group").css('display', 'flex');
      $("#add-player-form #id_shots_per_game").parent().css('display', 'none');
      $("#add-player-form #id_shots_per_game").val('');
      $("#add-player-form #id_goals_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_per_game").val('');
      $("#add-player-form #id_big_chances_missed").parent().css('display', 'none');
      $("#add-player-form #id_big_chances_missed").val('');
      // $("#add-player-form #id_big_chances_created").parent().css('display', 'none');
      // $("#add-player-form #id_big_chances_created").val('');

      // $("#add-player-form #id_touches_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_touches_per_game").val('');
      // $("#add-player-form #id_accurate_passes_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_accurate_passes_per_game").val('');
      $("#add-player-form #id_accurate_crosses_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_crosses_per_game").val('');
      // $("#add-player-form #id_accurate_passes_oposhalf_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_accurate_passes_oposhalf_per_game").val('');
      $("#add-player-form #id_key_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_key_passes_per_game").val('');

      // $("#add-player-form #id_interceptions_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_interceptions_per_game").val('');
      // $("#add-player-form #id_tackles_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_tackles_per_game").val('');
      $("#add-player-form #id_dribbled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_dribbled_per_game").val('');
      $("#add-player-form #id_clearances_per_game").parent().css('display', 'none');
      $("#add-player-form #id_clearances_per_game").val('');
      $("#add-player-form #id_error_leading_to_goal").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_goal").val('');
      $("#add-player-form #id_error_leading_to_shot").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_shot").val('');
      $("#add-player-form #id_penalty_committed").parent().css('display', 'none');
      $("#add-player-form #id_penalty_committed").val('');

      $("#add-player-form #id_successful_dribbles").parent().css('display', 'none');
      $("#add-player-form #id_successful_dribbles").val('');
      // $("#add-player-form #id_duels_won").parent().css('display', 'none');
      // $("#add-player-form #id_duels_won").val('');
      // $("#add-player-form #id_possession_lost_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_possession_lost_per_game").val('');
      $("#add-player-form #id_fouls_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouls_per_game").val('');
      $("#add-player-form #id_fouled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouled_per_game").val('');
      $("#add-player-form #id_offsides_per_game").parent().css('display', 'none');
      $("#add-player-form #id_offsides_per_game").val('');

      $("#add-player-form #id_goals_conceded_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_conceded_per_game").val('');
      $("#add-player-form #id_penalties_saved").parent().css('display', 'none');
      $("#add-player-form #id_penalties_saved").val('');
      $("#add-player-form #id_saves_per_game").parent().css('display', 'none');
      $("#add-player-form #id_saves_per_game").val('');
      $("#add-player-form #id_successful_saves_percent").parent().css('display', 'none');
      $("#add-player-form #id_successful_saves_percent").val('');
      $("#add-player-form #id_clean_sheets").parent().css('display', 'none');
      $("#add-player-form #id_clean_sheets").val('');
  }
  else if(elem.val() == 'CDM'){
      $("#add-player-form .input-group").css('display', 'flex');
      $("#add-player-form #id_shots_per_game").parent().css('display', 'none');
      $("#add-player-form #id_shots_per_game").val('');
      $("#add-player-form #id_goals_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_per_game").val('');
      $("#add-player-form #id_big_chances_missed").parent().css('display', 'none');
      $("#add-player-form #id_big_chances_missed").val('');
      // $("#add-player-form #id_big_chances_created").parent().css('display', 'none');
      // $("#add-player-form #id_big_chances_created").val('');

      // $("#add-player-form #id_touches_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_touches_per_game").val('');
      // $("#add-player-form #id_accurate_passes_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_accurate_passes_per_game").val('');
      $("#add-player-form #id_accurate_crosses_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_crosses_per_game").val('');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").val('');
      $("#add-player-form #id_key_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_key_passes_per_game").val('');

      // $("#add-player-form #id_interceptions_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_interceptions_per_game").val('');
      // $("#add-player-form #id_tackles_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_tackles_per_game").val('');
      // $("#add-player-form #id_dribbled_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_dribbled_per_game").val('');
      // $("#add-player-form #id_clearances_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_clearances_per_game").val('');
      $("#add-player-form #id_error_leading_to_goal").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_goal").val('');
      $("#add-player-form #id_error_leading_to_shot").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_shot").val('');
      $("#add-player-form #id_penalty_committed").parent().css('display', 'none');
      $("#add-player-form #id_penalty_committed").val('');

      $("#add-player-form #id_successful_dribbles").parent().css('display', 'none');
      $("#add-player-form #id_successful_dribbles").val('');
      // $("#add-player-form #id_duels_won").parent().css('display', 'none');
      // $("#add-player-form #id_duels_won").val('');
      $("#add-player-form #id_possession_lost_per_game").parent().css('display', 'none');
      $("#add-player-form #id_possession_lost_per_game").val('');
      $("#add-player-form #id_fouls_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouls_per_game").val('');
      $("#add-player-form #id_fouled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouled_per_game").val('');
      $("#add-player-form #id_offsides_per_game").parent().css('display', 'none');
      $("#add-player-form #id_offsides_per_game").val('');

      $("#add-player-form #id_goals_conceded_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_conceded_per_game").val('');
      $("#add-player-form #id_penalties_saved").parent().css('display', 'none');
      $("#add-player-form #id_penalties_saved").val('');
      $("#add-player-form #id_saves_per_game").parent().css('display', 'none');
      $("#add-player-form #id_saves_per_game").val('');
      $("#add-player-form #id_successful_saves_percent").parent().css('display', 'none');
      $("#add-player-form #id_successful_saves_percent").val('');
      $("#add-player-form #id_clean_sheets").parent().css('display', 'none');
      $("#add-player-form #id_clean_sheets").val('');
  }
  else if(elem.val() == 'LB' || elem.val() == 'RB'){
      $("#add-player-form .input-group").css('display', 'flex');
      $("#add-player-form #id_shots_per_game").parent().css('display', 'none');
      $("#add-player-form #id_shots_per_game").val('');
      $("#add-player-form #id_goals_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_per_game").val('');
      $("#add-player-form #id_big_chances_missed").parent().css('display', 'none');
      $("#add-player-form #id_big_chances_missed").val('');
      // $("#add-player-form #id_big_chances_created").parent().css('display', 'none');
      // $("#add-player-form #id_big_chances_created").val('');

      // $("#add-player-form #id_touches_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_touches_per_game").val('');
      // $("#add-player-form #id_accurate_passes_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_accurate_passes_per_game").val('');
      // $("#add-player-form #id_accurate_crosses_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_accurate_crosses_per_game").val('');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").val('');
      $("#add-player-form #id_key_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_key_passes_per_game").val('');

      $("#add-player-form #id_interceptions_per_game").parent().css('display', 'none');
      $("#add-player-form #id_interceptions_per_game").val('');
      // $("#add-player-form #id_tackles_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_tackles_per_game").val('');
      $("#add-player-form #id_dribbled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_dribbled_per_game").val('');
      // $("#add-player-form #id_clearances_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_clearances_per_game").val('');
      $("#add-player-form #id_error_leading_to_goal").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_goal").val('');
      $("#add-player-form #id_error_leading_to_shot").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_shot").val('');
      $("#add-player-form #id_penalty_committed").parent().css('display', 'none');
      $("#add-player-form #id_penalty_committed").val('');

      $("#add-player-form #id_successful_dribbles").parent().css('display', 'none');
      $("#add-player-form #id_successful_dribbles").val('');
      // $("#add-player-form #id_duels_won").parent().css('display', 'none');
      // $("#add-player-form #id_duels_won").val('');
      $("#add-player-form #id_possession_lost_per_game").parent().css('display', 'none');
      $("#add-player-form #id_possession_lost_per_game").val('');
      $("#add-player-form #id_fouls_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouls_per_game").val('');
      $("#add-player-form #id_fouled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouled_per_game").val('');
      $("#add-player-form #id_offsides_per_game").parent().css('display', 'none');
      $("#add-player-form #id_offsides_per_game").val('');

      $("#add-player-form #id_goals_conceded_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_conceded_per_game").val('');
      $("#add-player-form #id_penalties_saved").parent().css('display', 'none');
      $("#add-player-form #id_penalties_saved").val('');
      $("#add-player-form #id_saves_per_game").parent().css('display', 'none');
      $("#add-player-form #id_saves_per_game").val('');
      $("#add-player-form #id_successful_saves_percent").parent().css('display', 'none');
      $("#add-player-form #id_successful_saves_percent").val('');
      // $("#add-player-form #id_clean_sheets").parent().css('display', 'none');
      // $("#add-player-form #id_clean_sheets").val('');
  }
  else if(elem.val() == 'CB'){
      $("#add-player-form .input-group").css('display', 'flex');
      $("#add-player-form #id_shots_per_game").parent().css('display', 'none');
      $("#add-player-form #id_shots_per_game").val('');
      $("#add-player-form #id_goals_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_per_game").val('');
      $("#add-player-form #id_big_chances_missed").parent().css('display', 'none');
      $("#add-player-form #id_big_chances_missed").val('');
      $("#add-player-form #id_big_chances_created").parent().css('display', 'none');
      $("#add-player-form #id_big_chances_created").val('');

      $("#add-player-form #id_touches_per_game").parent().css('display', 'none');
      $("#add-player-form #id_touches_per_game").val('');
      $("#add-player-form #id_accurate_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_passes_per_game").val('');
      $("#add-player-form #id_accurate_crosses_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_crosses_per_game").val('');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").val('');
      $("#add-player-form #id_key_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_key_passes_per_game").val('');

      // $("#add-player-form #id_interceptions_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_interceptions_per_game").val('');
      // $("#add-player-form #id_tackles_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_tackles_per_game").val('');
      // $("#add-player-form #id_dribbled_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_dribbled_per_game").val('');
      // $("#add-player-form #id_clearances_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_clearances_per_game").val('');
      $("#add-player-form #id_error_leading_to_goal").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_goal").val('');
      // $("#add-player-form #id_error_leading_to_shot").parent().css('display', 'none');
      // $("#add-player-form #id_error_leading_to_shot").val('');
      // $("#add-player-form #id_penalty_committed").parent().css('display', 'none');
      // $("#add-player-form #id_penalty_committed").val('');

      $("#add-player-form #id_successful_dribbles").parent().css('display', 'none');
      $("#add-player-form #id_successful_dribbles").val('');
      // $("#add-player-form #id_duels_won").parent().css('display', 'none');
      // $("#add-player-form #id_duels_won").val('');
      $("#add-player-form #id_possession_lost_per_game").parent().css('display', 'none');
      $("#add-player-form #id_possession_lost_per_game").val('');
      $("#add-player-form #id_fouls_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouls_per_game").val('');
      $("#add-player-form #id_fouled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouled_per_game").val('');
      $("#add-player-form #id_offsides_per_game").parent().css('display', 'none');
      $("#add-player-form #id_offsides_per_game").val('');

      $("#add-player-form #id_goals_conceded_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_conceded_per_game").val('');
      $("#add-player-form #id_penalties_saved").parent().css('display', 'none');
      $("#add-player-form #id_penalties_saved").val('');
      $("#add-player-form #id_saves_per_game").parent().css('display', 'none');
      $("#add-player-form #id_saves_per_game").val('');
      $("#add-player-form #id_successful_saves_percent").parent().css('display', 'none');
      $("#add-player-form #id_successful_saves_percent").val('');
      // $("#add-player-form #id_clean_sheets").parent().css('display', 'none');
      // $("#add-player-form #id_clean_sheets").val('');
  }
  else if(elem.val() == 'GK'){
      $("#add-player-form .input-group").css('display', 'flex');
      $("#add-player-form #id_shots_per_game").parent().css('display', 'none');
      $("#add-player-form #id_shots_per_game").val('');
      $("#add-player-form #id_goals_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_per_game").val('');
      $("#add-player-form #id_big_chances_missed").parent().css('display', 'none');
      $("#add-player-form #id_big_chances_missed").val('');
      $("#add-player-form #id_big_chances_created").parent().css('display', 'none');
      $("#add-player-form #id_big_chances_created").val('');

      $("#add-player-form #id_touches_per_game").parent().css('display', 'none');
      $("#add-player-form #id_touches_per_game").val('');
      // $("#add-player-form #id_accurate_passes_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_accurate_passes_per_game").val('');
      $("#add-player-form #id_accurate_crosses_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_crosses_per_game").val('');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").val('');
      $("#add-player-form #id_key_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_key_passes_per_game").val('');

      $("#add-player-form #id_interceptions_per_game").parent().css('display', 'none');
      $("#add-player-form #id_interceptions_per_game").val('');
      $("#add-player-form #id_tackles_per_game").parent().css('display', 'none');
      $("#add-player-form #id_tackles_per_game").val('');
      $("#add-player-form #id_dribbled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_dribbled_per_game").val('');
      // $("#add-player-form #id_clearances_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_clearances_per_game").val('');
      // $("#add-player-form #id_error_leading_to_goal").parent().css('display', 'none');
      // $("#add-player-form #id_error_leading_to_goal").val('');
      $("#add-player-form #id_error_leading_to_shot").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_shot").val('');
      $("#add-player-form #id_penalty_committed").parent().css('display', 'none');
      $("#add-player-form #id_penalty_committed").val('');

      $("#add-player-form #id_successful_dribbles").parent().css('display', 'none');
      $("#add-player-form #id_successful_dribbles").val('');
      $("#add-player-form #id_duels_won").parent().css('display', 'none');
      $("#add-player-form #id_duels_won").val('');
      $("#add-player-form #id_possession_lost_per_game").parent().css('display', 'none');
      $("#add-player-form #id_possession_lost_per_game").val('');
      $("#add-player-form #id_fouls_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouls_per_game").val('');
      $("#add-player-form #id_fouled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouled_per_game").val('');
      $("#add-player-form #id_offsides_per_game").parent().css('display', 'none');
      $("#add-player-form #id_offsides_per_game").val('');

      // $("#add-player-form #id_goals_conceded_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_goals_conceded_per_game").val('');
      // $("#add-player-form #id_penalties_saved").parent().css('display', 'none');
      // $("#add-player-form #id_penalties_saved").val('');
      // $("#add-player-form #id_saves_per_game").parent().css('display', 'none');
      // $("#add-player-form #id_saves_per_game").val('');
      // $("#add-player-form #id_successful_saves_percent").parent().css('display', 'none');
      // $("#add-player-form #id_successful_saves_percent").val('');
      // $("#add-player-form #id_clean_sheets").parent().css('display', 'none');
      // $("#add-player-form #id_clean_sheets").val('');
  }
});

/*
      $("#add-player-form #id_shots_per_game").parent().css('display', 'none');
      $("#add-player-form #id_shots_per_game").val('');
      $("#add-player-form #id_goals_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_per_game").val('');
      $("#add-player-form #id_big_chances_missed").parent().css('display', 'none');
      $("#add-player-form #id_big_chances_missed").val('');
      $("#add-player-form #id_big_chances_created").parent().css('display', 'none');
      $("#add-player-form #id_big_chances_created").val('');

      $("#add-player-form #id_touches_per_game").parent().css('display', 'none');
      $("#add-player-form #id_touches_per_game").val('');
      $("#add-player-form #id_accurate_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_passes_per_game").val('');
      $("#add-player-form #id_accurate_crosses_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_crosses_per_game").val('');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").parent().css('display', 'none');
      $("#add-player-form #id_accurate_passes_oposhalf_per_game").val('');
      $("#add-player-form #id_key_passes_per_game").parent().css('display', 'none');
      $("#add-player-form #id_key_passes_per_game").val('');

      $("#add-player-form #id_interceptions_per_game").parent().css('display', 'none');
      $("#add-player-form #id_interceptions_per_game").val('');
      $("#add-player-form #id_tackles_per_game").parent().css('display', 'none');
      $("#add-player-form #id_tackles_per_game").val('');
      $("#add-player-form #id_dribbled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_dribbled_per_game").val('');
      $("#add-player-form #id_clearances_per_game").parent().css('display', 'none');
      $("#add-player-form #id_clearances_per_game").val('');
      $("#add-player-form #id_error_leading_to_goal").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_goal").val('');
      $("#add-player-form #id_error_leading_to_shot").parent().css('display', 'none');
      $("#add-player-form #id_error_leading_to_shot").val('');
      $("#add-player-form #id_penalty_committed").parent().css('display', 'none');
      $("#add-player-form #id_penalty_committed").val('');

      $("#add-player-form #id_successful_dribbles").parent().css('display', 'none');
      $("#add-player-form #id_successful_dribbles").val('');
      $("#add-player-form #id_duels_won").parent().css('display', 'none');
      $("#add-player-form #id_duels_won").val('');
      $("#add-player-form #id_possession_lost_per_game").parent().css('display', 'none');
      $("#add-player-form #id_possession_lost_per_game").val('');
      $("#add-player-form #id_fouls_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouls_per_game").val('');
      $("#add-player-form #id_fouled_per_game").parent().css('display', 'none');
      $("#add-player-form #id_fouled_per_game").val('');
      $("#add-player-form #id_offsides_per_game").parent().css('display', 'none');
      $("#add-player-form #id_offsides_per_game").val('');

      $("#add-player-form #id_goals_conceded_per_game").parent().css('display', 'none');
      $("#add-player-form #id_goals_conceded_per_game").val('');
      $("#add-player-form #id_penalties_saved").parent().css('display', 'none');
      $("#add-player-form #id_penalties_saved").val('');
      $("#add-player-form #id_saves_per_game").parent().css('display', 'none');
      $("#add-player-form #id_saves_per_game").val('');
      $("#add-player-form #id_successful_saves_percent").parent().css('display', 'none');
      $("#add-player-form #id_successful_saves_percent").val('');
      $("#add-player-form #id_clean_sheets").parent().css('display', 'none');
      $("#add-player-form #id_clean_sheets").val('');
 */