class RolesController < ApplicationController
  before_action :set_role, only: [:show, :update, :destroy]
  before_action :authorize_request, only: :assign_role_to_user

  # GET /roles
  def index
    @roles = Role.all

    render json: @roles
  end

  ### Assinging roles to users
def assign_role_to_user
  @role = Role.find(params[:id])
  @role.users << @current_user
end

 ### Show all users that belong to role
 def  users_belong_to_role
  @role = Role.find(params[:id])
  render json: @role, include: :users
 end

  # GET /roles/1
  def show
    render json: @role
  end

  # POST /roles
  def create
    @role = Role.new(role_params)

    if @role.save
      render json: @role, status: :created, location: @role
    else
      render json: @role.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /roles/1
  def update
    if @role.update(role_params)
      render json: @role
    else
      render json: @role.errors, status: :unprocessable_entity
    end
  end

  # DELETE /roles/1
  def destroy
    @role.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_role
      @role = Role.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def role_params
      params.require(:role).permit(:name, :opera_id)
    end
end
