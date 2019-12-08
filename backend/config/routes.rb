Rails.application.routes.draw do
  
  devise_for :users,
             path: '/',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'sessions',
               registrations: 'registrations'
             }

  get 'dashboard/index'
  get 'api/v1/temperatures', to: 'temperatures#index'

  resources :cities, path: 'api/v1/cities'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'dashboard#index'
end
