from django import forms
from .models import Player, League, Nationality


class AddPlayerForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(AddPlayerForm, self).__init__(*args, **kwargs)
        self.fields['first_name'].label = "Imię"
        self.fields['last_name'].label = "Nazwisko"
        self.fields['birthday'].label = "Data urodzenia"
        self.fields['birthday'].type = "date"
        self.fields['height'].label = "Wzrost"
        self.fields['club'].label = "Klub"
        self.fields['nationality'].label = "Narodowość"
        self.fields['league'].label = "Liga"
        self.fields['preferred_foot'].label = "Lepsza noga"
        self.fields['position'].label = "Pozycja"
        self.fields['matches_played'].label = "Ilość spotkań"
        self.fields['minutes_per_game'].label = "Minuty/mecz"
        self.fields['goals'].label = "Bramki"
        self.fields['assists'].label = "Asysty"
        self.fields['goals_per_game'].label = "Bramki/mecz"
        self.fields['shots_per_game'].label = "Strzały/mecz"
        self.fields['big_chances_missed'].label = "Zmarnowane okazje"
        self.fields['big_chances_created'].label = "Wypracowane okazje"
        self.fields['touches_per_game'].label = "Dotknięcia piłki/mecz"
        self.fields['accurate_passes_per_game'].label = "Celne podania/mecz"
        self.fields['accurate_passes_oposhalf_per_game'].label = "Celne podania PP/mecz"
        self.fields['key_passes_per_game'].label = "Kluczowe podania/mecz"
        self.fields['accurate_crosses_per_game'].label = "Celne dośrodkowania/mecz"
        self.fields['interceptions_per_game'].label = "Przechwyty/mecz"
        self.fields['tackles_per_game'].label = "Odbiory/mecz"
        self.fields['dribbled_per_game'].label = "Przedryblowany/mecz"
        self.fields['clearances_per_game'].label = "Wybicia/mecz"
        self.fields['error_leading_to_shot'].label = "Błędy prowadzące do oddania strzału"
        self.fields['error_leading_to_goal'].label = "Błędy"
        # self.fields['error_leading_to_goal'].label = "Błędy prowadzące do utraty gola"
        self.fields['penalty_committed'].label = "Sprokurowane rzuty karne"
        self.fields['successful_dribbles'].label = "Udane dryblingi/mecz"
        self.fields['duels_won'].label = "Udane pojedynki/mecz"
        self.fields['offsides_per_game'].label = "Spalone/mecz"
        self.fields['fouls_per_game'].label = "Faule/mecz"
        self.fields['fouled_per_game'].label = "Sfaulowany/mecz"
        self.fields['possession_lost_per_game'].label = "Straty/mecz"
        self.fields['yellow_cards'].label = "Żółte kartki"
        self.fields['red_cards'].label = "Czerwone kartki"
        self.fields['clean_sheets'].label = "Czyste konta"
        self.fields['goals_conceded_per_game'].label = "Gole stracone/mecz"
        self.fields['penalties_saved'].label = "Obronione rzuty karne"
        self.fields['saves_per_game'].label = "Obrony/mecz"
        self.fields['successful_saves_percent'].label = "Procent udanych obron"

    class Meta:
        model = Player
        fields = '__all__'


class AddLeagueForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(AddLeagueForm, self).__init__(*args, **kwargs)
        self.fields['name'].label = "Nazwa"

    class Meta:
        model = League
        fields = '__all__'


class AddNationalityForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(AddNationalityForm, self).__init__(*args, **kwargs)
        self.fields['name'].label = "Nazwa"

    class Meta:
        model = Nationality
        fields = '__all__'


class EditPlayerForm(AddPlayerForm):
    def __init__(self, player_id):
        super(EditPlayerForm, self).__init__()
        self.fields['first_name'].label = "Imię"
        self.fields['first_name'].initial = player_id
        self.fields['last_name'].label = "Nazwisko"
        self.fields['birthday'].label = "Data urodzenia"
        self.fields['birthday'].type = "date"
        self.fields['height'].label = "Wzrost"
        self.fields['club'].label = "Klub"
        self.fields['nationality'].label = "Narodowość"
        self.fields['league'].label = "Liga"
        self.fields['preferred_foot'].label = "Lepsza noga"
        self.fields['position'].label = "Pozycja"
        self.fields['matches_played'].label = "Ilość spotkań"
        self.fields['minutes_per_game'].label = "Minuty/mecz"
        self.fields['goals'].label = "Bramki"
        self.fields['assists'].label = "Asysty"
        self.fields['goals_per_game'].label = "Bramki/mecz"
        self.fields['shots_per_game'].label = "Strzały/mecz"
        self.fields['big_chances_missed'].label = "Zmarnowane okazje"
        self.fields['big_chances_created'].label = "Wypracowane okazje"
        self.fields['touches_per_game'].label = "Dotknięcia piłki/mecz"
        self.fields['accurate_passes_per_game'].label = "Celne podania/mecz"
        self.fields['accurate_passes_oposhalf_per_game'].label = "Celne podania PP/mecz"
        self.fields['key_passes_per_game'].label = "Kluczowe podania/mecz"
        self.fields['accurate_crosses_per_game'].label = "Celne dośrodkowania/mecz"
        self.fields['interceptions_per_game'].label = "Przechwyty/mecz"
        self.fields['tackles_per_game'].label = "Odbiory/mecz"
        self.fields['dribbled_per_game'].label = "Przedryblowany/mecz"
        self.fields['clearances_per_game'].label = "Wybicia/mecz"
        self.fields['error_leading_to_shot'].label = "Błędy prowadzące do oddania strzału"
        self.fields['error_leading_to_goal'].label = "Błędy prowadzące do utraty gola"
        self.fields['penalty_committed'].label = "Sprokurowane rzuty karne"
        self.fields['successful_dribbles'].label = "Udane dryblingi/mecz"
        self.fields['duels_won'].label = "Udane pojedynki/mecz"
        self.fields['offsides_per_game'].label = "Spalone/mecz"
        self.fields['fouls_per_game'].label = "Faule/mecz"
        self.fields['fouled_per_game'].label = "Sfaulowany/mecz"
        self.fields['possession_lost_per_game'].label = "Straty/mecz"
        self.fields['yellow_cards'].label = "Żółte kartki"
        self.fields['red_cards'].label = "Czerwone kartki"
        self.fields['clean_sheets'].label = "Czyste konta"
        self.fields['goals_conceded_per_game'].label = "Gole stracone/mecz"
        self.fields['penalties_saved'].label = "Obronione rzuty karne"
        self.fields['saves_per_game'].label = "Obrony/mecz"
        self.fields['successful_saves_percent'].label = "Procent udanych obron"