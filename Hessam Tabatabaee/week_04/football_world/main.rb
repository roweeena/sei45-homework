require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

# Active records setup
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonous: (shows all the sql code)
ActiveRecord::Base.logger = Logger.new(STDERR)

# Create Model(class): A class backed by a database is called a Model
class Player < ActiveRecord::Base
end

class Team < ActiveRecord::Base
end

get '/' do
  erb :home
end

# CRUD Teams ===================================================================

# INDEX: Show all Teams
get '/teams' do
  @teams = Team.all
  erb :teams_index
end

# NEW: a page with a form to create a new team
get '/teams/new' do
  erb :teams_new
end

# CREATE: Create a new team
post '/teams' do
  team = Team.new
  team.name = params[:name]
  team.world_cup_appearance = params[:world_cup_appearance]
  team.world_cup_champions = params[:world_cup_champions]
  team.image = params[:image]
  team.save
  redirect to("/teams/#{team.id}")
end

# SHOW: Show a single team
get '/teams/:id' do
  @team = Team.find params[:id]
  erb :teams_show
end

# EDIT: Edit a single existing team
get '/teams/:id/edit' do
  @team = Team.find params[:id]
  erb :teams_edit
end

# UPDATE: Update info on an existing team
post '/teams/:id' do
  team = Team.find params[:id]
  team.name = params[:name]
  team.world_cup_appearance = params[:world_cup_appearance]
  team.world_cup_champions = params[:world_cup_champions]
  team.image = params[:image]
  team.save
  redirect to("/teams/#{team.id}")
end

# DELETE: Delete a team
get '/teams/:id/delete' do
  team = Team.find params[:id]
  team.destroy
  redirect to("/teams")
end


# CRUD Players =================================================================

# INDEX: Show all Players
get '/players' do
  @players = Player.all
  erb :players_index
end

get '/players/new' do
  erb :players_new
end

# CREATE: Insert a new player into the database
post '/players' do
  player = Player.new
  player.name = params[:name]
  player.family = params[:family]
  player.national_goals = params[:national_goals]
  player.image = params[:image]
  player.save
  redirect to("/players/#{player.id}")
end

# SHOW: Show a single Player
get '/players/:id' do
  @player = Player.find params[:id]
  erb :players_show
end

# Edit player
get '/players/:id/edit' do
  @player = Player.find params[:id]
  erb :players_edit
end

# UPDATE: update info on an existing player
post '/players/:id' do
  player = Player.find params[:id]
  player.name = params[:name]
  player.family = params[:family]
  player.national_goals = params[:national_goals]
  player.image = params[:image]
  player.save
  redirect to("/players/#{params[:id]}")
end

#DELETE
get '/players/:id/delete' do
  player = Player.find params[:id]
  player.destroy
  redirect to('/players')
end

after do # does it after each block _ no need to do it on Rails later
  ActiveRecord::Base.connection.close
end
