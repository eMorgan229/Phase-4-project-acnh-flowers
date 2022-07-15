class Flower < ApplicationRecord
belongs_to :user
has_many :comments
has_many :my_garden



end
