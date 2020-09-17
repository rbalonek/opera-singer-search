Rails.application.routes.draw do
  resources :blogs
  #Custom Routes
  get '/operas/search', to: 'operas#search'

  #assign users a role
  post '/users/roles/:id', to: 'roles#assign_role_to_user'


###Showing users on roles page
get '/roles/:id', to: 'roles#users_belong_to_role'

  ###Showing roles on users page
  get '/singers/:id', to: 'users#roles_belong_to_user'


  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  resources :users
  resources :roles
  resources :operas

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

