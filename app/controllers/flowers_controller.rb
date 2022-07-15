class FlowersController < ApplicationController
    #GET
    #/flowers
    def index
        render json: Flower.all
    end

    #PATCH 
    #/flowers/:id (allows you to update the value to be true to be in your garden)
    def update
        flower = Flower.find_by(id: params[:id])
        user = User.find_by(id: params[:id])
        if flower
            flower.update(flower_params)
            render json: flower
        else
            render json: {error: "Flower not found"}, status: :not_found
        end
    end
    #  def delete_flower
    #     flower = MyGarden.find()
    #  end
    #upate the update method to also update the user_id foreign when they click the my garden button


    private
    def flower_params
        params.permit(:is_in_your_garden, :user_id)
    end
end
