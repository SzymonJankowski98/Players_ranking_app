from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import TemplateView
from django.http import HttpResponseRedirect
from .models import Player, Nationality, League
from .forms import AddPlayerForm, AddNationalityForm, AddLeagueForm

app_name = 'ranking'
search = ''

class HomeView(TemplateView):
    template_name = 'ranking/ranking.html'
    path = 'ranking/ranking.html'

    def get(self, request, *args, **kwargs):
        players = Player.objects.all()
        nationalities = Nationality.objects.all()
        leagues = League.objects.all()
        if 'league' in request.session:
            if request.session['league']:
                players = players.filter(league=request.session['league'])
        if 'nationality' in request.session:
            if request.session['nationality']:
                players = players.filter(nationality=request.session['nationality'])
        if 'position' in request.session:
            if request.session['position']:
                players = players.filter(position=request.session['position'])
        if 'search-bar' in request.session:
            if request.session['search-bar']:
                players = players.filter(last_name=request.session['search-bar'])
        players = sorted(players, key=lambda x: x.rating(), reverse=True)
        form_add_player = AddPlayerForm()
        form_add_league = AddLeagueForm()
        form_add_nationality = AddNationalityForm()
        return render(request, self.path, {'players': players, 'add_player_form': form_add_player, 'add_league_form': form_add_league, 'add_nationality_form': form_add_nationality, 'nationalities': nationalities, 'leagues': leagues})

    def post(self, request):
        print(request.POST)
        if 'delete_player' in request.POST:
            player_id = request.POST['delete_player'].split('_')[-1]
            if player_id.isdigit():
                player = get_object_or_404(Player, pk=player_id)
                player.delete()
            return HttpResponseRedirect(self.request.path_info)
        elif 'edit_player' in request.POST:
            form = AddPlayerForm(request.POST)
            player_id = request.POST['edit_player'].split('_')[-1]
            if player_id.isdigit():
                if form.is_valid():
                    form.save()
                    player = get_object_or_404(Player, pk=player_id)
                    player.delete()
                    return HttpResponseRedirect(self.request.path_info)
            return HttpResponseRedirect(self.request.path_info)
        elif 'add-player' in request.POST:
            form = AddPlayerForm(request.POST)
            if form.is_valid():
                form.save()
                return HttpResponseRedirect(self.request.path_info)
            return HttpResponseRedirect(self.request.path_info)
        elif 'add-league' in request.POST:
            form = AddLeagueForm(request.POST)
            if form.is_valid():
                form.save()
                return HttpResponseRedirect(self.request.path_info)
            return HttpResponseRedirect(self.request.path_info)
        elif 'add-nationality' in request.POST:
            form = AddNationalityForm(request.POST)
            if form.is_valid():
                form.save()
                return HttpResponseRedirect(self.request.path_info)
            return HttpResponseRedirect(self.request.path_info)
        elif 'search' in request.POST:
            if request.POST['league']:
                request.session['league'] = request.POST['league']
            else:
                request.session['league'] = ''
            if request.POST['nationality']:
                request.session['nationality'] = request.POST['nationality']
            else:
                request.session['nationality'] = ''
            if request.POST['position']:
                request.session['position'] = request.POST['position']
            else:
                request.session['position'] = ''
            if request.POST['search-bar']:
                request.session['search-bar'] = request.POST['search-bar']
            else:
                request.session['search-bar'] = ''
            return HttpResponseRedirect(self.request.path_info)
        return HttpResponseRedirect(self.request.path_info)
