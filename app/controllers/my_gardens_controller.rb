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
    def destroy
        garden = MyGarden.find(garden_params[:user_id], garden_params[:flower_id])
        garden.destroy

        head :no_content
    end

    

    private

    def garden_params
        params.permit(:user_id, :flower_id)
    end
end