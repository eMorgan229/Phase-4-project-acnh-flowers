class CommentsController < ApplicationController

    #GET
    #/comments
    def index
        render json: Comment.all
    end
end
