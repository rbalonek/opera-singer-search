class BlogsController < ApplicationController
  before_action :set_blog, only: [:index, :create, :show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /blogs
  def index
    @blogs = Blog.all

    render json: @blogs
  end

  # GET /blogs/1
  def show
    render json: @blog
  end

  # ##Show all blogs for user
  def blogs_for_user
    @blogs = Blog.find(params[:id])
    render json: @blogs
  end

  # POST /blogs
  def create
    @blog = Blog.new(blog_params)
    @blog.user = @current_user

    if @blog.save
      render json: @blog, status: :created
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blogs/1
  def update
    if @blog.update(blog_params)
      render json: @blog
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blogs/1
  def destroy
    @blog.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_blog
    @blogs = Blog.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def blog_params
    params.require(:blog).permit(:title, :img, :text, :opera_company, :date)
  end
end
