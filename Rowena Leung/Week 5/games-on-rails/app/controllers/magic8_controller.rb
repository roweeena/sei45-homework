class Magic8Controller < ApplicationController
  def form
  end

  def result
    @question = params[:question]
    answers = ["Most likely", "Outlook good", "Yes", "Signs point to yes", "Don't count on it", "My reply is no", "Ask again later", "Better not tell you now"]
    @answer = answers[rand(8)]
  end
end
