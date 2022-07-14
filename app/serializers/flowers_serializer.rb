class FlowersSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :parents, :season, :is_in_your_garden
end
