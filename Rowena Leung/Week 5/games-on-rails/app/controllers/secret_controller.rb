class SecretController < ApplicationController
  def form
  end

  def result
    @guess = params[:guess].to_i
    @answer = rand (10).to_i
  end
end
