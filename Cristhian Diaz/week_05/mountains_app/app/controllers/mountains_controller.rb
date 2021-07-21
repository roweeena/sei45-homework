class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def list
    @mountains = Mountain.order(params[:sort])
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name], :range => params[:range], :location => params[:location], :prominence => params[:prominence], :image => params[:image]
    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.range = params[:range]
    mountain.location = params[:location]
    mountain.prominence = params[:prominence]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end

end
