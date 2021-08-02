class ChefsController < ApplicationController
  def index
    @chefs = Chef.all
  end

  def new
    @chef = Chef.new
  end

  def create
    chef = Chef.create chef_params
    redirect_to chef
  end

  def edit
    @chef =  Chef.find params[:id]
  end

  def update
    chef = Chef.find params[:id]
    chef.update chef_params
    redirect_to chef
  end

  def show
    @chef = Chef.find params[:id]
  end

  def destroy
  end

  #strong params
  private
  def chef_params
    params.require(:chef).permit(:name, :nationality, :michelin, :image )
  end
end
