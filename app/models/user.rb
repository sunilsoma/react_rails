class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
   # include Devise::JWT::RevocationStrategies::JTIMatcher
   # devise :database_authenticatable, :registerable,
   #        :recoverable, :rememberable, :validatable,
   #       :jwt_authenticatable, jwt_revocation_strategy: self


   devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         jwt_revocation_strategy: JwtDenylist
   has_many :referrals


end
