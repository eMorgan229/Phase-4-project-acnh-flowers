class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 8, maximum: 20}
    has_many :flowers
    has_many :comments
    has_many :my_garden
end
