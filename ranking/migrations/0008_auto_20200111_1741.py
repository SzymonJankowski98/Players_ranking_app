# Generated by Django 3.0.1 on 2020-01-11 16:41

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ranking', '0007_auto_20200111_1726'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='accurate_crosses_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='accurate_passes_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='assists',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='big_chances_missed',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='clearances_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='crosses_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='dribbled_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='dribbles',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='duels',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='duels_won',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='error_leading_to_goal',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='fouls_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='goals',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='goals_conceded_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='height',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='interceptions_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='key_passes_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='matches_played',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='minutes_played',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='offsides_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='passes_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='penalties_saved',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='penalty_committed',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='possession_lost_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='possession_won_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='red_cards',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='saves_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='shots_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='successful_dribbles',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='successful_saves_percent',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='tackles_per_game',
            field=models.FloatField(null=True, validators=[django.core.validators.MinValueValidator(0.0)]),
        ),
        migrations.AlterField(
            model_name='player',
            name='yellow_cards',
            field=models.PositiveIntegerField(null=True),
        ),
    ]
