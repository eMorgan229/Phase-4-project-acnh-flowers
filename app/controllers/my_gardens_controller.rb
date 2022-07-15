class MyGardensController < ApplicationController

    def create
        garden = MyGarden.create(garden_params)
        # if garden.valid?
            # session[:user_id] = user.id
        render json: garden, status: :created
        # else
        #     render json: { error: garden.errors.full_messages }, status: :unprocessable_entity
        # end
    end

    #/flowers
    def delete_garden
        p params[:flower_id]
        garden = MyGarden.find_by(user_id: params[:user_id], flower_id: params[:flower_id])
        # all = MyGarden.all
        # puts all
        puts garden
        render json: garden
    end

    

    private

    def garden_params
        params.permit(:user_id, :flower_id)
    end
end