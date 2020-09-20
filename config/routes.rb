Rails.application.routes.draw do
  
######Custom Routes#########
#Operas Search by name
get '/operas/search', to: 'operas#search'

#assign users a role
  post '/users/roles/:id', to: 'roles#assign_role_to_user'

###Showing users on roles page
get '/roles/:id', to: 'roles#users_belong_to_role'

###Showing roles on users page
  get '/singers/:id', to: 'users#roles_belong_to_user'

### Showing blogs for users 
get 'blogs/user/:id', to: 'blogs#blogs_for_user'
######Custom Routes#########

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :blogs
  resources :users
  resources :roles
  resources :operas

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

