class UsersController < ApplicationController
    # before_action :authorize, only: [:show]

    #GET 
    #/users
    def index
        render json: User.all
    end

    #/me
    def show
        user = User.find_by(id: session[:user_id])
        render json: user

        # if user
        #     render json: user
        # else
        #     render json: { error: "Not authorized"} status: :unauthorized
        # end
    end

    #POST /signup
    def create
        user = User.create(user_params)
        if user.valid?
            # session[:user_id] = user.id
           render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:name, :username, :password, :password_confirmation)
    end

    # def authorize
    #     return render json: { error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    # end

end
