class PlayersController < ApplicationController
  def index
    @players = Player.all
  end

  def new
    @player = Player.new
  end

  def create
    player = Player.create player_params
    redirect_to player_path(player.id)
  end

  def edit
    @player = Player.find params[:id]
  end

  def update
    player = Player.find params[:id]
    player.update player_params
    redirect_to player_path(player.id)
  end

  def show
    @player = Player.find params[:id]
  end

  def destroy
    player = Player.find params[:id]
    player.destroy
    redirect_to players_path
  end

  # Strong params
  private
  def player_params
    params.require(:player).permit(:name, :family, :national_goals, :image, :team_id)
  end
end
