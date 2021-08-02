class DesertsController < ApplicationController

  def index
    @desert = Desert.all
  end

  def show
    @desert = Desert.find params[:id]
  end

  def new
  end

  def create
    desert = Desert.create :name => params[:name], :image => params[:image], :location => params[:location], :area => params[:area], :area_unit => params[:area_unit]
    redirect_to desert_path(desert.id)
  end

  def edit
    @desert = Desert.find params[:id]
  end

  def update
    desert = Desert.find params[:id]
    desert.name = params[:name]
    desert.image = params[:image]
    desert.location = params[:location]
    desert.area = params[:area]
    desert.area_unit = params[:area_unit]
    desert.save
    redirect_to desert_path(desert.id)
  end

  def destroy
    desert = Desert.find params[:id]
    desert.destroy
    redirect_to deserts_path
  end

end
