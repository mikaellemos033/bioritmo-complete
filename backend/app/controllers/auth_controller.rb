class AuthController < ApplicationController
  alias_method :devise_current_user, :current_user
  before_action :authenticate_user_token!

  def authenticate_user_token!    
    return unauthorized unless request.headers['Authorization'].present?
    token = request.headers['Authorization'].gsub('Bearer ', '')    
    begin
      payload = JWT.decode(token, ENV['DEVISE_JWT_SECRET_KEY']).first      
      return unauthorized if Blacklist.exists?(jti: payload['jti'])      
      @current_user_id = payload['sub']

    rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
      unauthorized
    end
  end

  private
  
  def unauthorized
    head :unauthorized
  end
end
