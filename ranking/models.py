from django.db import models
from django.core.validators import MinValueValidator
import datetime


class Nationality(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return u'%s ' % self.name


class League(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return u'%s ' % self.name


class Player(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    birthday = models.DateField()
    height = models.PositiveIntegerField(null=True, blank=True)
    club = models.CharField(max_length=100)
    nationality = models.ForeignKey(Nationality, on_delete=models.DO_NOTHING, default=1)
    league = models.ForeignKey(League, on_delete=models.DO_NOTHING, default=1)

    PREFERRED_FOOT_CHOICE = [
        ('left', 'Lewa'),
        ('right', 'Prawa'),
        ('both', 'Obie'),
    ]
    preferred_foot = models.CharField(choices=PREFERRED_FOOT_CHOICE, default='right', max_length=5)

    POSITION_CHOICE = [
        ('ST', 'N'),
        ('LW', 'LS'),
        ('RW', 'PS'),
        ('LM', 'LP'),
        ('RM', 'PP'),
        ('CAM', 'ŚPO'),
        ('CM', 'ŚP'),
        ('CDM', 'ŚPD'),
        ('LB', 'LO'),
        ('RB', 'PO'),
        ('CB', 'ŚO'),
        ('GK', 'BR'),
    ]
    position = models.CharField(choices=POSITION_CHOICE, default='ST', max_length=3)

    matches_played = models.PositiveIntegerField(null=True, blank=True)
    # minutes_played = models.PositiveIntegerField(null=True, blank=True)
    minutes_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    goals = models.PositiveIntegerField(null=True, blank=True)
    assists = models.PositiveIntegerField(null=True, blank=True)
    yellow_cards = models.PositiveIntegerField(null=True, blank=True)
    red_cards = models.PositiveIntegerField(null=True, blank=True)

    shots_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    goals_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    big_chances_created = models.PositiveIntegerField(null=True, blank=True)
    big_chances_missed = models.PositiveIntegerField(null=True, blank=True)

    touches_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    # passes_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    accurate_passes_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    # crosses_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    accurate_passes_oposhalf_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    accurate_crosses_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    key_passes_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)

    interceptions_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    tackles_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    # possession_won_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    dribbled_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    clearances_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    error_leading_to_goal = models.PositiveIntegerField(null=True, blank=True)
    error_leading_to_shot = models.PositiveIntegerField(null=True, blank=True)
    penalty_committed = models.PositiveIntegerField(null=True, blank=True)

    # dribbles = models.PositiveIntegerField(null=True, blank=True)
    successful_dribbles = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    # duels = models.PositiveIntegerField(null=True, blank=True)
    duels_won = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    possession_lost_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    fouls_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    fouled_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    offsides_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)

    clean_sheets = models.PositiveIntegerField(null=True, blank=True)
    goals_conceded_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    penalties_saved = models.PositiveIntegerField(null=True, blank=True)
    saves_per_game = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)
    successful_saves_percent = models.FloatField(validators=[MinValueValidator(0.0)], null=True, blank=True)

    def age(self):
        today = datetime.date.today()
        return today.year - self.birthday.year - ((today.month, today.day) < (self.birthday.month, self.birthday.day))

    def get_value_by_name(self, name):
        return getattr(self, name)

    def rating(self):
        try:
            if self.position == 'ST':
                good = (self.matches_played/100 * self.minutes_per_game) + (self.goals * 5 + self.assists * 2.5)
                good += (self.big_chances_created * 2 + self.successful_dribbles * 1.5 + self.duels_won * 2 + self.fouled_per_game)
                bad = self.big_chances_missed * 2 + self.offsides_per_game + self.yellow_cards + self.red_cards * 2
                rating = good - bad
                rating *= (self.goals_per_game * 1.5 / self.shots_per_game)
            elif self.position == 'LW' or self.position == 'RW':
                good = (self.matches_played/100 * self.minutes_per_game) + (self.goals * 3 + self.assists * 3)
                good += (self.big_chances_created * 2 + self.accurate_passes_per_game * 0.4 + self.successful_dribbles * 3 + self.duels_won + self.fouled_per_game)
                bad = self.big_chances_missed * 2 + self.yellow_cards + self.red_cards * 2
                rating = good - bad
                rating *= (self.goals_per_game *1.5 / self.shots_per_game)
            elif self.position == 'LM' or self.position == 'RM':
                good = (self.matches_played/100 * self.minutes_per_game) + (self.goals * 2 + self.assists * 2)
                good += (self.big_chances_created * 2 + self.touches_per_game * 0.7 + self.accurate_passes_oposhalf_per_game * 3 + self.accurate_crosses_per_game * 3 + self.duels_won)
                good += self.interceptions_per_game * 2 + self.tackles_per_game * 2
                bad = self.possession_lost_per_game * 3 + self.yellow_cards + self.red_cards * 2
                rating = good - bad
                rating *= self.accurate_passes_oposhalf_per_game*1.4 / self.touches_per_game
            elif self.position == 'CAM':
                good = (self.matches_played / 100 * self.minutes_per_game) + (self.goals * 2 + self.assists * 4)
                good += (self.big_chances_created * 2 + self.touches_per_game * 0.7 + self.accurate_passes_oposhalf_per_game + self.key_passes_per_game)
                good += self.successful_dribbles * 2 + self.duels_won * 2
                bad = self.possession_lost_per_game * 4 + self.yellow_cards + self.red_cards * 2
                rating = good - bad
                rating *= self.goals_per_game * 2
            elif self.position == 'CM':
                good = (self.matches_played/100 * self.minutes_per_game) + (self.goals * 2 + self.assists * 3)
                good += (self.big_chances_created * 2 + self.touches_per_game * 0.8 + self.accurate_passes_oposhalf_per_game * 2.5)
                good += self.interceptions_per_game * 3 + self.tackles_per_game * 3 + self.duels_won * 2
                bad = self.possession_lost_per_game * 4 + self.yellow_cards + self.red_cards * 2
                rating = good - bad
                rating *= self.accurate_passes_oposhalf_per_game*1.8 / self.touches_per_game
            elif self.position == 'CDM':
                good = (self.matches_played/100 * self.minutes_per_game) + (self.goals * 2 + self.assists * 2)
                good += (self.big_chances_created + self.touches_per_game * 0.5 + self.accurate_passes_per_game)
                good += self.interceptions_per_game * 4 + self.tackles_per_game * 4 + self.clearances_per_game * 3 + self.duels_won * 2
                bad = self.dribbled_per_game * 4 + self.yellow_cards + self.red_cards * 2
                rating = good - bad
                rating *= self.accurate_passes_per_game / self.touches_per_game
            elif self.position == 'LB' or self.position == 'RB':
                good = (self.matches_played/100 * self.minutes_per_game) + (self.goals * 2 + self.assists * 3) + self.clean_sheets * 2
                good += (self.big_chances_created + self.touches_per_game * 0.8 + self.accurate_passes_per_game * 0.8 + self.accurate_crosses_per_game * 2)
                good += self.tackles_per_game * 4 + self.clearances_per_game * 3 + self.duels_won * 2
                bad = self.yellow_cards + self.red_cards * 2
                rating = good - bad
                rating *= 0.6
            elif self.position == 'CB':
                good = (self.matches_played/100 * self.minutes_per_game) + (self.goals * 2 + self.assists * 2) + self.clean_sheets * 5
                good += self.interceptions_per_game * 2 + self.tackles_per_game * 5 + self.clearances_per_game * 5 + self.duels_won * 3
                bad = self.error_leading_to_shot * 3 + self.dribbled_per_game * 3 + self.yellow_cards * 1.5 + self.red_cards * 2
                rating = good - bad
                rating *= 0.6
            elif self.position == 'GK':
                good = (self.matches_played / 100 * self.minutes_per_game) + (self.assists * 2) + self.clean_sheets * 5
                good += self.accurate_passes_per_game
                good += self.clearances_per_game * 3 + self.penalties_saved * 4 + self.saves_per_game * 3
                bad = self.goals_conceded_per_game * 3 + self.error_leading_to_goal * 5 + self.yellow_cards * 1.5 + self.red_cards * 2
                rating = good - bad
                rating *= self.successful_saves_percent * 0.01
            else:
                rating = 55.3

            return round(rating, 2)
        except:
            return 0

