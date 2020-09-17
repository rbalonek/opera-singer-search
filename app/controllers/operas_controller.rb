class OperasController < ApplicationController
  before_action :set_opera, only: [:show, :update, :destroy]

  # GET /operas
  def index
    @operas = Opera.all

    render json: @operas
  end

  # GET /operas/1
  def show
    render json: @opera
  end

  # POST /operas
  def create
    @opera = Opera.new(opera_params)

    if @opera.save
      render json: @opera, status: :created, location: @opera
    else
      render json: @opera.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /operas/1
  def update
    if @opera.update(opera_params)
      render json: @opera
    else
      render json: @opera.errors, status: :unprocessable_entity
    end
  end

  # DELETE /operas/1
  def destroy
    @opera.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_opera
      @opera = Opera.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def opera_params
      params.require(:opera).permit(:name, :composer, :composer_img, :era)
    end
end
