class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable

  has_many :cities

  devise :database_authenticatable, :jwt_authenticatable, jwt_revocation_strategy: Blacklist

  def jwt_payload
    {app: 'clima'}
  end
end
