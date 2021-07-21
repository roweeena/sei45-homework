class RockController < ApplicationController
  def form
  end

  def result
    @users_choice = params[:users_choice].capitalize
    computer_choice = ["Rock", "Paper", "Scissors"]
    @computers_choice = computer_choice[rand(3)]
  end
end
