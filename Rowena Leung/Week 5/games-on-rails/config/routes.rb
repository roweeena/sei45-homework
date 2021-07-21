Rails.application.routes.draw do
  root :to => 'pages#home'

  #magic 8 ball
  get '/magic-8' => 'magic8#form'
  get '/magic-8/result' => 'magic8#result'
  #secret number
  get '/secret-number' => 'secret#form'
  get '/secret-number/result' => 'secret#result'
  #rock paper scissors
  get '/rock-paper-scissors' => 'rock#form'
  get '/rock-paper-scissors/result' => 'rock#result'
end
