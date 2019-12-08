class ApplicationController < ActionController::Base
  
  include Devise::Controllers::Helpers

  protect_from_forgery unless: -> { request.format.json? }
  # skip_before_action :verify_authenticity_token 
  # skip_before_action :jwt_authenticatable
  # before_action :authenticate_user_token!
  alias_method :devise_current_user, :current_user

  def render_resource(resource)
    if resource.errors.empty?
      render json: resource
    else
      validation_error(resource)
    end
  end

  def validation_error(resource)
    render json: {
      errors: [
        {
          status: '400',
          title: 'Bad Request',
          detail: resource.errors,
          code: '100'
        }
      ]
    }, status: :bad_request
  end
  
  def authenticate_user_token!
    head :unauthorized
  end
end
