Rails.application.routes.draw do
  #Custom Routes
  get '/operas/search', to: 'operas#search'

  post '/users/roles/:id', to: 'roles#assign_role_to_user'

  resources :users
  resources :roles
  resources :operas

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

